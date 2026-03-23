# Quick Start - Sanity CMS Setup (5 Minutes)

Fast-track guide to get Sanity working right now.

## 5-Minute Setup

### 1. Create Sanity Project (2 min)
```
1. Go to https://www.sanity.io
2. Click "Get Started Free"
3. Sign up / Log in
4. Click "Create Project"
5. Enter project name: "Cherry"
6. Select template: "Blank"
7. Dataset: "production"
8. Click "Create"
9. Save your Project ID (20-char code)
```

### 2. Create API Token (1 min)
```
1. Go to Settings > API (in your Sanity project)
2. Click "Tokens" tab
3. Click "Add API token"
4. Name: "Cherry Frontend"
5. Permissions: "Editor"
6. Click "Save"
7. Copy the token (sk_production_...)
```

### 3. Add to Your App (1 min)
```bash
# Create .env.local file
cp .env.example .env.local

# Edit .env.local and add:
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

### 4. Start Your App (1 min)
```bash
pnpm install
pnpm dev
```

Visit http://localhost:3000 ✅

---

## Add Your First Product

### In Sanity Dashboard:
```
1. Click "Products" in sidebar
2. Click "Create"
3. Fill in:
   - Name: "Monstera Plant"
   - Price: "500"
   - Emoji: "🪴"
   - Description: "Beautiful indoor plant"
   - Upload image
4. Click "Publish"
```

### In Your App:
Refresh http://localhost:3000 - product appears! ✅

---

## The 3 Keys You Need

| Key | Where to Find | Example |
|-----|---------------|---------|
| **Project ID** | Settings > API > Project ID | `abc123def456` |
| **Dataset** | Settings > API > Dataset | `production` |
| **API Token** | Settings > API > Tokens > Add | `sk_production_...` |

---

## What Content Types Are Available?

- **Products** - Plants with price, image, description
- **Reviews** - Customer testimonials with ratings
- **Hero Section** - Banner headline and images
- **Videos** - Product demos and testimonials
- **Settings** - Site name, newsletter, social links

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Content not showing | Make sure you clicked "Publish" in Sanity |
| "Cannot read properties" error | Add missing env vars, restart dev server |
| Images not loading | Check image was uploaded in Sanity |

---

## Deploying to Vercel

```
1. Push code to GitHub
2. Deploy to Vercel
3. In Vercel Settings > Environment Variables, add:
   - NEXT_PUBLIC_SANITY_PROJECT_ID = your-id
   - NEXT_PUBLIC_SANITY_DATASET = production
   - SANITY_API_TOKEN = your-token
4. Redeploy
5. Done! 🎉
```

---

## Next Steps

1. ✅ Create Sanity project
2. ✅ Add environment variables
3. ✅ Create a product
4. ✅ View on your site
5. 📝 Read SANITY_SETUP.md for full details
6. 🚀 Deploy to Vercel

---

**You're done!** Your Sanity CMS is live. 🌿
