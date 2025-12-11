param(
    [Parameter(Mandatory=$true)]
    [string]$message
)

Write-Host "Deploying: $message" -ForegroundColor Green

git add .
git commit -m $message
git push origin main

ssh root@46.224.123.56 "cd /var/www/grundgesetzt && git pull origin main && ./deploy.sh"

Write-Host "Deployment complete!" -ForegroundColor Green
