# Developer Portfolio

A modern, responsive developer portfolio website built with Next.js, TypeScript, and TailwindCSS. Features smooth animations, dark mode support, and a clean, professional design.

## ✨ Features

- **Modern Design**: Clean, minimal, and professional UI with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode**: System-aware theme switching with manual toggle
- **Interactive Projects**: Detailed project pages with live demos and galleries
- **Contact Form**: Functional contact form with validation and toast notifications
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **Performance**: Optimized images, lazy loading, and fast build times

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Notifications**: React Hot Toast
- **Theme**: Next Themes

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── projects/[id]/     # Dynamic project pages
├── components/
│   ├── sections/          # Page sections (Hero, About, etc.)
│   └── ui/               # Reusable UI components
├── data/                  # JSON data files
│   ├── projects.json     # Project information
│   └── personal.json     # Personal information
├── lib/                   # Utility functions
└── types/                 # TypeScript type definitions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

Edit `src/data/personal.json` to update:
- Name and tagline
- Bio and location
- Skills and experience
- Social media links

### Projects

Edit `src/data/projects.json` to add/modify projects:
- Project details and descriptions
- Technology stack
- Images and links
- Challenges and solutions

### Styling

- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Components**: Update TailwindCSS classes in component files
- **Animations**: Customize Framer Motion animations

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Environment Variables** (if needed)
   - Add any environment variables in Vercel dashboard
   - For contact form, you might want to add email service API keys

### Other Deployment Options

- **Netlify**: Supports Next.js with automatic deployments
- **Railway**: Simple deployment with GitHub integration
- **DigitalOcean App Platform**: Scalable hosting solution

## 📸 Adding Project Images

Replace placeholder images in `src/data/projects.json`:

1. **Local Images**: Add to `public/projects/` directory
2. **External Images**: Use CDN URLs (current setup uses Unsplash)
3. **Optimization**: Next.js automatically optimizes images

## 🎨 Customization Guide

### Changing Colors

Update CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... other colors */
}
```

### Adding New Sections

1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Update navigation in `src/components/sections/navigation.tsx`

### Modifying Animations

Framer Motion animations are used throughout. Example:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Color contrast compliance

## 🐛 Troubleshooting

### Build Errors

1. **TypeScript errors**: Check type definitions in `src/types/`
2. **Import errors**: Verify file paths and exports
3. **Image errors**: Ensure image URLs are accessible

### Development Issues

1. **Animations not working**: Check Framer Motion installation
2. **Styles not applying**: Verify TailwindCSS configuration
3. **Dark mode issues**: Check theme provider setup

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have questions or need help:
- Open an issue on GitHub
- Check the documentation
- Review the code comments

---

**Built with ❤️ using Next.js and TailwindCSS**