# 📸 Images Setup Guide

## Two Options Available:

---

## ✅ **OPTION 1: Local Images (Recommended)**

### Why This is Better:
- ✅ You own and control all images
- ✅ Faster loading times
- ✅ Works offline
- ✅ No external dependencies
- ✅ Better for SEO

### Setup (3 Easy Steps):

#### Step 1: Export Your Images
Save your 6 product images from wherever they're stored

#### Step 2: Rename Them Exactly:
- `model-smart-radiant.jpg` - Model using purple device (no buttons)
- `device-smart-radiant.jpg` - Purple device only (no buttons)
- `model-lumilift.jpg` - Model using purple device (with buttons)
- `device-lumilift.jpg` - Purple device only (with buttons)
- `model-radiant-touch.jpg` - Model using white device
- `device-radiant-touch.jpg` - White device only

#### Step 3: Add to images/ Folder
Place all 6 renamed images in the `images/` folder

**That's it!** The website (index.html) is already configured to use them.

---

## 🌐 **OPTION 2: External URLs (Quick Start)**

### Why Use This:
- ⚡ No setup needed - works immediately
- 🔄 Images hosted externally
- ⚠️ Slower loading
- ⚠️ Depends on external server

### Setup:
**Already done!** Use `index-external-images.html` instead of `index.html`

Just rename it:
```bash
mv index-external-images.html index.html
```

Or in deployment settings, point to `index-external-images.html` as your entry file.

---

## 📋 Comparison Table:

| Feature | Local Images | External URLs |
|---------|--------------|---------------|
| **Setup Time** | 5 minutes | 0 minutes |
| **Loading Speed** | ⚡ Fast | 🐌 Slower |
| **Your Control** | ✅ Full | ❌ Limited |
| **Works Offline** | ✅ Yes | ❌ No |
| **SEO Benefit** | ✅ Better | ⚠️ Less |
| **Recommended** | ✅ Yes | For testing only |

---

## 🎨 Image Optimization Tips:

### Before Adding Images:

1. **Resize for web:**
   - Model shots: 1200px x 1600px
   - Product shots: 800px x 1000px

2. **Compress for speed:**
   - Use: https://tinypng.com/
   - Or: https://squoosh.app/
   - Target: Under 300KB per image

3. **Format:**
   - JPG for photos (smaller file size)
   - PNG if you need transparency
   - WebP for best compression (modern browsers)

---

## 🚀 Deployment Notes:

### For Render/Vercel/Netlify:
- Upload the entire `images/` folder with your files
- The relative path `images/filename.jpg` will work automatically

### For GitHub:
- Commit the `images/` folder with all 6 images
- Push to repository
- Deployment services will include them automatically

---

## 🔄 Switching Between Options:

### To Use Local Images:
1. Add your 6 images to `images/` folder
2. Use `index.html` (default)
3. Deploy

### To Use External URLs:
1. Rename `index-external-images.html` to `index.html`
2. Or delete `index.html` and rename the external version
3. Deploy

---

## ⚠️ Current File Structure:

```
harmony-balance-website/
├── images/
│   ├── README.md (instructions)
│   ├── model-smart-radiant.jpg (ADD THIS)
│   ├── device-smart-radiant.jpg (ADD THIS)
│   ├── model-lumilift.jpg (ADD THIS)
│   ├── device-lumilift.jpg (ADD THIS)
│   ├── model-radiant-touch.jpg (ADD THIS)
│   └── device-radiant-touch.jpg (ADD THIS)
├── index.html (uses LOCAL images)
├── index-external-images.html (uses EXTERNAL URLs)
├── styles.css
├── script.js
└── ...
```

---

## 🎯 Quick Decision Guide:

### Use **Local Images** if:
- ✅ You want best performance
- ✅ You're deploying to production
- ✅ You want full control
- ✅ You have 5 minutes to add images

### Use **External URLs** if:
- ✅ You want to test immediately
- ✅ You're just previewing
- ✅ You'll add proper images later
- ✅ You're in a rush

---

## 💡 My Recommendation:

**For testing:** Use external URLs (rename `index-external-images.html`)  
**For production:** Use local images (add files to `images/` folder)

---

## 🆘 Troubleshooting:

### Images not showing?
1. Check file names match exactly (case-sensitive!)
2. Check files are in `images/` folder
3. Check file extensions (.jpg not .jpeg)
4. Check browser console for errors (F12)

### External URLs not loading?
1. They require authentication
2. Switch to local images instead
3. Or save images from browser and add locally

---

## ✅ Checklist:

- [ ] Decide: Local images or External URLs?
- [ ] If local: Export 6 product images
- [ ] If local: Rename images exactly as specified
- [ ] If local: Place in `images/` folder
- [ ] If external: Rename `index-external-images.html` to `index.html`
- [ ] Test locally: `npm start` and check images load
- [ ] Deploy to GitHub + Render/Vercel/Netlify
- [ ] Test live site on mobile

---

**Need help? Check `images/README.md` for more details!**
