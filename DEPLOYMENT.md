# Deployment Guide - Golf Ryder Cup Website

This is a static website that can be deployed to various platforms. Here are the best options:

## Option 1: Netlify (Recommended - Easiest)

### Quick Deploy:
1. Go to [netlify.com](https://www.netlify.com) and sign up (free)
2. Drag and drop your project folder onto Netlify's dashboard
3. Your site will be live instantly with a URL like `your-site-name.netlify.app`

### Git-based Deploy (Better for updates):
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Netlify will automatically deploy on every push

**Pros:** Free, automatic HTTPS, custom domains, continuous deployment

---

## Option 2: Vercel

1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Install Vercel CLI: `npm i -g vercel`
3. In your project folder, run: `vercel`
4. Follow the prompts

**Pros:** Free, fast CDN, automatic HTTPS, great for static sites

---

## Option 3: GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select your branch (usually `main` or `master`)
4. Select folder (usually `/root`)
5. Your site will be at `username.github.io/repository-name`

**Pros:** Free, integrated with GitHub, easy updates

**Note:** Make sure `index.html` is in the root of your repository.

---

## Option 4: Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Deploy: `firebase deploy`

**Pros:** Free tier, fast CDN, custom domains

---

## Option 5: Traditional Web Hosting

Upload these files to your web hosting provider:
- `index.html`
- `styles.css`
- `script.js`
- `images/` folder (if you have images)

Via FTP/SFTP or your hosting provider's file manager.

---

## Important Notes Before Deploying:

### 1. Images Folder
- Create an `images/` folder in your project
- Add player photos:
  - `images/bryan-leong.jpg`
  - `images/rich-tsai.jpg`
  - `images/jamin-cho.jpg`
  - `images/tae-kyung.jpg`
- Or update the image paths in `index.html` to match your file names

### 2. Local Storage
- The website uses browser localStorage to save data
- This means data is stored per user/browser
- For shared data across users, you'd need a backend (database)

### 3. Custom Domain (Optional)
- Most platforms allow custom domains
- Point your domain's DNS to the hosting provider
- SSL certificates are usually automatic

---

## Quick Start Commands

### For Netlify (with CLI):
```bash
npm install -g netlify-cli
netlify deploy
netlify deploy --prod
```

### For Vercel:
```bash
npm install -g vercel
vercel
vercel --prod
```

### For GitHub Pages:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

---

## Testing Locally

Before deploying, test locally:
1. Open `index.html` in a web browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have it)
   npx serve
   ```
3. Visit `http://localhost:8000`

---

## Recommended: Netlify Drop

The absolute easiest way:
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your entire project folder
3. Done! You'll get a live URL immediately
