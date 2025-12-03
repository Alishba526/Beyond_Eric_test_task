import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface PriceFilterProps {
  /**
   * The current maximum price selected in the filter.
   */
  priceRange: number;
  /**
   * Callback function triggered when the slider value changes.
   * @param value The new maximum price value.
   */
  onPriceChange: (value: number) => void;
}

/**
 * @component PriceFilter
 * @description Renders a slider component allowing users to filter products by a maximum price.
 *              Displays the current selected maximum price.
 * @param {PriceFilterProps} props - The props for the PriceFilter component.
 */
export const PriceFilter = ({ priceRange, onPriceChange }: PriceFilterProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <Label htmlFor="price-range" className="text-sm font-medium">
          Max Price
        </Label>
        <span className="text-sm font-medium">${priceRange}</span>
      </div>
      <Slider
        id="price-range"
        min={0}
        max={1000}
        step={10}
        defaultValue={[priceRange]}
        onValueChange={(value) => onPriceChange(value[0])}
      />
    </div>
  );
};
