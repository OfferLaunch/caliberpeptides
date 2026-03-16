# Caliber Labs Website

A premium marketing + catalog website for Caliber Labs, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
cd caliber-labs
npm run dev
```

Visit **http://localhost:3001** in your browser.

## 📁 Project Structure

```
caliber-labs/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Global layout with fonts
│   ├── page.tsx                 # Homepage
│   ├── products/
│   │   ├── page.tsx             # Product catalog
│   │   └── [slug]/page.tsx      # Product detail pages
│   ├── blog/
│   │   ├── page.tsx             # Blog listing
│   │   └── [slug]/page.tsx      # Blog post pages
│   └── coa/
│       └── page.tsx             # Certificate of Analysis lookup
├── components/
│   ├── layout/                  # Navbar, Footer
│   ├── home/                    # Homepage sections
│   ├── products/                # Product-related components
│   ├── blog/                    # Blog-related components
│   ├── coa/                     # COA search component
│   └── ui/                      # Reusable UI components
├── lib/
│   ├── products.ts              # Product data + utilities
│   └── blog.ts                  # Blog post data + utilities
├── public/                      # Static assets
└── tailwind.config.ts           # Tailwind configuration with brand colors
```

## 🎨 Brand Design

### Colors
- **Espresso**: `#1b263b` — Primary text, dark sections
- **Sage**: `#7D8F78` — Accents, hover states, CTAs
- **Parchment**: `#F5F2ED` — Primary background
- **Glass**: `#D1DBCB` — Cards, borders, subtle overlays

### Fonts
- **Display**: Plus Jakarta Sans (headings)
- **Body**: Plus Jakarta Sans / Inter (body copy)
- **Mono**: IBM Plex Mono (technical labels, product codes)

## 📄 Pages

| Route | Purpose |
|-------|---------|
| `/` | Homepage with hero, featured products, categories, blog preview |
| `/products` | Product catalog with category filters |
| `/products/[slug]` | Individual product pages with tabs |
| `/blog` | Blog/research library with category filters |
| `/blog/[slug]` | Individual blog posts |
| `/coa` | Certificate of Analysis search tool |

## 🧩 Key Components

### Layout
- **Navbar**: Sticky navigation with mobile menu
- **Footer**: Multi-column footer with links

### Home Sections
- **Hero**: Full-width headline with CTAs
- **TrustBadges**: Lab verified, purity, warehouse, COA badges
- **FeaturedProducts**: 4-product showcase grid
- **CategoryGrid**: 6 product category cards
- **AboutStrip**: Brand story with quality pillars
- **BlogPreview**: 3 latest blog articles

### Product Components
- **ProductCard**: Image, name, purity badge, price, CTA
- **ProductGrid**: Responsive grid (1-4 columns)
- **ProductFilters**: Category filter sidebar

### Blog Components
- **ArticleCard**: Image, title, date, excerpt, author
- **ArticleGrid**: Responsive article listing

## 🔧 Configuration

### Tailwind Colors
All custom colors are defined in `tailwind.config.ts`:
```ts
colors: {
  espresso: '#1b263b',
  sage: '#7D8F78',
  parchment: '#F5F2ED',
  glass: '#D1DBCB',
}
```

### Font Families
```ts
fontFamily: {
  display: ['var(--font-plus-jakarta-sans)', 'serif'],
  mono: ['var(--font-ibm-plex-mono)', 'monospace'],
  body: ['var(--font-plus-jakarta-sans)', 'var(--font-inter)', 'sans-serif'],
}
```

## 📦 Dependencies

- **next**: 16.1.6 — React framework
- **react**: 19.2.4
- **typescript**: 5.9.3
- **tailwindcss**: 4.2.1 — CSS framework
- **framer-motion**: 12.35.0 — Animations
- **lucide-react**: 0.577.0 — Icons

## 🎬 Features

✅ Responsive design (mobile, tablet, desktop)
✅ Sticky navbar with mobile menu
✅ Product filtering by category
✅ Blog article listing with categories
✅ COA search functionality (mock)
✅ Framer Motion animations
✅ TypeScript strict mode
✅ Tailwind CSS with custom tokens
✅ SEO-friendly URLs
✅ Production-ready build

## 🔄 Scripts

```bash
npm run dev      # Start development server on :3001
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📝 Mock Data

### Products (8 total)
- Ipamorelin, BPC-157, TB-500, Semax, Selank, PT-141, GHRP-6, Tymogen
- Includes: ID, name, slug, category, purity %, price, form, description

### Blog Posts (5 total)
- Articles with author, date, category, featured flag
- Categories: Research, Educational, Technical

### COA Search
- Mock lookup: searches for batch numbers containing "CP"
- Returns sample test results with purity data

## 🌐 External Links

All external shop links point to: `https://shop.example.com`
**Update this** to your actual Shopify or e-commerce platform URL.

## 📸 Images

Product and blog images are currently placeholders. To add real images:

1. Add images to `/public/images/`
2. Update import paths in component files
3. Use Next.js `Image` component for optimization

## 🚢 Deployment

Ready for Vercel deployment:

```bash
npm run build  # Verify build succeeds
git push       # Push to GitHub
# Connect repo to Vercel dashboard
```

Build passes TypeScript checks and creates optimized production bundle.

## 📞 Support

For questions about the implementation, refer to:
- `/lib/products.ts` — Product data structure
- `/lib/blog.ts` — Blog post data structure
- Component files in `/components/` for UI patterns
- `tailwind.config.ts` for design tokens

---

**Built with Next.js 14, TypeScript, and Tailwind CSS**
