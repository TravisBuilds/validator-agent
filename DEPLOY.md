# 🚀 Quick Deployment Guide

## Option 1: Render (Recommended - Free & Fast)

1. **Go to [render.com](https://render.com)** and sign up
2. **Click "New +"** → "Web Service"
3. **Connect your GitHub** or upload the code
4. **Configure:**
   - Name: `validator-agent`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
5. **Add Environment Variables:**
   - `OPENAI_API_KEY` = your actual API key
   - `NODE_ENV` = `production`
6. **Deploy!** 🎉

## Option 2: Railway (Also Fast)

1. **Go to [railway.app](https://railway.app)** and sign up
2. **Click "New Project"** → "Deploy from GitHub"
3. **Select your repository**
4. **Add Environment Variables:**
   - `OPENAI_API_KEY` = your actual API key
5. **Deploy!** 🎉

## Option 3: Vercel (Super Fast)

1. **Go to [vercel.com](https://vercel.com)** and sign up
2. **Import your GitHub repository**
3. **Configure:**
   - Framework Preset: `Node.js`
   - Build Command: `npm install`
   - Output Directory: `.`
   - Install Command: `npm install`
4. **Add Environment Variables:**
   - `OPENAI_API_KEY` = your actual API key
5. **Deploy!** 🎉

## Environment Variables Needed

```bash
OPENAI_API_KEY=sk-your-actual-api-key-here
NODE_ENV=production
```

## Quick Test

After deployment, test with:

```bash
curl -X POST https://your-app-name.onrender.com/api/validate \
  -H "Content-Type: application/json" \
  -d '{"question_content": "Will Apple announce a new iPhone before Friday?", "end_date": "2025-01-17T20:00:00Z"}'
```

## ⚠️ Important Notes

- **Never commit your `.env` file** with real API keys
- **Use environment variables** in your hosting platform
- **Test the API endpoint** after deployment
- **Check the logs** if something goes wrong

## 🎯 Recommended: Render

Render is the fastest option because:
- ✅ Free tier available
- ✅ Automatic HTTPS
- ✅ Easy environment variable setup
- ✅ Automatic deployments from Git
- ✅ Good performance

Your app will be live in under 5 minutes! 🚀 