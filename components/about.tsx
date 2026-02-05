"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function About() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/founder.jpg"
                alt="Miami Fades barber at work"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
              Based on a True Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Miami Fades
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Miami Fades is a premium grooming company built on precision,
              artistry, and world-class standards. Founded in Toronto and
              trusted by over 60,000 clients, we are now expanding into the
              United States.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              We are elevating modern men&apos;s grooming into a global
              experience of confidence, culture, and craftsmanship.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg px-8"
            >
              About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
