# Deployment Guide

## Vercel Deployment (Recommended)

Vercel is the recommended platform for deploying Next.js applications.

### Initial Setup

1. **Push to GitHub**
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Visit [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   
   In Vercel Dashboard → Project → Settings → Environment Variables, add:
   
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   EMAIL_FROM=your-email@gmail.com
   EMAIL_TO=your-personal-email@gmail.com
   NEXT_PUBLIC_SITE_URL=https://yourportfolio.vercel.app
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - Get your live URL: `https://yourportfolio.vercel.app`

### Custom Domain

1. **Add Domain in Vercel**
   - Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update Environment Variables**
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

3. **Redeploy**
   - Trigger a new deployment for changes to take effect

### Continuous Deployment

Vercel automatically deploys when you push to your main branch:

```powershell
git add .
git commit -m "Update portfolio"
git push origin main
```

## Alternative Hosting Options

### Netlify

1. **Install Netlify CLI**
   ```powershell
   npm install -g netlify-cli
   ```

2. **Build Project**
   ```powershell
   npm run build
   ```

3. **Deploy**
   ```powershell
   netlify deploy --prod
   ```

### Self-Hosting (VPS)

1. **Build Project**
   ```powershell
   npm run build
   ```

2. **Install PM2**
   ```powershell
   npm install -g pm2
   ```

3. **Start Application**
   ```powershell
   pm2 start npm --name "portfolio" -- start
   ```

4. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Post-Deployment Checklist

- [ ] Test all pages and sections
- [ ] Verify contact form works
- [ ] Check dark mode toggle
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (target 95+)
- [ ] Verify analytics are tracking
- [ ] Test social media previews
- [ ] Check all external links
- [ ] Verify custom domain (if applicable)
- [ ] Set up monitoring/alerts

## Monitoring

### Vercel Analytics

Automatically enabled with:
```typescript
import { Analytics } from '@vercel/analytics/react'
<Analytics />
```

### Speed Insights

Monitor Core Web Vitals:
```typescript
import { SpeedInsights } from '@vercel/speed-insights/next'
<SpeedInsights />
```

## Troubleshooting

### Build Errors

**Issue**: Build fails with TypeScript errors
**Solution**: Run `npm run build` locally first to catch errors

**Issue**: Environment variables not working
**Solution**: Ensure all env vars are set in Vercel dashboard

### Runtime Errors

**Issue**: Contact form not sending emails
**Solution**: Verify SMTP credentials and test with a simple email client first

**Issue**: Hydration errors with theme
**Solution**: Ensure ThemeProvider has `suppressHydrationWarning`

### Performance Issues

**Issue**: Low Lighthouse scores
**Solution**: 
- Optimize images (use WebP format)
- Check bundle size with `npm run build`
- Lazy load non-critical components

## Rollback

If a deployment causes issues:

1. **In Vercel Dashboard**
   - Go to Deployments
   - Find previous working deployment
   - Click "Promote to Production"

2. **Via Git**
   ```powershell
   git revert HEAD
   git push origin main
   ```

## Security

### Environment Variables

- Never commit `.env.local` to Git
- Use different credentials for production
- Rotate SMTP passwords regularly

### Content Security Policy

Add to `next.config.js` for enhanced security:

```javascript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
]

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
```
