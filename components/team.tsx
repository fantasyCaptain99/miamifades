"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

const team = [
  { name: "Erik Xega", image: "/images/tm1.jpg", role: "Fade Master" },
  {
    name: "Brandon McCullough",
    image: "/images/tm2.jpg",
    role: "Fade Master",
  },
  { name: "Alex Xega", image: "/images/tm3.jpg", role: "Fade Master" },
  { name: "Oya St Clair", image: "/images/tm4.jpg", role: "Fade Master" },
];

export function Team() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="team" className="py-24 lg:py-32 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
            Miami Fades Fade Masters
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Members
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`group text-center transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>

              {/* Info */}
              <h3 className="font-serif text-lg md:text-xl text-foreground mb-1 transition-colors duration-300 group-hover:text-primary">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 bg-transparent"
          >
            Meet the Team
          </Button>
        </div>
      </div>
    </section>
  );
}
