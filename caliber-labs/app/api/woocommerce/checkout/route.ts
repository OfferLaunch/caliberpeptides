import { createHmac } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Checkout mode: 'order-pay' = create order, redirect to pay (default). 'checkout' = send to full
 * WooCommerce checkout page so order bumps work (requires WordPress cart-redirect endpoint).
 */
const CHECKOUT_MODE_ORDER_PAY = 'order-pay';
const CHECKOUT_MODE_CHECKOUT = 'checkout';

/**
 * Creates a pending WooCommerce order and returns the payment URL, OR returns a signed URL to
 * the store's cart-redirect endpoint for full checkout (order bumps).
 * Uses either (1) custom WordPress endpoint when WOOCOMMERCE_ORDER_SECRET is set,
 * or (2) WooCommerce REST API with consumer key/secret.
 */
export async function POST(request: NextRequest) {
  const storeUrl = process.env.WOOCOMMERCE_URL;
  const orderSecret = process.env.WOOCOMMERCE_ORDER_SECRET;
  const consumerKey = process.env.WOOCOMMERCE_CONSUMER_KEY;
  const consumerSecret = process.env.WOOCOMMERCE_CONSUMER_SECRET;
  const checkoutMode = (process.env.WOOCOMMERCE_CHECKOUT_MODE || CHECKOUT_MODE_ORDER_PAY).toLowerCase();
  const cartSecret = process.env.WOOCOMMERCE_CART_SECRET;

  const useCustomEndpoint = Boolean(orderSecret && storeUrl);
  const useRestApi = Boolean(storeUrl && consumerKey && consumerSecret);
  const useFullCheckout = checkoutMode === CHECKOUT_MODE_CHECKOUT;

  if (!storeUrl) {
    return NextResponse.json(
      { error: 'WooCommerce is not configured. Set WOOCOMMERCE_URL.' },
      { status: 503 }
    );
  }
  if (useFullCheckout && !cartSecret) {
    return NextResponse.json(
      { error: 'Full checkout mode requires WOOCOMMERCE_CART_SECRET for signed cart URLs.' },
      { status: 503 }
    );
  }
  if (!useFullCheckout && !useCustomEndpoint && !useRestApi) {
    return NextResponse.json(
      { error: 'Set either WOOCOMMERCE_ORDER_SECRET (custom endpoint) or WOOCOMMERCE_CONSUMER_KEY + WOOCOMMERCE_CONSUMER_SECRET.' },
      { status: 503 }
    );
  }

  let body: { email: string; cart: Array<{ id: string; name: string; price: number; quantity: number }> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { email, cart } = body;
  if (!email || !cart?.length) {
    return NextResponse.json(
      { error: 'Email and at least one cart item are required' },
      { status: 400 }
    );
  }

  const baseUrl = storeUrl.replace(/\/$/, '');

  // Full checkout: redirect to store's cart-redirect endpoint so user lands on /checkout/ (order bumps work)
  if (useFullCheckout && cartSecret) {
    const payload = JSON.stringify({
      email: email.trim(),
      cart: cart.map((item) => ({
        id: String(item.id),
        quantity: Math.max(1, Math.floor(Number(item.quantity) || 1)),
      })),
    });
    const enc = Buffer.from(payload, 'utf8').toString('base64url');
    const sig = createHmac('sha256', cartSecret).update(enc).digest('hex');
    const paymentUrl = `${baseUrl}/wp-json/caliber/v1/cart-redirect?p=${enc}&s=${sig}`;
    return NextResponse.json({ payment_url: paymentUrl });
  }

  // Custom endpoint: bypasses REST API permission (no "create resources" issue)
  if (useCustomEndpoint && orderSecret) {
    const customUrl = `${baseUrl}/wp-json/caliber/v1/create-order`;
    try {
      const res = await fetch(customUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: orderSecret,
          email: email.trim(),
          cart: cart.map((item) => ({
            id: String(item.id),
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { payment_url?: string; order_id?: number; code?: string; message?: string };
      if (res.ok && data.payment_url) {
        return NextResponse.json({ payment_url: data.payment_url, order_id: data.order_id });
      }
      const details = data.message || data.code || (typeof data === 'object' ? JSON.stringify(data) : String(data));
      return NextResponse.json(
        { error: 'Could not create order.', details },
        { status: res.status >= 400 ? res.status : 502 }
      );
    } catch (err) {
      console.error('Caliber order endpoint error:', err);
      return NextResponse.json(
        { error: 'Failed to reach your store. Check WOOCOMMERCE_URL and that the Caliber endpoint is installed.' },
        { status: 502 }
      );
    }
  }

  // WooCommerce REST API (with query-string auth)
  const apiUrl = `${baseUrl}/wp-json/wc/v3/orders`;
  const authParams =
    consumerKey && consumerSecret
      ? `?consumer_key=${encodeURIComponent(consumerKey)}&consumer_secret=${encodeURIComponent(consumerSecret)}`
      : '';
  const ordersUrl = `${apiUrl}${authParams}`;

  const lineItems: Array<{ product_id: number; quantity: number; name: string; price: string }> = [];
  for (const item of cart) {
    const productId = parseInt(String(item.id), 10);
    if (Number.isNaN(productId) || productId < 1) {
      return NextResponse.json(
        { error: 'Invalid product ID', details: `Product "${item.name}" has ID "${item.id}". Use the numeric WooCommerce product ID in lib/products.ts.` },
        { status: 400 }
      );
    }
    lineItems.push({
      product_id: productId,
      quantity: item.quantity,
      name: item.name,
      price: String(item.price),
    });
  }

  const orderPayload = {
    payment_method: '',
    payment_method_title: '',
    set_paid: false,
    billing: {
      email: email,
      first_name: '',
      last_name: '',
      address_1: '',
      city: '',
      state: '',
      postcode: '',
      country: '',
    },
    line_items: lineItems,
  };

  try {
    const res = await fetch(ordersUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderPayload),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('WooCommerce API error:', res.status, errText);
      let details = errText;
      try {
        const errJson = JSON.parse(errText) as { message?: string; code?: string; data?: { params?: { product_id?: number } } };
        if (errJson.message) details = errJson.message;
        if (errJson.code === 'woocommerce_rest_product_invalid_id' && errJson.data?.params?.product_id != null) {
          details = `Invalid product ID: ${errJson.data.params.product_id}. Update lib/products.ts to use your WooCommerce product IDs.`;
        }
      } catch {
        // use raw errText
      }
      return NextResponse.json(
        { error: 'Could not create order.', details },
        { status: 502 }
      );
    }

    const order = (await res.json()) as { id: number; order_key?: string };
    let orderKey = order.order_key;
    if (!orderKey) {
      const getRes = await fetch(`${apiUrl}/${order.id}${authParams}`, {
        headers: { Accept: 'application/json' },
      });
      if (getRes.ok) {
        const fullOrder = (await getRes.json()) as { order_key?: string };
        orderKey = fullOrder.order_key;
      }
    }
    const key = orderKey || `wc_order_${order.id}`;
    const paymentUrl = `${baseUrl}/checkout/order-pay/${order.id}/?pay_for_order=true&key=${key}`;

    return NextResponse.json({ payment_url: paymentUrl, order_id: order.id });
  } catch (err) {
    console.error('WooCommerce checkout error:', err);
    return NextResponse.json(
      { error: 'Failed to connect to your store. Check WOOCOMMERCE_URL and network.' },
      { status: 502 }
    );
  }
}
