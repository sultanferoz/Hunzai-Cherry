# 🚀 START HERE: Sanity CMS Setup for Cherry

**Welcome!** Your Cherry app is ready to use Sanity CMS. This page explains everything you need in simple terms.

---

## What is Sanity CMS?

Sanity is a **content management system** that lets you manage all your plant shop content without writing code:

- Add products with images
- Create customer reviews
- Upload videos
- Update your website content
- Manage everything from a beautiful dashboard

---

## The Big Picture

```
┌─────────────────────────────────────────────────────────┐
│              SANITY DASHBOARD                           │
│         (Manage your content here)                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  Add Product │  │ Add Review   │  │Upload Video  │  │
│  │  Edit Hero   │  │ Add Images   │  │Add Settings  │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│              ↓ Click "Publish"                           │
└─────────────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────────────┐
│         YOUR WEBSITE                                     │
│   (Content appears automatically)                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  Products    │  │  Reviews     │  │  Hero Banner │  │
│  │  displayed   │  │  displayed   │  │  displayed   │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
```

**It's that simple!** Edit in Sanity → Click Publish → Changes appear on your site!

---

## What You Need (3 Keys)

To connect Sanity to your app, you need **3 pieces of information**:

### 1️⃣ Project ID
- **What it is**: Your unique Sanity project identifier
- **Where to get it**: sanity.io → Your Project → Settings → API
- **What it looks like**: `abc123def456ghijkl` (about 20 characters)
- **Keep it**: PUBLIC (safe to share)

### 2️⃣ Dataset
- **What it is**: The name of where your content is stored
- **Standard value**: `production`
- **Keep it**: PUBLIC (safe to share)

### 3️⃣ API Token
- **What it is**: Secret authentication key
- **Where to get it**: sanity.io → Your Project → Settings → API → Tokens → Add
- **What it looks like**: `sk_production_...` (very long string)
- **Keep it**: PRIVATE (never share!)
- **Permissions**: Must be set to "Editor"

---

## Setup in 5 Minutes

### ✅ Minute 1-2: Create Sanity Project
1. Go to **https://www.sanity.io**
2. Click "Get Started Free" (or sign in)
3. Click "Create Project"
4. Fill in:
   - Name: `Cherry`
   - Template: `Blank`
   - Dataset: `production`
5. Click "Create"
6. **📌 Save your Project ID!**

### ✅ Minute 3: Create API Token
1. In Sanity, go to **Settings** (⚙️ icon top right)
2. Click **API**
3. Find **Tokens** section
4. Click **Add API token**
5. Fill in:
   - Name: `Cherry Frontend`
   - Permissions: `Editor`
