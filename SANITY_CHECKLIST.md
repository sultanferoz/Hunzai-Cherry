# Sanity CMS Setup Checklist

Use this checklist to ensure everything is set up correctly.

## Pre-Setup

- [ ] I have a Sanity account (free at sanity.io)
- [ ] I have Node.js 18+ installed
- [ ] I have this project installed and dependencies ready (`pnpm install`)

## Sanity Project Creation

- [ ] Created a Sanity project at https://sanity.io
- [ ] Project name: _________________ (e.g., "Cherry")
- [ ] Selected "Blank" template
- [ ] Dataset name: `production`
- [ ] Project ID saved: _________________________________

## API Token Creation

- [ ] Went to Settings > API > Tokens
- [ ] Created a new API token
- [ ] Token name: "Cherry Frontend"
- [ ] Permissions set to: "Editor"
- [ ] Token copied and saved securely: _________________________________

## Environment Variables

- [ ] Created `.env.local` file (or copied from `.env.example`)
- [ ] Added `NEXT_PUBLIC_SANITY_PROJECT_ID`
- [ ] Added `NEXT_PUBLIC_SANITY_DATASET=production`
- [ ] Added `SANITY_API_TOKEN`
- [ ] File is in `.gitignore` (not committed)

## Code Setup

- [ ] Ran `pnpm install` to install Sanity packages
- [ ] Sanity config file exists: `sanity.config.ts`
- [ ] Schema types exist: `sanity/schemaTypes/`
- [ ] Sanity client exists: `lib/sanity.client.ts`

## Testing

- [ ] Started dev server: `pnpm dev`
- [ ] App loads at http://localhost:3000 without errors
- [ ] No "projectId is required" errors
- [ ] Browser console is clean (no Sanity errors)

## Create Test Content

- [ ] Created at least 1 Product in Sanity dashboard
- [ ] Created at least 1 Review in Sanity dashboard
- [ ] Created Hero Section content
- [ ] All content is "Published" (not in draft)
- [ ] Product appears on http://localhost:3000

## Verify Data Fetching

- [ ] Products load on ProductShowcase section
- [ ] Reviews load on ReviewSection
- [ ] Hero content displays correctly
- [ ] Images display properly
- [ ] No console errors related to Sanity

## Documentation Read

- [ ] Read QUICK_START_SANITY.md (overview)
- [ ] Read SANITY_SETUP.md (detailed setup)
- [ ] Read SANITY_API_KEYS.md (key reference)
- [ ] Read SANITY_INTEGRATION.md (complete guide)

## Deployment Prep

- [ ] Code pushed to GitHub
- [ ] Vercel project created/configured
- [ ] Environment variables ready for Vercel:
  - [ ] NEXT_PUBLIC_SANITY_PROJECT_ID
  - [ ] NEXT_PUBLIC_SANITY_DATASET
  - [ ] SANITY_API_TOKEN

## Production Deployment

- [ ] Environment variables added to Vercel
- [ ] Project deployed to Vercel
- [ ] Site loads without errors
- [ ] Content displays on live site
- [ ] Images load on live site

## Content Management

- [ ] Know how to access Sanity dashboard
- [ ] Know how to create Products
- [ ] Know how to create Reviews
- [ ] Know how to upload Images
- [ ] Know how to upload/link Videos
- [ ] Know how to publish content

## Ongoing

- [ ] Have Sanity dashboard bookmarked
- [ ] Have backup of API token stored securely
- [ ] Know how to regenerate API token if needed
- [ ] Understand ISR (Incremental Static Regeneration)
- [ ] Know when to rebuild vs just publish

---

## Your Credentials (Save This Safely!)

```
Project ID: _________________________________

Dataset: production

API Token: _________________________________

Sanity Dashboard URL: https://sanity.io

Project URL: https://sanity.io/manage/{PROJECT_ID}

API Keys URL: https://sanity.io/manage/{PROJECT_ID}/settings/api
```

## Query Functions Available

All these are ready to use in your components:

```typescript
// Products
✅ getProducts()
✅ getProduct(slug)
✅ getFeaturedProducts(limit)

// Reviews
✅ getReviews(limit)
✅ getProductReviews(productId)

// Content
✅ getHeroSection()
✅ getVideos(limit)
✅ getFeaturedVideos(limit)
✅ getSettings()

// Images
✅ urlFor(image)
```

## Content Types Available

```
✅ Products (10+ fields)
✅ Reviews (7 fields)
✅ Hero Section (8 fields)
✅ Videos (9 fields)
✅ Settings (7 fields)
```

## Common Tasks

### Add a New Product
1. Go to Sanity dashboard
2. Click Products
3. Click "Create"
4. Fill fields
5. Click "Publish"
6. Refresh your site - appears instantly!

### Update Product Details
1. Go to Sanity dashboard
2. Click Products
3. Click product to edit
4. Make changes
5. Click "Publish"
6. Changes appear on site instantly!

### Add Customer Review
1. Go to Sanity dashboard
2. Click "Customer Reviews"
3. Click "Create"
4. Fill fields
5. Upload avatar
6. Click "Publish"
7. Review appears on site!

### Upload Product Video
1. Go to Sanity dashboard
2. Click "Videos"
3. Click "Create"
4. Upload video OR add YouTube URL
5. Upload thumbnail
6. Fill details
7. Click "Publish"
8. Video available to link to products!

### Change Hero Banner
1. Go to Sanity dashboard
2. Click "Hero Section"
3. Edit existing entry
4. Change images, text, buttons
5. Click "Publish"
6. Hero updates on site!

---

## Troubleshooting Checklist

If something isn't working:

- [ ] Restarted dev server (`pnpm dev`)
- [ ] Checked that content is "Published" (not draft)
- [ ] Verified environment variables in `.env.local`
- [ ] Checked browser console for errors
- [ ] Cleared browser cache (Cmd+Shift+Del)
- [ ] Verified API token has "Editor" permissions
- [ ] Checked Sanity dashboard for error messages

---

## Success Indicators

You'll know everything is working when:

✅ App starts without "projectId" errors
✅ Products appear on homepage
✅ Reviews display with ratings
✅ Hero section shows correct images
✅ Images load properly
✅ No console errors
✅ Content updates instantly after publishing
✅ App works on production (Vercel)

---

## Resources

- Sanity Docs: https://www.sanity.io/docs
- Next.js Integration: https://www.sanity.io/guides/sanity-nextjs-integration
- GROQ Query Language: https://www.sanity.io/docs/groq
- Image URL API: https://www.sanity.io/docs/image-url
- Getting Help: https://www.sanity.io/help

---

## Notes

```
Date setup completed: _________________
Project ID: _________________________________
API Token: _________________________________
Deployed URL: _________________________________
Sanity Dashboard: https://sanity.io
Admin Name: _________________________________
```

---

**Congratulations! Your Sanity CMS is fully integrated! 🎉**

Keep this checklist for reference when adding more content or troubleshooting issues.
