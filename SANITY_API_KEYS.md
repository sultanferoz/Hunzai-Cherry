# Sanity API Keys - Quick Reference

This document explains what API keys you need for Sanity CMS integration.

## The 3 Keys You Need

### 1. Project ID
**What it is**: Your unique Sanity project identifier  
**What it looks like**: `abc123def456ghijkl` (about 20 characters)  
**Where to find it**:
1. Go to https://sanity.io
2. Click your project
3. Go Settings > Project Settings > API
4. Under "Project Details", copy the "Project ID"

**Where to put it**: `.env.local`
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
```

**Why it's public**: It's safe to make public (used in browser). It only identifies which project to connect to, it doesn't let you modify content.

---

### 2. Dataset Name
**What it is**: The name of your data collection (usually "production")  
**What it looks like**: `production` or `development`  
**Default**: `production`  
**Where to find it**:
1. Go to https://sanity.io
2. Click your project
3. Go Settings > Project Settings > API
4. Under "Project Details", look for "Dataset"

**Where to put it**: `.env.local`
```
NEXT_PUBLIC_SANITY_DATASET=production
```

**Why it's public**: It's just the name of where your data is stored. It doesn't give anyone access to modify it.

---

### 3. API Token
**What it is**: Your secret authentication key for reading/writing content  
**What it looks like**: `sk_production_...` (long string, 100+ characters)  
**Where to find it**:
1. Go to https://sanity.io
2. Click your project
3. Go Settings > Project Settings > API > Tokens
4. Click "Add API token"
5. Give it a name like "Cherry Frontend"
6. Set permissions to **Editor** (can read/write content)
7. Copy the token immediately (you won't see it again)

**Where to put it**: `.env.local` (NEVER in public files)
```
SANITY_API_TOKEN=sk_production_your_token_here
```

**Why it's secret**: This token allows anyone with it to modify your content. Keep it safe!
- ✅ Store in `.env.local` (not committed to Git)
- ✅ Store in Vercel environment variables for production
- ❌ Don't commit to GitHub
- ❌ Don't paste in chat or public places

---

## Setting Up Your .env.local File

1. Copy the template:
```bash
cp .env.example .env.local
```

2. Edit `.env.local` and fill in your keys:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123def456ghijkl
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk_production_your_secret_token_here
```

3. Save the file - this file is in `.gitignore` so it won't be committed

4. Restart your dev server:
```bash
pnpm dev
```

---

## For Production (Vercel Deployment)

When deploying to Vercel:

1. Go to your Vercel project dashboard
2. Go to Settings > Environment Variables
3. Add these three variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID = abc123def456ghijkl
   NEXT_PUBLIC_SANITY_DATASET = production
   SANITY_API_TOKEN = sk_production_your_secret_token_here
   ```

4. Redeploy your project

Vercel will keep these secrets safe!

---

## Checking If It Works

After setting up your keys:

1. Start the dev server:
   ```bash
   pnpm dev
   ```

2. Visit http://localhost:3000

3. Open browser console (F12 > Console tab)

4. You should NOT see errors about missing PROJECT_ID

5. Try creating a product in Sanity and refresh the page - it should appear!

---

## Renewing Your API Token

If you accidentally exposed your token:

1. Go to Sanity dashboard > Settings > API > Tokens
2. Find your token in the list
3. Click the three dots menu
4. Click "Delete"
5. Click "Add API token" to create a new one
6. Update `.env.local` and Vercel env vars with the new token

---

## Common Issues

### "Cannot read properties of undefined (reading 'fetch')"
- Missing `NEXT_PUBLIC_SANITY_PROJECT_ID` in .env.local
- Restart dev server after adding env vars

### "Unauthorized" or "Not authenticated"
- `SANITY_API_TOKEN` is wrong or expired
- Generate a new token in Sanity dashboard
- Make sure token has "Editor" permission

### Content not loading
- Check that content is "Published" in Sanity (not just draft)
- Verify Project ID is correct
- Verify Dataset name is correct

---

## Need More Help?

- Sanity Docs: https://www.sanity.io/docs
- Sanity Support: https://www.sanity.io/help

---

**Your API keys are secure with Sanity!** 🔒
