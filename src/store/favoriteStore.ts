import { create } from 'zustand';
import { Product } from '@/types/product';

interface FavoriteState {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
}

export const useFavoriteStore = create<FavoriteState>((set, get) => ({
  favorites: [],
  addToFavorites: (product) =>
    set((state) => {
      const isAlreadyFavorite = state.favorites.some((p) => p.id === product.id);
      if (isAlreadyFavorite) {
        return state;
      }
      return { favorites: [...state.favorites, product] };
    }),
  removeFromFavorites: (productId) =>
    set((state) => ({
      favorites: state.favorites.filter((p) => p.id !== productId),
    })),
  isFavorite: (productId) => {
    return get().favorites.some((p) => p.id === productId);
  },
}));
