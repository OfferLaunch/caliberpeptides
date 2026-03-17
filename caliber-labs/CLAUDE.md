# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Commands

```bash
npm run dev      # Start dev server (http://localhost:3001)
npm run build    # Build production bundle
npm start        # Start production server
npm run lint     # Run ESLint
```

## Project Overview

**Caliber Labs** is a marketing + e-commerce catalog website for research-grade lyophilized chemicals. Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and Framer Motion animations.

### Key Tech Stack
- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4.2.1
- **Animations**: Framer Motion 12.35.0
- **Icons**: Lucide React 0.577.0
- **Fonts**: Plus Jakarta Sans (display), Inter (body), IBM Plex Mono (mono)

## Architecture

### Directory Structure

**App Router Pages** (`/app/`)
- `page.tsx` — Homepage with hero, featured products, categories, blog preview
- `/products/page.tsx` — Product catalog with filtering
- `/products/[slug]/page.tsx` — Individual product detail pages with tabs
- `/blog/page.tsx` — Blog listing with category filters
- `/blog/[slug]/page.tsx` — Individual blog post pages
- `/coa/page.tsx` — Certificate of Analysis lookup tool
- `layout.tsx` — Global layout with font configuration

**Components** (`/components/`)
- `/layout/` — Navbar (sticky, mobile menu), Footer (multi-column)
- `/home/` — Hero, TrustBadges, FeaturedProducts, CategoryGrid, AboutStrip, BlogPreview
- `/products/` — ProductCard, ProductGrid, ProductFilters
- `/blog/` — ArticleCard
- `/coa/` — CoaSearch
- `/ui/` — Reusable: Button, Badge, SectionHeader

**Data & Utilities** (`/lib/`)
- `products.ts` — Product interface & array with 8 sample products
- `blog.ts` — BlogPost interface & array with 5 sample articles

### Design System

**Color Tokens** (defined in `tailwind.config.ts`)
- `espresso` (#2D241E) — Primary text, dark sections, footer background
- `sage` (#7D8F78) — CTAs, buttons, accent hover states
- `parchment` (#F5F2ED) — Primary page background, navbar background
- `glass` (#D1DBCB) — Card backgrounds, borders, subtle dividers

**Font Families** (loaded in `app/layout.tsx` via Google Fonts)
- `font-display` — **Tenor Sans** (primary logo, headings, hero, section titles)
- `font-body` — **Inter / Plus Jakarta Sans** (body copy, UI labels, supporting copy; interchangeable)
- `font-mono` — **IBM Plex Mono** (batch numbers, USP-grade callouts, technical specs; lab aesthetic)

## Data Structures

### Product Interface
```ts
interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;        // 'GHRP', 'BPC', 'Recovery', etc.
  purity: number;          // e.g., 99.2 (percentage)
  price: number;           // USD
  form: string;            // e.g., 'Lyophilized Powder'
  image: string;           // Path to /public/images/
  description: string;     // Short product description
  specs?: string;          // Optional product specs (vial size, etc.)
}
```

### BlogPost Interface
```ts
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;        // Full article content (optional)
  author: string;
  date: string;            // ISO format
  category: string;        // 'Research', 'Educational', 'Technical'
  featured: boolean;       // Appears in homepage preview
}
```

## Common Patterns

### Using Brand Colors in Components
```tsx
// Use Tailwind classes directly
className="bg-espresso text-parchment"
className="hover:text-sage"
className="border border-glass"
```

### Animations with Framer Motion
Most home page sections use container/item variants for staggered animations. Example in Hero.tsx shows the pattern for:
1. Container with `staggerChildren` timing
2. Individual items with fade + slide-up
3. `motion.div` wrapping animated elements

### Images
- Product/blog images are placeholders at `/public/images/`
- Use Next.js `Image` component with explicit `width`/`height` props
- Aspect ratio: specify `style={{ width: 'auto' }}` when using fixed height

### External Links
All shop links currently point to `https://shop.example.com`. Update this placeholder when connecting to real e-commerce.

## Important Files & Patterns

- **`app/layout.tsx`** — Global metadata & font loading (don't move font config)
- **`tailwind.config.ts`** — Brand color definitions (source of truth for design)
- **`lib/products.ts` & `lib/blog.ts`** — Mock data (connect to real CMS/API when needed)
- **Navigation** — Navbar has mobile menu toggle; managed by useState + AnimatePresence
- **Sticky Navbar** — Uses `sticky top-0 z-50` with scroll detection

## Build & Deployment

- **Dev**: `npm run dev` → Next.js dev server with hot reload
- **Build**: `npm run build` → Creates `.next/` optimized production bundle
- **Lint**: `npm run lint` → ESLint (uses Next.js config)
- **Production**: `npm start` → Starts production server

Build passes TypeScript strict mode and produces optimized bundle. Ready for Vercel deployment.

## Notes

- **Mobile-first responsive design** — All components use Tailwind breakpoints (sm, md, lg)
- **COA search** is currently mock (accepts batch numbers starting with "CP")
- **Product/blog images** are placeholders; update `/public/images/` when adding real assets
- **TypeScript strict mode** enabled — no `any` types in new code
- **Port config** — Dev server typically runs on `:3001` or `:3002` depending on availability
