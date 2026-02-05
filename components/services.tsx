"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Clock, Scissors } from "lucide-react";
import "../styles/globals.css";

const services = [
  {
    name: "The Fade",
    duration: "45+ mins",
    price: "$65+",
    description:
      "A blended haircut crafted with precision, balance, and smooth transitions. Each fade includes razor-sharp detailing, scissor work if required and concludes with our signature ritual.",
  },
  {
    name: "The Classic",
    duration: "20 mins",
    price: "$55",
    description:
      "A clean, classic cut tailored to your structure. No fade, sides no shorter than a level 2, and sharp edges for a crisp finish. Completed with our signature ritual.",
  },
  {
    name: "The Precision",
    duration: "1 hour",
    price: "$65",
    description:
      "Designed for clients with long hair styles who demand refined symmetry and meticulous detail. This service finishes with our signature ritual.",
  },
  {
    name: "The Hairline",
    duration: "30 mins",
    price: "$45",
    description:
      "A clean and defined hairline shape up using advanced trimmer outlining and razor techniques. Finished with a soothing steam towel and rose water mist.",
  },
  {
    name: "The Beard",
    duration: "30 mins",
    price: "$45",
    description:
      "A full beard grooming transformation with structured shaping, tapering, and razor-line detailing. Enhanced with essential oil steam towels and rose water mist.",
  },
  {
    name: "The Cuban Shave",
    duration: "1 hour",
    price: "$56",
    description:
      "Our signature hot-towel razor shave inspired by classic barbershop traditions. Enjoy layered steam towels with essential oils, rich lather, and blade precision.",
  },
  {
    name: "The Student",
    duration: "30 min",
    price: "$50",
    description:
      "A fresh, motivating cut designed to help students look and feel their best. Choose a clean fade or classic style, all finished with our signature steam towel and rose water mist to inspire confidence for school, sports, and everyday life.",
  },
  {
    name: "The Kid",
    duration: "30 min",
    price: "$50",
    description:
      "A positive, confidence-boosting grooming experience for children 12 and under. Whether it’s a clean fade or a classic cut, we keep them looking sharp and feeling proud.",
  },
  {
    name: "THE HAIRLINE",
    duration: "30 min",
    price: "$45",
    description:
      "A clean and defined hairline shape up using advanced trimmer outlining and razor techniques. Finished with a soothing steam towel and rose water mist to maintain a crisp.",
  },
];

export function Services() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/50">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
            Our Signature Services Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Our Services
          </h2>
        </div>

        {/* Services: horizontal scroll on mobile, grid on md+ */}
        <div className="flex overflow-x-auto gap-6 pb-4 -mx-6 px-6 snap-x snap-mandatory md:mx-0 md:px-0 md:grid md:grid-cols-2 md:overflow-visible md:snap-none lg:grid-cols-4 lg:gap-8 mb-12 service-list ml-1">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`service-item group bg-card rounded-2xl p-8 transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-1 flex-shrink-0 w-[85vw] max-w-[340px] snap-start md:w-auto md:max-w-none ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Scissors className="w-5 h-5 text-primary" />
              </div>

              {/* Title & Price */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-serif text-2xl text-foreground">
                  {service.name}
                </h3>
                <span className="text-xl font-medium text-primary">
                  {service.price}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                <Clock className="w-4 h-4" />
                <span>Duration: {service.duration}</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
