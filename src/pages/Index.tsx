import { useProducts, useCategories } from "@/hooks/useProducts";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductGrid } from "@/components/products/ProductGrid";
import { LoadingSpinner } from "@/components/products/LoadingSpinner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { Sidebar } from "@/components/layout/Sidebar";
import { FilterSection } from "@/components/products/FilterSection";
import { CategoryFilter } from "@/components/products/CategoryFilter";
import { PriceFilter } from "@/components/products/PriceFilter";
import { SortDropdown } from "@/components/products/SortDropdown";
import { FilterSheet } from "@/components/products/FilterSheet";
import { useState, useMemo } from "react";
import { useSearchStore } from "@/store/searchStore";

/**
 * Index (Home) Page Component
 * Main landing page with hero section and all products
 * Features: SEO optimization, responsive design, animated components
 */
const Index = () => {
  // Fetching products and categories using custom hooks
  const { data: products, isLoading, error } = useProducts();
  const { data: categories } = useCategories();

  // State for managing selected categories for filtering
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  // State for managing the price range for filtering
  const [priceRange, setPriceRange] = useState<number>(1000);
  // State for managing the sort option
  const [sortOption, setSortOption] = useState<string>("price-asc");

  // Get searchQuery from the global store
  const { searchQuery } = useSearchStore();

  /**
   * Handles changes in the category filter.
   * Adds or removes a category from the selectedCategories array.
   * @param category - The category to toggle.
   */
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  /**
   * Handles changes in the price filter.
   * @param value - The new maximum price value.
   */
  const handlePriceChange = (value: number) => {
    setPriceRange(value);
  };

  /**
   * Handles changes in the sort option.
   * @param value - The new sort option.
   */
  const handleSortChange = (value: string) => {
    setSortOption(value);
  };

  // Memoized filtered and sorted products
  const filteredAndSortedProducts = useMemo(() => {
    let result = products;

    // Filter by search query
    if (searchQuery) {
      result = result?.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      result = result?.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Filter by price range
    if (result) {
      result = result.filter((product) => product.price <= priceRange);
    }

    // Sort the filtered products
    if (result) {
      result = [...result].sort((a, b) => {
        switch (sortOption) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "name-asc":
            return a.title.localeCompare(b.title);
          case "name-desc":
            return b.title.localeCompare(a.title);
          default:
            return 0;
        }
      });
    }

    return result;
  }, [products, selectedCategories, priceRange, sortOption, searchQuery]);


  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>ShopHub - Discover Amazing Products</title>
        <meta
          name="description"
          content="Shop the latest trends with unbeatable prices. Discover thousands of amazing products across all categories at ShopHub."
        />
        <meta property="og:title" content="ShopHub - Discover Amazing Products" />
        <meta
          property="og:description"
          content="Shop the latest trends with unbeatable prices. Your perfect product is just a click away."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        {/* Header Navigation */}
        <Header />

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <ProductHero />

          <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Filters Sidebar (visible on large screens) */}
            <div className="hidden lg:block">
              <Sidebar>
                <FilterSection title="Categories">
                  {categories ? (
                    <CategoryFilter
                      categories={categories}
                      selectedCategories={selectedCategories}
                      onCategoryChange={handleCategoryChange}
                    />
                  ) : (
                    <p className="text-muted-foreground text-sm">Loading...</p>
                  )}
                </FilterSection>
                <FilterSection title="Price Range">
                  <PriceFilter
                    priceRange={priceRange}
                    onPriceChange={handlePriceChange}
                  />
                </FilterSection>
              </Sidebar>
            </div>

            {/* Filter Sheet for small screens */}
            <div className="lg:hidden flex justify-center mb-4">
              <FilterSheet
                categories={categories}
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
                priceRange={priceRange}
                onPriceChange={handlePriceChange}
              />
            </div>
            
            {/* Products Section */}
            <div className="flex-1">
              <div className="flex justify-end items-center mb-4">
                <SortDropdown
                  sortOption={sortOption}
                  onSortChange={handleSortChange}
                />
              </div>
              {isLoading ? (
                <LoadingSpinner />
              ) : error ? (
                <div className="text-center">
                  <p className="text-destructive">
                    Failed to load products. Please try again later.
                  </p>
                </div>
              ) : filteredAndSortedProducts && filteredAndSortedProducts.length > 0 ? (
                <ProductGrid
                  products={filteredAndSortedProducts}
                  title="All Products"
                />
              ) : (
                <div className="text-center">
                  <p className="text-muted-foreground">No products found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
