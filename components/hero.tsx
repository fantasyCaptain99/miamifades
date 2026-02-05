"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Phone } from "lucide-react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToDiscover = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Miami Fades premium barbershop interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-sm tracking-[0.4em] uppercase text-background/80 mb-6">
            Premium Grooming Experience
          </span>
        </div>

        <h1
          className={`font-serif text-6xl text-background mb-8 leading-tight text-balance transition-all duration-1000 delay-200 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Discover the
          <br />
          <span className="italic font-light">Miami Fades</span>
          <br />
        </h1>

        <p
          className={`text-background/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-400 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Precision, artistry, and world-class standards. Trusted by over 60,000
          clients.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-base tracking-wide transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Reserve Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-background/50 text-background hover:bg-background/10 px-8 py-6 text-base tracking-wide transition-all duration-300 gap-2 bg-transparent"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToDiscover}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-background/70 hover:text-background transition-all duration-500 animate-bounce ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Scroll to discover"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
