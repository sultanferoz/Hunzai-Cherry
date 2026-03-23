# 🌿 Sanity CMS Setup for Cherry

Your Cherry plant e-commerce app is now fully integrated with **Sanity CMS**. This means you can manage all your content (products, images, videos, reviews) without touching code!

## What's Ready For You

✅ **5 Content Types** - Products, Reviews, Hero, Videos, Settings  
✅ **Image Management** - Upload and optimize images  
✅ **Video Support** - Upload MP4/WebM or use YouTube/Vimeo URLs  
✅ **Automatic Integration** - Components fetch content automatically  
✅ **Query Functions** - 12+ ready-to-use functions  
✅ **Production Ready** - Works on Vercel  

## Get Started in 3 Steps

### Step 1: Get Your 3 Keys from Sanity

Go to **https://sanity.io** and:

1. Create a project called "Cherry"
2. Copy your **Project ID** (Settings > API)
3. Generate an **API Token** (Settings > API > Tokens)
4. Your **Dataset** is `production`

### Step 2: Add Keys to Your App

Create `.env.local` in your project root:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

### Step 3: Start Your App

```bash
pnpm install
pnpm dev
```

Visit **http://localhost:3000** - Done! ✅

## Documentation

Choose what you need:

| Guide | Purpose | Time |
|-------|---------|------|
| **QUICK_START_SANITY.md** | Get running fast | 5 min |
| **SANITY_API_KEYS.md** | Understand the 3 keys | 10 min |
| **SANITY_SETUP.md** | Detailed step-by-step | 30 min |
| **SANITY_CHECKLIST.md** | Verify setup is correct | 15 min |
| **SANITY_COMPLETE_SETUP.md** | Comprehensive reference | 45 min |

## Manage Your Content

### Add a Product
1. Go to Sanity dashboard
2. Click "Products"
3. Click "Create"
4. Fill name, price, image, description
5. Click "Publish"
6. **Product appears on your site instantly!**

### Add a Review
1. Go to Sanity dashboard
2. Click "Customer Reviews"
3. Click "Create"
4. Fill customer name, rating, comment, avatar
5. Click "Publish"
6. **Review appears on your site!**

### Upload a Video
1. Go to Sanity dashboard
2. Click "Videos"
3. Upload MP4/WebM OR add YouTube URL
4. Fill title and details
5. Click "Publish"
6. **Video ready to link to products!**

### Update Hero Banner
1. Go to Sanity dashboard
2. Click "Hero Section"
3. Edit headline, images, buttons
4. Click "Publish"
5. **Hero updates on your site instantly!**

## What You Can Manage

### Products
- Name, emoji, price
- Short & full descriptions
- Main image + gallery
- Category selection
- Featured & in-stock status
- Care instructions
- Related video

### Reviews
- Customer name
- 1-5 star rating
- Review comment
- Avatar image
- Verified purchase

### Hero Section
- Headline, subtitle, description
- CTA button texts
- Hero images (3 total)
- Featured product

### Videos
- Upload file OR YouTube/Vimeo URL
- Thumbnail image
- Video type (demo, testimonial, etc.)
- Featured flag

### Settings
- Site name & description
- Logo
- Newsletter text
- Footer text
- Social media links

## How It Works

1. **Edit in Sanity** - Change content in Sanity dashboard
2. **Click Publish** - Your changes are published
3. **App Fetches Data** - Your site automatically gets new content
4. **Site Updates** - Changes appear on your website instantly!

No rebuilding. No redeploying. Just publish and done! 🎉

## The 3 Keys You Need

| Key | What it is | Get it from |
|-----|-----------|-------------|
| **Project ID** | Your Sanity project ID | sanity.io > Settings > API |
| **Dataset** | Where your content lives | sanity.io > Settings > API |
| **API Token** | Authentication key | sanity.io > Settings > API > Tokens |

Keep these safe! The API token is secret - don't share it!

## Components That Use Sanity

Your app components automatically fetch from Sanity:

- `ProductShowcase.tsx` - Shows all products
- `ReviewSection.tsx` - Shows customer reviews
- `HeroSection.tsx` - Shows hero banner
- `Footer.tsx` - Shows footer content
- `ProductCard.tsx` - Shows product details

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import in Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`
4. Redeploy
5. Your live site connects to Sanity! 🚀

Content updates on your live site automatically!

## Troubleshooting

### Content not showing
- Make sure content is "Published" (not draft)
- Refresh your site
- Check environment variables

### API Token error
- Generate a new token in Sanity
- Update `.env.local`
- Restart dev server

### Images not loading
- Check image uploaded in Sanity
- Set hotspot (image focus point)
- Clear browser cache

## Quick Checklist

- [ ] Created Sanity project
- [ ] Got Project ID
- [ ] Generated API Token
- [ ] Added 3 keys to `.env.local`
- [ ] Ran `pnpm install && pnpm dev`
- [ ] Created test product
- [ ] Product appears on site
- [ ] Created test review
- [ ] Review appears on site

## Resources

- **Sanity Documentation**: https://www.sanity.io/docs
- **GROQ Guide**: https://www.sanity.io/docs/groq
- **Next.js Integration**: https://www.sanity.io/guides/sanity-nextjs-integration
- **Image API**: https://www.sanity.io/docs/image-url

## Files Reference

### Configuration
- `sanity.config.ts` - Sanity settings
- `sanity/schemaTypes/` - Content schemas
- `lib/sanity.client.ts` - Query functions
- `.env.example` - Environment template

### Documentation
- `SANITY_README.md` - This file (overview)
- `QUICK_START_SANITY.md` - 5-minute quick start
- `SANITY_SETUP.md` - Complete setup guide
- `SANITY_API_KEYS.md` - API key reference
- `SANITY_CHECKLIST.md` - Verification checklist
- `SANITY_COMPLETE_SETUP.md` - Comprehensive guide

## Query Functions

All in `lib/sanity.client.ts`:

```typescript
getProducts()               // All products
getFeaturedProducts(9)      // Featured only
getReviews(3)               // Recent reviews
getHeroSection()            // Hero content
getVideos()                 // All videos
getSettings()               // Global settings
urlFor(image)               // Image URL generator
```

## Next Steps

1. ✅ Go to sanity.io and create project
2. ✅ Get your 3 keys
3. ✅ Add to `.env.local`
4. ✅ Run `pnpm dev`
5. ✅ Create your first product
6. ✅ See it appear on your site
7. ✅ Deploy to Vercel
8. ✅ Manage content from Sanity dashboard!

## Summary

You're all set! Your Cherry app is now connected to Sanity CMS. You can:

✅ Manage products without code
✅ Upload images and videos
✅ Create customer reviews
✅ Update all content instantly
✅ Deploy and go live on Vercel

**All you need are 3 keys from Sanity!**

---

**Happy selling! Your plant shop is ready! 🌿✨**

**Start here**: [QUICK_START_SANITY.md](./QUICK_START_SANITY.md)
