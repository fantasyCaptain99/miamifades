"use client";

import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    location: "Ajax",
    quote:
      "I just got my first barber shop cut experience at this location and I feel like myself again. Shouts out benzo for shaping me up, I felt it would be a good experience and it turns out I'm right.",
    author: "Jivan Malcolm",
  },
  {
    location: "Junction",
    quote:
      "Extraordinary experience and cut by Bhupendra today. Took such great care, making sure everything was perfect. Thank you and we'll see see you again soon!",
    author: "Jill A",
  },
  {
    location: "Beach",
    quote:
      "Love this shop and location. Great care and professionalism from the owner and Alex who did an amazing job with my undercut. It can be tough to find a barber who handles these cuts with care, glad I came here. Been here 4 times now and I always feel taken care of.",
    author: "Melinda Dias",
  },
  {
    location: "Lawrence Park",
    quote:
      "So glad Miami Fades is back in the neighborhood! My son loves getting his haircut here the barbers are skilled, friendly, and always deliver a sharp cut.",
    author: "HB",
  },
  {
    location: "Yorkville",
    quote:
      "What really sets this barbershop apart is the sense of belonging. Whether it's your first visit or your fiftieth, you're treated like part of the community. There's always laughter, music that brings back memories, and conversations that leave you smiling long after you leave.",
    author: "Joshua Munkandi",
  },
];

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const next = () =>
    goTo(current === testimonials.length - 1 ? 0 : current + 1);
  const prev = () =>
    goTo(current === 0 ? testimonials.length - 1 : current - 1);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-primary/5 overflow-hidden"
    >
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
            What Our Clients Say
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Testimonials
          </h2>
        </div>

        {/* Testimonial Card */}
        <div
          className={`relative transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="bg-card rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />

            {/* Content */}
            <div
              className={`transition-all duration-500 ease-out ${
                isAnimating
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {/* Location Badge */}
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                {testimonials[current].location}
              </span>

              {/* Quote */}
              <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <p className="text-muted-foreground">
                — {testimonials[current].author}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
