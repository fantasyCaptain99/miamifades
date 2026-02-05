"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Simulate submit – replace with your API or form service
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  }

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-medium tracking-[0.25em] uppercase text-foreground mb-12 md:mb-16">
          Contact
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
            <Input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="h-12 md:h-14 rounded-lg border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-2"
              disabled={status === "sending"}
            />
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              className="h-12 md:h-14 rounded-lg border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-2"
              disabled={status === "sending"}
            />
          </div>
          <Textarea
            name="message"
            placeholder="Message"
            required
            rows={6}
            className="min-h-[140px] rounded-lg border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-2 resize-y mb-6 md:mb-8"
            disabled={status === "sending"}
          />
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              disabled={status === "sending"}
              className="min-w-[220px] h-12 md:h-14 rounded-md bg-foreground text-background hover:bg-foreground/90 text-sm font-medium tracking-[0.2em] uppercase transition-colors"
            >
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                  ? "Message sent"
                  : "Send message"}
            </Button>
          </div>
          {status === "sent" && (
            <p className="text-center text-muted-foreground text-sm mt-4">
              Thanks for reaching out. We&apos;ll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
