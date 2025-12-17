# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server at http://localhost:5173/
npm run build     # Production build
npm run preview   # Preview production build
```

## Architecture Overview

This is a Daraz clone e-commerce application built with Vite + React 19.

### State Management

All cart state and operations are centralized in `src/App.jsx`:
- `cartItems` state holds cart data
- Cart functions (`addToCart`, `deleteFromCart`, `removeFromCart`, `checkOut`) are defined in App.jsx and passed down via props through `AllRoutes`

### Routing

Routes are defined in `src/allroutes/AllRoutes.jsx` using react-router-dom v7:
- `/` - Homepage
- `/cart` - Cart page
- `/login` - Login page
- `/registration` - Registration page
- `/all-products` - All products listing
- `/all-products/:id` - Single product details
- `*` - 404 error page

### Project Structure

- `src/components/` - Reusable UI components organized by feature (Header, Cart, FlashDeals, Shop, etc.)
- `src/pages/` - Page-level components that compose multiple components
- `src/allroutes/` - React Router configuration
- Data files (`*Data.js`) are co-located with their components

### Key Libraries

- `react-slick` + `slick-carousel` - Carousels/sliders
- `react-hot-toast` - Toast notifications
- `styled-components` - CSS-in-JS styling
- `react-icons` - Icon library
- `axios` - HTTP client
