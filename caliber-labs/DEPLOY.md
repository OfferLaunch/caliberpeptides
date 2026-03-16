# Why the site isn’t live + how to run it locally

## 1. Why the site isn’t live on GitHub Pages

**GitHub Pages only serves static files.** It does not run Node.js or a Next.js server.

- Your app is **Next.js**: it’s built into a `.next` folder and is meant to run with `npm run build` then `npm start` (a Node server).
- GitHub Pages looks for **HTML files** (e.g. `index.html`) in the branch/folder you chose (e.g. `main` root or `/docs`). Your repo has **no `index.html`** there—only source code and a Next.js app—so you get:
  - *“The site configured at this address does not contain the requested file”*
  - *“For root URLs you must provide an index.html file.”*

So the site “isn’t live” because **nothing GitHub Pages can serve** (no static HTML) is in the place it’s looking.

**Ways to fix it:**

- **Option A – Static export (stay on GitHub Pages)**  
  Configure Next.js to **export static HTML** (e.g. into an `out/` or `docs/` folder), then point GitHub Pages at that folder (e.g. deploy from `/docs` or from a `gh-pages` branch). Then the site can be “live” from GitHub Pages.

- **Option B – Use a host that runs Node**  
  Deploy the Next.js app (with `npm run build` + `npm start`) to a host that supports Node (e.g. **Vercel**, Railway, Render). No need for `index.html`; the server serves the app.

---

## 2. Why you “can’t run it locally”

Running locally means starting the **Next.js dev server** from the **right folder** with a **clean state**.

Common causes of “can’t run”:

| Cause | What happens | Fix |
|-------|---------------------|-----|
| **Wrong directory** | You run `npm run dev` from the repo root (`Caliber Labs`) instead of the app folder. | Run all npm commands from **`caliber-labs`** (the folder that has `package.json` and `app/`). |
| **Stale dev lock** | Another/crashed `next dev` left a lock file. Next says “Unable to acquire lock… is another instance running?” and exits. | Delete the lock and try again: `rm -f .next/dev/lock` then `npm run dev`. |
| **Port in use** | Port 3000 (or 3001) is taken by another app. | Either stop that app or let Next use the next free port (e.g. 3001). |
| **Dependencies not installed** | `node_modules` missing or broken. | From **`caliber-labs`**: `npm install` then `npm run dev`. |

So “can’t run locally” usually means: wrong folder, lock file, or port/deps. Fix those and it should run.

---

## 3. Exact steps to run locally (every time)

Do this from a terminal:

```bash
# 1. Go into the Next.js app (required)
cd "/Users/jacobarnold/Caliber Peptides/caliber-labs"

# 2. If you ever see a “lock” or “another instance” error, clear it once:
rm -f .next/dev/lock

# 3. Install dependencies if you haven’t or after pulling
npm install

# 4. Start the dev server
npm run dev
```

Then open in the browser: **http://localhost:3000** (or the port shown in the terminal, e.g. 3001).

---

## 4. Making the site “live”

- **If you want to keep using GitHub Pages:**  
  You need a **static export** (HTML in a folder like `docs/` or `out/`) and GitHub Pages set to that folder (or branch). The next step is to add `output: 'export'` to `next.config.ts` and a script to build and copy the export into the folder GitHub Pages uses (e.g. `docs/`), then push.

- **If you’re okay moving to a Node host:**  
  The easiest is **Vercel**: connect the same GitHub repo, leave the build as `npm run build` and it will run the app and make it live without any `index.html` or static export.

If you tell me whether you want to stay on GitHub Pages or use Vercel, I can give you the exact config and commands for that path.
