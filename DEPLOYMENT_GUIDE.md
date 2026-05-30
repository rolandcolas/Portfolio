# 🚀 Vercel Deployment Guide

This guide will walk you through deploying your portfolio to Vercel step-by-step.

## Why Vercel?

- ⚡ Ultra-fast performance (built for Next.js)
- 🔄 Automatic deployments from Git
- 🌍 Global CDN
- 💰 Free tier includes everything you need
- 🔒 HTTPS by default
- 📊 Built-in analytics

## Prerequisites

- GitHub account (free at github.com)
- Vercel account (free at vercel.com)
- Your portfolio project pushed to GitHub

## Step 1: Prepare Your Project

### 1.1 Initialize Git (if not already done)

```bash
cd "portfolio atake pearl"
git init
```

### 1.2 Create a .gitignore file

Already included! It ignores:
- node_modules
- .next build folder
- Environment variables
- IDE files

### 1.3 Commit your code

```bash
git add .
git commit -m "Initial portfolio commit"
```

## Step 2: Create GitHub Repository

### 2.1 Go to GitHub

1. Visit [github.com](https://github.com)
2. Sign in to your account
3. Click "+" icon → "New repository"

### 2.2 Create Repository

- **Repository name:** `portfolio` (or any name)
- **Description:** "My IT Portfolio Website"
- **Public** or **Private** (both work with Vercel)
- Click "Create repository"

### 2.3 Push to GitHub

After creating the repo, GitHub will show you commands. Follow them:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Deploy to Vercel

### Option A: Vercel Dashboard (Recommended for Beginners)

#### 3A.1 Sign Up/Login to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub

#### 3A.2 Import Project

1. Click "New Project"
2. Under "Import Git Repository", paste your repo URL or select it from the list
3. Click "Import"

#### 3A.3 Configure Project

The defaults are usually perfect:
- **Framework Preset:** Next.js (auto-detected)
- **Root Directory:** ./ (default)
- **Environment Variables:** Leave empty for now
- Click "Deploy"

#### 3A.4 Wait for Deployment

- Vercel will build and deploy your site
- You'll see a "Congratulations" message when done
- Your site is live at: `your-project-name.vercel.app`

### Option B: Vercel CLI (For Advanced Users)

#### 3B.1 Install Vercel CLI

```bash
npm i -g vercel
```

#### 3B.2 Deploy

```bash
vercel
```

#### 3B.3 Follow Prompts

- Select your scope (your account)
- Link to existing project? No
- Project name: `portfolio`
- Root directory: ./
- Build command: Leave default
- Output directory: Leave default (`.next`)
- Deployment URL will be shown

## Step 4: Add Custom Domain (Optional)

### 4.1 In Vercel Dashboard

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS instructions for your domain provider

### 4.2 DNS Setup

- Point your domain's DNS to Vercel
- Instructions vary by provider (GoDaddy, Namecheap, etc.)
- Vercel has guides for each provider

## Step 5: Automatic Deployments

After initial setup, every time you:

1. Make changes locally
2. Run `git commit -m "message"`
3. Run `git push`

Vercel automatically:
- Pulls the new code
- Builds the project
- Deploys the new version
- Your site updates instantly!

## Step 6: Update Your Portfolio

### 6.1 Add Images

1. Place your profile photo in: `public/images/profile/profile.png`
2. Place certificates in: `public/images/certificates/cert-1.png` through `cert-5.png`
3. Commit and push:

```bash
git add public/
git commit -m "Add profile photo and certificates"
git push
```

### 6.2 Update Content

1. Edit components in `src/components/`
2. Commit changes:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Your site updates automatically!

## Step 7: Monitor Your Deployment

### 7.1 In Vercel Dashboard

- View build logs
- Check deployment status
- See analytics
- Monitor performance

### 7.2 Custom Metrics

Vercel shows:
- Page load performance
- Core Web Vitals
- Deployment history
- Function execution times

## Troubleshooting

### Build Fails

**Error:** `Module not found`

**Solution:** Run locally first:
```bash
npm install
npm run build
```

Then push to GitHub.

### Site Shows Blank Page

**Error:** `404 Not Found`

**Solution:** 
1. Check that your repo was pushed correctly
2. Re-trigger deployment in Vercel dashboard
3. Click "Redeploy" next to latest deployment

### Slow Performance

1. Check Vercel Analytics
2. Ensure images are in `public/` folder
3. Images will auto-optimize by Vercel

## Advanced: Environment Variables

If you need API keys later:

### 6.1 Create .env.local locally

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

### 6.2 Add to Vercel

1. Project Settings → Environment Variables
2. Add the same variables
3. Redeploy

**Never commit .env files to GitHub!**

## Advanced: Custom Domain with SSL

Vercel automatically provides:
- ✅ Free SSL certificate
- ✅ HTTPS for all deployments
- ✅ Auto-renewal
- ✅ Global CDN with 300+ edge locations

## Performance Tips

1. **Keep images optimized:**
   - Use PNG/JPG
   - Compress before uploading
   - Recommended: 100KB-500KB per image

2. **Monitor with Lighthouse:**
   - Built into Chrome DevTools
   - Check Performance, Accessibility, Best Practices
   - Aim for 90+

3. **Use Vercel Analytics:**
   - View real user metrics
   - Core Web Vitals monitoring
   - Performance insights

## Rollback (Undo Deployment)

If something breaks:

1. In Vercel dashboard, go to Deployments
2. Find the working deployment
3. Click "Redeploy"

Or locally:
```bash
git revert HEAD
git push
```

## What's Included in Vercel Free Tier

✅ Unlimited deployments
✅ Custom domains
✅ HTTPS
✅ Global CDN
✅ 100GB bandwidth/month
✅ Analytics
✅ Preview deployments for PRs
✅ Automatic scaling

## Keep Your Project Updated

### Monthly

```bash
npm update
npm audit
```

### Push to GitHub

```bash
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

Vercel auto-redeploys.

## Useful Commands

```bash
# Build locally to test
npm run build

# Run production build
npm start

# Check for errors
npm run lint

# Install new package
npm install package-name

# Update all packages
npm update
```

---

## Quick Checklist

- [ ] Project pushed to GitHub
- [ ] Vercel account created
- [ ] GitHub connected to Vercel
- [ ] Project imported to Vercel
- [ ] Site deployed and live
- [ ] Profile photo added
- [ ] Certificates added
- [ ] Contact info updated
- [ ] Custom domain added (optional)
- [ ] Analytics monitored

---

**You're all set! Your portfolio is now live on the internet! 🎉**

For questions, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
