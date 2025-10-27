# Developer Portfolio Setup Guide

## Project Overview
High-performance, professional developer portfolio built with:
- **Framework**: Next.js 14+ (App Router)
- **UI Library**: shadcn/ui + Tailwind CSS
- **Visual Effects**: React Bits (Backgrounds)
- **Deployment**: Vercel
- **Language**: TypeScript

## Quick Start

### 1. Initialize Next.js Project
```powershell
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"
```

Answer the prompts:
- ✅ TypeScript
- ✅ ESLint
- ✅ Tailwind CSS
- ✅ `src/` directory
- ✅ App Router
- ✅ Import alias (@/*)

### 2. Install Core Dependencies
```powershell
npm install next-themes lucide-react class-variance-authority clsx tailwind-merge
npm install -D @types/node @types/react @types/react-dom
```

### 3. Initialize shadcn/ui
```powershell
npx shadcn-ui@latest init
```

Configuration:
- Style: Default
- Base color: Slate (or your preference)
- CSS variables: Yes

### 4. Install shadcn/ui Components
```powershell
npx shadcn-ui@latest add button card badge separator avatar input textarea label
```

### 5. Install React Bits (for animated backgrounds)
```powershell
npm install @react-bits/backgrounds
```

### 6. Install Additional Dependencies
```powershell
npm install framer-motion @vercel/analytics @vercel/speed-insights
npm install nodemailer zod react-hook-form @hookform/resolvers
npm install -D @types/nodemailer
```

## Architecture & Best Practices

### Server vs Client Components
- **Server Components (default)**: Use for static content, data fetching, SEO-critical content
- **Client Components**: Use for interactivity, hooks, event listeners, browser APIs

Mark client components with `'use client'` directive at the top.

### Performance Strategies

#### 1. Code Splitting & Lazy Loading
```typescript
// Dynamic import for heavy components
const AnimatedBackground = dynamic(
  () => import('@/components/animated-background'),
  { ssr: false, loading: () => <div className="fixed inset-0 bg-background" /> }
)
```

#### 2. Image Optimization
```typescript
import Image from 'next/image'
// Always use Next.js Image component with proper sizing
<Image 
  src="/projects/project1.jpg" 
  alt="Project" 
  width={600} 
  height={400}
  loading="lazy"
  quality={85}
/>
```

#### 3. Font Optimization
```typescript
// Use next/font for self-hosted fonts
import { Inter, JetBrains_Mono } from 'next/font/google'
```

#### 4. Prevent Layout Shift
- Define explicit dimensions for images and containers
- Use `aspect-ratio` CSS
- Reserve space for animated backgrounds

### Hydration Issues Prevention
React Bits backgrounds use canvas/animations that need browser APIs:
- Wrap in dynamic import with `ssr: false`
- Ensure no mismatches between server/client HTML
- Use `suppressHydrationWarning` on theme provider

### Dark Mode Implementation
Uses `next-themes` for seamless theme switching:
- Prevents flash of unstyled content
- Persists preference in localStorage
- Works with Server Components via context

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Home page (Hero section)
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── experience/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Form submission handler
│   ├── globals.css
│   └── not-found.tsx
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── theme-toggle.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── projects.tsx
│   │   ├── experience.tsx
│   │   └── contact-form.tsx
│   ├── animated-background.tsx
│   └── providers.tsx
├── lib/
│   ├── utils.ts                # Utility functions
│   ├── validations.ts          # Zod schemas
│   └── constants.ts            # Site metadata
└── types/
    └── index.ts                # TypeScript types
```

## Vercel Deployment

### Environment Variables
Create `.env.local`:
```env
# Email configuration (for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=your-personal-email@gmail.com
```

### Vercel Configuration
Create `vercel.json`:
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "regions": ["iad1"]
}
```

### Deployment Steps
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Core Web Vitals Optimization

### Largest Contentful Paint (LCP)
- Optimize hero images (WebP, proper sizing)
- Preload critical assets
- Use Server Components for initial render

### First Input Delay (FID)
- Minimize JavaScript bundle size
- Code split heavy components
- Use Web Workers for intensive tasks

### Cumulative Layout Shift (CLS)
- Set explicit dimensions for all images/videos
- Reserve space for dynamic content
- Avoid inserting content above existing content

### Implementation
Add to `src/app/layout.tsx`:
```typescript
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

// In layout return
<SpeedInsights />
<Analytics />
```

## SEO Best Practices

### Metadata API
Use Next.js 14 Metadata API in each page:
```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Name - Full Stack Developer',
  description: 'Portfolio showcasing...',
  keywords: ['developer', 'next.js', 'react'],
  openGraph: { ... },
  twitter: { ... }
}
```

## Development Workflow

1. **Start dev server**: `npm run dev`
2. **Build for production**: `npm run build`
3. **Test production build**: `npm start`
4. **Lint**: `npm run lint`

## Next Steps After Setup

1. ✅ Customize theme colors in `tailwind.config.ts`
2. ✅ Add your personal content to components
3. ✅ Configure email service for contact form
4. ✅ Add project images to `public/projects/`
5. ✅ Test dark mode thoroughly
6. ✅ Run Lighthouse audit
7. ✅ Deploy to Vercel
8. ✅ Configure custom domain

## Troubleshooting

### Hydration Errors
- Check for `'use client'` on interactive components
- Ensure React Bits is loaded client-side only
- Verify no server/client HTML mismatches

### Build Errors on Vercel
- Check Node version compatibility
- Verify all environment variables are set
- Review build logs for missing dependencies

### Theme Flash on Load
- Ensure ThemeProvider has `suppressHydrationWarning`
- Check that theme script loads before content
- Verify `next-themes` is properly configured
