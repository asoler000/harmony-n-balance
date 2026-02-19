# Harmony & Balance - Website MVP

**Ancient Asian techniques meet science for anti-aging precision**

## 🌟 Features

- ✨ Animated hero section with product introduction
- 📱 Full responsive design (mobile-first for in-store scanning)
- 💌 Email capture with UTM tracking
- 🎨 Luxury mauve/rose gold aesthetic
- 🔄 Smooth animations and transitions
- 📊 Built-in analytics (localStorage for MVP)

## 🚀 Quick Start

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open in browser:
```
http://localhost:3000
```

## 📦 Project Structure

```
harmony-balance-website/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript functionality
├── server.js           # Express server
├── package.json        # Dependencies
└── README.md          # This file
```

## 🎨 Design System

### Color Palette
- Primary Mauve: `#B5989E`
- Secondary Cream: `#E8DDD3`
- Accent Rose: `#D4A5A5`
- Rose Gold: `#B76E79`
- Background Light: `#FAF7F5`
- Text Dark: `#3A2E2E`

### Typography
- Display: Playfair Display (serif)
- Body: Inter (sans-serif)

## 📊 Admin Functions

Open browser console and use these commands:

### View captured emails:
```javascript
viewCapturedEmails()
```

### Export emails to CSV:
```javascript
exportEmailsCSV()
```

## 🔗 UTM Tracking

The website automatically tracks UTM parameters. Test with:

```
http://localhost:3000/?utm_source=tjmaxx&utm_medium=qr&utm_campaign=launch
```

## 🚀 Deployment Options

### Option 1: Render (Recommended)

1. Push to GitHub
2. Connect Render to your repo
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Deploy!

### Option 2: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Option 3: Netlify

1. Drag and drop the folder to Netlify
2. Or connect GitHub repo

## 📱 Mobile Testing

For in-store experience testing:
1. Deploy to production
2. Create QR code linking to: `https://your-domain.com/?utm_source=tjmaxx&utm_medium=package&utm_campaign=instore`
3. Test scanning on mobile devices

## 🎯 Phase 2: AR Integration

Coming next:
- WebXR image tracking
- 15-30 second product videos
- Package scan triggers AR experience
- No app download required

## 📝 Notes

- Email data currently stored in localStorage (MVP)
- Phase 2 will connect to PostgreSQL database
- UTM tracking ready for analytics integration
- All images loaded from provided URLs

## 🔐 Legal

For cosmetic use only. This product is not a medical device and is not intended to diagnose, treat, cure, mitigate, or prevent any disease or medical condition.

---

**Built with ❤️ for luxury beauty technology**
