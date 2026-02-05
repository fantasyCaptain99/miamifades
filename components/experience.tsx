"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

export function Experience() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
              Hot Steam Towel Experience
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              The Miami Fades
              <br />
              <span className="italic font-light">Signature Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Indulge in our signature ritual featuring orange blossom essential
              oils, rejuvenating steam towels, gentle head massage, and rose
              water toning mist. Every service concludes with this premium
              experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg px-8"
              >
                Reserve Now
              </Button>
            </div>
          </div>

          {/* Image */}
          <div
            className={`order-1 lg:order-2 relative transition-all duration-1000 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/experience.jpg"
                alt="Miami Fades signature hot towel experience"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
