# Quick Reference Guide

## 🚀 Getting Started

### Install Dependencies
```powershell
npm install
```

### Start Development Server
```powershell
npm run dev
```
Open http://localhost:3000

### Build for Production
```powershell
npm run build
npm start
```

---

## 📝 Common Tasks

### Add a New Page

1. Create file in `src/app/newpage/page.tsx`:
```typescript
export default function NewPage() {
  return <div>New Page</div>
}
```

2. Add to navigation in `src/components/layout/navbar.tsx`:
```typescript
const navItems = [
  // ... existing items
  { name: 'New Page', href: '/newpage' },
]
```

### Add a shadcn/ui Component

```powershell
npx shadcn-ui@latest add [component-name]
```

Examples:
```powershell
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add tabs
```

### Update Personal Information

Edit `src/lib/constants.ts`:
```typescript
export const siteConfig = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description',
  url: 'https://yourdomain.com',
  ogImage: 'https://yourdomain.com/og.jpg',
  links: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
    email: 'your.email@example.com',
  },
}
```

### Add a Project

Edit `src/components/sections/projects.tsx`:
```typescript
const projects: Project[] = [
  {
    id: '4',
    title: 'New Project',
    description: 'Project description',
    image: '/projects/new-project.jpg',
    tags: ['React', 'TypeScript'],
    github: 'https://github.com/you/project',
    demo: 'https://project-demo.com',
    featured: true,
  },
  // ... existing projects
]
```

### Add Work Experience

Edit `src/components/sections/experience.tsx`:
```typescript
const experiences: ExperienceType[] = [
  {
    id: '4',
    company: 'Company Name',
    position: 'Position Title',
    period: '2023 - Present',
    description: 'What you did at this company',
    technologies: ['React', 'Node.js', 'AWS'],
  },
  // ... existing experiences
]
```

### Change Theme Colors

1. Visit https://ui.shadcn.com/themes
2. Copy CSS variables
3. Paste into `src/app/globals.css` under `:root` and `.dark`

Or manually edit:
```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Your color */
}
```

### Add Custom Fonts

1. Import in `src/app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({
  subsets: ['latin'],
  variable: '--font-your-font',
  display: 'swap',
})
```

2. Add to body:
```typescript
<body className={`${yourFont.variable} font-sans`}>
```

3. Use in Tailwind:
```typescript
<div className="font-[family-name:var(--font-your-font)]">
```

---

## 🎨 Styling Quick Reference

### Common Tailwind Classes

```typescript
// Layout
<div className="container mx-auto px-4">

// Flexbox
<div className="flex items-center justify-between gap-4">

// Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// Responsive
<div className="text-sm md:text-base lg:text-lg">

// Dark mode
<div className="bg-white dark:bg-slate-900">

// Hover/Focus
<button className="hover:bg-primary/90 focus:ring-2">
```

### shadcn/ui Components

```typescript
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

<Button variant="default" size="lg">Click me</Button>
<Badge variant="secondary">Tag</Badge>
```

---

## 🔧 Configuration Files

### next.config.js
```javascript
// Add custom configuration
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },
}
```

### tailwind.config.ts
```typescript
// Extend theme
theme: {
  extend: {
    colors: {
      'custom': '#123456',
    },
  },
}
```

---

## 🐛 Troubleshooting

### TypeScript Errors

```powershell
# Clear cache and restart
Remove-Item -Recurse -Force .next
npm run dev
```

### Build Errors

```powershell
# Clean install
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
npm run build
```

### Module Not Found

```powershell
# Check if installed
npm list [package-name]

# Reinstall
npm install [package-name]
```

### Hydration Errors

1. Check for client/server mismatches
2. Ensure client components have `'use client'`
3. Use `suppressHydrationWarning` on theme-dependent elements

### Email Not Sending

1. Verify SMTP credentials in `.env.local`
2. Check spam folder
3. Test with a simple email client first
4. Enable less secure apps (Gmail)

---

## 📦 Useful Commands

```powershell
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run linter

# Dependencies
npm install [pkg]    # Install package
npm uninstall [pkg]  # Remove package
npm update           # Update packages
npm outdated         # Check for updates

# Git
git status           # Check status
git add .            # Stage changes
git commit -m "msg"  # Commit changes
git push             # Push to remote

# Vercel
vercel               # Deploy preview
vercel --prod        # Deploy production
vercel env ls        # List env variables
vercel env add       # Add env variable
```

---

## 📚 Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Vercel Docs](https://vercel.com/docs)

### Tools
- [Tailwind Play](https://play.tailwindcss.com) - Test Tailwind classes
- [shadcn/ui Themes](https://ui.shadcn.com/themes) - Theme generator
- [Real Favicon Generator](https://realfavicongenerator.net) - Generate favicons
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance audit

### Icons
- [Lucide Icons](https://lucide.dev) - Search icons
- [Heroicons](https://heroicons.com) - Alternative icons

### Images
- [Unsplash](https://unsplash.com) - Free photos
- [Pexels](https://pexels.com) - Free photos
- [TinyPNG](https://tinypng.com) - Image compression

### Fonts
- [Google Fonts](https://fonts.google.com)
- [Fontjoy](https://fontjoy.com) - Font pairing

---

## 🎯 Performance Checklist

- [ ] All images optimized (WebP, correct sizes)
- [ ] Fonts loaded with `next/font`
- [ ] Unused dependencies removed
- [ ] Bundle size checked (`npm run build`)
- [ ] Lighthouse score 95+ (all categories)
- [ ] No console errors
- [ ] Dark mode tested
- [ ] Mobile responsive
- [ ] Forms validated
- [ ] Links working
- [ ] SEO metadata complete
- [ ] Analytics configured

---

## 📧 Support

If you encounter issues:

1. Check this guide
2. Review SETUP_GUIDE.md
3. Check ARCHITECTURE.md
4. Search GitHub Issues
5. Create new issue with:
   - Error message
   - Steps to reproduce
   - Expected behavior
   - Environment (OS, Node version)

---

## 🔄 Updates

To update the portfolio:

1. Make changes locally
2. Test with `npm run dev`
3. Build and test production: `npm run build && npm start`
4. Commit and push to GitHub
5. Vercel deploys automatically

---

## 📝 Notes

- Always test locally before deploying
- Keep dependencies updated regularly
- Monitor Core Web Vitals in production
- Back up `.env.local` securely
- Use feature branches for major changes
- Run Lighthouse audits after updates
