# Complete Sanity CMS Setup Guide

Everything you need to set up Sanity CMS for Cherry and manage your content through images, text, and videos.

## Summary of What We've Built For You

Your Cherry project now has **complete Sanity CMS integration** with:

### Content Management Features
✅ **Products** - Manage plant inventory with images, prices, descriptions, videos
✅ **Reviews** - Display customer testimonials with avatars and 1-5 star ratings  
✅ **Hero Section** - Update banner content, images, headlines without code
✅ **Videos** - Upload MP4/WebM videos or add YouTube/Vimeo URLs
✅ **Settings** - Global site configuration (newsletter, social links, footer)

### Media Management
✅ **Image Management** - Upload, optimize, and crop images with hotspot
✅ **Video Management** - Upload videos directly or reference external URLs
✅ **Gallery Support** - Multiple images per product
✅ **Auto Optimization** - All images automatically optimized

### Developer Features
✅ **12+ Query Functions** - Ready-to-use functions in `lib/sanity.client.ts`
✅ **Image URL Generation** - Automatic image URL creation with `urlFor()`
✅ **Automatic Data Fetching** - Components fetch from Sanity automatically
✅ **Zero-Config Setup** - Everything configured and ready to use

---

## What You Need From Sanity (3 Keys)

To get this working, you need **3 pieces of information** from Sanity:

### Key 1: Project ID
- **What it is**: Your unique project identifier
- **Format**: 20-character code (e.g., `abc123def456ghijkl`)
- **Where to get it**: https://sanity.io > Your Project > Settings > API > "Project ID"
- **Security**: PUBLIC (safe to share)

### Key 2: Dataset
- **What it is**: Name of where your content lives
- **Standard value**: `production`
- **Format**: Usually `production` or `development`
- **Where to get it**: https://sanity.io > Your Project > Settings > API > "Dataset"
- **Security**: PUBLIC (safe to share)

### Key 3: API Token
- **What it is**: Secret authentication key for your app
- **Format**: Long string starting with `sk_production_`
- **Where to get it**: https://sanity.io > Your Project > Settings > API > Tokens > "Add API token"
- **Permissions**: Set to **Editor** (allows read/write)
- **Security**: PRIVATE (keep secret!)

---

## Step-by-Step Setup

### Step 1: Go to Sanity.io and Create a Project

1. Go to **https://www.sanity.io**
2. Click "Get Started Free" or "Sign In"
3. Create account or log in
4. Click "Create Project"
5. Fill in:
   - **Project name**: "Cherry" (or your choice)
   - **Use case**: "Website"
