# DreamHost Deployment Helper Script

# Configuration
$Server = "pdx1-shared-a1-13.dreamhost.com"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "   DreamHost Deployment Helper" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "This script will upload your 'client/dist' folder to your DreamHost server."
Write-Host "You will need your DreamHost Username and Password."
Write-Host ""

# Get Credentials / Info
$User = Read-Host -Prompt "Enter your DreamHost Username"
$Domain = Read-Host -Prompt "Enter your Domain Name (folder name on server, e.g. example.com)"

if ([string]::IsNullOrWhiteSpace($User) -or [string]::IsNullOrWhiteSpace($Domain)) {
    Write-Host "Error: Username and Domain are required." -ForegroundColor Red
    exit
}

$SourcePath = ".\client\dist\*"
$DestPath = "/home/$User/$Domain/"

Write-Host ""
Write-Host "Uploading files to: $DestPath" -ForegroundColor Yellow
Write-Host "(You may be asked for your password multiple times or asked to confirm the fingerprint)" -ForegroundColor Yellow
Write-Host ""

# Run SCP
# Note: Using * to copy contents of dist, not dist folder itself
scp -r $SourcePath "${User}@${Server}:${DestPath}"

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Upload Complete!" -ForegroundColor Green
    Write-Host "Visit https://$Domain to see your site."
} else {
    Write-Host ""
    Write-Host "❌ Upload Failed." -ForegroundColor Red
    Write-Host "Please check your username, password, and domain folder name."
}

Pause
