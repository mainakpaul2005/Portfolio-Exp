# Modern Developer Portfolio

A sleek, high-performance portfolio website showcasing modern web development skills. Built with Next.js 14, TypeScript, and featuring advanced animations and responsive design.

![Portfolio Preview](./public/profile1.jpg)

## ✨ Features

- ⚡️ **Next.js 14** with App Router and TypeScript
- 🎨 **shadcn/ui** components with Tailwind CSS
- 🌈 **Advanced animations** with Framer Motion and GSAP
- 🌙 **Dark/Light mode** toggle with next-themes
- 📱 **Fully responsive** design across all devices
- ⚡️ **Optimized performance** with lazy loading and SSR
- 📧 **EmailJS integration** for contact form
- 🎯 **Interactive components** including LogoLoop, PixelTransition, and DomeGallery
- 🚀 **Vercel-ready** deployment configuration
- ♿️ **Accessible** design (WCAG 2.1 AA compliant)
- 🔍 **SEO optimized** with comprehensive metadata
- 📊 **GitHub contributions** visualization
- 🎨 **Professional project showcases** with placeholder designs

## 🏗️ Project Sections

- **Hero Section**: Eye-catching introduction with social links
- **About Section**: Personal info, skills badges, tech stack carousel, and GitHub contributions
- **Projects Section**: Featured project cards with technology tags
- **Education Section**: Academic background and certifications
- **Contact Section**: Professional contact form with animated background

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git for version control

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/mainakpaul2005/Portfolio-Exp.git
cd Portfolio-Exp
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create `.env.local` in the root directory:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Contact form API endpoint
│   ├── globals.css              # Global styles with custom CSS variables
│   ├── fonts.ts                 # Font configurations
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Main homepage
│   └── not-found.tsx            # 404 page
├── components/
│   ├── ui/                      # shadcn/ui components
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── separator.tsx
│   │   └── textarea.tsx
│   ├── layout/                  # Layout components
│   │   ├── navbar.tsx           # Responsive navigation with smooth scrolling
│   │   ├── footer.tsx           # Comprehensive footer with social links
│   │   └── theme-toggle.tsx     # Dark/light mode toggle
│   ├── sections/                # Main page sections
│   │   ├── hero.tsx             # Hero section with social links
│   │   ├── about.tsx            # About with skills, GitHub stats, LogoLoop
│   │   ├── projects.tsx         # Project showcase cards
│   │   ├── education.tsx        # Education and certifications
│   │   └── contact.tsx          # Contact form with PixelTransition
│   ├── animated-background.tsx  # Hero background animations
│   ├── DomeGallery.tsx         # Interactive 3D gallery component
│   ├── LogoLoop.tsx            # Horizontal scrolling tech stack
│   ├── PixelTransition.tsx     # Pixel animation component
│   ├── Stack.tsx               # Draggable photo stack
│   ├── TiltedCard.tsx          # 3D tilted card effect
│   ├── Waves.tsx               # Animated wave background
│   ├── error-boundary.tsx      # Error boundary wrapper
│   ├── providers.tsx           # Theme and context providers
│   └── smooth-scroll.tsx       # Smooth scrolling utility
├── lib/
│   ├── constants.ts            # Site configuration and metadata
│   ├── smooth-scroll.ts        # Smooth scrolling implementation
│   ├── techStackIcons.ts       # Tech stack icon definitions
│   ├── utils.ts                # Utility functions
│   └── validations.ts          # Zod form validation schemas
├── types/
│   └── index.ts                # TypeScript type definitions
public/
├── icons/                      # Tech stack and social media icons
│   ├── react.svg
│   ├── nextjs.svg
│   ├── typescript.svg
│   ├── firebase.svg
│   ├── figma.svg
│   └── ... (21 total icons)
├── projects/                   # Project placeholder images
│   ├── project-1.svg
│   ├── project-2.svg
│   └── project-3.svg
├── profile1.jpg               # Profile photos for Stack component
├── profile2.jpeg
├── profile3.jpeg
├── profile4.jpeg
├── favicon.ico
└── site.webmanifest
```

## 🎨 Customization

### 1. Personal Information

Edit `src/lib/constants.ts` to update your personal details:

```typescript
export const siteConfig = {
  name: 'Your Name',
  title: 'Your Professional Title',
  description: 'Brief description about yourself and your work',
  url: 'https://yourportfolio.com',
  links: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
    instagram: 'https://instagram.com/yourhandle',
    email: 'your.email@example.com'
  }
}
```

### 2. Skills and Technologies

Update your skills in `src/components/sections/about.tsx`:

```typescript
const skills = [
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  // Add your skills here
]
```

And update the tech stack icons in `src/lib/techStackIcons.ts`:

```typescript
export const techStackIcons = [
  { src: '/icons/react.svg', alt: 'React' },
  // Add your tech stack icons
]
```

### 3. Projects

Update your projects in `src/components/sections/projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project Title',
    description: 'Project description',
    image: '/projects/your-project.svg',
    tags: ['Technology', 'Stack'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://your-project-demo.com',
    featured: true,
  }
]
```

### 4. Education

Update your education in `src/components/sections/education.tsx`:

```typescript
const education = [
  {
    institution: 'Your University',
    degree: 'Your Degree',
    duration: 'Year Range',
    location: 'Location',
    gpa: '3.8/4.0',
    description: 'Description of your studies',
    // Add more details
  }
]
```

### 5. Theme Customization

Modify `src/app/globals.css` to customize colors:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 98%;
  /* Customize other CSS variables */
}
```

