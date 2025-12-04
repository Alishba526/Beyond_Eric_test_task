import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { LoadingSpinner } from "@/components/products/LoadingSpinner";
import { CartSheet } from "@/components/cart/CartSheet";
import ScrollToTop from "@/components/layout/ScrollToTop"; // Import ScrollToTop

const Index = React.lazy(() => import("./pages/Index"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const FavoritesPage = React.lazy(() => import("./pages/Favorites"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const OrderConfirmation = React.lazy(() => import("./pages/OrderConfirmation")); // Import the new OrderConfirmation page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartSheet />
        <ScrollToTop /> {/* Add ScrollToTop component here */}
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <LoadingSpinner />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} /> {/* New route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
