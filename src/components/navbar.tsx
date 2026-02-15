"use client";

import LinkNext from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Committees", href: "/committees" },
  { name: "Resources", href: "/resources" },
  { name: "Secretariat", href: "/secretariat" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-20 flex items-center",
      scrolled 
        ? "bg-background/95 backdrop-blur-xl border-b border-white/5 shadow-2xl" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <LinkNext href="/" className="flex items-center gap-2 group">
            <span className="font-headline font-bold text-2xl tracking-tighter text-white">
              IHSAN <span className="text-primary">MUN</span>
            </span>
          </LinkNext>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <LinkNext
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-white",
                pathname === link.href 
                  ? "text-white font-bold" 
                  : "text-white/60"
              )}
            >
              {link.name}
            </LinkNext>
          ))}
          
          <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-sm font-bold shadow-lg transform transition hover:scale-105 active:scale-95">
            <LinkNext href="/registration">Register Now</LinkNext>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-background border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <LinkNext
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "text-lg font-semibold py-2",
                pathname === link.href ? "text-primary" : "text-white"
              )}
            >
              {link.name}
            </LinkNext>
          ))}
          <Button asChild className="bg-primary w-full py-7 text-lg rounded-xl mt-2">
            <LinkNext href="/registration" onClick={() => setIsMenuOpen(false)}>
              Register Now
            </LinkNext>
          </Button>
        </div>
      )}
    </nav>
  );
}
