"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const savings = product.originalPrice - product.price;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <Link
        href="/#products"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to products
      </Link>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {savings > 0 && (
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm px-4 py-2 rounded-full">
              Save ${savings}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            {product.name}
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-semibold text-foreground">
              ${product.price}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-lg text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          {product.description && (
            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>
          )}
          <Button
            size="lg"
            className="w-full sm:w-auto gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            onClick={() => addItem(product)}
          >
            <ShoppingBag className="w-5 h-5" />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
