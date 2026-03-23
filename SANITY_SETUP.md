# Sanity CMS Setup Guide for Cherry

This guide will walk you through setting up Sanity CMS for the Cherry plant e-commerce platform. Sanity is a headless CMS that lets you manage all content (products, images, videos, reviews) through a beautiful dashboard.

## What You Need

Before starting, you should have:
- A Sanity account (free at https://www.sanity.io)
- Node.js 18+ installed
- This project cloned and dependencies installed

## Step 1: Create a Sanity Project

1. Go to https://www.sanity.io and sign in or create an account
2. Click "Create project" or "New project"
3. Choose a project name (e.g., "Cherry")
4. Select a template - choose "Blank" or "Clean project"
5. Select a dataset name - use "production" (or "development" for testing)
6. Click "Create"
7. Wait for the project to be created

## Step 2: Get Your Project Credentials

1. Go to your Sanity project dashboard
2. Click "Settings" in the top right
3. Go to "Project Settings" > "API"
4. Copy your **Project ID** (it looks like: `abc123def456`)
5. Go to "Tokens" tab
6. Click "Add API token"
7. Give it a name like "Cherry Frontend"
8. Set permissions to **Editor** (can create/edit content)
9. Click "Save"
10. Copy the token (it looks like: `sk_production_...`)

## Step 3: Add Credentials to Your Project

1. Open `.env.local` in the project root (create it if it doesn't exist)
2. Copy content from `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
3. Edit `.env.local` and add your credentials:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-sanity-api-token-here
   ```
4. Save the file

## Step 4: Install Dependencies

Run this command to install Sanity packages:

```bash
pnpm install
```

Or if using npm:

```bash
npm install
```

## Step 5: Start the App

Run the development server:

```bash
pnpm dev
```

Your app should now load with Sanity integrated. Visit `http://localhost:3000`.

## Content Types You Can Now Manage

### 1. Products
Create and manage plant products with:
- Product name, emoji, slug
- Price (in Rs)
- Short description & full description
- Category (Indoor, Succulent, Flowering, Air Purifying, Low Maintenance)
- Product image with gallery
- In-stock status
- Care instructions
- Link to product demo video
- Featured flag

To add a product:
1. In Sanity dashboard, click "Products"
2. Click "Create"
3. Fill in all fields
4. Click "Publish"

### 2. Reviews
Create customer testimonials with:
- Customer name
- Rating (1-5 stars)
- Review comment
- Avatar image
- Link to reviewed product
- Verified purchase status
- Published date

To add a review:
1. In Sanity dashboard, click "Customer Reviews"
2. Click "Create"
3. Fill in the fields
4. Click "Publish"

### 3. Hero Section
Manage the hero banner content:
- Main headline
- Subtitle
- Description
- Call-to-action button texts
- Hero images
- Featured product reference

To update hero section:
1. In Sanity dashboard, click "Hero Section"
2. Click the existing entry (or create one)
3. Edit and publish

### 4. Videos
Upload and manage product videos:
- Title and description
- Upload video file (MP4, WebM, etc.) OR add YouTube/Vimeo URL
- Thumbnail image
- Video type (Demo, Testimonial, Care Guide, Unboxing, Tutorial)
- Link to related product
- Featured flag
- Video duration

To add a video:
1. In Sanity dashboard, click "Videos"
2. Click "Create"
3. Upload video or add URL
4. Fill in other details
5. Click "Publish"

### 5. Site Settings
Global site configuration:
- Site name and description
- Logo and favicon
- Newsletter heading and description
- Footer text
- Social media links

To update settings:
1. In Sanity dashboard, click "Site Settings"
2. Click the entry and edit
3. Click "Publish"

## Using Content in Your App

Your app automatically fetches content from Sanity. Here's what you need to know:

### In Your Components

The components automatically use Sanity data if available. For example:

```typescript
// components/ProductShowcase.tsx uses:
const products = await getProducts();

// components/ReviewSection.tsx uses:
const reviews = await getReviews();

// components/HeroSection.tsx uses:
const hero = await getHeroSection();
```

### Available Query Functions

See `lib/sanity.client.ts` for these functions:

- `getProducts()` - All products
- `getProduct(slug)` - Single product by slug
- `getFeaturedProducts(limit)` - Featured products
- `getReviews(limit)` - Recent reviews
- `getProductReviews(productId)` - Reviews for specific product
- `getHeroSection()` - Hero banner content
- `getVideos(limit)` - All videos
- `getFeaturedVideos(limit)` - Featured videos
- `getSettings()` - Global site settings
- `urlFor(image)` - Generate image URLs

## Image Management

### Uploading Images

1. In any content type, click the image field
2. Click "Upload"
3. Choose an image from your computer
4. Adjust hotspot (click to set image focus)
5. Images are automatically optimized

### Using Images in Your App

Images are referenced in content. The app uses `urlFor()` function to generate optimized image URLs:

```typescript
import { urlFor } from '@/lib/sanity.client';

// In components:
const imageUrl = urlFor(product.image).width(500).url();
```

## Video Management

### Uploading Videos

1. In "Videos" content type, choose upload method:
   - **Upload file**: Upload MP4, WebM from your computer
   - **Video URL**: Paste YouTube or Vimeo URL
2. Upload thumbnail image
3. Set video type
4. Publish

### Using Videos in Your App

Videos appear in:
- Product showcase (if linked to product)
- Video gallery (featured videos)
- Product detail pages

## Troubleshooting

### "Error: projectId is required"
- Make sure `NEXT_PUBLIC_SANITY_PROJECT_ID` is in `.env.local`
- Restart your dev server after adding env vars

### Images not loading
- Check that image was published in Sanity
- Verify hotspot is set correctly
- Clear browser cache and refresh

### Content not appearing
- Verify content is "Published" (not just draft)
- Check filters in dashboard (might be filtering by status)
- Wait a few seconds for cache to refresh

### API token issues
- Verify token has "Editor" permissions
- Check token hasn't expired
- Generate a new token if needed

## Next Steps

1. **Add Your First Product**
   - Go to Sanity dashboard > Products
   - Click "Create"
   - Fill in product details
   - Upload image
   - Click "Publish"

2. **Create Hero Section**
   - Go to Sanity dashboard > Hero Section
   - Edit the existing entry
   - Add images and content
   - Publish

3. **Add Reviews**
   - Go to Sanity dashboard > Customer Reviews
   - Create multiple reviews
   - Add customer avatars
   - Publish

4. **Upload Videos**
   - Go to Sanity dashboard > Videos
   - Add product demo videos
   - Mark as featured
   - Publish

5. **Deploy**
   - Push your code to GitHub
   - Deploy to Vercel
   - Add env vars in Vercel dashboard
   - Your site goes live!

## Resources

- Sanity Documentation: https://www.sanity.io/docs
- GROQ Query Language: https://www.sanity.io/docs/groq
- Image API: https://www.sanity.io/docs/image-url
- Next.js + Sanity: https://www.sanity.io/guides/sanity-nextjs-integration

## Support

For issues:
1. Check the troubleshooting section above
2. Visit Sanity docs: https://www.sanity.io/docs
3. Check Next.js docs: https://nextjs.org/docs

---

**You're all set!** Your Cherry app is now ready to manage all content through Sanity CMS. 🌿
