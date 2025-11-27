Write-Host "=== Checking Next.js Project Structure ===" -ForegroundColor Cyan

$root = "app"
if (!(Test-Path $root)) {
    Write-Host "[ERROR] No app/ folder found" -ForegroundColor Red
    exit
}

# Required root files
$requiredRootFiles = @(
    "app/layout.tsx",
    "app/globals.css"
)

foreach ($file in $requiredRootFiles) {
    if (Test-Path $file) {
        Write-Host "[OK] $file" -ForegroundColor Green
    } else {
        Write-Host "[MISSING] $file" -ForegroundColor Yellow
    }
}

# Check [lang] dynamic segment
$langDir = "app/[lang]"
if (Test-Path $langDir) {
    Write-Host "[OK] $langDir exists" -ForegroundColor Green
} else {
    Write-Host "[MISSING] app/[lang] directory" -ForegroundColor Red
    exit
}

# Required inside [lang] folder
$requiredLangFiles = @(
    "page.tsx",
    "layout.tsx",
    "components"
)

foreach ($file in $requiredLangFiles) {
    $path = Join-Path $langDir $file
    if (Test-Path $path) {
        Write-Host "[OK] $path" -ForegroundColor Green
    } else {
        Write-Host "[MISSING] $path" -ForegroundColor Yellow
    }
}

# Check for required pages
$requiredPages = @(
    "research",
    "members",
    "publications",
    "news",
    "access"
)

foreach ($folder in $requiredPages) {
    $path = Join-Path $langDir "$folder/page.tsx"
    if (Test-Path $path) {
        Write-Host "[OK] Page exists: $path" -ForegroundColor Green
    } else {
        Write-Host "[MISSING] $path" -ForegroundColor Yellow
    }
}

# Check for duplicate pages in root (should NOT exist)
$forbiddenRoot = @(
    "app/research",
    "app/members",
    "app/publications",
    "app/access",
    "app/news"
)

foreach ($folder in $forbiddenRoot) {
    if (Test-Path $folder) {
        Write-Host "[WARNING] Remove root folder: $folder (breaks routing)" -ForegroundColor Red
    }
}

Write-Host "`n=== Scan Complete ==="
