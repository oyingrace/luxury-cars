# Luxury Cars - Premium Transportation Services

A modern, responsive website for a luxury car rental service showcasing premium vehicles including supercars and luxury SUVs. Built with Next.js 14 and featuring smooth animations, elegant design, and a seamless user experience.

## 🚗 Features

- **Hero Section** - Stunning full-screen hero with animated call-to-action buttons
- **Featured Fleet** - Showcase of premium vehicles with detailed specifications, pricing, and availability
- **Services** - Comprehensive service offerings for luxury transportation
- **About Section** - Information about the company and its values
- **Contact Form** - Easy way for customers to get in touch
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **Smooth Animations** - Powered by Framer Motion for engaging user interactions
- **Modern UI/UX** - Clean, elegant design with amber/gold accent colors

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono (local fonts)
- **Wallet Integration**: WalletConnect (Reown WalletKit)

## 📦 Project Structure

```
luxury-cars/
├── app/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── FeaturedCars.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Services.jsx
│   │   └── Testimonials.jsx
│   ├── fonts/
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
│   ├── car-1.jpg
│   ├── car-2.jpg
│   ├── car-3.jpg
│   └── hero-bg.png
├── package.json
├── tailwind.config.js
└── next.config.mjs
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd luxury-cars
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server (after building)
- `npm run lint` - Run ESLint to check for code issues

## 🎨 Key Components

### Navbar
- Fixed navigation bar with scroll effects
- Responsive mobile menu
- Smooth transitions and backdrop blur on scroll

### Hero
- Full-screen hero section with background image
- Animated text and call-to-action buttons
- Scroll indicator

### FeaturedCars
- Grid layout showcasing premium vehicles
- Car specifications (power, acceleration, seats)
- Pricing information and availability status
- Hover effects and smooth animations

### Services
- Service offerings display
- Professional presentation of transportation services

### About
- Company information and values

### Contact
- Contact form and information

### Footer
- Footer with links and company information

## 🎯 Features in Detail

- **Responsive Design**: Mobile-first approach with breakpoints for all device sizes
- **Performance**: Optimized images and fonts using Next.js built-in optimizations
- **Animations**: Scroll-triggered animations using Framer Motion
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Modern Styling**: Tailwind CSS utility classes for rapid development

## 🚢 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be live!

## 📝 Customization

- **Colors**: Modify the color scheme in `tailwind.config.js` (amber/gold theme)
- **Content**: Update car data in `FeaturedCars.jsx`
- **Images**: Replace images in the `public/` directory
- **Fonts**: Custom fonts are located in `app/fonts/`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 🔗 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Next.js GitHub Repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

---

Built with ❤️ using Next.js and Tailwind CSS
