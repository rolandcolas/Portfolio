# 🌊 Roland Colas - Portfolio Website

A beautiful, modern portfolio website built with Next.js, React, and Tailwind CSS, featuring a pearl/angelic aesthetic with smooth animations using Framer Motion.

## ✨ Features

- **Responsive Design** - Works seamlessly on all devices
- **Pearl Aesthetic** - Elegant, clean, and angelic color scheme
- **Smooth Animations** - Powered by Framer Motion for delightful interactions
- **Performance Optimized** - Built with Next.js for optimal performance
- **Easy Deployment** - Ready to deploy on Vercel with one click
- **Customizable** - Easy to update with your information

## 📋 Sections

1. **Navigation** - Smooth, sticky navigation with mobile menu
2. **Hero** - Eye-catching introduction with profile photo placeholder
3. **About** - Personal introduction and expertise highlights
4. **Skills** - Technical skills with proficiency levels
5. **Projects** - Showcase of featured projects
6. **Certificates** - Gallery of achievements and certificates
7. **Contact** - Contact form and connection information
8. **Footer** - Social links and quick navigation

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd portfolio atake pearl
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Customization

### Add Your Profile Photo

1. Place your PNG photo (head to hips) in: `public/images/profile/`
2. Recommended dimensions: 500x600px or similar aspect ratio
3. Update the Hero component to display your image

**File path:** `src/components/Hero.tsx` (around line 60)

### Add Your Certificates

1. Place your 5 certificate images in: `public/images/certificates/`
2. Name them: `cert-1.png`, `cert-2.png`, `cert-3.png`, `cert-4.png`, `cert-5.png`
3. Update certificate details in the Certificates component if needed

**File path:** `src/components/Certificates.tsx`

### Update Contact Information

Edit the Contact section with your actual details:
- Email address
- Phone number
- Location

**File path:** `src/components/Contact.tsx`

### Update Project Details

Edit your projects in the Projects component:
- Project names
- Descriptions
- Technologies used
- GitHub links

**File path:** `src/components/Projects.tsx`

## 🎨 Color Palette

The portfolio uses a custom pearl color palette defined in Tailwind config:

- **Pearl-50** to **Pearl-900** - Main color scheme
- **Angelic-light** - Primary background color
- All colors defined in `tailwind.config.js`

## 🛠️ Tech Stack

- **Frontend Framework:** Next.js 14
- **UI Library:** React 18
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Icons:** React Icons
- **TypeScript:** For type safety

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Run Production Build Locally

```bash
npm start
```

## 🚀 Deploy to Vercel

### Option 1: Using Vercel Dashboard (Easiest)

1. Push your project to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Your site will be live at `your-project-name.vercel.app`

### Option 2: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be deployed

### Option 3: GitHub Integration (Recommended for Teams)

1. Push to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel automatically deploys on every push to main branch

## 🔧 Environment Variables

Create a `.env.local` file if needed for any API keys or backend services:

```env
NEXT_PUBLIC_GITHUB_URL=https://github.com/rolandcolas
```

## 📱 Performance Optimization

- Images are optimized for web
- Next.js Image component used for best performance
- CSS is minified and bundled
- Code splitting for faster load times

## 🎯 SEO

- Meta tags configured in layout
- Open Graph tags ready to customize
- Sitemap generation (optional, can be added)
- Mobile responsive design

## 📧 Contact Form

The contact form is currently set up as a template. To make it functional:

1. **Option A - EmailJS:**
   - Sign up at [emailjs.com](https://emailjs.com)
   - Get your service ID and template ID
   - Update the Contact component to send emails

2. **Option B - Backend API:**
   - Create an API endpoint
   - Update the form submission in Contact component

3. **Option C - Third-party Service:**
   - Use Formspree, Netlify Forms, or similar

## 🎬 Animation Details

- **Fade-in animations** - Content reveals on page load
- **Scroll animations** - Elements animate as they come into view
- **Hover effects** - Interactive hover states for buttons and cards
- **Float animations** - Subtle floating motions for visual interest
- **Pulse glow** - Glowing effects on key elements

## 🔍 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📄 License

This project is free to use and modify for your portfolio.

## 🤝 Support

For issues or questions:
1. Check the code comments
2. Review Tailwind CSS and Framer Motion documentation
3. Consult Next.js documentation

## 🎉 Next Steps

1. ✅ Add your profile photo to `public/images/profile/`
2. ✅ Add your 5 certificates to `public/images/certificates/`
3. ✅ Update your contact information in the Contact component
4. ✅ Customize project details to match your portfolio
5. ✅ Deploy to Vercel
6. ✅ Share your portfolio!

---

**Built with ✨ using Next.js, React, and Tailwind CSS**