### 6. Profile Images

Replace the profile images in `/public/`:
- `profile1.jpg` - Main profile photo
- `profile2.jpeg` through `profile4.jpeg` - Additional photos for Stack component

### 7. Project Images

Add your project screenshots to `/public/projects/` and update the references in the projects array.

## 📧 Email Configuration

This portfolio uses **EmailJS** for the contact form - a simple, reliable solution that doesn't require backend setup.

### EmailJS Setup

1. **Create Account**: Sign up at [EmailJS](https://www.emailjs.com/)
2. **Add Email Service**: Connect your email provider (Gmail, Outlook, etc.)
3. **Create Template**: Design your email template with variables
4. **Get Credentials**: Copy your Service ID, Template ID, and Public Key
5. **Add to Environment**: Update your `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

For detailed setup instructions, see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md).

### Alternative: Custom API Route

The project includes a custom API route at `/api/contact` using Nodemailer. To use this instead:

1. Configure SMTP settings in `.env.local`
2. Update the contact form to use `/api/contact` endpoint
3. Set up proper email authentication

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**: Ensure your code is in a GitHub repository
2. **Import to Vercel**: Connect your GitHub account to [Vercel](https://vercel.com)
3. **Environment Variables**: Add your EmailJS credentials in Vercel dashboard
4. **Deploy**: Vercel will automatically deploy on push

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mainakpaul2005/Portfolio-Exp)

### Other Deployment Options

**Netlify**:
```bash
npm run build
# Upload /out folder to Netlify
```

**Docker**:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

**Static Export**:
```bash
npm run build
# Serve the /out directory
```

## � Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
```

## 📊 Performance Optimizations

This portfolio is built with performance in mind:

- **Lighthouse Score**: 95+
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Optimized bundle sizes
- **Caching**: Aggressive caching strategies
- **SSR/SSG**: Server-side rendering for optimal SEO

### Performance Features:
- Dynamic imports for heavy components
- Optimized fonts with `next/font`
- Compressed images and SVG icons
- Minimal JavaScript bundles
- CSS-in-JS with zero runtime
- Error boundaries for reliability

## 📦 Tech Stack

### Core Technologies
- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom CSS variables
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) built on Radix UI

### Animation & Interaction
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth transitions
- **3D Effects**: [GSAP](https://greensock.com/gsap/) for advanced animations
- **Custom Components**: LogoLoop, PixelTransition, DomeGallery, Stack

### Form & Validation
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/) for runtime type checking
- **Email Service**: [EmailJS](https://www.emailjs.com/) for contact forms

### Development & Quality
- **Linting**: [ESLint](https://eslint.org/) with Next.js configuration
- **Formatting**: [Prettier](https://prettier.io/) for consistent code style
- **Git Hooks**: Pre-commit hooks for code quality
- **Error Handling**: Custom error boundaries

### Deployment & Analytics
- **Platform**: [Vercel](https://vercel.com/) for optimal Next.js deployment
- **Analytics**: Built-in Vercel Analytics support
- **SEO**: Next.js Metadata API for search optimization

## 🌟 Key Features Breakdown

### Interactive Components
- **LogoLoop**: Horizontal infinite scroll of technology icons
- **PixelTransition**: Animated pixel-based image transitions
- **DomeGallery**: 3D interactive gallery component
- **Stack**: Draggable photo stack with physics
- **TiltedCard**: 3D card tilt effects on hover
- **Waves**: Animated wave background patterns

### Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Adaptive Layouts**: Different layouts for mobile/tablet/desktop
- **Touch-Friendly**: Large touch targets and smooth interactions
- **Performance**: Lazy loading and optimized rendering

### Accessibility
- **WCAG 2.1 AA**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Color Contrast**: High contrast ratios for readability

## 🔄 Recent Updates

- ✅ Added comprehensive Education section with card layout
- ✅ Enhanced hero social links with bigger size and brighter colors  
- ✅ Implemented fully responsive contact card with mobile optimizations
- ✅ Fixed infinite loading issues with dynamic imports
- ✅ Created placeholder SVG images for project showcases
- ✅ Updated tech stack with latest technologies (Firebase, Figma, Gemini API)
- ✅ Improved footer with comprehensive information and social links
- ✅ Added error boundaries and loading states for better UX

## 📝 License

MIT License - feel free to use this project as a template for your own portfolio.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/mainakpaul2005/Portfolio-Exp/issues).

## � Contact

**Mainak Paul** - [GitHub](https://github.com/mainakpaul2005) - [Email](mailto:your.email@example.com)

**Project Link**: [https://github.com/mainakpaul2005/Portfolio-Exp](https://github.com/mainakpaul2005/Portfolio-Exp)

---

⭐️ If you found this portfolio template helpful, please give it a star!
