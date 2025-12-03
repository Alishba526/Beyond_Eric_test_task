import { useParams, Link } from "react-router-dom";
import { useProduct } from "@/hooks/useProducts";
import { LoadingSpinner } from "@/components/products/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Star, ShoppingCart, ArrowLeft, Package, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore"; // Import useCartStore

/**
 * ProductDetails Page Component
 * 
 * @description Detailed product view page with full animations and glassmorphism
 * Features:
 * - Dynamic product loading with React Router
 * - Staggered content animations
 * - Interactive image zoom effect
 * - Glassmorphism card design
 * - SEO optimization with meta tags
 * - Add to cart with toast notifications
 * - Wishlist toggle functionality
 * - Share product feature
 * - Product features showcase
 * - Responsive grid layout
 * 
 * @component
 * @returns {JSX.Element} Rendered product details page
 */
const ProductDetails = () => {
  // Get product ID from URL parameters
  const { id } = useParams<{ id: string }>();
  
  // Fetch product data using custom hook with React Query
  const { data: product, isLoading, error } = useProduct(id!);
  
  // Access addToCart function from the cart store
  const addToCart = useCartStore((state) => state.addToCart);

  // Local state for wishlist toggle
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  /**
   * Handle add to cart action
   * Shows success toast notification with product details
   */
  const handleAddToCart = () => {
    if (product) {
      addToCart(product); // Add product to cart
      toast.success(`Added "${product.title}" to cart!`, {
        description: `Price: $${product.price}`,
      });
    }
  };

  /**
   * Handle wishlist toggle
   * Updates local state and shows appropriate toast message
   */
  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  /**
   * Handle share product
   * Copies product URL to clipboard
   */
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Product link copied to clipboard!");
  };

  // Loading state with animated spinner
  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner />
        </div>
        <Footer />
      </>
    );
  }

  // Error state with animated message
  if (error || !product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <motion.div 
            className="text-center space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Package className="h-16 w-16 text-muted-foreground mx-auto" />
            </motion.div>
            <h2 className="text-2xl font-bold">Product Not Found</h2>
            <p className="text-muted-foreground">
              The product you're looking for doesn't exist.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild>
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* SEO Meta Tags for Product */}
      <Helmet>
        <title>{product.title} | ShopHub</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:type" content="product" />
        <meta property="product:price:amount" content={product.price.toString()} />
        <meta property="product:price:currency" content="USD" />
      </Helmet>

      <Header />
      
      <motion.div 
        className="min-h-screen py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          {/* Back Button with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" asChild className="gap-2">
                <Link to="/">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Products
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Product Details Grid Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Image Container with Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 group" // Removed sticky top-24
            >
              <motion.div 
                className="aspect-square bg-secondary/50 rounded-xl overflow-hidden relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain p-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Hover overlay with actions */}
                <motion.div
                  className="absolute top-4 right-4 flex gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Wishlist Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleWishlistToggle}
                    className={`p-3 glass rounded-full transition-colors ${
                      isWishlisted ? 'text-destructive' : ''
                    }`}
                  >
                    <Heart 
                      className={`h-5 w-5 ${isWishlisted ? 'fill-destructive' : ''}`} 
                    />
                  </motion.button>
                  
                  {/* Share Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleShare}
                    className="p-3 glass rounded-full"
                  >
                    <Share2 className="h-5 w-5" />
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Product Information Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Category Badge */}
              <div>
                <span className="inline-block glass px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-md">
                  {product.category}
                </span>
              </div>

              {/* Product Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
                {product.title}
              </h1>

              {/* Rating Display */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      <Star 
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating.rate)
                            ? 'fill-accent text-accent'
                            : 'text-muted-foreground'
                        }`}
                      />
                    </motion.div>
                  ))}
                  <span className="text-lg font-semibold ml-2">{product.rating.rate}</span>
                </div>
                <span className="text-muted-foreground">
                  ({product.rating.count} customer reviews)
                </span>
              </div>

              {/* Price Display */}
              <div className="flex items-baseline gap-3">
                <span className="text-5xl md:text-6xl font-bold text-gradient">
                  ${product.price}
                </span>
                <span className="text-muted-foreground">USD</span>
              </div>

              {/* Product Description */}
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold mb-3">Product Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Add to Cart Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 px-12 shadow-strong"
                  onClick={handleAddToCart}
                >
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                  </motion.div>
                  Add to Cart
                </Button>
              </motion.div>

              {/* Delivery & Guarantees Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div 
                  className="glass p-4 rounded-lg text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">Free Shipping</p>
                </motion.div>

                <motion.div 
                  className="glass p-4 rounded-lg text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Shield className="h-6 w-6 mx-auto mb-2 text-accent" />
                  <p className="text-sm font-medium">Secure Payment</p>
                </motion.div>

                <motion.div 
                  className="glass p-4 rounded-lg text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">30-Day Returns</p>
                </motion.div>
              </div>

              {/* Product Features */}
              <div className="glass rounded-xl p-6 space-y-3">
                <h3 className="font-semibold text-lg mb-4">Why Choose This Product?</h3>
                <div className="space-y-3">
                  {[
                    "Premium quality materials and construction",
                    "Fast and secure shipping worldwide",
                    "30-day hassle-free return policy",
                    "100% customer satisfaction guaranteed",
                    "Verified authentic product"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-accent mt-1">✓</span>
                      <p className="text-sm text-muted-foreground">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <Footer />
    </>
  );
};

export default ProductDetails;
