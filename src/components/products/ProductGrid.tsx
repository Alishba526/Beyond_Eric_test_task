import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

/**
 * ProductGrid Component Props
 */
interface ProductGridProps {
  products: Product[];
  title?: string;
}

/**
 * ProductGrid Component
 * Responsive grid layout for displaying multiple products
 */
export const ProductGrid = ({ products, title }: ProductGridProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gradient">
            {title}
          </h2>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
