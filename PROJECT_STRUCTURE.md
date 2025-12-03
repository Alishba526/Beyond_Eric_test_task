# ShopHub - E-Commerce Application

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # Shadcn UI components (reusable)
│   ├── layout/
│   │   ├── Header.tsx        # Navigation header with glassmorphism
│   │   └── Footer.tsx        # Footer component
│   └── products/
│       ├── ProductCard.tsx   # Reusable product card component
│       ├── ProductGrid.tsx   # Grid layout for products
│       ├── ProductHero.tsx   # Hero section with animations
│       └── LoadingSpinner.tsx # Loading state component
├── pages/
│   ├── Index.tsx             # Home page (/)
│   ├── ProductDetails.tsx    # Product details page (/products/:id)
│   └── NotFound.tsx          # 404 page
├── hooks/
│   └── useProducts.ts        # Custom hooks for API data fetching
├── lib/
│   ├── api.ts                # API utility functions
│   └── utils.ts              # Helper utilities
├── types/
│   └── product.ts            # TypeScript type definitions
├── index.css                 # Global styles & design system
└── App.tsx                   # Main app with routing

```

## 🎨 Design System

### Color Palette (HSL)
- **Primary**: Deep Indigo (235, 65%, 40%)
- **Accent**: Vibrant Coral (15, 85%, 60%)
- **Background**: Light Gray (220, 25%, 97%)
- **Glassmorphism**: rgba(255, 255, 255, 0.7) with backdrop blur

### Key Features
- ✅ Glassmorphism UI effects
- ✅ Framer Motion animations
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ SEO optimization with meta tags
- ✅ Clean component architecture
- ✅ TypeScript for type safety
- ✅ React Query for API state management
- ✅ Reusable components

## 🚀 API Integration

**Base URL**: https://fakestoreapi.com

### Endpoints Used:
- `GET /products` - Fetch all products
- `GET /products?limit=8` - Fetch featured products
- `GET /products/:id` - Fetch single product

## 📱 Pages

### 1. Home Page (/)
- Hero section with animated features
- Featured products grid (8 products)
- Responsive layout

### 2. Product Details (/products/:id)
- Dynamic routing
- Product image, title, price, description
- Rating display
- Add to cart functionality (toast notification)
- SEO meta tags

## 🎯 Component Reusability

All components are built with reusability in mind:

1. **ProductCard**: Used in multiple places, accepts product prop
2. **LoadingSpinner**: Reusable loading state
3. **Header/Footer**: Consistent layout across pages
4. **Custom hooks**: Centralized API logic

## 🎭 Animations

- **Framer Motion**: Page transitions, hover effects, staggered grid animations
- **CSS Transitions**: Smooth hover states, color changes
- **Glassmorphism**: Backdrop blur effects

## 📦 Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Query (TanStack Query)
- React Router DOM
- React Helmet (SEO)
- Shadcn UI

## 🔧 Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 💡 Code Quality

- ✅ Clean, commented code
- ✅ TypeScript for type safety
- ✅ Proper error handling
- ✅ Loading states
- ✅ SEO optimization
- ✅ Responsive design
- ✅ Accessible components

## 📝 Notes

This project adapts Next.js requirements to React + Vite:
- React Router instead of Next.js routing
- React Query instead of getStaticProps
- Client-side rendering instead of SSG
- All features and UI requirements maintained
