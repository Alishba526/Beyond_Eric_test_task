import { Product } from "@/types/product";

/**
 * Base API URL for FakeStore API
 */
const API_BASE_URL = "https://fakestoreapi.com";

/**
 * Fetches all products from the API
 * @returns Promise<Product[]> - Array of all products
 */
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

/**
 * Fetches a single product by ID
 * @param id - Product ID
 * @returns Promise<Product> - Single product details
 */
export const fetchProductById = async (id: string): Promise<Product> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
};

/**
 * Fetches featured products (limit to 8 for home page)
 * @returns Promise<Product[]> - Array of featured products
 */
export const fetchFeaturedProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products?limit=8`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    throw error;
  }
};

/**
 * Fetches all product categories from the API.
 * @returns {Promise<string[]>} A promise that resolves to an array of category names (strings).
 * @throws {Error} If the network response is not ok or an error occurs during fetching.
 */
export const fetchCategories = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
