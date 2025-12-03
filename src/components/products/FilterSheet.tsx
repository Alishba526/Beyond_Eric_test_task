import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FilterSection } from "@/components/products/FilterSection";
import { CategoryFilter } from "@/components/products/CategoryFilter";
import { PriceFilter } from "@/components/products/PriceFilter";
import { Product } from "@/types/product"; // Assuming Product type is needed for categories

interface FilterSheetProps {
  categories: string[] | undefined;
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  priceRange: number;
  onPriceChange: (value: number) => void;
}

export const FilterSheet = ({
  categories,
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceChange,
}: FilterSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="lg" className="flex items-center gap-2 lg:hidden">
          <Filter className="h-5 w-5" />
          <span>Filters</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Filter Products</SheetTitle>
          <SheetDescription>
            Adjust the filters to find the products you're looking for.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col space-y-6 py-6">
          <FilterSection title="Categories">
            {categories ? (
              <CategoryFilter
                categories={categories}
                selectedCategories={selectedCategories}
                onCategoryChange={onCategoryChange}
              />
            ) : (
              <p className="text-muted-foreground text-sm">Loading...</p>
            )}
          </FilterSection>
          <FilterSection title="Price Range">
            <PriceFilter
              priceRange={priceRange}
              onPriceChange={onPriceChange}
            />
          </FilterSection>
        </div>
      </SheetContent>
    </Sheet>
  );
};
