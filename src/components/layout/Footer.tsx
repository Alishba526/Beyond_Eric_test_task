import { Heart, Facebook, Twitter, Instagram, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

/**
 * @component Footer
 * @description Advanced footer component with multiple sections, social media links,
 *              a newsletter subscription form, and dynamic copyright year.
 *              Maintains a glassmorphism effect and uses Framer Motion for subtle animations.
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="glass border-t border-border/50 mt-20 py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          {/* Section 1: ShopHub Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">ShopHub</h3>
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for the latest trends and best deals. Quality products, unbeatable prices.
            </p>
            <div className="flex space-x-4">
              <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </motion.a>
            </div>
          </div>

          {/* Section 2: Shop */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products?category=electronics" className="hover:text-primary transition-colors">Electronics</Link></li>
              <li><Link to="/products?category=jewelery" className="hover:text-primary transition-colors">Jewelery</Link></li>
              <li><Link to="/products?category=men's clothing" className="hover:text-primary transition-colors">Men's Clothing</Link></li>
              <li><Link to="/products?category=women's clothing" className="hover:text-primary transition-colors">Women's Clothing</Link></li>
            </ul>
          </div>

          {/* Section 3: About Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">About Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Section 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Your email" className="glass" />
              <Button type="submit" className="glass-button">
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} ShopHub. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-muted-foreground text-sm">
            Made by Alishba Rehman <Heart className="h-4 w-4 text-accent fill-accent" />  Professional Developer
          </p>
        </div>
      </div>
    </motion.footer>
  );
};
