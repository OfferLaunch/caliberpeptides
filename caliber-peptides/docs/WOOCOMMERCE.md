# Connecting WooCommerce to This Site

This Next.js app uses **static product data** (`lib/products.ts`) and an **in-memory cart**. Checkout is wired to WooCommerce: when you configure the env vars below, “Place order” creates a pending order on your WooCommerce store and redirects the customer to your store’s payment page (Cloudways or any WordPress host).

---

## Easiest path: Checkout via WooCommerce (implemented)

1. **WooCommerce on Cloudways (or any host)**  
   Use your existing WordPress + WooCommerce install. Note the store URL (e.g. `https://shop.yourdomain.com` or your Cloudways app URL).

2. **Create an API key in WooCommerce**  
   - In WordPress: **WooCommerce → Settings → Advanced → REST API**.  
   - Click **Add key**.  
   - Description: e.g. “Caliber Peptides site”.  
   - User: choose an admin or a user that can create orders.  
   - Permissions: **Read/Write** (needed to create orders).  
   - Copy the **Consumer key** and **Consumer secret**.

3. **Add environment variables**  
   In the Caliber Peptides project, create or edit `.env.local` (and add the same in your production host, e.g. Vercel):

   ```env
   WOOCOMMERCE_URL=https://your-store-url.com
   WOOCOMMERCE_CONSUMER_KEY=ck_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   WOOCOMMERCE_CONSUMER_SECRET=cs_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

   - **WOOCOMMERCE_URL** — Your WooCommerce store URL (no trailing slash), e.g. your Cloudways application URL where WordPress is installed.  
   - **WOOCOMMERCE_CONSUMER_KEY** / **WOOCOMMERCE_CONSUMER_SECRET** — From step 2.  
   - Do **not** commit `.env.local`; keep keys secret.

4. **Product IDs must match**  
   Cart items are sent to WooCommerce by **product ID**. The `id` in `lib/products.ts` (and in the cart) must be the **numeric WooCommerce product ID** for each product. If you use static data, set each product’s `id` to the same value as in WooCommerce (e.g. `id: '123'` for WooCommerce product 123). When you later switch to fetching products from the WooCommerce API, the IDs will already match.

5. **What happens at checkout**  
   - Customer fills cart on this site and goes to **Checkout**.  
   - They enter email and click **Place order**.  
   - The app calls `POST /api/woocommerce/checkout` with the cart and email.  
   - The API creates a **pending** order on WooCommerce and returns the **order-pay** URL.  
   - The customer is redirected to your WooCommerce store to complete payment (card, PayPal, etc.).  
   - If the env vars are not set, the app shows the demo “Thank you” message instead.

**Cloudways:** Use your Cloudways WordPress site URL as `WOOCOMMERCE_URL` (e.g. the temporary URL or your custom domain pointing to that server). Ensure the site is on HTTPS in production. No extra Cloudways config is needed for the REST API.

---

## Option A (alternative): Redirect to cart/checkout without creating an order here

You can instead link users to your WooCommerce cart or checkout and let them add products there. That approach does not use the API route above. Steps:

1. **Run WordPress + WooCommerce** on a URL you control (e.g. your Cloudways URL).

2. **Enable the REST API** and create an API key (WooCommerce → Settings → Advanced → REST API) — at least Read if you later fetch products; Read/Write if you create orders from this site.

3. **Env vars** (for the implemented checkout flow we use `WOOCOMMERCE_URL` and the two keys; no `NEXT_PUBLIC_` needed for checkout).

4. **Fetch products from WooCommerce** (optional): replace `lib/products.ts` with a data layer that calls `GET {WOO_URL}/wp-json/wc/store/v1/products` or `GET {WOO_URL}/wp-json/wc/v3/products` and map to your `Product` type.

5. **Cart/checkout links:** point “Cart” / “Checkout” in the navbar to `https://your-store.com/cart` and `https://your-store.com/checkout` if you prefer that flow instead of the in-app checkout above.

6. **CORS:** All WooCommerce API calls from this site are made in **Next.js API routes** (server-side), so you don’t need to configure CORS on WordPress.

---

## Option B: Full headless (future)

- Use WooCommerce **REST API** or **Store API** to list products and optionally manage cart/checkout fully on this site. This requires more backend work and possibly WordPress plugins for headless payments.
