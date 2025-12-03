import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About"; // Import About page
import Contact from "./pages/Contact"; // Import Contact page
import NotFound from "./pages/NotFound";
import { CartSheet } from "@/components/cart/CartSheet";

// Create a client for React Query to manage and cache data
const queryClient = new QueryClient();

/**
 * @component App
 * @description The main application component that sets up global providers and routing.
 *              Includes React Query for data management, UI tooltips, toast notifications,
 *              a shopping cart sidebar, and client-side routing.
 */
const App = () => (
  // Provide the QueryClient to all components in the tree
  <QueryClientProvider client={queryClient}>
    {/* Provides context for tooltips */}
    <TooltipProvider>
      {/* Global toaster for displaying ephemeral messages */}
      <Toaster />
      {/* Sonner for modern, more customizable toast notifications */}
      <Sonner />
      {/* Sidebar component for displaying cart contents */}
      <CartSheet />
      {/* Sets up client-side routing using React Router */}
      <BrowserRouter>
        {/* Defines application routes */}
        <Routes>
          {/* Home page route, displaying all products with filters and sorting */}
          <Route path="/" element={<Index />} />
          {/* Product details page route, dynamic based on product ID */}
          <Route path="/products/:id" element={<ProductDetails />} />
          {/* About Us page route */}
          <Route path="/about" element={<About />} />
          {/* Contact Us page route */}
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all route for any undefined paths, leading to a 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
