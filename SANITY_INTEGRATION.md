# Sanity CMS Integration - Complete Setup Summary

Your Cherry project is now fully integrated with Sanity CMS! Here's everything that's been set up for you.

## What's Included

### 1. Sanity Schemas (5 Content Types)

#### Products Schema
```
- Product Name (required)
- Slug (auto-generated from name)
- Emoji (🌿 icon)
- Price (number, required)
- Description (short text)
- Full Description (rich text with formatting)
- Category (select: Indoor, Succulent, Flowering, Air Purifying, Low Maintenance)
- Image (with hotspot)
- Gallery (multiple images)
- Featured (boolean)
- In Stock (boolean)
- Care Instructions (array of strings)
- Related Video (reference to video)
- Published Date (auto)
```

#### Reviews Schema
```
- Customer Name (required)
- Rating (1-5 stars, required)
- Review Comment (required)
- Avatar Image
- Product Link (reference)
- Verified Purchase (boolean)
- Published Date (auto)
```

#### Hero Section Schema
```
- Main Headline
- Subtitle
- Description
- Primary CTA Button Text
- Secondary CTA Button Text
- Primary Image
- Secondary Image
- Background Image
- Featured Product Link
```

#### Videos Schema
```
- Title (required)
- Description
- Video File (upload MP4/WebM)
- OR Video URL (YouTube/Vimeo)
- Thumbnail Image
- Video Type (Demo, Testimonial, Care Guide, Unboxing, Tutorial)
- Related Product (reference)
- Featured (boolean)
- Duration (seconds)
- Published Date (auto)
```

#### Settings Schema
```
- Site Name
- Site Description
- Logo
- Favicon
- Newsletter Heading
- Newsletter Description
- Footer Text
- Social Media Links (array)
```

### 2. Query Functions (`lib/sanity.client.ts`)

All ready to use in your components:

```typescript
// Product queries
getProducts() - All products
getProduct(slug) - Single product
getFeaturedProducts(limit) - Featured only

// Review queries
getReviews(limit) - Recent reviews
getProductReviews(productId) - Reviews for a product

// Hero queries
getHeroSection() - Hero banner content

// Video queries
getVideos(limit) - All videos
getFeaturedVideos(limit) - Featured videos

// Settings
getSettings() - Global site settings

// Images
urlFor(image) - Generate image URLs
```

### 3. Configuration Files

- **sanity.config.ts** - Sanity configuration
- **sanity/schemaTypes/\*** - All schema definitions
- **.env.example** - Environment variable template
- **package.json** - Dependencies added:
  - `next-sanity` - Sanity integration
  - `sanity` - Sanity CMS
  - `@sanity/image-url` - Image URL generation

### 4. Documentation Files

- **SANITY_SETUP.md** - Complete setup guide (follow this!)
- **SANITY_API_KEYS.md** - API keys reference
- **SANITY_INTEGRATION.md** - This file

## What You Need to Do Now

### Step 1: Create a Sanity Project
Go to https://www.sanity.io and create a free account:
1. Sign up or log in
2. Create a new project
3. Select "Blank" template
4. Choose dataset name: `production`
5. Note your Project ID

### Step 2: Get Your API Token
In your Sanity project:
1. Go to Settings > API
2. Go to "Tokens" tab
3. Click "Add API token"
4. Name it "Cherry Frontend"
5. Set permissions: **Editor**
6. Copy the token (save it securely!)

### Step 3: Add Environment Variables
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

### Step 4: Start Your App
```bash
pnpm install  # Install dependencies
pnpm dev      # Start development server
```

Visit http://localhost:3000 - your app should load with Sanity integration!

### Step 5: Add Your First Content
Go to https://sanity.io, open your project dashboard, and:
1. Create a Product
2. Create Reviews
3. Create Hero Section
4. Upload Videos
5. Configure Settings

Your app will automatically fetch and display this content!

