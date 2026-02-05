"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const products = [
  {
    name: "NIGHT.RIDER",
    price: 49,
    originalPrice: 56,
    image: "/images/products.jpg",
  },
  {
    name: "KILLER.CURLS",
    price: 56,
    originalPrice: 63,
    image: "/images/products.jpg",
  },
  {
    name: "FREE.HOLD",
    price: 49,
    originalPrice: 56,
    image: "/images/products.jpg",
  },
  {
    name: "POWDER.PUFF",
    price: 56,
    originalPrice: 63,
    image: "/images/products.jpg",
  },
];

export function Products() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="products" className="py-24 lg:py-32 bg-muted/50">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
            A New Standard in Men&apos;s Grooming
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Products
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`group bg-card rounded-2xl overflow-hidden transition-all duration-700 ease-out hover:shadow-xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Sale Badge */}
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                  Save ${product.originalPrice - product.price}
                </div>
                {/* Quick Add */}
                <button className="absolute bottom-3 right-3 w-10 h-10 bg-card rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground shadow-lg">
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-foreground">
                    ${product.price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 px-8"
          >
            All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
