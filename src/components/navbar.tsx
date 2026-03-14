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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-20 flex items-center",
      scrolled 
        ? "bg-primary/95 backdrop-blur-md border-b border-white/5 shadow-xl" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <LinkNext href="/" className="flex items-center gap-2 group">
          <span className="font-serif font-bold text-2xl tracking-tighter text-white">
            IHSAN <span className="text-white/75">MUN</span>
          </span>
        </LinkNext>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <LinkNext
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs font-medium uppercase tracking-widest transition-all duration-300 hover:text-white relative py-1",
                pathname === link.href 
                  ? "text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white" 
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
        <div className="absolute top-20 left-0 right-0 bg-primary border-b border-white/10 p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <LinkNext
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "text-lg font-serif font-bold tracking-tight",
                pathname === link.href ? "text-primary" : "text-white"
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