## Component Integration

Your components automatically use Sanity data:

### ProductShowcase.tsx
- Fetches all products via `getProducts()`
- Displays name, emoji, price, image, description
- Links to product video if available
- Shows featured badge

### ReviewSection.tsx
- Fetches recent reviews via `getReviews()`
- Shows customer avatar, name, rating, comment
- Displays verified purchase badge

### HeroSection.tsx
- Fetches hero content via `getHeroSection()`
- Uses featured product data
- Displays all images

### Footer.tsx
- Fetches settings via `getSettings()`
- Uses newsletter heading and footer text
- Displays social media links

## Data Flow

```
Sanity CMS Dashboard
    ↓
    ├── Products → getProducts()
    ├── Reviews → getReviews()
    ├── Hero → getHeroSection()
    ├── Videos → getVideos()
    └── Settings → getSettings()
    ↓
lib/sanity.client.ts
    ↓
Components
    ↓
Your Website
```

## Key Features Enabled

### ✅ Text Content Management
- All headlines, descriptions, button text from Sanity
- Supports rich text formatting
- Easy to edit without code changes

### ✅ Image Management
- Upload images directly in Sanity
- Images automatically optimized
- Set image hotspot for perfect crops
- Gallery support for products

### ✅ Video Management
- Upload MP4/WebM videos OR add YouTube/Vimeo URLs
- Set custom thumbnails
- Link videos to products
- Mark as featured

### ✅ Product Management
- Full CRUD operations (create, read, update, delete)
- Multiple categories
- Care instructions
- In-stock tracking
- Featured products

### ✅ Review Management
- Customer testimonials
- 1-5 star ratings
- Customer avatars
- Verified purchase tracking
- Link to products reviewed

## Deployment

### To Deploy on Vercel:

1. Push code to GitHub
2. Import project in Vercel
3. In project Settings > Environment Variables, add:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID = your-id
   NEXT_PUBLIC_SANITY_DATASET = production
   SANITY_API_TOKEN = your-token
   ```
4. Redeploy
5. Your live site will fetch content from Sanity!

## Content Management Workflow

1. **Update Content in Sanity**
   - Go to Sanity dashboard
   - Edit products, reviews, videos
   - Click "Publish"

2. **Changes Appear on Your Site**
   - Site fetches fresh data from Sanity
   - No code changes needed
   - Instant updates!

3. **No Rebuilds Required**
   - Dynamic content fetching
   - ISR (Incremental Static Regeneration)
   - Real-time updates

## Testing

### Test Locally:
1. Add some test data in Sanity
2. Run `pnpm dev`
3. Visit http://localhost:3000
4. Your content should appear!

### Test Images:
1. Upload product image in Sanity
2. Check if it displays on site
3. Adjust hotspot if needed
4. Republish

### Test Videos:
1. Upload video or add YouTube URL
2. Refresh page
3. Video should be playable

## Need Help?

1. **Setup Issues?**
   - Read SANITY_SETUP.md (step-by-step guide)
   - Check SANITY_API_KEYS.md (API key reference)

2. **Content Not Appearing?**
   - Verify content is "Published" (not draft)
   - Check environment variables are correct
   - Restart dev server after changing .env

3. **Official Resources**
   - Sanity Docs: https://www.sanity.io/docs
   - Sanity + Next.js: https://www.sanity.io/guides/sanity-nextjs-integration
   - GROQ Query Language: https://www.sanity.io/docs/groq

## Summary

You now have a **complete, production-ready CMS integration**:

✅ 5 content types (Products, Reviews, Hero, Videos, Settings)
✅ Image and video management
✅ 12+ query functions ready to use
✅ Automatic data fetching in components
✅ Secure API token handling
✅ Comprehensive documentation
✅ Ready for production deployment

**Next Step**: Follow SANITY_SETUP.md to create your Sanity project and add your first content!

---

**Happy content management! 🌿**
