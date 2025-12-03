import { create } from 'zustand';
import { Product } from '@/types/product';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
  lastAddedProductId: number | null; // New: To track the last product added
  cartAnimationTrigger: number; // New: To trigger animations
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  isCartOpen: false,
  lastAddedProductId: null, // Initialize
  cartAnimationTrigger: 0, // Initialize
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        // Increase quantity if item already exists
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          lastAddedProductId: product.id, // Update last added product
          cartAnimationTrigger: state.cartAnimationTrigger + 1, // Trigger animation
        };
      } else {
        // Add new item with quantity 1
        return { 
          items: [...state.items, { ...product, quantity: 1 }],
          lastAddedProductId: product.id, // Update last added product
          cartAnimationTrigger: state.cartAnimationTrigger + 1, // Trigger animation
        };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),
  clearCart: () => set({ items: [] }),
  increaseQuantity: (productId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseQuantity: (productId) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0), // Remove item if quantity becomes 0
    })),
}));
