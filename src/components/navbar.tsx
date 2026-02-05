
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
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
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-primary transition-colors">
            I
          </div>
          <span className="font-headline font-bold text-xl tracking-tight text-secondary">
            IHSAN <span className="text-primary">MUN</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90 rounded-full px-6">
            <Link href="/registration">Register Now</Link>
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
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "text-lg font-semibold py-2",
                pathname === link.href ? "text-primary" : "text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-primary w-full py-6 text-lg rounded-xl">
            <Link href="/registration" onClick={() => setIsMenuOpen(false)}>
              Register Now
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