6. Select template: **"Blank"**
7. Select dataset: **"production"**
8. Click "Create"
9. **SAVE YOUR PROJECT ID** (you'll need it)

### Step 2: Generate an API Token

1. In Sanity dashboard, go to **Settings** (gear icon, top right)
2. Click **"API"**
3. Scroll to **"Tokens"** section
4. Click **"Add API token"**
5. Fill in:
   - **Token name**: `Cherry Frontend`
   - **Permissions**: Choose **"Editor"**
6. Click **"Save"**
7. **COPY AND SAVE THE TOKEN** immediately (you won't see it again)

### Step 3: Add Keys to Your App

1. In your project root, create or update `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your three keys:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-api-token
   ```

3. Save the file (it's in `.gitignore` so won't be public)

### Step 4: Install and Run

```bash
# Install Sanity packages
pnpm install

# Start development server
pnpm dev
```

Visit **http://localhost:3000** - your app is now connected to Sanity! ✅

---

## Using Sanity to Manage Your Content

### Adding Your First Product

1. Go to your **Sanity dashboard** (https://sanity.io > Your Project)
2. Click **"Products"** in the left sidebar
3. Click **"Create"**
4. Fill in the fields:
   ```
   Product Name: "Monstera Deliciosa"
   Emoji: 🪴 (or 🌿)
   Price: 500
   Description: "Beautiful leaf pattern and easy to care for"
   Category: "Indoor Plants"
   ```
5. **Click the "Image" field** and upload a product photo
6. Click **"Publish"** (top right)
7. **Refresh your site** at http://localhost:3000
8. Your product appears on the site! 🎉

### Adding Customer Reviews

1. In Sanity, click **"Customer Reviews"**
2. Click **"Create"**
3. Fill in:
   ```
   Customer Name: "John Smith"
   Rating: 5 (out of 5)
   Comment: "Amazing plant! Very healthy and beautiful."
   Avatar: Upload customer photo
   ```
4. Click **"Publish"**
5. Review appears on your site instantly!

### Uploading Product Videos

1. Click **"Videos"** in Sanity
2. Click **"Create"**
3. Choose how to add video:
   - **Upload file**: MP4 or WebM video
   - **Video URL**: YouTube or Vimeo link
4. Fill in:
   ```
   Title: "Monstera Care Guide"
   Video Type: "Care Guide"
   Upload thumbnail image
   ```
5. Click **"Publish"**
6. Link it to a product in the product details

### Updating Hero Banner

1. Click **"Hero Section"** in Sanity
2. Click to edit the existing entry
3. Change:
   - Main headline
   - Description text
   - Hero images
   - CTA button text
4. Click **"Publish"**
5. Changes appear on your site immediately!

---

## File Structure Created For You

```
your-project/
├── sanity/
│   └── schemaTypes/
│       ├── product.ts         (Product schema)
│       ├── review.ts          (Review schema)
│       ├── heroSection.ts     (Hero schema)
│       ├── video.ts           (Video schema)
│       ├── settings.ts        (Settings schema)
│       └── index.ts           (Exports all schemas)
├── lib/
│   └── sanity.client.ts       (12+ query functions)
├── sanity.config.ts           (Sanity configuration)
├── .env.example               (Template for env vars)
├── .env.local                 (Your secret keys - create this)
└── [Documentation files]
    ├── SANITY_SETUP.md
    ├── SANITY_API_KEYS.md
    ├── SANITY_INTEGRATION.md
    ├── QUICK_START_SANITY.md
    ├── SANITY_CHECKLIST.md
    └── SANITY_COMPLETE_SETUP.md (this file)
```

---

## Query Functions Available

All in `lib/sanity.client.ts` - use these in your components:

```typescript
// Get all products
const products = await getProducts();

// Get single product by slug
const product = await getProduct('monstera-deliciosa');

// Get featured products only
const featured = await getFeaturedProducts(9);

// Get recent reviews
const reviews = await getReviews(3);

// Get reviews for specific product
const productReviews = await getProductReviews(productId);

// Get hero banner content
const hero = await getHeroSection();

// Get all videos
const videos = await getVideos();

// Get featured videos
const featured = await getFeaturedVideos(3);

// Get global settings
const settings = await getSettings();

// Generate image URLs
const imageUrl = urlFor(product.image).width(500).url();
```

---

## How Content Flows to Your Website

```
┌─────────────────────┐
│  Sanity Dashboard   │
│  (Edit Content)     │
└──────────┬──────────┘
           │ Publish
           ▼
┌─────────────────────┐
│   Sanity Database   │
│  (Store Content)    │
└──────────┬──────────┘
           │ API Requests
           ▼
┌─────────────────────┐
│  Your App (Next.js) │
│  lib/sanity.client  │
└──────────┬──────────┘
           │ Fetch Data
           ▼
┌─────────────────────┐
│ React Components    │
│ Display Content     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Your Website        │
│ (Live on Browser)   │
└─────────────────────┘
```

---

## Content Types & Fields

### Products (10+ fields)
- Name, slug, emoji
- Price (number)
- Short & full descriptions
- Category (dropdown)
- Main image + gallery
- Featured flag
- In stock status
- Care instructions
- Related video

### Reviews (7 fields)
- Customer name
- 1-5 star rating
- Review comment
- Avatar image
- Product link
- Verified purchase
- Publish date

### Hero Section (8 fields)
- Main headline
- Subtitle
- Description
- CTA button texts
- 3 images
- Featured product

### Videos (9 fields)
- Title, description
- Upload file OR URL
- Thumbnail image
- Video type
- Related product
- Featured flag
- Duration

### Settings (7 fields)
- Site name & description
- Logo & favicon
- Newsletter heading
- Footer text
- Social media links

---

## Testing Your Setup

### Test 1: Can You Connect?
1. Start your app: `pnpm dev`
2. Open http://localhost:3000
3. No "projectId is required" error? ✅

### Test 2: Can You Fetch Data?
1. Add a product in Sanity dashboard
2. Click "Publish"
3. Refresh your website
4. Product appears? ✅

### Test 3: Do Images Work?
1. Upload image to product in Sanity
2. Check if image displays on site
3. Image quality good? ✅

### Test 4: Do Videos Work?
1. Create a video in Sanity (YouTube URL or upload)
2. Publish it
3. Can you play it? ✅

---

## Deployment to Vercel

When you're ready to go live:

1. Push your code to GitHub
2. Go to **vercel.com**
3. Click "Import Project"
4. Connect your GitHub repo
5. In "Environment Variables" section, add:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID = your-project-id
   NEXT_PUBLIC_SANITY_DATASET = production
   SANITY_API_TOKEN = your-api-token
   ```
6. Click "Deploy"
7. Your live site is now connected to Sanity! 🚀

**Update content in Sanity → Your site updates automatically!**

---

## Documentation Files

We've created 5 documentation files to help you:

| File | Purpose | Read When |
|------|---------|-----------|
| **QUICK_START_SANITY.md** | 5-minute overview | First, for quick setup |
| **SANITY_API_KEYS.md** | API key reference | Need clarification on keys |
| **SANITY_SETUP.md** | Detailed step-by-step | Want detailed instructions |
| **SANITY_INTEGRATION.md** | Complete technical guide | Want full technical details |
| **SANITY_CHECKLIST.md** | Setup verification | Checking if setup is complete |

---

## Troubleshooting

### Problem: "Cannot read properties of undefined"
**Solution**: Missing environment variables
- Check `.env.local` has all 3 keys
- Restart dev server after adding keys
- Refresh browser

### Problem: Content not showing
**Solution**: Content not published
- Go to Sanity dashboard
- Check content has "Publish" button clicked
- Drafts don't show on site
- Refresh your site after publishing

### Problem: Images not loading
**Solution**: Image issues
- Verify image uploaded to Sanity
- Check hotspot is set correctly
- Clear browser cache
- Try different image format

### Problem: "Unauthorized" error
**Solution**: API token issue
- Verify token has "Editor" permissions
- Token might be expired
- Generate new token
- Update `.env.local`

---

## Security Best Practices

### ✅ DO:
- Keep API token in `.env.local` (not in code)
- Set API token permissions to "Editor" only
- Regenerate token if accidentally exposed
- Use HTTPS for your live site

### ❌ DON'T:
- Commit `.env.local` to GitHub
- Share your API token
- Post token in chat or public places
- Use old/expired tokens

---

## Next Steps Checklist

- [ ] Create Sanity account at sanity.io
- [ ] Create a Sanity project
- [ ] Generate API token
- [ ] Add keys to `.env.local`
- [ ] Run `pnpm install && pnpm dev`
- [ ] Create first product
- [ ] Verify it appears on your site
- [ ] Create a few reviews
- [ ] Upload a product video
- [ ] Update hero section content
- [ ] Deploy to Vercel
- [ ] Test live site

---

## Support Resources

Need help? Check these resources:

- **Sanity Documentation**: https://www.sanity.io/docs
- **Next.js Integration Guide**: https://www.sanity.io/guides/sanity-nextjs-integration
- **GROQ Query Language**: https://www.sanity.io/docs/groq
- **Image URL Builder**: https://www.sanity.io/docs/image-url
- **Sanity Support**: https://www.sanity.io/help

---

## Summary

You now have a **complete, production-ready CMS** for your Cherry plant shop:

✅ **5 Content Types** - Products, Reviews, Hero, Videos, Settings
✅ **Full Media Support** - Images, videos, galleries
✅ **12+ Query Functions** - Ready to use in components
✅ **Automatic Data Sync** - Content updates instantly
✅ **Secure Setup** - API keys properly protected
✅ **Production Ready** - Works on Vercel
✅ **Complete Docs** - 5 comprehensive guides

**You just need 3 keys from Sanity to make it all work!**

---

## Your Setup Credentials (Save This!)

```
Project Name: _________________________
Project ID: _________________________
Dataset: production
API Token: _________________________
Sanity Dashboard: https://sanity.io
Deployed URL: _________________________
```

---

**Happy selling! Your Cherry plant shop is now fully connected to Sanity CMS! 🌿✨**

