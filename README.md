# Cherry - Premium Indoor Plants Platform

A beautiful, modern plant e-commerce landing page built with Next.js 16, React 19, and Tailwind CSS v4.

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000
```

## Features

- Responsive design (mobile, tablet, desktop)
- Dark theme with green accents
- 8 beautiful components
- 9 product showcase
- 3 customer reviews
- Newsletter subscription
- Sanity CMS integration (optional)
- TypeScript support
- SEO optimized

## Tech Stack

- **Next.js 16** - React framework
- **React 19** - Latest React
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Sanity CMS** - Content management (optional)

## Project Structure

```
app/
  ├── page.tsx              # Home page
  ├── layout.tsx            # Root layout
  └── globals.css           # Global styles

components/
  ├── Header.tsx            # Navigation
  ├── HeroSection.tsx        # Hero banner
  ├── ProductCard.tsx        # Product component
  ├── ProductShowcase.tsx    # Products grid
  ├── ReviewCard.tsx         # Review component
  ├── ReviewSection.tsx      # Reviews section
  ├── BestOxygenSection.tsx  # Features section
  └── Footer.tsx             # Footer

lib/
  └── sanity.client.ts      # Sanity CMS client

sanity/
  ├── schemaTypes/
  │   ├── product.ts
  │   ├── review.ts
  │   └── index.ts
  └── sanity.config.ts
```

## Colors

```
Primary:      #2d4b37 (Forest Green)
Primary Light: #4a6f55
Accent:       #6ba578 (Light Green)
Background:   #1a1a1a (Dark)
Text:         #f9f9f7 (Off-white)
```

## Environment Variables (Optional)

For Sanity CMS integration, add to `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

Without these variables, the app works with demo data.

## Available Scripts

```bash
# Development
pnpm dev

# Production build
pnpm build

# Run production server
pnpm start

# Lint code
pnpm lint
```

## Deployment

Deploy to Vercel with a single click - it's fully optimized for Vercel!

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables (if using Sanity)
4. Deploy!

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Customization

### Change Colors

Edit `app/globals.css`:
```css
:root {
  --primary: #2d4b37;
  --primary-light: #4a6f55;
  --primary-accent: #6ba578;
  /* ... other colors */
}
```

### Edit Products

Edit `ProductShowcase.tsx` to modify product data.

### Customize Sections

Edit individual components in `components/` folder.

## Performance

- Optimized images
- Code splitting
- Dynamic imports
- CSS optimization
- Bundle size < 150KB

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast
- Focus indicators

## Support

For issues or questions:
1. Check the code comments
2. Review component props
3. Test in development

## License

© 2024 Cherry. All rights reserved.

---

Built with v0.app | Next.js 16 | React 19 | Tailwind CSS 4
