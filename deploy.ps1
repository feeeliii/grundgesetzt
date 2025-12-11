# Grundgesetzt Deployment Script
# Pusht Code zu GitHub und deployed auf dem Server

Write-Host "🚀 Starting deployment..." -ForegroundColor Green

# Git push
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Cyan
git push origin main

# SSH und deploy auf Server
Write-Host "🔧 Deploying on server..." -ForegroundColor Cyan
ssh root@46.224.123.56 "cd /var/www/grundgesetzt && git pull origin main && ./deploy.sh"

Write-Host "✅ Deployment complete!" -ForegroundColor Green
