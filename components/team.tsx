"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/booking-dialog";

interface TeamMember {
  name: string;
  image: string;
  role: string;
}

const team: TeamMember[] = [
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
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setDialogOpen(true);
  };

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

        {/* Team: horizontal scroll on mobile, grid on md+ */}
        <div className="flex overflow-x-auto gap-6 -mx-6 px-6 snap-x snap-mandatory md:mx-0 md:px-0 md:grid md:grid-cols-4 md:overflow-visible md:snap-none lg:gap-8 mb-12 ml-1">
          {team.map((member, index) => (
            <button
              key={member.name}
              onClick={() => handleMemberClick(member)}
              className={`group text-center transition-all duration-700 ease-out cursor-pointer flex-shrink-0 w-[85vw] max-w-[280px] snap-start md:w-auto md:max-w-none ${
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
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/90 px-4 py-2 rounded-full text-sm">
                    Book Now
                  </span>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-serif text-lg md:text-xl text-foreground mb-1 transition-colors duration-300 group-hover:text-primary">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Booking Dialog */}
      <BookingDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        member={selectedMember}
      />
    </section>
  );
}
