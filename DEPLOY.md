# 🚀 Deployment Guide - Harmony & Balance

## Step 1: Upload to GitHub

1. Go to https://github.com and sign in
2. Click "New Repository"
3. Name it: `harmony-balance-website`
4. Make it Private (or Public if you want)
5. Click "Create Repository"

6. Upload files:
   - Click "uploading an existing file"
   - Drag and drop all files from the ZIP
   - Commit the files

## Step 2: Deploy to Render (FREE)

### Option A: Quick Deploy
1. Go to https://render.com
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect your `harmony-balance-website` repo
5. Settings:
   - **Name**: `harmony-balance`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free
6. Click "Create Web Service"
7. Wait 2-3 minutes for deployment
8. Your site will be live at: `https://harmony-balance.onrender.com`

### Option B: Deploy Button (Even Easier!)
1. Add this to your GitHub README:
   ```markdown
   [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)
   ```
2. Click the button and follow prompts!

## Step 3: Test Your Website

Once deployed, test with UTM parameters:
```
https://your-site.com/?utm_source=tjmaxx&utm_medium=package&utm_campaign=launch
```

## Step 4: Create QR Codes for Packaging

1. Go to https://www.qr-code-generator.com/
2. Enter your URL with UTM: `https://your-site.com/?utm_source=tjmaxx&utm_medium=qr&utm_campaign=instore`
3. Download high-res QR code
4. Add to packaging design

## Viewing Captured Emails

1. Open your live website
2. Open browser console (F12)
3. Type: `viewCapturedEmails()`
4. Export CSV: `exportEmailsCSV()`

## Custom Domain (Optional)

### On Render:
1. Go to your service settings
2. Click "Custom Domain"
3. Add your domain: `www.harmonyandbalance.com`
4. Follow DNS instructions

### DNS Settings (at your domain provider):
```
Type: CNAME
Name: www
Value: harmony-balance.onrender.com
```

## Alternative: Deploy to Vercel (Also FREE)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Import Project"
4. Select your repo
5. Click "Deploy"
6. Done! Live in 30 seconds

## Alternative: Deploy to Netlify (Also FREE)

1. Go to https://netlify.com
2. Drag and drop your folder
3. Done! Instant deployment

## Troubleshooting

### Site not loading?
- Check Render logs for errors
- Verify `package.json` is uploaded
- Make sure port is set correctly

### Emails not saving?
- Open console and check for errors
- Try: `localStorage.getItem('harmony_balance_emails')`

### Need help?
- Check README.md for more details
- Render has great documentation

---

## 🎯 Next Steps After Deployment

1. ✅ Test on mobile device
2. ✅ Create QR codes with UTM tracking
3. ✅ Add QR to packaging mockups
4. ✅ Test in-store scanning experience
5. ✅ Move to Phase 2: AR Integration

**Your website is now live and ready for TJ Maxx! 🎉**
