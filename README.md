# Kovasure - Cargo Insurance Landing Page

A modern, professional landing page for cargo insurance services built with Next.js 16, React 19, and Tailwind CSS 4.

## 🎨 Design Theme

- **Primary Blue**: `#0024ff`
- **Primary Gold**: `#ffb41d`
- Clean, modern design with smooth animations
- Fully responsive across all devices
- Accessibility-friendly

## 🚀 Features

### Sections Included:

1. **Hero Section**
   - Compelling headline with gradient text
   - Instant quote CTA
   - Trust indicators (stats)
   - Animated floating badges

2. **Coverage Section**
   - 6 coverage types with icons
   - Ocean, Air, Land, Warehousing, Multimodal, All Risk
   - Hover effects and smooth transitions

3. **How It Works Section**
   - 4-step process visualization
   - Numbered badges with connecting lines
   - Clear value proposition

4. **Benefits Section**
   - 6 key benefits with icons
   - Stats grid showing key metrics
   - Competitive advantages highlighted

5. **FAQ Section**
   - Accordion-style questions
   - 6 common questions answered
   - Smooth expand/collapse animations

6. **Contact Section**
   - Full contact form
   - Contact information display
   - Trust badges
   - Form validation

7. **Footer**
   - Company links
   - Service links
   - Social media icons
   - Newsletter signup

## 📦 Tech Stack

- **Framework**: Next.js 16.3.0
- **React**: 19.2.8
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 🛠️ Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎯 Components Structure

```
kovasure-site/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page (main landing page)
│   └── globals.css         # Global styles & animations
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Hero with CTA
│   ├── CoverageSection.tsx # Coverage types grid
│   ├── HowItWorksSection.tsx # 4-step process
│   ├── BenefitsSection.tsx # Key benefits + stats
│   ├── FAQSection.tsx      # FAQ accordion
│   ├── ContactSection.tsx  # Contact form
│   └── Footer.tsx          # Site footer
└── public/                 # Static assets
```

## 🎨 Design Features

### Animations
- Fade in on scroll
- Slide in from left/right
- Floating elements
- Pulse glow effects
- Smooth hover transitions

### Color Usage
- **Blue (#0024ff)**: Primary actions, trust elements
- **Gold (#ffb41d)**: Accents, highlights, secondary CTAs
- **Gradients**: Blue-to-gold for premium feel

### Typography
- Geist Sans for body text
- Bold weights for headlines
- Clear hierarchy throughout

## 📱 Responsive Design

- **Mobile**: Stack layout, hamburger menu
- **Tablet**: 2-column grids
- **Desktop**: Full multi-column layouts
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements
- Reduced motion support for animations

## 🔄 Future Enhancements

Potential additions:
- Multi-language support (i18n)
- Blog section
- Client testimonials carousel
- Live chat integration
- Quote calculator tool
- Claims portal
- Partner logos section

## 📝 Content Customization

To customize content:
1. Update text in component files
2. Replace placeholder icons/images in `/public`
3. Modify color variables in `globals.css`
4. Adjust metadata in `layout.tsx`

## 🤝 Design Inspiration

This design follows patterns from:
- Kasongo-site: Header/Footer structure
- Ntigi-site: Modern animations & gradients
- Wallanda-site: Component organization

## 📄 License

All rights reserved - Kovasure 2026
