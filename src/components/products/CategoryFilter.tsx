import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CategoryFilterProps {
  /**
   * An array of available category names to display.
   */
  categories: string[];
  /**
   * An array of currently selected category names.
   */
  selectedCategories: string[];
  /**
   * Callback function triggered when a category checkbox is toggled.
   * @param category The name of the category that was toggled.
   */
  onCategoryChange: (category: string) => void;
}

/**
 * @component CategoryFilter
 * @description Renders a list of categories with checkboxes, allowing users to select/deselect categories
 *              to filter products.
 * @param {CategoryFilterProps} props - The props for the CategoryFilter component.
 */
export const CategoryFilter = ({ categories, selectedCategories, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <div key={category} className="flex items-center space-x-2">
          <Checkbox
            id={category}
            checked={selectedCategories.includes(category)}
            onCheckedChange={() => onCategoryChange(category)}
          />
          <Label htmlFor={category} className="text-sm font-medium capitalize">
            {category}
          </Label>
        </div>
      ))}
    </div>
  );
};
