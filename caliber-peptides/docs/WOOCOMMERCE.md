# Connecting WooCommerce to This Site

This Next.js app currently uses **static product data** (`lib/products.ts`) and an **in-memory cart** (no real checkout). To use WooCommerce as your backend, you have two main approaches.

---

## Option A: WooCommerce as backend, redirect to WordPress for checkout (recommended)

1. **Run WordPress + WooCommerce** on a URL you control (e.g. `https://store.yourdomain.com` or `https://yourdomain.com/store`).

2. **Enable the REST API** in WooCommerce (WooCommerce → Settings → Advanced → REST API). Create an API key (read for products; read/write if you ever sync cart from this site).

3. **Add environment variables** in this project (e.g. in `.env.local`):

   ```env
   NEXT_PUBLIC_WOOCOMMERCE_URL=https://store.yourdomain.com
   WOOCOMMERCE_CONSUMER_KEY=ck_xxxx
   WOOCOMMERCE_CONSUMER_SECRET=cs_xxxx
   ```

   Use `NEXT_PUBLIC_` only for values that must be visible in the browser (e.g. store URL for “View cart” / “Checkout” links). Keep keys secret and use them only in server-side code or API routes.

4. **Fetch products from WooCommerce** instead of `lib/products.ts`:
   - **REST API:** `GET {WOO_URL}/wp-json/wc/store/v1/products` (Store API) or `GET {WOO_URL}/wp-json/wc/v3/products` (legacy, requires auth for private products).
   - Map WooCommerce product fields to your existing `Product` type (id, name, slug, price, images, description, categories, etc.). You can keep the same UI and only swap the data source.

5. **Cart and checkout:**
   - **Easiest:** Keep “Add to Cart” on this site as you do now (or sync to WooCommerce session if you implement it). Add a **“Cart” / “Checkout”** button that sends users to your WooCommerce cart/checkout URLs, e.g.:
     - Cart: `https://store.yourdomain.com/cart`
     - Checkout: `https://store.yourdomain.com/checkout`
   - So: this site = catalog + “Add to Cart” (and optionally cart display); WordPress = cart, checkout, and payments.

6. **CORS:** If you call the WooCommerce API from the browser, your WordPress site must allow your Next.js origin in CORS (e.g. via plugin or server config). Prefer calling WooCommerce from **Next.js API routes** or **server components** so the request is server-to-server and you avoid CORS and exposing keys.

---

## Option B: Full headless (cart and checkout on this site via API)

- Use WooCommerce **REST API** or **Store API** to:
  - List products (as in Option A).
  - Create cart, add items, and get checkout URL or session.
- Implement “Checkout” on this site by either:
  - Redirecting to WooCommerce checkout with cart items (e.g. via URL params or a server-created session), or
  - Using a headless WooCommerce / payment plugin that exposes checkout over API.
- This requires more backend work (API routes, possibly WordPress plugins) and possibly handling payments through WooCommerce’s payment gateways in a headless way.

---

## Practical next steps for Option A

1. **Install and configure WooCommerce** on WordPress; add your products (or migrate from `lib/products.ts` manually/with a script).
2. **Create a WooCommerce API key** (WooCommerce → Settings → Advanced → REST API) with at least read access.
3. **Add the env vars** above to `.env.local` (and to Vercel/hosting env for production).
4. **Create a data layer** in this repo that fetches from WooCommerce:
   - e.g. `lib/woocommerce.ts` or `lib/api/products.ts` that calls `NEXT_PUBLIC_WOOCOMMERCE_URL` (or `WOOCOMMERCE_URL`) and, if needed, `WOOCOMMERCE_CONSUMER_KEY` / `WOOCOMMERCE_CONSUMER_SECRET` from the server.
5. **Replace usage of `lib/products.ts`** with this new data layer (products list, product by slug, categories).
6. **Add “Cart” and “Checkout” links** in the navbar/footer that point to your WooCommerce cart and checkout URLs. Optionally, pass cart items (e.g. product ID + quantity) to the WooCommerce cart URL if you use a plugin or custom endpoint that accepts them.

If you tell me whether you prefer Option A (redirect to WooCommerce for checkout) or Option B (more headless), I can outline the exact files to add or change next (e.g. `lib/woocommerce.ts`, API routes, and navbar links).
