"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Mail, ArrowRight } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  services: [
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Memberships", href: "#" },
    { label: "Gift Cards", href: "#" },
  ],
  support: [
    { label: "Contact", href: "#contact" },
    { label: "FAQs", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-3xl tracking-wide mb-6 block">
              MIAMI FADES
            </Link>
            <p className="text-background/70 leading-relaxed mb-6 max-w-sm">
              Premium grooming company built on precision, artistry, and
              world-class standards. Trusted by over 60,000 clients.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-background/10 pt-12 mb-12">
          <div className="max-w-xl mx-auto text-center">
            <Mail className="w-8 h-8 mx-auto mb-4 text-background/70" />
            <h3 className="font-serif text-2xl mb-3">Stay in the Loop</h3>
            <p className="text-background/70 mb-6">
              Subscribe for priority access to offers, events, and grooming updates.
            </p>
            <form className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background/40"
              />
              <Button
                type="submit"
                className="bg-background text-foreground hover:bg-background/90 shrink-0 px-6"
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Miami Fades. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-background/50 text-sm hover:text-background/70 transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-background/50 text-sm hover:text-background/70 transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-background/50 text-sm hover:text-background/70 transition-colors duration-300"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
