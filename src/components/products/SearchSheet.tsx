import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { useSearchStore } from "@/store/searchStore";

export const SearchSheet = () => {
  const { searchQuery, setSearchQuery } = useSearchStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Search className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <div className="flex flex-col space-y-4 pt-8">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
