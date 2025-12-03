import { Menu, ShoppingBag, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useCartStore } from "@/store/cartStore";
import { useEffect } from "react";
import { SearchBar } from "../products/SearchBar";
import { useSearchStore } from "@/store/searchStore";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../ThemeToggle";

/**
 * @component Header
 * @description The main navigation header of the application.
 *              Features:
 *              - Animated appearance using Framer Motion.
 *              - Glassmorphism effect for a modern look.
 *              - Dynamic shopping cart count display.
 *              - Theme toggle button for switching between light/dark modes.
 *              - Navigation links to Home, Products, About, and Contact pages.
 *              - Cart icon animation when items are added to the cart.
 */
export const Header = () => {
  const items = useCartStore((state) => state.items);
  const openCart = useCartStore((state) => state.openCart);
  // Get the animation trigger from the cart store
  const cartAnimationTrigger = useCartStore((state) => state.cartAnimationTrigger);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const { searchQuery, setSearchQuery } = useSearchStore();

  // Animation controls for the cart icon
  const cartControls = useAnimation();

  // Effect to trigger animation when cartAnimationTrigger changes
  useEffect(() => {
    if (cartAnimationTrigger > 0) { // Only animate after initial load
      cartControls.start({
        scale: [1, 1.2, 1], // Bounce animation
        rotate: [0, -10, 10, -10, 0], // Slight rotation
        transition: { duration: 0.5 }
      });
    }
  }, [cartAnimationTrigger, cartControls]);


  return (
    <motion.header
      initial={{ y: -100 }} // Initial animation state (starts off-screen)
      animate={{ y: 0 }}    // Animates to its natural position
      transition={{ duration: 0.5, ease: "easeOut" }} // Animation properties
      className="sticky top-0 z-50 glass border-b border-border/50 shadow-md"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Navigates to the home page */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }} // Rotates the bag icon on hover
              transition={{ duration: 0.6 }}
            >
              <ShoppingBag className="h-8 w-8 text-primary" />
            </motion.div>
            <span className="text-2xl font-bold text-gradient">
              ShopHub
            </span>
          </Link>

          {/* Navigation Links, Theme Toggle & Cart */}
          <div className="flex items-center space-x-4 lg:space-x-8">
            {/* Hamburger Menu for Mobile */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col space-y-4 pt-8">
                  <Link
                    to="/"
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                  >
                    Home
                  </Link>
                  <Link
                    to="/"
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                  >
                    Products
                  </Link>
                  <Link
                    to="/about"
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                  >
                    Contact
                  </Link>
                  <div className="w-full">
                    <SearchBar
                      searchQuery={searchQuery}
                      onSearchChange={setSearchQuery}
                    />
                  </div>
                  <ThemeToggle />
                </div>
              </SheetContent>
            </Sheet>

            <div className="hidden lg:flex items-center space-x-6">
              {/* Home Page Link */}
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </Link>
              {/* Products Page Link (currently redirects to home for filtering) */}
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Products
              </Link>
              {/* Search Bar */}
              <div className="w-56">
                <SearchBar
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                />
              </div>
              {/* About Us Page Link */}
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </Link>
              {/* Contact Us Page Link */}
              <Link
                to="/contact"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </Link>
              {/* Theme Toggle Button */}
              <ThemeToggle />
            </div>

            {/* Cart Icon - Opens the shopping cart sidebar */}
            <motion.div // Make this motion.div to animate
              className="relative cursor-pointer group"
              onClick={openCart} // Calls the function to open the cart
              animate={cartControls} // Apply animation controls
            >
              <ShoppingCart className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
              {/* Displays the total number of items in the cart */}
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            </motion.div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

