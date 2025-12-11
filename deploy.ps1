# Grundgesetzt Deployment Script
# Committed, pusht und deployed automatisch

Write-Host "🚀 Starting deployment..." -ForegroundColor Green

# Git add, commit, push
Write-Host "📤 Committing and pushing to GitHub..." -ForegroundColor Cyan
git add .
$commitMessage = Read-Host "Commit message"
git commit -m "$commitMessage"
git push origin main

# SSH und deploy auf Server
Write-Host "🔧 Deploying on server..." -ForegroundColor Cyan
ssh root@46.224.123.56 "cd /var/www/grundgesetzt && git pull origin main && ./deploy.sh"

Write-Host "✅ Deployment complete!" -ForegroundColor Green
