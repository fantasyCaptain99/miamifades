"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";

export function CartContent() {
  const { items, updateQuantity, removeItem, totalCount, totalPrice, clearCart } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-8 h-8 text-muted-foreground" />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
          Your cart is empty
        </h2>
        <p className="text-muted-foreground mb-8">
          Add some products from our store to get started.
        </p>
        <Button asChild>
          <Link href="/#products">Shop products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
        Cart ({totalCount} {totalCount === 1 ? "item" : "items"})
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* List */}
        <div className="lg:col-span-2 space-y-6">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="flex gap-4 md:gap-6 p-4 rounded-2xl bg-card border border-border"
            >
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden flex-shrink-0 bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <Link
                  href={`/products/${product.slug}`}
                  className="font-medium text-foreground hover:text-primary transition-colors line-clamp-1"
                >
                  {product.name}
                </Link>
                <p className="text-lg font-semibold text-primary mt-1">
                  ${product.price}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex items-center border border-border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-r-none"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center text-sm tabular-nums">
                      {quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-l-none"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    onClick={() => removeItem(product.id)}
                    aria-label="Remove from cart"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="font-semibold text-foreground">
                  ${(product.price * quantity).toFixed(0)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 p-6 rounded-2xl bg-card border border-border space-y-4">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(0)}</span>
            </div>
            <div className="border-t border-border pt-4 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${totalPrice.toFixed(0)}</span>
            </div>
            <Button
              className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              Checkout (coming soon)
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={clearCart}
            >
              Clear cart
            </Button>
            <Link href="/#products" className="block text-center text-sm text-muted-foreground hover:text-foreground">
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
