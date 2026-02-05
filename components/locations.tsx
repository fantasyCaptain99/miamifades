"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";

const locations = [
  { name: "Yorkville", address: "Toronto, ON" },
  { name: "Lawrence Park", address: "Toronto, ON" },
  { name: "Junction", address: "Toronto, ON" },
  { name: "Ajax", address: "Ajax, ON" },
  { name: "Beaches", address: "Toronto, ON" },
];

export function Locations() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
            Find Your Nearest Location
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Our Locations
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Now open 7 days a week, 9am - 7pm
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {locations.map((location, index) => (
            <div
              key={location.name}
              className={`group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-500 ease-out hover:shadow-lg cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {location.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {location.address}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Mobile Service */}
          <div
            className={`group bg-primary/10 rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-500 ease-out hover:shadow-lg cursor-pointer ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${locations.length * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  Mobile Fade Master
                </h3>
                <p className="text-muted-foreground text-sm">
                  We come to you
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-5 h-5" />
            <span>Open 7 Days a Week</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
          <span className="text-foreground font-medium">9am - 7pm</span>
        </div>
      </div>
    </section>
  );
}
