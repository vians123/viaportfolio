# Free Portfolio Hosting Options

Your portfolio is static (HTML/CSS/JS), so you can host it for **free** on many platforms. No credit card needed.

---

## 1. **GitHub Pages** (you already have the repo)

- **Cost:** Free for public repositories
- **URL:** `https://vians123.github.io/viaportfolio/`
- **How:** Repo is already public? Go to **Settings → Pages → Source: Deploy from branch → main → Save**. No payment.
- If the repo is **Private**, GitHub Pages for private repos is only on paid plans. **Make the repo Public** (Settings → General → Danger zone → Change visibility) and Pages stays free.

---

## 2. **Netlify**

- **Cost:** Free forever for static sites
- **URL:** `https://your-site-name.netlify.app` (you pick the name)
- **How:**
  1. Sign up at [netlify.com](https://www.netlify.com) (use GitHub or email).
  2. **Add new site → Import an existing project → GitHub** → choose `vians123/viaportfolio`.
  3. Branch: `main`, build command: leave empty, publish directory: `/` (or leave default).
  4. Deploy. Done. Updates automatically when you push to GitHub.

**Or drag & drop:** Build the site locally, then drag your `Portfolio` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

---

## 3. **Vercel**

- **Cost:** Free for personal projects
- **URL:** `https://viaportfolio.vercel.app` (or custom)
- **How:**
  1. Sign up at [vercel.com](https://vercel.com) with GitHub.
  2. **Add New → Project** → import `viaportfolio` from GitHub.
  3. Leave framework as “Other” or “No framework”, root directory `.`, then Deploy.
  4. Auto-deploys on every push.

---

## 4. **Cloudflare Pages**

- **Cost:** Free (generous limits)
- **URL:** `https://viaportfolio.pages.dev`
- **How:**
  1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com).
  2. **Create a project → Connect to Git** → GitHub → `vians123/viaportfolio`.
  3. Build: leave build command blank, output directory: `/`.
  4. Deploy. Updates on push.

---

## 5. **Surge.sh** (no account for quick test)

- **Cost:** Free
- **URL:** `https://something.surge.sh` (you choose `something`)
- **How:** Install Node.js, then in terminal:
  ```bash
  npx surge "c:\Users\Via\OneDrive\Desktop\Portfolio" your-name.surge.sh
  ```
  First time it will ask for email/password to create a free account.

---

## 6. **Neocities**

- **Cost:** Free (1 GB)
- **URL:** `https://yourusername.neocities.org`
- **How:** Sign up at [neocities.org](https://neocities.org), create a site, then upload your folder files via the web uploader or their CLI.

---

## Quick comparison

| Service        | Free? | Custom domain (free) | Auto-deploy from Git |
|----------------|-------|----------------------|-----------------------|
| GitHub Pages   | Yes (public repo) | Yes | Yes |
| Netlify        | Yes   | Yes                  | Yes |
| Vercel         | Yes   | Yes                  | Yes |
| Cloudflare Pages | Yes | Yes                  | Yes |
| Surge          | Yes   | Yes                  | No (manual deploy) |
| Neocities      | Yes   | Optional             | No |

**Recommendation:** Use **GitHub Pages** (make repo public if needed) or **Netlify** — both are free, support your current GitHub repo, and auto-update when you push.
