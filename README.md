# 🌲 Freelance Studio - Complete Project Suite

## 📦 What's Included

This repository contains **4 production-ready React websites**:

### 1. **Main Freelance Studio Site**
Your primary business website showcasing services, pricing, and portfolio.
- 📍 Location: `/freelance-studio`
- 🎨 Colors: Forest green (#2d5016) + Golden yellow (#fbbf24)
- ✨ Features: Hero, Services, Pricing, Portfolio, Contact Form

### 2. **Coffee Shop Example**
A cozy one-page site for local cafes and coffee shops.
- 📍 Location: `/freelance-studio/examples/coffee-shop`
- 🎨 Colors: Coffee browns, cream, warm golds
- ✨ Features: Menu, Gallery, Hours, Location

### 3. **Wellness Studio Example**
Calming website for holistic practitioners and wellness professionals.
- 📍 Location: `/freelance-studio/examples/wellness-studio`
- 🎨 Colors: Sage green, lavender, natural tones
- ✨ Features: Services, About, Testimonials, Booking

### 4. **Creative Portfolio Example**
Modern portfolio for photographers, designers, and creatives.
- 📍 Location: `/freelance-studio/examples/creative-portfolio`
- 🎨 Colors: Dark theme with vibrant accents
- ✨ Features: Filterable gallery, Lightbox, About, Testimonials

---

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies

Each project needs its dependencies installed separately:

```bash
# Main site
cd freelance-studio
npm install

# Coffee shop
cd examples/coffee-shop
npm install

# Wellness studio
cd examples/wellness-studio
npm install

# Creative portfolio
cd examples/creative-portfolio
npm install
```

### Step 2: Configure Email

Update the contact form in the main site:

**File:** `freelance-studio/src/components/ContactForm.jsx`  
**Line 27:** Replace `YOUR_EMAIL` with your actual email

```jsx
<form action="https://formsubmit.co/your@email.com" method="POST">
```

### Step 3: Run Locally

```bash
# Navigate to any project
cd freelance-studio

# Start dev server
npm run dev
```

Visit `http://localhost:5173` in your browser!

---

## 🌐 Deploy to Vercel

### Deploy Main Site

```bash
cd freelance-studio
npm install -g vercel  # Install Vercel CLI once
vercel                  # Deploy
```

### Deploy Example Sites

```bash
# Deploy each example
cd examples/coffee-shop
vercel

cd ../wellness-studio
vercel

cd ../creative-portfolio
vercel
```

**Important:** After deploying examples, update the portfolio URLs in:
`freelance-studio/src/data/portfolio.js`

---

## 🎨 Customization Checklist

### Main Site

- [ ] Update email in `ContactForm.jsx` (line 27)
- [ ] Edit services in `src/data/services.js`
- [ ] Modify pricing in `src/data/pricing.js`
- [ ] Update portfolio URLs in `src/data/portfolio.js`
- [ ] Customize hero text in `src/components/Hero.jsx`
- [ ] Change footer info in `src/components/Footer.jsx`

### Color Adjustments

Edit `tailwind.config.js` in each project:

**Main Site:**
```javascript
primary: { 500: '#2d5016' }  // Forest green
accent: { 400: '#fbbf24' }   // Gold
```

---

## ✨ Key Features

### All Projects Include:
- ✅ **Responsive Design** - Mobile, tablet, desktop optimized
- ✅ **Framer Motion** - Smooth scroll animations
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **Vite Build** - Lightning-fast development
- ✅ **SEO Ready** - Meta tags, semantic HTML
- ✅ **Production Ready** - Optimized builds

### Main Site Specific:
- ✅ **FormSubmit** - No-backend contact form
- ✅ **Smooth Scroll** - React Scroll navigation
- ✅ **Dynamic Content** - Separate data files
- ✅ **Portfolio Links** - Live example deployments

---

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool (faster than CRA)
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **FormSubmit** - Email service (free)
- **Vercel** - Hosting platform (free tier)

---

## 📖 Documentation

- **Detailed Setup:** See `SETUP.md`
- **Coffee Shop:** See `examples/coffee-shop/README.md`
- **Wellness Studio:** See `examples/wellness-studio/README.md`
- **Creative Portfolio:** See `examples/creative-portfolio/README.md`

---

## 🚀 Quick Commands Reference

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview build

# Deployment
vercel              # Deploy to Vercel
vercel --prod       # Deploy to production
```

---

## ✅ Final Checklist

Before launching:

- [ ] Install all dependencies (`npm install` in each folder)
- [ ] Update FormSubmit email address
- [ ] Customize all content (services, pricing, about)
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Deploy main site to Vercel
- [ ] Deploy all 3 example sites
- [ ] Update portfolio URLs in main site
- [ ] Test all links and navigation
- [ ] Share your new sites! 🎉

---

**Ready to launch? Let's go! 🚀**

Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion.

© 2025 - All rights reserved
