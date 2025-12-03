import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortDropdownProps {
  /**
   * The currently selected sort option (e.g., "price-asc", "name-desc").
   */
  sortOption: string;
  /**
   * Callback function triggered when the sort option changes.
   * @param value The new sort option.
   */
  onSortChange: (value: string) => void;
}

/**
 * @component SortDropdown
 * @description Renders a dropdown menu for selecting product sorting options.
 *              Allows users to sort products by price (low to high, high to low) or name (A to Z, Z to A).
 * @param {SortDropdownProps} props - The props for the SortDropdown component.
 */
export const SortDropdown = ({ sortOption, onSortChange }: SortDropdownProps) => {
  return (
    <Select value={sortOption} onValueChange={onSortChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="price-asc">Price: Low to High</SelectItem>
        <SelectItem value="price-desc">Price: High to Low</SelectItem>
        <SelectItem value="name-asc">Name: A to Z</SelectItem>
        <SelectItem value="name-desc">Name: Z to A</SelectItem>
      </SelectContent>
    </Select>
  );
};
