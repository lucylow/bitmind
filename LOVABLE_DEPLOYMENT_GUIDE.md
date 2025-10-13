# Lovable Deployment Guide for BitMind

## Overview
This guide will help you successfully deploy BitMind to Lovable with both frontend and backend.

## Prerequisites
- GitHub repository synced with Lovable
- Lovable project created and connected

## Configuration Files Added

### 1. `lovable.config.js`
Main configuration file that tells Lovable how to build your app.

### 2. `.lovable`
JSON configuration for Lovable platform settings.

### 3. Enhanced `vite.config.ts`
Updated with proper build configuration:
- Output directory: `dist`
- Base path: `./` (for relative URLs)
- Optimized build settings

### 4. Updated `package.json`
New scripts for unified builds:
- `build:unified` - Builds both frontend and backend
- `backend:install` - Installs backend dependencies
- `backend:build` - Builds backend TypeScript
- `copy:backend` - Copies backend to dist/api

## Deployment Steps

### Step 1: Sync with GitHub
1. Commit all changes to your repository
2. Push to GitHub
3. Ensure Lovable is synced with your GitHub repo

### Step 2: Configure Lovable Build Settings
In your Lovable project settings, set:

**Build Command:**
```bash
npm run build:unified
```

**Output Directory:**
```
dist
```

**Install Command:**
```bash
npm install
```

**Node Version:**
```
18.x or higher
```

### Step 3: Environment Variables
Add any required environment variables in Lovable's settings:
- `NODE_ENV=production`
- Any API keys (OpenAI, Anthropic, etc.)
- Database connection strings
- Supabase credentials

### Step 4: Trigger Build
1. Make a small change in Lovable UI (add a comment or space)
2. Save the change
3. This will trigger a fresh build
4. Check build logs for any errors

## Testing Locally Before Deployment

### Test Frontend Build
```bash
npm run build
npm run preview
```
Open http://localhost:4173 to verify

### Test Unified Build
```bash
npm run build:unified
```

Check that:
- `dist/` contains your frontend files
- `dist/api/` contains your backend files
- `dist/index.html` exists

### Test Production Build Locally
```bash
cd dist
npx serve .
```
Open http://localhost:3000

## Common Issues & Solutions

### Issue: "Preview has not been built yet"

**Solution 1: Force Rebuild**
1. Go to Lovable UI
2. Make a small edit (add a comment)
3. Save and wait for build to complete

**Solution 2: Check Build Logs**
1. Open Lovable build logs
2. Look for errors in npm install or build phase
3. Fix any dependency or syntax errors

**Solution 3: Simplify Build**
If unified build fails, temporarily use frontend-only:
```json
"build": "tsc && vite build"
```

### Issue: Build succeeds but shows blank page

**Solution:**
1. Open browser console (F12)
2. Check for JavaScript errors
3. Look for console logs:
   - "🚀 BitMind app starting..."
   - "✅ React app rendered successfully"

If you see errors about imports or modules:
- Clear Lovable cache
- Rebuild
- Check that all import paths use `@/` prefix or relative paths

### Issue: Backend API not working

**Solution:**
1. Verify backend files copied to `dist/api/`
2. Check that backend dependencies are in `dist/api/package.json`
3. Ensure Lovable supports Node.js backend (or use separate backend hosting)

### Issue: GitHub sync problems

**Solution:**
1. Disconnect and reconnect GitHub integration
2. Ensure .gitignore doesn't exclude necessary files
3. Verify all config files are committed

## Debugging Checklist

- [ ] `index.html` exists in project root
- [ ] `src/main.tsx` exists and imports App correctly
- [ ] `src/App.tsx` exists and exports default
- [ ] `package.json` has correct build script
- [ ] All dependencies are in `package.json` (not just devDependencies)
- [ ] `vite.config.ts` is valid
- [ ] No TypeScript errors (`npm run build` succeeds locally)
- [ ] Build produces files in `dist/` folder
- [ ] `dist/index.html` references correct asset paths

## Advanced: Alternative Build Configurations

### Frontend Only (Fastest)
If you want to deploy just the frontend for testing:

**package.json:**
```json
{
  "scripts": {
    "build": "tsc && vite build"
  }
}
```

**Lovable Build Command:**
```
npm run build
```

### Separate Backend Deployment
Consider deploying backend separately:
- Frontend: Lovable
- Backend: Railway, Render, or Heroku

Update frontend to point to external backend API URL.

## Support

If issues persist after following this guide:

1. **Check Lovable Documentation:**
   - https://docs.lovable.dev

2. **Review Build Logs:**
   - Look for specific error messages
   - Share logs with Lovable support

3. **Test Locally:**
   - Ensure `npm run build:unified` works on your machine
   - Compare local dist/ output with what Lovable expects

4. **Contact Lovable Support:**
   - Provide repository URL
   - Share build logs
   - Describe specific error messages

## Success Indicators

✅ Build completes without errors  
✅ Preview URL loads successfully  
✅ No blank screen or 404 errors  
✅ Console shows "BitMind app starting..." message  
✅ All routes work correctly  
✅ Stacks wallet connection works  

## Next Steps After Successful Deployment

1. Test all features in production
2. Set up custom domain (if needed)
3. Configure CDN and caching
4. Set up monitoring and error tracking
5. Deploy backend to production service
6. Update CORS settings for production URLs

---

**Built with ❤️ by the BitMind Team**

