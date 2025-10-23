# 🚀 DEPLOYMENT CHECKLIST - AutoDetailGeeks SEO Launch

## ✅ Pre-Launch Checklist (CRITICAL - Do Before Going Live)

### 1. Images (HIGHEST PRIORITY)
- [ ] Create og-image.jpg (1200x630px) for social sharing
  - Use Canva or Photoshop
  - Include your logo, tagline, and a car image
  - Save to `/public/og-image.jpg`

- [ ] Add 15 service images to `/public/images/`:
  - [ ] auto-detailing-edmonton.jpg
  - [ ] ceramic-coating-edmonton.jpg
  - [ ] mobile-detailing-edmonton.jpg
  - [ ] interior-detailing-edmonton.jpg
  - [ ] paint-correction-edmonton.jpg
  - [ ] headlight-restoration-edmonton.jpg
  - [ ] car-waxing-edmonton.jpg
  - [ ] engine-detailing-edmonton.jpg
  - [ ] steam-cleaning-edmonton.jpg
  - [ ] seat-shampooing-edmonton.jpg
  - [ ] clay-bar-treatment-edmonton.jpg
  - [ ] wheel-washing-edmonton.jpg
  - [ ] full-body-wash-edmonton.jpg
  - [ ] odor-removal-edmonton.jpg

- [ ] Optimize all images:
  - Use https://tinypng.com or https://squoosh.app
  - Target: <200KB per image
  - Format: JPG or WebP
  - Dimensions: 1920x1080px (service images)

### 2. Update Contact Information (IF DIFFERENT)
If your actual business info differs from what's in the code, update:

- [ ] Phone number: Currently `+14313746004` in:
  - `/src/components/Header.tsx`
  - `/src/components/SEO.tsx`
  - All service pages in `/public/services/`

- [ ] Address: Currently `1104 75 St NW, Edmonton, AB T6K 2S2`
  - Update if different in all schema markup

- [ ] Email: Currently `info@autodetailgeeks.ca`
  - Update in Organization schema

- [ ] Social Media Links:
  - Update placeholders in schema (Facebook, Instagram, Twitter)
  - Currently: `https://www.facebook.com/autodetailgeeks`

- [ ] Google Maps CID:
  - Replace `cid=1234567890` with your actual Google Maps CID
  - Find it by visiting your Google Business Profile

### 3. Build & Test Locally
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Test all pages:
- http://localhost:3000/
- http://localhost:3000/services
- http://localhost:3000/blog
- http://localhost:3000/blog/winter-car-detailing-edmonton-guide
- http://localhost:3000/blog/ceramic-coating-vs-wax-edmonton
- http://localhost:3000/contact

# Build for production
npm run build

# Preview production build
npm run preview
```

### 4. SEO Testing Tools
Run these tests BEFORE deploying:

- [ ] **Google Rich Results Test**
  - URL: https://search.google.com/test/rich-results
  - Test: Homepage, 2-3 service pages, 1 blog post
  - Fix any errors shown

- [ ] **Schema Markup Validator**
  - URL: https://validator.schema.org
  - Paste your HTML and validate
  - Ensure no warnings or errors

- [ ] **Mobile-Friendly Test**
  - URL: https://search.google.com/test/mobile-friendly
  - Test all major pages
  - Score should be 100/100

- [ ] **PageSpeed Insights**
  - URL: https://pagespeed.web.dev
  - Test homepage
  - Target: 90+ on all metrics

### 5. Remove Meta Keywords Tag (Optional)
Meta keywords are outdated. Consider removing from service pages:
```html
<meta name="keywords" content="...">
```

---

## 🌐 Launch Day Tasks

### 1. Deploy to Production
```bash
# Build optimized production version
npm run build

# Deploy dist/ folder to your host (Vercel, Netlify, etc.)
# OR if using Vercel:
vercel --prod
```

### 2. Verify Live Site
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] No console errors
- [ ] Links work (internal & external)
- [ ] Phone number is clickable
- [ ] Contact form submits

### 3. Google Search Console Setup
- [ ] Go to https://search.google.com/search-console
- [ ] Add property: `https://www.autodetailgeeks.ca`
- [ ] Verify ownership (HTML file or DNS)
- [ ] Submit sitemap: `https://www.autodetailgeeks.ca/sitemap.xml`
- [ ] Submit: `https://www.autodetailgeeks.ca/sitemap-blog.xml`
- [ ] Request indexing for:
  - Homepage
  - Top 5 service pages
  - Top 3 blog posts

### 4. Bing Webmaster Tools
- [ ] Go to https://www.bing.com/webmasters
- [ ] Add site: `https://www.autodetailgeeks.ca`
- [ ] Verify ownership
- [ ] Submit same sitemaps

### 5. Google Business Profile (CRITICAL for Local SEO)
- [ ] Create/claim at https://business.google.com
- [ ] Verify business (postcard, phone, or instant if eligible)
- [ ] Add photos (10+ minimum):
  - Logo
  - Storefront
  - Team members
  - Before/after car photos
  - Interior workspace
