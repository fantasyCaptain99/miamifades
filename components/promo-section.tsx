"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set end date to 7 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex items-center gap-3">
      {[
        { value: timeLeft.days, label: "DAY" },
        { value: timeLeft.hours, label: "HOURS" },
        { value: timeLeft.minutes, label: "MIN" },
        { value: timeLeft.seconds, label: "SEC" },
      ].map((item, index) => (
        <div key={item.label} className="flex items-center gap-3">
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              {formatNumber(item.value)}
            </div>
            <div className="text-xs tracking-[0.2em] text-white/60 mt-1">
              {item.label}
            </div>
          </div>
          {index < 3 && (
            <span className="text-3xl md:text-4xl text-white/40 font-light">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export function PromoSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative">
      {/* Top Dark Section - Holiday Sale */}
      <div className="relative bg-foreground text-background pt-24 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="text-sm tracking-[0.3em] uppercase text-accent mb-4 block">
                Limited Time Only
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background mb-6 leading-tight">
                Holiday Sale
                <br />
                Up to 25% Off
              </h2>
              <p className="text-background/70 text-lg leading-relaxed mb-8 max-w-md">
                Shop our selection of Kevin Murphy products at reduced price
                during the Holiday Sale. Hurry up!
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-background/30 text-background hover:bg-background hover:text-foreground transition-all duration-300 px-8 bg-transparent"
              >
                Shop Now
              </Button>
            </div>

            {/* Countdown Timer */}
            <div
              className={`flex justify-center lg:justify-end transition-all duration-1000 delay-200 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <CountdownTimer />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Light Section - Signature Experience */}
      <div className="relative bg-muted pt-24 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`max-w-xl transition-all duration-1000 delay-500 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
              The Miami Fades Signature Experience
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Highlight The
              <br />
              Full Rituals
            </h2>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 px-8 bg-transparent"
            >
              Reserve Now
            </Button>
          </div>
        </div>
        <div>
          <Image src="/images/highlight.jpg"
                alt="Miami Fades barber at work"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
           />
        </div>
      </div>
    </section>
  );
}
