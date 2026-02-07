# How to Push to GitHub

Follow these step-by-step instructions to push your Golf Ryder Cup website to GitHub.

## Prerequisites

1. **Install Git** (if not already installed):
   - Download from: https://git-scm.com/download/win
   - Or check if installed: Open PowerShell and type `git --version`

2. **Create a GitHub account** (if you don't have one):
   - Go to: https://github.com
   - Sign up for free

## Step-by-Step Instructions

### Step 1: Create a New Repository on GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `golf-ryder-cup` (or any name you like)
4. Description: "Golf Ryder Cup History - Team Taiwan vs Team Korea"
5. Choose **Public** or **Private**
6. **DO NOT** check "Initialize with README" (we already have files)
7. Click **"Create repository"**

### Step 2: Open PowerShell/Terminal in Your Project Folder

1. Navigate to your project folder:
   ```
   cd "C:\Users\brayn\OneDrive\Documents\CursorAI - Project Brayns"
   ```

### Step 3: Initialize Git (First Time Only)

Run these commands one by one:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Golf Ryder Cup website"
```

### Step 4: Connect to GitHub and Push

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
# Add GitHub remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/golf-ryder-cup.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Example:**
If your username is `brayn` and repo name is `golf-ryder-cup`:
```bash
git remote add origin https://github.com/brayn/golf-ryder-cup.git
git branch -M main
git push -u origin main
```

### Step 5: Authenticate

When you run `git push`, you'll be prompted to:
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (not your GitHub password)

#### How to Create a Personal Access Token:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click **"Generate new token (classic)"**
3. Name it: "Golf Ryder Cup Project"
4. Select scopes: Check **"repo"** (gives full repository access)
5. Click **"Generate token"**
6. **Copy the token immediately** (you won't see it again!)
7. Use this token as your password when pushing

## Complete Command Sequence (Copy & Paste)

```bash
# Navigate to project (if not already there)
cd "C:\Users\brayn\OneDrive\Documents\CursorAI - Project Brayns"

# Initialize Git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Golf Ryder Cup website"

# Add remote (REPLACE YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## Future Updates

After the initial push, to update your GitHub repository:

```bash
# Add changed files
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

## Troubleshooting

### "Repository not found" error:
- Check your username and repository name are correct
- Make sure the repository exists on GitHub
- Verify you have access to the repository

### "Authentication failed" error:
- Make sure you're using a Personal Access Token, not your password
- Check the token has "repo" permissions
- Generate a new token if needed

### "Branch 'main' does not exist":
```bash
git branch -M main
```

### "Remote origin already exists":
```bash
# Remove existing remote
git remote remove origin

# Add it again with correct URL
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

## Quick Reference

| Command | What it does |
|---------|-------------|
| `git init` | Initialize Git in current folder |
| `git add .` | Stage all files for commit |
| `git commit -m "message"` | Save changes with a message |
| `git remote add origin URL` | Connect to GitHub repository |
| `git push -u origin main` | Upload to GitHub (first time) |
| `git push` | Upload to GitHub (subsequent times) |
| `git status` | Check what files have changed |

## Next Steps After Pushing

1. **Enable GitHub Pages** (to host your website):
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Select "main" branch
   - Click Save
   - Your site will be at: `https://YOUR_USERNAME.github.io/REPO_NAME`

2. **Share your repository** with friends!

---

**Need help?** Check GitHub's official guide: https://docs.github.com/en/get-started
