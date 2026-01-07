# Remaining Tasks for Green Builders Website

## ✅ COMPLETED

### Certificates & Documents
- ✅ GST Certificate PDF uploaded (`public/documents/gstin-certificate.pdf`)
- ✅ MSME/Udyam Certificate PDF uploaded (`public/documents/udyam-registration.pdf`)
- ✅ NIC Classification (uses same MSME PDF since it's included)
- ✅ Certificate download links configured

### Recent Fixes
- ✅ Video player audio enabled
- ✅ Play button fade animation implemented
- ✅ Contact form email integration (Resend)
- ✅ Why Choose Us color variant (dark for about page)
- ✅ Projects display limited to 4
- ✅ Client logos carousel speed increased

---

## 🔴 HIGH PRIORITY - REQUIRED FOR PRODUCTION

### 1. Environment Variables Setup
**Location**: `.env.local` file (create if doesn't exist)

Required variables:
```env
# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=info@greenbuildersandinteriors.com

# Database (if using)
TURSO_DATABASE_URL=your_database_url
TURSO_AUTH_TOKEN=your_auth_token

# Authentication (if using admin panel)
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
```

**Action Items**:
- [ ] Sign up for Resend account at https://resend.com
- [ ] Get Resend API key
- [ ] Verify domain with Resend (to use custom "from" email)
- [ ] Update `from` field in `src/app/api/contact/route.ts` (currently uses `onboarding@resend.dev`)
- [ ] Test contact form email delivery

### 2. Udyam Registration Number
**Location**: `src/components/luxury/CertificationsSection.tsx` (line 17)

**Current**: `"MSME Registered"` (placeholder)
**Action**: 
- [ ] Extract actual Udyam registration number from MSME.pdf
- [ ] Update the `number` field in certifications array

### 3. Admin Authentication
**Location**: `src/app/admin/login/page.tsx`

**Status**: Placeholder implementation
**Action**:
- [ ] Implement actual authentication with Better-Auth
- [ ] Set up admin user accounts
- [ ] Configure protected admin routes

---

## 🟡 MEDIUM PRIORITY - CONTENT & ASSETS

### 4. Favicon & Meta Images
**Location**: `public/` folder

**Missing**:
- [ ] `favicon.ico` - Browser tab icon (32x32px or 16x16px)
- [ ] `og-image.jpg` - Social media preview image (1200x630px)
- [ ] Update `next.config.js` or `app/layout.tsx` with proper meta tags

### 5. Hero Images for Pages
**Location**: `public/images/heroes/` or `public/videos/`

**Missing**:
- [ ] Homepage hero image/video (currently using video)
- [ ] About page hero image
- [ ] Services page hero image  
- [ ] Contact page hero image

**Note**: Homepage currently uses video background which is good, but other pages may need hero images.

### 6. Service Images
**Location**: `public/images/services/`

**Missing**: Images for 12 service categories:
- [ ] Villa Design
- [ ] Apartment Design
- [ ] Penthouse Interior
- [ ] Office Design
- [ ] Restaurant Design
- [ ] Barber Shop Design
- [ ] Villa Renovation
- [ ] Apartment Renovation
- [ ] Office Renovation
- [ ] Villa Construction
- [ ] Landscape Design
- [ ] Curtains & Soft Furnishing

### 7. Office Location Photos
**Location**: `public/images/offices/`

**Missing**: Photos for 5 office locations:
- [ ] Bengaluru (HQ)
- [ ] Hyderabad
- [ ] Chennai
- [ ] Kochi
- [ ] Visakhapatnam

### 8. Additional Team Member Photos
**Location**: `public/images/team/`

**Current**: 3 leadership photos (✅ Complete)
**Missing**: 
- [ ] Photos for other team members (Design, Engineering, Admin teams)
- [ ] Update team showcase component if needed

### 9. Testimonials Content
**Location**: `src/components/luxury/TestimonialsCarousel.tsx`

**Action**:
- [ ] Add real client testimonials
- [ ] Add client photos (optional)
- [ ] Verify testimonial content accuracy

---

## 🟢 LOW PRIORITY - ENHANCEMENTS

### 10. Video Content
**Location**: `public/videos/`

**Current**: 
- ✅ Hero background video
- ✅ About page videos (2 videos)

**Optional**:
- [ ] Additional project showcase videos
- [ ] Company introduction video
- [ ] Process/workflow videos

### 11. Project Portfolio Images
**Location**: `public/images/projects/`

**Status**: Some project images exist
**Action**:
- [ ] Organize project images by project name
- [ ] Ensure featured images are high quality
- [ ] Add gallery images for each project
- [ ] Update project data in `src/lib/data.ts` with correct image paths

### 12. SEO & Meta Tags
**Location**: `src/app/layout.tsx` and individual pages

**Action**:
- [ ] Add proper meta descriptions for all pages
- [ ] Add Open Graph tags
- [ ] Add Twitter Card tags
- [ ] Add structured data (JSON-LD) for business information
- [ ] Create `sitemap.xml`
- [ ] Create `robots.txt`

### 13. Analytics & Tracking
**Action**:
- [ ] Set up Google Analytics (if needed)
- [ ] Add tracking for contact form submissions
- [ ] Add tracking for project views
- [ ] Configure conversion tracking

### 14. Performance Optimization
**Action**:
- [ ] Optimize all images (compress, use WebP format)
- [ ] Implement lazy loading for images
- [ ] Add loading states for videos
- [ ] Optimize bundle size
- [ ] Add service worker for offline support (optional)

### 15. Accessibility
**Action**:
- [ ] Add proper ARIA labels where missing
- [ ] Ensure keyboard navigation works
- [ ] Test with screen readers
- [ ] Add skip navigation links
- [ ] Ensure color contrast meets WCAG standards

### 16. Error Pages
**Location**: `src/app/`

**Action**:
- [ ] Create custom 404 page (`not-found.tsx`)
- [ ] Create custom 500 error page
- [ ] Add helpful error messages

### 17. Legal Pages (Optional)
**Action**:
- [ ] Privacy Policy page
- [ ] Terms of Service page
- [ ] Cookie Policy (if using cookies)
- [ ] Add footer links to these pages

---

## 📋 TESTING CHECKLIST

Before going live:

### Functionality Testing
- [ ] Contact form sends emails correctly
- [ ] All links work (internal and external)
- [ ] Videos play with audio
- [ ] Certificate PDFs download correctly
- [ ] Mobile responsiveness on all pages
- [ ] Forms validate correctly
- [ ] Navigation works smoothly

### Content Review
- [ ] All text content is accurate
- [ ] Phone numbers and emails are correct
- [ ] Office addresses are accurate
- [ ] Project descriptions are accurate
- [ ] Team member information is correct
- [ ] Service descriptions are accurate

### Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Testing
- [ ] Page load times < 3 seconds
- [ ] Images load properly
- [ ] Videos don't cause performance issues
- [ ] No console errors

---

## 🚀 DEPLOYMENT CHECKLIST

### Pre-Deployment
- [ ] All environment variables set in hosting platform
- [ ] Domain configured
- [ ] SSL certificate enabled
- [ ] Database configured (if using)
- [ ] Email service (Resend) configured
- [ ] Test all forms and functionality

### Post-Deployment
- [ ] Test contact form in production
- [ ] Verify email delivery
- [ ] Check all pages load correctly
- [ ] Test on mobile devices
- [ ] Submit sitemap to Google Search Console
- [ ] Set up monitoring/error tracking

---

## 📝 NOTES

- **Images**: User mentioned "except the list of photos" - so photo-related tasks are lower priority
- **MSME Certificate**: Contains both Udyam registration and NIC classification, so both certificates point to the same PDF
- **Resend Email**: Currently uses `onboarding@resend.dev` - needs to be updated to verified domain email
- **Admin Panel**: Currently has placeholder authentication - may not be needed if not using CMS features

---

## ⚡ QUICK WINS (Can be done immediately)

1. **Extract Udyam number** from MSME.pdf and update component
2. **Set up Resend account** and configure email
3. **Add favicon** - quick visual improvement
4. **Test contact form** - ensure emails are being sent
5. **Add meta tags** - improve SEO

---

**Last Updated**: Based on current codebase analysis
**Priority**: Focus on High Priority items first, especially environment variables and email configuration

