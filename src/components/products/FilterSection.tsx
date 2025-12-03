import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FilterSectionProps {
  /**
   * The title of the filter section (e.g., "Categories", "Price Range").
   */
  title: string;
  /**
   * The actual filter controls to be rendered inside the section.
   */
  children: React.ReactNode;
}

/**
 * @component FilterSection
 * @description A reusable container component for individual filter controls.
 *              It provides a consistent header with a title and a content area for filters.
 * @param {FilterSectionProps} props - The props for the FilterSection component.
 */
export const FilterSection = ({ title, children }: FilterSectionProps) => {
  return (
    <Card className="bg-transparent border-0 shadow-none">
      <CardHeader className="p-2">
        <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        {children}
      </CardContent>
    </Card>
  );
};
