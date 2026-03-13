"use client";

import Link from "next/link";
import { Instagram, Mail, MapPin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#48252F] border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-serif font-bold text-2xl tracking-tight text-white">
                IHSAN <span className="text-white/40">MUN</span>
              </span>
            </Link>
            <p className="text-[#A89BB5] text-sm leading-relaxed">
              Empowering the next generation of global leaders through diplomacy, 
              debate, and critical thinking at Ihsan Schools.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/ihsanmodelun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a href="mailto:mun@ihsanschools.org" className="text-white/40 hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white mb-8 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest">
              <li><Link href="/about" className="text-[#A89BB5] hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/committees" className="text-[#A89BB5] hover:text-white transition-colors">Committees</Link></li>
              <li><Link href="/registration" className="text-[#A89BB5] hover:text-white transition-colors">Registration</Link></li>
              <li><Link href="/resources" className="text-[#A89BB5] hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white mb-8 text-sm uppercase tracking-widest">Documents</h4>
            <ul className="space-y-4 text-[#A89BB5] text-xs uppercase tracking-widest">
              <li className="cursor-default">Rules of Procedure</li>
              <li className="cursor-default">Study Guides</li>
              <li className="cursor-default">Delegate Handbook</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white mb-8 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-6 text-xs tracking-wide">
              <li className="flex gap-4 text-[#A89BB5]">
                <MapPin size={16} className="text-primary shrink-0" />
                <span>Ihsan Schools Venue,<br />Istanbul, Turkey</span>
              </li>
              <li className="flex gap-4 text-[#A89BB5]">
                <Mail size={16} className="text-primary shrink-0" />
                <span>mun@ihsanschools.org</span>
              </li>
              <li className="flex gap-4 text-[#A89BB5]">
                <Globe size={16} className="text-primary shrink-0" />
                <span>ihsanschools.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-[#A89BB5]">
          <div className="space-y-2 text-center md:text-left">
            <p>© {new Date().getFullYear()} IHSAN SCHOOLS MODEL UNITED NATIONS.</p>
            <p className="opacity-60">Designed by Salah Akhsayem & Omar Ajanji</p>
          </div>
          <div className="flex gap-10">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
