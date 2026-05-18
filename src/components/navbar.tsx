"use client";

import LinkNext from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Schedule", href: "/schedule" },
  { name: "Committees", href: "/committees" },
  { name: "Resources", href: "/resources" },
  { name: "Venue", href: "/campus" },
  { name: "Secretariat", href: "/secretariat" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const updateScrolled = () => {
      const nextScrolled = window.scrollY > 20;
      setScrolled((previous) => (previous === nextScrolled ? previous : nextScrolled));
      frameId = 0;
    };

    const handleScroll = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScrolled);
    };

    updateScrolled();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-[background-color,border-color,box-shadow] duration-300",
      scrolled 
        ? "bg-background/92 border-b border-white/10 shadow-[0_20px_46px_-30px_rgba(0,0,0,0.88)]" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <LinkNext href="/" className="flex items-center gap-2 group">
          <span className="font-serif font-bold text-2xl tracking-tighter text-white">
            IHSAN <span className="text-brand-gradient">MUN</span>
          </span>
        </LinkNext>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <LinkNext
              key={link.href}
              href={link.href}
              className={cn(
                "relative py-1 text-xs font-medium uppercase tracking-widest transition-colors duration-200 hover:text-white",
                pathname === link.href 
                  ? "text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-accent" 
                  : "text-white/75"
              )}
            >
              {link.name}
            </LinkNext>
          ))}
          
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 font-bold text-xs uppercase tracking-widest btn-premium">
            <LinkNext href="/registration">Apply Now</LinkNext>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-card/98 border-b border-white/10 p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300 shadow-[0_22px_52px_-30px_rgba(0,0,0,0.9)]">
          {navLinks.map((link) => (
            <LinkNext
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "text-lg font-serif font-bold tracking-tight",
                pathname === link.href ? "text-white" : "text-white/85"
              )}
            >
              {link.name}
            </LinkNext>
          ))}
          <Button asChild className="bg-primary w-full py-7 text-sm font-bold uppercase tracking-widest rounded-full mt-2">
            <LinkNext href="/registration" onClick={() => setIsMenuOpen(false)}>
              Apply Now
            </LinkNext>
          </Button>
        </div>
      )}
    </nav>
  );
}
