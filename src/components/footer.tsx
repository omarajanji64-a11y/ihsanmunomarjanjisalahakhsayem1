"use client";

import Link from "next/link";
import { Instagram, Mail, MapPin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-headline font-bold text-2xl tracking-tight text-foreground">
                IHSAN <span className="text-primary">MUN</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Empowering the next generation of global leaders through diplomacy, 
              debate, and critical thinking at Ihsan Schools.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/committees" className="text-muted-foreground hover:text-primary transition-colors">Committees</Link></li>
              <li><Link href="/registration" className="text-muted-foreground hover:text-primary transition-colors">Registration</Link></li>
              <li><Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Conference</h4>
            <ul className="space-y-3 text-sm">
              <li><span className="text-muted-foreground">Rules of Procedure</span></li>
              <li><span className="text-muted-foreground">Study Guides</span></li>
              <li><span className="text-muted-foreground">Position Papers</span></li>
              <li><span className="text-muted-foreground">Delegate Handbook</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Ihsan Schools Campus, Istanbul, Turkey</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary shrink-0" />
                <span>mun@ihsanschools.org</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Globe size={18} className="text-primary shrink-0" />
                <span>ihsanschools.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ihsan Schools Model United Nations. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
