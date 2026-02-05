
"use client";

import LinkNext from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram } from "lucide-react";
import { useState } from "react";

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <LinkNext href="/" className="flex items-center gap-2 group">
            <span className="font-headline font-bold text-xl tracking-tight text-secondary">
              IHSAN <span className="text-primary">MUN</span>
            </span>
          </LinkNext>
          <div className="hidden sm:flex items-center gap-3 border-l border-border pl-4 ml-2">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary/60 hover:text-primary transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <LinkNext
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-secondary"
              )}
            >
              {link.name}
            </LinkNext>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90 rounded-full px-6">
            <LinkNext href="/registration">Register Now</LinkNext>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-secondary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-border p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <LinkNext
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "text-lg font-semibold py-2",
                pathname === link.href ? "text-primary" : "text-secondary"
              )}
            >
              {link.name}
            </LinkNext>
          ))}
          <div className="flex gap-4 py-2 border-t border-border mt-2">
             <a href="#" className="text-secondary hover:text-primary"><Instagram size={24} /></a>
          </div>
          <Button asChild className="bg-primary w-full py-6 text-lg rounded-xl">
            <LinkNext href="/registration" onClick={() => setIsMenuOpen(false)}>
              Register Now
            </LinkNext>
          </Button>
        </div>
      )}
    </nav>
  );
}
