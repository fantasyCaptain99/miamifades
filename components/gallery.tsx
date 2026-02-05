"use client";

import { useState } from "react";

const categories = ["All", "Nature", "Portrait", "Urban", "Abstract"];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.3em] text-primary mb-4 block">
            Featured Work
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Visual Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated collection of moments captured by talented photographers
            worldwide. Each image tells a unique story.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-sm tracking-wide rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="font-serif text-xl text-foreground mb-2">No images yet</h3>
          <p className="text-muted-foreground text-sm">
            Check back soon for new visual stories
          </p>
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 border border-border text-foreground rounded-full text-sm tracking-wide hover:bg-secondary transition-colors duration-300">
            Load More Stories
          </button>
        </div>
      </div>
    </section>
  );
}
