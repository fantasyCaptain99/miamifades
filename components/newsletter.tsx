"use client";

import React from "react"

import { useState } from "react";
import { Send, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-sm uppercase tracking-[0.3em] text-primary mb-4 block">
          Stay Inspired
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
          Join Our Visual Journey
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          Subscribe to receive weekly curated collections, behind-the-scenes stories,
          and exclusive photography tips from world-renowned artists.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 bg-secondary border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            required
          />
          <button
            type="submit"
            disabled={isSubmitted}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm tracking-wide hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isSubmitted ? (
              <>
                <Check className="w-4 h-4" />
                <span>Subscribed!</span>
              </>
            ) : (
              <>
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <p className="mt-4 text-xs text-muted-foreground">
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
