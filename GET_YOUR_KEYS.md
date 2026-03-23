# Get Your Sanity API Keys - Step by Step

Your **Project ID**: `vcf7cafd` ✅

You need 2 more things from Sanity:

## Step 1: Find Your Dataset Name

1. Go to https://sanity.io (login to your account)
2. Click on your **"Cherry"** project (or whatever you named it)
3. In the left sidebar, look for "Settings"
4. Click "Settings" → "API"
5. Under "API" tab, look for **"Datasets"** section
6. You'll see your dataset name (usually: **`production`**)

**Save this**: `production` (or whatever your dataset is called)

---

## Step 2: Create an API Token

This is the token that lets your website read/write data from Sanity.

### Getting the Token:

1. Stay in **Settings** → **API**
2. Look for **"Tokens"** section
3. Click **"Add API token"**
4. Give it a name: `Cherry-website` (or anything you like)
5. Set permissions to: **`Editor`** (allows read AND write)
6. Click **"Save"**
7. **Copy the token** - it will look like: `skxxxxxxxxxxxxxxxxxxxxxxxxx`

⚠️ **Important**: Once you close this window, you WON'T be able to see the token again. Copy and save it somewhere safe!

---

## Step 3: Add to Your Project

### Create `.env.local` file:

In your project root folder (same level as `package.json`), create a new file called `.env.local`

Add these 3 lines:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=vcf7cafd
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=skxxxxxxxxxxxxxxxxxxxxxxxxx
```

Replace:
- `skxxxxxxxxxxxxxxxxxxxxxxxxx` with your actual token from Step 2
- `production` if your dataset name is different

### Example (real format):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=vcf7cafd
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=skJf8K0p9mL3qR2xY5gH7kJ9w2aB4cD6eF8gH0i
```

---

## Step 4: Install Dependencies

```bash
pnpm install
```

This will install the Sanity packages we added to package.json.

---

## Step 5: Start Your App

```bash
pnpm dev
```

Visit: http://localhost:3000

Your app will now:
- Connect to your Sanity project
- Pull content (products, reviews, etc.)
- Display on your website

---

## Step 6: Verify Connection

Open your browser console (F12) and look for messages like:
- "Error fetching products" = Connection issue
- No errors = ✅ Connected!

---

## Step 7: Add Content to Sanity

1. Go to your Sanity project: https://sanity.io
2. Click on your project
3. You'll see a **studio interface** on the left
4. Click **"Products"** to add plants
5. Click **"+ Create"** → **"Product"**
6. Fill in:
   - Name: "Monstera Deliciosa"
   - Price: 599
   - Emoji: 🌿
   - Image: Upload a plant photo
   - etc.
7. Click **"Publish"**

**Your website will update automatically!** ✨

---

## Troubleshooting

### "Fatal error during initialization"
- Check that all 3 env variables are correct
- No spaces before/after values
- Restart dev server: Stop (Ctrl+C) and run `pnpm dev` again

### Images not showing
- Make sure you uploaded images to Sanity (not external URLs)
- Images should be in the `image` field

### Still not working?
- Check browser console for specific error messages
- Make sure .env.local file exists in project root
- Verify token has "Editor" permissions in Sanity

---

## What's Next?

Once everything is connected:

1. **Add Products** - Create plants in Sanity
2. **Add Reviews** - Create customer testimonials
3. **Edit Hero Section** - Change banner text/images
4. **Add Videos** - Upload product demo videos
5. **Update Settings** - Newsletter heading, social links, etc.

All changes appear on your website instantly with no code needed!

---

**Questions?** Check these files:
- SANITY_README.md - Overview
- SANITY_SETUP.md - Detailed guide
- SANITY_CHECKLIST.md - Verification checklist

Good luck! 🌿
