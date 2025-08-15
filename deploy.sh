#!/bin/bash

echo "🚀 Quick Deploy Script for Validator Agent"
echo "=========================================="

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ .env file not found!"
    echo "Please create .env file with your OPENAI_API_KEY"
    echo "Example:"
    echo "OPENAI_API_KEY=sk-your-key-here"
    echo "NODE_ENV=production"
    exit 1
fi

echo "✅ .env file found"
echo ""

echo "📦 Installing dependencies..."
npm install

echo "🔧 Building..."
npm run build

echo "🚀 Starting production server..."
echo "Your app will be available at: http://localhost:3000"
echo ""
echo "To deploy to cloud:"
echo "1. Push to GitHub"
echo "2. Use Render.com (recommended)"
echo "3. Or Railway.app"
echo "4. Or Vercel.com"
echo ""
echo "See DEPLOY.md for detailed instructions!"

npm start 