# Gating & Access Requirements (Peptide Labs X–Style)

This doc describes what’s needed to gate site access and add email collection + store logins, similar to [peptidelabsx.com](https://peptidelabsx.com/).

---

## How Peptide Labs X Works

1. **Research Access Portal (gate)**  
   - **Step 1:** User selects “purpose” (e.g. Independent Researcher, Laboratory, Academic, etc.) and confirms research-only use.  
   - **Step 2:** User must **sign in** or **register** (email + password).  
   - Until both steps are done, the main catalog/shop is not fully accessible.

2. **Email collection**  
   - Separate popup: “Get 10% off your first order” + email field.  
   - Used for marketing and to send a one-time discount code.

3. **Store logins**  
   - Sign in, Register, Forgot password, all with email + password.

---

## What You Already Have

- **Next.js 16** (App Router), **Supabase** (auth/session via middleware and clients).
- Access gating via **`/access`** and middleware (see app code); no app-owned SQL/ORM layer yet.
- **WooCommerce checkout** — `POST /api/woocommerce/checkout` expects `email` + `cart`; no auth required yet.

You do **not** yet have: a database layer (e.g. Prisma + `User` model), the full two-step research portal described below, dedicated login/register UI for a custom credentials flow, or email capture backend. (Supabase Auth is available; the sections below include an optional **NextAuth** path—add `next-auth`, `bcryptjs`, and `@types/bcryptjs` only if you implement that.)

---

## What You Need to Implement

### 1. Database (Prisma)

- **User** table for store logins:
  - `id`, `email` (unique), `passwordHash`, `name` (optional), `createdAt`, `updatedAt`.
- **ResearchPurpose** or store purpose in session only:
  - Either a table `UserResearchPurpose` (userId, purpose, agreedAt) or just keep “purpose” in the session/cookie after Step 1 (no DB required for step 1 if you only need “they selected one”).
- **Email leads** (for “Get 10% off” popup):
  - Table e.g. `Lead` or `EmailSignup`: `id`, `email`, `source` (e.g. `'first_order_discount'`), `createdAt`. Optional: `discountCode` if you generate one per signup.

Run migrations after schema changes.

---

### 2. Environment Variables

Add (and keep secret):

- **NextAuth**
  - `NEXTAUTH_URL` — e.g. `https://yourdomain.com` (or `http://localhost:3001` in dev).
  - `NEXTAUTH_SECRET` — random string (e.g. `openssl rand -base64 32`).
- **Database**
  - `DATABASE_URL` — PostgreSQL connection string (Prisma already expects this).
- **Email (optional but recommended for “Get 10% off”)**
  - For sending discount codes: e.g. **Resend** (`RESEND_API_KEY`) or **SendGrid** or **Mailchimp** API key.
  - For only storing emails in DB, no email provider is required until you want to send codes.

---

### 3. NextAuth Setup

If you use this stack, install: `npm install next-auth bcryptjs` and `npm install -D @types/bcryptjs`. (Alternatively, handle email/password entirely with **Supabase Auth** and skip NextAuth.)

- **Provider:** Credentials (email + password).
- **Credentials authorize flow:**  
  - Look up user by email in Prisma, verify password with `bcryptjs.compare`, return user object (e.g. `id`, `email`, `name`) as session user.
- **Callbacks:**  
  - `jwt` and `session`: put `user.id` and `user.email` (and optionally “research purpose” if stored on user/session) into the session.
- **Pages (optional):**  
  - `signIn: '/access'` (or `/login`) so the gate uses your custom “Research Access Portal” page instead of the default NextAuth form.

Create:

- `app/api/auth/[...nextauth]/route.ts` — NextAuth handler.
- `lib/auth.ts` (or similar) — auth config (Credentials provider, callbacks, adapter optional).
- Wrap the app in `SessionProvider` (client component) in `app/layout.tsx` so `useSession()` works everywhere.

---

### 4. Research Access Portal (Gate) – Two Steps

**Step 1 – Purpose + disclaimer**

- UI: List of options (e.g. Independent Researcher, Pharmaceutical Research, Laboratory, Academic/Research Institution, Contract Research Org, Cosmetic Research, Chemical Supply, None of the above).
- Single “Continue” (or “I confirm research use only”) that:
  - Sets a cookie or session field (e.g. `research_purpose_agreed` / selected purpose).
  - Moves to Step 2.

**Step 2 – Sign in or register**

- If not logged in: show **Sign in** (email + password) and **Register** (email + password, then create User in DB with hashed password).
- “Forgot password?” → link to a Forgot Password flow (see below).
- After successful login (or right after register), consider the gate “passed” and allow access to the rest of the site.

**Where to enforce the gate**

- **Option A (recommended):** A **gate layout or middleware** that:
  - Allows only routes like `/access`, `/api/auth/*`, and maybe `/forgot-password` without being “passed”.
  - For all other routes: if no session **or** no “purpose agreed” cookie/session, redirect to `/access` (or your portal page).
- **Option B:** A wrapper component that checks session + purpose and either shows the gate UI or `children`. Use this in the root layout or in a layout that wraps shop/catalog.

So you need:

- **One gate page** (e.g. `app/access/page.tsx`) that shows Step 1 then Step 2 (tabs or two panels like Peptide Labs X).
- **Cookie or session** for “purpose agreed” (and optionally which purpose).
- **Redirect logic** in middleware or layout: not passed → redirect to `/access`.

---

### 5. Store Logins (Sign In / Register / Forgot Password)

- **Sign in / Register:**  
  - Can be the same page as Step 2 of the gate (email + password; “Sign in” vs “Create account”).
  - Register: `POST /api/auth/register` (or similar) that creates a User with hashed password (bcrypt) and then either redirects to sign-in or auto sign-in via NextAuth.
- **Forgot password:**  
  - Page: “Enter your email” → `POST /api/auth/forgot-password`.  
  - Backend: find user by email, create a short-lived token (store in DB or sign a JWT), send reset link (e.g. `https://yourdomain.com/reset-password?token=...`) using your email provider.  
  - Reset page: “New password” + confirm → validate token, update password hash, invalidate token, redirect to sign in.

So you need:

- **API routes:**  
  - `POST /api/auth/register` — create user, hash password.  
  - `POST /api/auth/forgot-password` — create token, send email.  
  - `POST /api/auth/reset-password` — accept token + new password, update user.
- **Pages (or sections on `/access`):**  
  - Sign in form, Register form, Forgot password form, Reset password page (with token in query).

---

### 6. Email Collection (“Get 10% Off”)

- **Frontend:**  
  - Popup or banner (e.g. after disclaimer or after first visit): “Get 10% off your first order – enter your email.”  
  - Optional: “I already have a code” / “No thanks” to hide for the session.
- **Backend:**  
  - `POST /api/lead` or `POST /api/email-signup`: body `{ email: string, source?: string }`.  
  - Validate email, store in `Lead` (or similar) table.  
  - Optional: generate a one-time discount code (e.g. in WooCommerce or your system) and send it via Resend/SendGrid with `RESEND_API_KEY` (or similar). If you don’t send yet, you can still collect emails and add sending later.

You need:

- **Table:** `Lead` / `EmailSignup` (email, source, createdAt, optional discountCode).
- **API route:** `POST /api/lead` (or `/api/email-signup`).
- **Optional:** Email service integration (Resend, etc.) and a simple “10% off” template.

---

## Checklist Summary

| Piece | Purpose |
|-------|--------|
| **Prisma: User** | Store logins (email, password hash). |
| **Prisma: Lead / EmailSignup** | Collect emails (and optional discount code). |
| **NEXTAUTH_URL, NEXTAUTH_SECRET** | NextAuth config. |
| **DATABASE_URL** | Prisma/Postgres. |
| **NextAuth API + Credentials provider** | Sign in with email/password. |
| **SessionProvider in layout** | Use session in app. |
| **Gate page (e.g. /access)** | Step 1: purpose + agree; Step 2: sign in / register. |
| **Cookie/session for “purpose agreed”** | Remember Step 1 so you don’t ask again. |
| **Middleware or layout redirect** | Send unauthenticated / no-purpose users to `/access`. |
| **Register API** | Create user, hash password. |
| **Forgot / Reset password APIs + pages** | Recover account. |
| **Email capture API + Lead table** | Store “10% off” signups. |
| **Optional: Resend (or other) + template** | Send discount code by email. |

---

## Suggested Order of Implementation

1. **Prisma:** Add `User` and `Lead` (or `EmailSignup`), run migrate.  
2. **Env:** Set `DATABASE_URL`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`.  
3. **NextAuth:** Configure Credentials provider and session, add `app/api/auth/[...nextauth]/route.ts`, wrap app with `SessionProvider`.  
4. **Gate page:** Build `/access` with Step 1 (purpose + agree) and Step 2 (sign in / register).  
5. **Middleware (or layout):** Redirect to `/access` if not “passed” (purpose + session).  
6. **Register + Forgot/Reset:** API routes + UI.  
7. **Email capture:** `POST /api/lead` + Lead table + popup component; add email sending later if you want.

After this, your gating and access will function like peptidelabsx.com: research purpose + store logins gate the site, and you collect emails (and optionally send a first-order discount).