6. Click "Save"
7. **📌 Copy your token immediately!** (you won't see it again)

### ✅ Minute 4: Add to Your App
1. Create a file called `.env.local` in your project root
2. Copy this:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_PROJECT_ID
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=YOUR_API_TOKEN
   ```
3. Replace `YOUR_PROJECT_ID` and `YOUR_API_TOKEN` with your actual values
4. Save the file

### ✅ Minute 5: Start Your App
```bash
pnpm install
pnpm dev
```

Visit **http://localhost:3000** - You're done! ✅

---

## Add Your First Product (To Test)

1. Go to your **Sanity dashboard** (sanity.io > Your Project)
2. Click **Products** in the left menu
3. Click **Create**
4. Fill in:
   ```
   Name: Monstera Plant
   Price: 500
   Emoji: 🪴
   Description: Beautiful indoor plant
   ```
5. Click the **Image** field and upload a photo
6. Click **Publish** (top right)
7. Go back to http://localhost:3000
8. **Refresh the page**
9. 🎉 **Your product appears!**

---

## Content You Can Manage

### Products
```
Name        ✓
Price       ✓
Emoji       ✓
Description ✓
Image       ✓ (with automatic optimization)
Category    ✓
Featured    ✓
Care Tips   ✓
Video       ✓ (link to video)
```

### Reviews
```
Customer Name   ✓
Rating (1-5)    ✓
Comment         ✓
Avatar Photo    ✓
```

### Hero Section
```
Headline        ✓
Description     ✓
CTA Buttons     ✓
Images          ✓
```

### Videos
```
Upload MP4/WebM ✓
OR YouTube URL  ✓
Thumbnail       ✓
```

### Settings
```
Site Name           ✓
Newsletter Text     ✓
Footer Text         ✓
Social Links        ✓
```

---

## Using Content on Your Site

### Your components automatically use Sanity content:

```
ProductShowcase.tsx  → Shows all products
ReviewSection.tsx    → Shows all reviews
HeroSection.tsx      → Shows hero content
Footer.tsx           → Shows footer settings
```

**No code changes needed!** Components automatically fetch from Sanity.

---

## Deploying to Live Server (Vercel)

When you're ready to go live:

1. **Push code to GitHub**
   ```bash
   git push
   ```

2. **Go to Vercel** (vercel.com)
   - Import your GitHub repo
   - Click "Deploy"

3. **Add environment variables**
   - Go to Settings > Environment Variables
   - Add your 3 keys:
     ```
     NEXT_PUBLIC_SANITY_PROJECT_ID = ...
     NEXT_PUBLIC_SANITY_DATASET = production
     SANITY_API_TOKEN = ...
     ```
   - Click "Save"

4. **Redeploy**
   - Vercel will redeploy your site
   - Your live site is now connected to Sanity! 🚀

**Update content in Sanity → Click Publish → Changes appear on your live site!**

---

## Documentation Files (Choose What You Need)

| File | What it covers | Time |
|------|---|---|
| **SANITY_README.md** | Overview & quick links | 5 min |
| **QUICK_START_SANITY.md** | Get it done fast | 5 min |
| **SANITY_API_KEYS.md** | Understand the keys | 10 min |
| **SANITY_SETUP.md** | Detailed walkthrough | 30 min |
| **SANITY_CHECKLIST.md** | Verify everything | 15 min |
| **SANITY_COMPLETE_SETUP.md** | Complete reference | 45 min |

---

## Common Tasks

### ➕ Add a Product
1. Sanity dashboard → Products → Create
2. Fill fields
3. Click Publish
4. Product appears on your site!

### ➕ Add a Review
1. Sanity dashboard → Customer Reviews → Create
2. Fill fields
3. Click Publish
4. Review appears on your site!

### ➕ Upload a Video
1. Sanity dashboard → Videos → Create
2. Upload MP4 OR add YouTube URL
3. Click Publish
4. Video ready to link to products!

### ✏️ Update Hero Banner
1. Sanity dashboard → Hero Section
2. Edit text/images
3. Click Publish
4. Changes appear on site instantly!

---

## Troubleshooting Quick Fixes

| Problem | Fix |
|---------|-----|
| Content not showing | Make sure you clicked "Publish" |
| "projectId" error | Check `.env.local` has all 3 keys |
| Images not loading | Refresh browser, clear cache |
| API Token error | Regenerate token in Sanity, update `.env.local` |

---

## Your Checklist

```
☐ Created Sanity account
☐ Created Sanity project
☐ Got Project ID
☐ Generated API token
☐ Added 3 keys to .env.local
☐ Ran: pnpm install && pnpm dev
☐ App works at localhost:3000
☐ Created test product
☐ Product appears on site
☐ Ready to manage content!
```

---

## Security Reminders

✅ **DO:**
- Keep API token safe
- Keep `.env.local` in `.gitignore`
- Use HTTPS on production

❌ **DON'T:**
- Share API token
- Commit `.env.local` to GitHub
- Paste token in chat

---

## What Happens Next?

### Right Now (Today)
1. ✅ Get your 3 Sanity keys
2. ✅ Add to `.env.local`
3. ✅ Run `pnpm dev`
4. ✅ Create test product
5. ✅ See it appear on site

### This Week
1. ✅ Add real products
2. ✅ Add customer reviews
3. ✅ Upload product images
4. ✅ Create hero banner content
5. ✅ Add videos

### Next
1. ✅ Deploy to Vercel
2. ✅ Add env vars to Vercel
3. ✅ Go live! 🚀
4. ✅ Manage content from Sanity

---

## It's That Simple!

You now have:
- ✅ Complete Sanity integration
- ✅ 5 content types ready
- ✅ Automatic content fetching
- ✅ All documentation

**All you need are 3 keys from Sanity!**

---

## Next Step

### 👉 Go to sanity.io and create a project

Then come back and follow the **5-minute setup** above.

---

## Need Help?

- **Quick Start?** → Read: QUICK_START_SANITY.md
- **Step by Step?** → Read: SANITY_SETUP.md
- **Understand Keys?** → Read: SANITY_API_KEYS.md
- **Troubleshooting?** → Read: SANITY_CHECKLIST.md
- **Complete Guide?** → Read: SANITY_COMPLETE_SETUP.md

---

## Resources

- Sanity Docs: https://www.sanity.io/docs
- Getting Help: https://www.sanity.io/help
- GROQ Guide: https://www.sanity.io/docs/groq

---

## Summary

```
1. Create Sanity project
2. Get 3 keys
3. Add to .env.local
4. Run pnpm dev
5. Create content
6. Deploy
7. Manage from Sanity!
```

---

## 🎉 You're Ready!

Your Cherry plant shop is set up for success with Sanity CMS.

**Now go create amazing plant products!** 🌿

---

**Questions?** Check the documentation files listed above!

**Ready?** [Go to sanity.io](https://www.sanity.io)
