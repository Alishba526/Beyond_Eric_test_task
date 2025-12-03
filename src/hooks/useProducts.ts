import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchProductById, fetchFeaturedProducts, fetchCategories } from "@/lib/api";

/**
 * Custom hook to fetch all products
 * Uses React Query for caching and state management
 */
export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

/**
 * Custom hook to fetch a single product by ID
 * @param id - Product ID
 */
export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id, // Only run if ID exists
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

/**
 * Custom hook to fetch featured products for home page
 */
export const useFeaturedProducts = () => {
  return useQuery({
    queryKey: ["featured-products"],
    queryFn: fetchFeaturedProducts,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

/**
 * @hook useCategories
 * @description Custom hook to fetch all product categories using React Query.
 *              Provides caching and state management for category data.
 * @returns {object} Query result object containing `data` (array of category strings), `isLoading`, `error`, etc.
 */
export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
