# 🚀 Vercel Deployment Guide

## Quick Deploy to Vercel (5 minutes!)

### Step 1: Push to GitHub

```bash
# Add your GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/validator-agent.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)** and sign up/login
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure the project:**
   - Framework Preset: `Node.js`
   - Root Directory: `.` (leave as default)
   - Build Command: `npm install`
   - Output Directory: `.` (leave as default)
   - Install Command: `npm install`

### Step 3: Add Environment Variables

**IMPORTANT:** Add these in Vercel dashboard:

1. **Click on your project** → "Settings" → "Environment Variables"
2. **Add:**
   - `OPENAI_API_KEY` = `sk-your-actual-api-key-here`
   - `NODE_ENV` = `production`

### Step 4: Deploy!

Click **"Deploy"** and wait ~2 minutes!

## 🎯 What Happens Next

- ✅ **Automatic HTTPS** enabled
- ✅ **Global CDN** for fast loading
- ✅ **Automatic deployments** on every git push
- ✅ **Custom domain** support (optional)

## 🔗 Your App URLs

After deployment, you'll get:
- **Production**: `https://your-project.vercel.app`
- **Preview**: `https://your-project-git-main.vercel.app`

## 🧪 Test Your Deployment

```bash
# Test the health endpoint
curl https://your-project.vercel.app/api/health

# Test the validation endpoint
curl -X POST https://your-project.vercel.app/api/validate \
  -H "Content-Type: application/json" \
  -d '{"question_content": "Will Apple announce a new iPhone before Friday?", "end_date": "2025-01-17T20:00:00Z"}'
```

## 🚨 Troubleshooting

### Common Issues:

1. **"OpenAI API key not found"**
   - Check environment variables in Vercel dashboard
   - Redeploy after adding variables

2. **"Build failed"**
   - Check build logs in Vercel
   - Ensure all dependencies are in package.json

3. **"Function timeout"**
   - OpenAI API calls can take time
   - Vercel has 30-second timeout (configured in vercel.json)

## 🔄 Auto-Deploy

Every time you push to GitHub:
1. Vercel automatically detects changes
2. Builds and deploys your app
3. Updates the production URL

## 🎉 Success!

Your validator agent will be live on the internet with:
- **Professional URL**
- **Global CDN**
- **Automatic HTTPS**
- **Zero server management**

**Time to deploy: ~5 minutes!** 🚀 