- [ ] Fill out ALL sections:
  - Business hours
  - Service areas (Edmonton, Sherwood Park, St. Albert, Leduc, Beaumont)
  - Services list
  - Attributes (wheelchair accessible, free Wi-Fi, etc.)
- [ ] Add products/services with pricing
- [ ] Request reviews from past customers

### 6. Google Analytics 4
- [ ] Create GA4 property at https://analytics.google.com
- [ ] Copy measurement ID (G-XXXXXXXXXX)
- [ ] Add to your site (Google Tag Manager or directly)
- [ ] Set up goals:
  - Contact form submission
  - Phone number click
  - Service page views
  - Blog engagement

### 7. Local Citations & Directories
Submit your NAP (Name, Address, Phone) to:

- [ ] **Yelp Edmonton**
  - URL: https://biz.yelp.com
  - Create business listing
  - Add photos and description

- [ ] **Yellow Pages Canada**
  - URL: https://www.yellowpages.ca/bus/get-listed/

- [ ] **BBB Alberta**
  - URL: https://www.bbb.org
  - Get accredited if possible

- [ ] **Facebook Business Page**
  - Create page with same NAP
  - Link to website

- [ ] **Edmonton Chamber of Commerce**
  - If member, get listed in directory

- [ ] **Local Edmonton Directories:**
  - Edmonton.ca business directory
  - Yell.com
  - Cylex Canada
  - Hotfrog Canada

### 8. Review Generation
Request reviews from 10+ past happy customers:

- [ ] Send personalized emails/texts
- [ ] Include direct Google review link
- [ ] Offer small incentive (5% off next service)
- [ ] Target: 15-20 Google reviews in first month

---

## 📊 Week 1 Monitoring

### Daily Checks:
- [ ] Google Search Console for crawl errors
- [ ] Google Analytics for traffic
- [ ] Check for broken links
- [ ] Monitor search rankings (manually)

### Tools to Use:
- **Google Search Console** - Indexing status, clicks, impressions
- **Google Analytics** - Traffic, bounce rate, conversions
- **Ahrefs/SEMrush (free trial)** - Keyword rankings
- **Ubersuggest (free)** - Basic SEO metrics

### Week 1 Expected Results:
- 5-10 pages indexed by Google
- Blog posts start appearing in search
- Local pack visibility (if GBP verified)
- First organic visitors from long-tail keywords

---

## 🎯 Month 1 Goals

### Content:
- [ ] Publish 2-4 more blog posts
- [ ] Update homepage with fresh content
- [ ] Add customer testimonials (real ones)

### Technical:
- [ ] Fix any crawl errors
- [ ] Improve Core Web Vitals if needed
- [ ] Add missing images

### Off-Page:
- [ ] Build 5-10 local citations
- [ ] Get 10+ Google reviews
- [ ] Share blog posts on social media

### Rankings Target:
- Top 20 for "auto detailing Edmonton"
- Top 10 for 3-5 long-tail keywords
- Appear in local pack for "car detailing near me"

---

## 🚨 Common Issues & Fixes

### Issue: Pages Not Indexing
**Fix:**
- Check robots.txt allows crawling
- Submit URL in Google Search Console
- Ensure sitemap is accessible
- Add internal links to new pages

### Issue: Low Rankings
**Fix:**
- Takes 4-8 weeks to rank
- Build more backlinks
- Get more reviews
- Add more content

### Issue: No Traffic from SEO
**Fix:**
- Verify Google Analytics is installed
- Check Search Console for indexing
- May need 30-60 days for results
- Continue publishing content weekly

### Issue: Schema Errors
**Fix:**
- Test at https://search.google.com/test/rich-results
- Fix syntax errors in JSON-LD
- Validate required fields
- Redeploy and request re-crawl

---

## 📞 Emergency Contacts

### If Something Breaks:
1. Check browser console for JavaScript errors
2. Verify build succeeded (`npm run build`)
3. Test locally first (`npm run dev`)
4. Check hosting provider logs
5. Revert to previous working version if needed

### SEO Help:
- Google Search Console Help: https://support.google.com/webmasters
- Schema.org Documentation: https://schema.org
- Local SEO Guide: https://moz.com/learn/seo/local

---

## ✅ Post-Launch Success Checklist

### Week 2:
- [ ] 20+ pages indexed
- [ ] 50+ organic impressions in Search Console
- [ ] 1-5 organic clicks/day
- [ ] Google Business Profile verified

### Month 1:
- [ ] 100+ organic visitors
- [ ] 5-10 leads from SEO
- [ ] Top 20 for primary keyword
- [ ] 15+ Google reviews

### Month 3:
- [ ] 500+ organic visitors
- [ ] 20-30 leads from SEO
- [ ] Top 10 for primary keyword
- [ ] Local pack top 3

### Month 6:
- [ ] 2,000+ organic visitors
- [ ] 50+ leads from SEO
- [ ] #1-3 for multiple keywords
- [ ] Market leader in Edmonton

---

## 🎉 YOU'RE READY!

Everything is built and optimized. Just add images, deploy, and watch your rankings soar!

**Remember:**
- SEO takes 30-90 days for big results
- Keep publishing content weekly
- Get reviews consistently
- Monitor and adjust

**Good luck dominating Edmonton! 🚀**
