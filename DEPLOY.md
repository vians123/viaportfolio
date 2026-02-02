# Deploy Portfolio with GitHub Pages

Your portfolio is set up to go live on **GitHub Pages**.

## 1. Push your code (if not done yet)

From the Portfolio folder in terminal:

```bash
cd "c:\Users\Via\OneDrive\Desktop\Portfolio"
git push -u origin main
```

If GitHub asks for login, use your GitHub username and a **Personal Access Token** (not your password). Create one at: **GitHub → Settings → Developer settings → Personal access tokens**.

---

## 2. Turn on GitHub Pages

1. Open your repo: **https://github.com/vians123/viaportfolio**
2. Click **Settings** (top menu).
3. In the left sidebar, click **Pages** (under "Code and automation").
4. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` → `/ (root)` → **Save**

---

## 3. Your live URL

After a minute or two, your site will be at:

**https://vians123.github.io/viaportfolio/**

GitHub may show "Your site is live at..." on the Pages settings screen when it’s ready.

---

## 4. Updating the site

After you change files in your portfolio:

```bash
cd "c:\Users\Via\OneDrive\Desktop\Portfolio"
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will redeploy automatically; refresh the URL after a short delay.
