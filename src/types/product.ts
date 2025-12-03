/**
 * Product type definition
 * Matches the FakeStore API response structure
 */
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

/**
 * API Response wrapper for error handling
 */
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}
