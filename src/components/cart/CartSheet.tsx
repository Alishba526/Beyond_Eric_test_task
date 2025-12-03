import { useCartStore } from "@/store/cartStore";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Minus, Trash2 } from "lucide-react";

export const CartSheet = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCartStore();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Sheet open={isCartOpen} onOpenChange={closeCart}>
      <SheetContent className="w-[400px] sm:w-[540px] glass flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-gradient">
            Shopping Cart
          </SheetTitle>
        </SheetHeader>
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <p className="text-muted-foreground text-center">
              Your cart is empty.
            </p>
            <Button onClick={closeCart} variant="outline">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 pr-4 -mr-4 my-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-2 rounded-lg glass">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-contain bg-white rounded-md p-1"
                    />
                    <div className="flex-1 space-y-1">
                      <h4 className="font-semibold line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-sm font-bold">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-bold w-4 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <SheetFooter>
              <div className="w-full space-y-4">
                <div className="flex justify-between items-center font-bold text-lg">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Proceed to Checkout
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
