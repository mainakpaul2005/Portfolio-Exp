# Header Font Options

## Current Setup
- **Headers**: Space Grotesk (modern, geometric, tech-forward)
- **Body**: Inter (clean, professional, highly readable)

## How to Change Header Font

Simply update `src/app/fonts.ts` with your preferred option below:

---

## 🎨 Recommended Header Fonts

### 1. **Space Grotesk** (Current) ⭐
Modern, geometric, excellent for tech portfolios
```typescript
import { Inter, Space_Grotesk } from 'next/font/google'

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})
```

### 2. **Poppins**
Friendly, rounded, approachable
```typescript
import { Inter, Poppins } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})
```

### 3. **Montserrat**
Bold, impactful, great for headlines
```typescript
import { Inter, Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})
```

### 4. **Outfit**
Clean, modern, versatile
```typescript
import { Inter, Outfit } from 'next/font/google'

export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})
```

### 5. **Sora**
Futuristic, tech-forward
```typescript
import { Inter, Sora } from 'next/font/google'

export const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})
```

### 6. **Plus Jakarta Sans**
Modern, professional, readable
```typescript
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})
```

### 7. **Raleway**
Elegant, sophisticated
```typescript
import { Inter, Raleway } from 'next/font/google'

export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})
```

### 8. **DM Sans**
Clean, geometric, professional
```typescript
import { Inter, DM_Sans } from 'next/font/google'

export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-heading',
  display: 'swap',
})
```

### 9. **Work Sans**
Versatile, readable, modern
```typescript
import { Inter, Work_Sans } from 'next/font/google'

export const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})
```

### 10. **Manrope**
Contemporary, balanced
```typescript
import { Inter, Manrope } from 'next/font/google'

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})
```

---

## 📝 How to Apply Your Choice

1. **Update `src/app/fonts.ts`**: Replace the font import and configuration
2. **Update `src/app/layout.tsx`**: Update the export name and className
3. **That's it!** The font will automatically apply to all headers

### Example Change:
If you want to use **Montserrat** instead:

**Step 1** - Edit `src/app/fonts.ts`:
```typescript
import { Inter, Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})
```

**Step 2** - Edit `src/app/layout.tsx`:
```typescript
import { montserrat, inter } from './fonts'

// In the body tag:
className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
```

---

## 🎯 Font Pairing Recommendations

### For Tech/Developer Portfolio
- Headers: **Space Grotesk** / Body: **Inter** ✅ (Current)
- Headers: **Sora** / Body: **Inter**
- Headers: **Outfit** / Body: **DM Sans**

### For Creative Portfolio
- Headers: **Poppins** / Body: **Inter**
- Headers: **Montserrat** / Body: **Raleway**
- Headers: **Plus Jakarta Sans** / Body: **Inter**

### For Professional/Corporate
- Headers: **DM Sans** / Body: **Inter**
- Headers: **Work Sans** / Body: **Inter**
- Headers: **Manrope** / Body: **Inter**

---

## 🌐 More Font Options

Visit [Google Fonts](https://fonts.google.com/) to explore thousands more options.

All Google Fonts are:
- ✅ Free to use
- ✅ Optimized for web
- ✅ Easy to integrate with Next.js
- ✅ Hosted on Google's CDN
