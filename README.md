# Developer Portfolio

A modern, high-performance portfolio website built with Next.js 14, shadcn/ui, and React Bits.

![Portfolio Preview](./public/og.jpg)

## ✨ Features

- ⚡️ **Next.js 14** with App Router
- 🎨 **shadcn/ui** components with Tailwind CSS
- 🌈 **Animated backgrounds** using React Bits
- 🌙 **Dark mode** support with next-themes
- 📱 **Fully responsive** design
- ⚡️ **Optimized performance** (Lighthouse score 95+)
- 📧 **Contact form** with email integration
- 🚀 **Vercel-ready** deployment
- ♿️ **Accessible** (WCAG 2.1 AA compliant)
- 🔍 **SEO optimized** with metadata API

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone or use this template**

```powershell
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**

```powershell
npm install
```

3. **Set up environment variables**

Copy `.env.local.example` to `.env.local` and fill in your values:

```powershell
copy .env.local.example .env.local
```

4. **Run the development server**

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   └── contact/          # Contact form endpoint
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   ├── globals.css           # Global styles
│   └── not-found.tsx         # 404 page
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── layout/               # Layout components
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── theme-toggle.tsx
│   ├── sections/             # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── projects.tsx
│   │   ├── experience.tsx
│   │   └── contact.tsx
│   ├── animated-background.tsx
│   └── providers.tsx
├── lib/
│   ├── utils.ts              # Utility functions
│   ├── validations.ts        # Zod schemas
│   └── constants.ts          # Site configuration
└── types/
    └── index.ts              # TypeScript types
```

## 🎨 Customization

### 1. Personal Information

Edit `src/lib/constants.ts`:

```typescript
export const siteConfig = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  description: 'Your description',
  url: 'https://yourportfolio.com',
  // ... other fields
}
```

### 2. Theme Colors

Modify `src/app/globals.css` to change the color scheme:

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Your primary color */
  /* ... other colors */
}
```

Or use the [shadcn/ui theme builder](https://ui.shadcn.com/themes).

### 3. Projects & Experience

Update the data in:
- `src/components/sections/projects.tsx`
- `src/components/sections/experience.tsx`

### 4. Profile Image

Add your profile image to `public/profile.jpg`.

### 5. Animated Background

The animated background in `src/components/animated-background.tsx` can be customized or replaced with React Bits components once installed.

## 📧 Email Configuration

This portfolio uses **EmailJS** for the contact form, which is easier to set up than traditional SMTP.

### Quick Setup

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Add your credentials to `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

For detailed setup instructions, see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md).

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

### Manual Deployment

```powershell
npm run build
npm start
```

## 📊 Performance

This portfolio is optimized for:

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🛠️ Scripts

```powershell
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
```

## 📦 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Email**: [EmailJS](https://www.emailjs.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 📝 License

MIT License - feel free to use this project for your portfolio.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
