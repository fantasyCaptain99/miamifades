"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const featuredStories = [
  {
    src: "/images/gallery-6.jpg",
    title: "Journey Through the Sahara",
    excerpt:
      "A visual expedition across the world's largest hot desert, capturing the interplay of light and sand.",
    author: "Amira Hassan",
    readTime: "8 min read",
  },
  {
    src: "/images/gallery-8.jpg",
    title: "Autumn in the Black Forest",
    excerpt:
      "The mystical forests of Germany transform into a golden wonderland as autumn takes hold.",
    author: "Nina Petrova",
    readTime: "6 min read",
  },
];

export function Featured() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-primary mb-4 block">
              Editor{"'"}s Picks
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
              Featured Stories
            </h2>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
          >
            View All Stories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Featured Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {featuredStories.map((story) => (
            <article
              key={story.title}
              className="group cursor-pointer bg-background rounded-xl overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={story.src || "/placeholder.svg"}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span>{story.author}</span>
                  <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                  <span>{story.readTime}</span>
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {story.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {story.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                  <span>Read Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
