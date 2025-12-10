# Complete Setup Guide

## 🚀 Quick Start - All Projects

This repository contains **4 separate React projects**:
1. **Main Freelance Studio Site** (`/freelance-studio`)
2. **Coffee Shop Example** (`/freelance-studio/examples/coffee-shop`)
3. **Wellness Studio Example** (`/freelance-studio/examples/wellness-studio`)
4. **Creative Portfolio Example** (`/freelance-studio/examples/creative-portfolio`)

---

## 📋 Prerequisites

- **Node.js** 18+ installed ([download here](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Vercel account** (free) for deployment ([sign up](https://vercel.com))

---

## 🛠️ Installation & Development

### Main Freelance Studio Site

```bash
# Navigate to the main project
cd freelance-studio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit: `http://localhost:5173`

### Coffee Shop Example

```bash
# Navigate to coffee shop
cd freelance-studio/examples/coffee-shop

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit: `http://localhost:5173`

### Wellness Studio Example

```bash
# Navigate to wellness studio
cd freelance-studio/examples/wellness-studio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit: `http://localhost:5173`

### Creative Portfolio Example

```bash
# Navigate to creative portfolio
cd freelance-studio/examples/creative-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit: `http://localhost:5173`

---

## ✉️ FormSubmit Email Configuration

### For Main Site (`ContactForm.jsx`)

1. Open `freelance-studio/src/components/ContactForm.jsx`
2. Find line 27: `action="https://formsubmit.co/YOUR_EMAIL"`
3. Replace `YOUR_EMAIL` with your actual email address
4. **First submission only**: FormSubmit will send a confirmation email - click the link to activate

**Example:**
```jsx
<form action="https://formsubmit.co/youremail@example.com" method="POST">
```

### How FormSubmit Works:
- ✅ **Free forever** - no API keys needed
- ✅ **No backend required** - pure frontend solution
- ✅ **Spam protection** - built-in captcha options
- ✅ **Custom templates** - formatted email delivery
- ✅ **Redirect support** - custom thank you pages

---

## 🎨 Customization Guide

### Color Scheme

The main site uses **forest green + gold**. To modify:

**File:** `freelance-studio/tailwind.config.js`

```javascript
colors: {
  primary: {
    500: '#2d5016',  // Main forest green
    // Adjust other shades as needed
  },
  accent: {
    400: '#fbbf24',  // Golden yellow
  }
}
```

### Content Updates

**Services:** Edit `src/data/services.js`
**Pricing:** Edit `src/data/pricing.js`
**Portfolio:** Edit `src/data/portfolio.js`

### Your Information

Update these files with your details:
- `src/components/Hero.jsx` - Your headline/tagline
- `src/components/ContactForm.jsx` - Email address
- `src/components/Footer.jsx` - Copyright, links
- `src/data/portfolio.js` - Live URLs for example projects

---

## 🚢 Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project folder
cd freelance-studio

# Deploy
vercel

# Follow prompts:
# - Link to Vercel account
# - Choose project name
# - Confirm settings
```

### Option 2: Vercel Dashboard

1. Push code to **GitHub**
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Select the project folder (e.g., `freelance-studio`)
5. Click **Deploy**

### Deploy All 4 Projects:

Each project needs its own Vercel deployment:

```bash
# Main site
cd freelance-studio
vercel

# Coffee shop
cd examples/coffee-shop
vercel

# Wellness studio
cd examples/wellness-studio
vercel

# Creative portfolio
cd examples/creative-portfolio
vercel
```

**Update Portfolio URLs:**
After deploying examples, update `src/data/portfolio.js` with live URLs.

---

## 📁 Project Structure Reference

```
freelance-studio/
├── src/
│   ├── components/       # Reusable UI components
│   ├── data/            # Content configuration files
│   ├── utils/           # Helper functions
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind customization
└── vite.config.js       # Vite build config
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or start on different port
npm run dev -- --port 3000
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check for errors
npm run build

# Preview production build
npm run preview
```

---

## ⚡ Performance Tips

- Images: Use WebP format, lazy loading
- Fonts: Preload critical fonts in `index.html`
- Code splitting: Vite handles this automatically
- Analytics: Add Google Analytics in production

---

## 📞 Support & Resources

- **Vite Docs:** https://vitejs.dev
- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Framer Motion:** https://www.framer.com/motion
- **FormSubmit:** https://formsubmit.co
- **Vercel Docs:** https://vercel.com/docs

---

## 🎯 Next Steps

1. ✅ Install dependencies for all projects
2. ✅ Update FormSubmit email in ContactForm
3. ✅ Customize colors and content
4. ✅ Test locally with `npm run dev`
5. ✅ Deploy to Vercel
6. ✅ Update portfolio URLs with live links
7. ✅ Share your new sites! 🚀

---

**Built with ❤️ using React + Vite + Tailwind + Framer Motion**
