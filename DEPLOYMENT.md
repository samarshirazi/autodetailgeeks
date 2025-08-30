# Deployment Guide

## Vercel Deployment Fix

If you're experiencing 404 errors when refreshing pages on Vercel, follow these steps:

### 1. Ensure Correct Configuration Files

The project now includes:
- `vercel.json` (root level) - Main Vercel configuration
- `public/vercel.json` - Backup configuration
- `public/_redirects` - For Netlify compatibility

### 2. Vercel Configuration Details

The `vercel.json` file should contain:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/((?!api/).*)",
      "destination": "/index.html"
    }
  ]
}
```

### 3. Manual Deployment Steps

1. **Rebuild the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

3. **Or commit and push to trigger auto-deployment:**
   ```bash
   git add .
   git commit -m "Fix SPA routing for Vercel deployment"
   git push origin main
   ```

### 4. Vercel Dashboard Settings

If the configuration files don't work, manually set these in Vercel Dashboard:

1. Go to your project settings in Vercel
2. Navigate to "General" → "Build & Development Settings"
3. Set:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. Go to "Functions" tab and add a rewrite rule:
   - **Source**: `/(.*)`
   - **Destination**: `/index.html`

### 5. Alternative: Simple Vercel Configuration

If the above doesn't work, try this simpler configuration in `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### 6. Testing the Fix

After deployment:
1. Visit your Vercel URL
2. Navigate to `/services`, `/about`, `/gallery`, `/contact`
3. Refresh the page - it should load correctly instead of showing 404
4. Browser back/forward should work
5. Direct URL sharing should work

### Other Deployment Platforms

- **Netlify**: Uses `public/_redirects` file
- **Apache**: Uses `public/.htaccess` file  
- **Nginx**: Requires server configuration to serve `index.html` for all routes

The project includes configuration files for all major platforms.