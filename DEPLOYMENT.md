# 🚀 Production Deployment Guide - Evolution Group Landing

## ✅ Pre-Deployment Checklist

### 1. Code Quality
- [x] Build passes without errors (`npm run build`)
- [x] All TypeScript errors resolved
- [x] ESLint passes (`npm run lint`)
- [ ] Run tests if available (`npm test`)

### 2. Performance Optimization
- [x] Next.js build optimization enabled
- [x] Image optimization configured
- [x] Code splitting implemented
- [x] Bundle size optimized (< 200KB First Load JS)

### 3. Security
- [x] Security headers configured (Netlify)
- [x] Environment variables secured
- [x] No sensitive data in code
- [x] Docker runs as non-root user
- [x] HTTPS enforced (via hosting)

### 4. SEO & Analytics
- [ ] Meta tags verified in all pages
- [ ] Open Graph images added
- [ ] Sitemap generated (optional)
- [ ] Google Analytics configured (if needed)
- [ ] robots.txt configured (if needed)

---

## 🌐 Netlify Deployment (Recommended)

### Quick Deploy
1. **Push to Git repository**
   ```bash
   git add .
   git commit -m "Production ready"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Netlify will auto-detect Next.js settings

3. **Verify Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `20`

4. **Environment Variables** (if needed)
   - Go to Site settings → Environment variables
   - Add variables from `.env.example`

5. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete
   - Your site will be live at: `https://[site-name].netlify.app`

### Custom Domain
1. Go to Domain settings
2. Add custom domain: `evogroup.ai`
3. Configure DNS records as shown
4. SSL certificate auto-provisions

---

## 🐳 Docker Deployment

### Local Testing
```bash
# Build the image
docker-compose build

# Run container
docker-compose up -d

# Check logs
docker-compose logs -f

# Access at http://localhost:4599
```

### Production Server Deployment

#### Option 1: Direct Docker
```bash
# On your server
git clone [your-repo-url]
cd evogroup.ai

# Build and run
docker-compose up -d --build

# Check status
docker-compose ps
```

#### Option 2: With Nginx Reverse Proxy
```nginx
# /etc/nginx/sites-available/evogroup.ai
server {
    listen 80;
    server_name evogroup.ai www.evogroup.ai;
    
    location / {
        proxy_pass http://localhost:4599;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Enable site and reload nginx
sudo ln -s /etc/nginx/sites-available/evogroup.ai /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Get SSL certificate
sudo certbot --nginx -d evogroup.ai -d www.evogroup.ai
```

---

## 🔧 Environment Variables for Production

Create these in your hosting platform:

### Required
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://evogroup.ai
```

### Optional
```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_YANDEX_METRIKA_ID=XXXXXXXX

# Contact Form API (if using external service)
NEXT_PUBLIC_FORM_API_URL=https://api.example.com/contact
FORM_API_SECRET=your-secret-key
```

---

## 🔍 Post-Deployment Verification

### 1. Functional Testing
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms submit (if applicable)
- [ ] Images load properly
- [ ] Animations work smoothly
- [ ] Language switcher works

### 2. Performance Testing
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/)
  - Target: > 90 for all metrics
- [ ] Test on mobile devices
- [ ] Check loading times
- [ ] Verify no console errors

### 3. SEO Check
- [ ] Meta tags present
- [ ] Open Graph working
- [ ] Twitter cards working
- [ ] Structured data valid

### 4. Cross-Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

### 5. Monitoring Setup
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure error tracking (Sentry)
- [ ] Analytics tracking (GA, Yandex Metrika)

---

## 📊 Performance Metrics

Current build metrics:
- First Load JS: ~165KB (Homepage)
- Largest page: 183KB (/team)
- Build time: ~3 seconds
- Static pages: 7 pages

Target metrics:
- Lighthouse Performance: > 90
- First Contentful Paint: < 1.2s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

---

## 🔄 Continuous Deployment

### Netlify Auto-Deploy
Already configured via `netlify.toml`. Deploys automatically on:
- Push to `main` branch
- Pull request previews available

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml` for custom CI/CD

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Hydration Errors
- Check for client-side only code in server components
- Verify localStorage usage is in useEffect

### Docker Issues
```bash
# Clear everything and rebuild
docker-compose down -v
docker system prune -a
docker-compose up --build
```

### Performance Issues
- Check Network tab in DevTools
- Optimize images
- Review bundle analyzer
- Enable compression

---

## 📞 Support Contacts

- **Technical Issues**: dev@evogroup.ai
- **Hosting Support**: hosting@evogroup.ai
- **Emergency**: +996 XXX XXX XXX

---

## 🎯 Next Steps After Deployment

1. **Monitor** first 24 hours closely
2. **Collect** user feedback
3. **Track** analytics data
4. **Optimize** based on real usage
5. **Plan** A/B tests for improvements

---

**Last Updated**: December 17, 2024
**Deployed By**: Evolution Group Team
**Status**: ✅ Production Ready
