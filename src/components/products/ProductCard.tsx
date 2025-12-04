import { Product } from "@/types/product";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCartStore } from "@/store/cartStore";
import { useFavoriteStore } from "@/store/favoriteStore";
import { toast } from "sonner";

/**
 * ProductCard Component Props
 * 
 * @interface ProductCardProps
 * @property {Product} product - Product data to display
 * @property {number} [index] - Index for staggered animation timing
 */
interface ProductCardProps {
  product: Product;
  index?: number;
}

/**
 * ProductCard Component
 * 
 * @description Reusable product card with glassmorphism and animations
 * Features:
 * - Staggered fade-in animation based on index
 * - Hover lift effect with shadow enhancement
 * - Image zoom on hover
 * - Glassmorphism card design
 * - Category badge overlay
 * - Star rating display
 * - Responsive button layout
 * - Add to cart functionality
 * 
 * @component
 * @param {ProductCardProps} props - Component props
 * @returns {JSX.Element} Rendered product card
 */
export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const openCart = useCartStore((state) => state.openCart); // Get openCart from store
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavoriteStore();
  const isProductFavorite = isFavorite(product.id);

  /**
   * Animation variants for card entrance
   */
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  /**
   * Animation variants for hover state
   */
  const hoverVariants = {
    hover: {
      y: -12,
      transition: {
        duration: 0.3,
      },
    },
  };

  const handleAddToCart = () => {
    addToCart(product);
    openCart(); // Open the cart after adding an item
    toast.success(`Added "${product.title}" to cart!`);
  }

  const handleToggleFavorite = () => {
    if (isProductFavorite) {
      removeFromFavorites(product.id);
      toast.error(`Removed "${product.title}" from favorites!`);
    } else {
      addToFavorites(product);
      toast.success(`Added "${product.title}" to favorites!`);
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="h-full"
    >
      <motion.div
        variants={hoverVariants}
        className="h-full"
      >
        <Card className="h-full glass hover:shadow-strong transition-all duration-300 group overflow-hidden relative border border-border/50">
          {/* Animated background gradient on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
          
          <CardContent className="p-4 relative z-10">
            {/* Product Image Container with Hover Effects */}
            <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-secondary/50 group/image">
              <motion.img
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.4 }}
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain p-4"
                loading="lazy"
              />
              
              {/* Hover Overlay with View Details */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"
              >
                <Link to={`/products/${product.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass p-3 rounded-full"
                  >
                    <Eye className="h-6 w-6 text-primary" />
                  </motion.div>
                </Link>
              </motion.div>
              
              {/* Category Badge with Animation */}
              <motion.div 
                className="absolute top-2 right-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="glass text-xs px-3 py-1.5 rounded-full font-medium backdrop-blur-md shadow-soft">
                  {product.category}
                </span>
              </motion.div>
            </div>

            {/* Product Info Section */}
            <div className="space-y-3">
              {/* Product Title with Hover Effect */}
              <Link to={`/products/${product.id}`}>
                <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300 min-h-[3rem]">
                  {product.title}
                </h3>
              </Link>

              {/* Rating Display with Animated Star */}
              <div className="flex items-center gap-1">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Star className="h-4 w-4 fill-accent text-accent" />
                </motion.div>
                <span className="text-sm font-medium">{product.rating.rate}</span>
                <span className="text-sm text-muted-foreground">
                  ({product.rating.count} reviews)
                </span>
              </div>

              {/* Price with Gradient Effect */}
              <div className="flex items-baseline gap-2">
                <motion.span 
                  className="text-2xl font-bold text-gradient"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  ${product.price}
                </motion.span>
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-4 pt-0 gap-2 relative z-10">
            {/* View Details Button with Hover Animation */}
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                variant="default"
                className="w-full bg-primary hover:bg-primary/90 transition-all shadow-soft hover:shadow-medium"
              >
                <Link to={`/products/${product.id}`}>
                  View Details
                </Link>
              </Button>
            </motion.div>

            {/* Add to Cart Button with Animated Icon */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, -10, 10, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all shadow-soft"
                onClick={handleAddToCart}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
.                 <ShoppingCart className="h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
            
            {/* Favorite Button with Animated Icon */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="icon"
                className={`hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all shadow-soft ${isProductFavorite ? 'text-red-500' : ''}`}
                onClick={handleToggleFavorite}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Heart className={`h-4 w-4 ${isProductFavorite ? 'fill-current' : ''}`} />
                </motion.div>
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
};
