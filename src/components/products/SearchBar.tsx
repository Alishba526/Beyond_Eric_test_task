import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  /**
   * The current search query string.
   */
  searchQuery: string;
  /**
   * Callback function triggered when the search input value changes.
   * @param query The new search query string.
   */
  onSearchChange: (query: string) => void;
}

/**
 * @component SearchBar
 * @description A reusable search input component with an icon.
 *              Allows users to type in a search query to filter products.
 * @param {SearchBarProps} props - The props for the SearchBar component.
 */
export const SearchBar = ({ searchQuery, onSearchChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-9 pr-4 py-2 rounded-md bg-background border border-input focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2"
      />
    </div>
  );
};
