import Link from "next/link";
import { Globe, Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="mb-20 grid grid-cols-1 gap-16 md:grid-cols-4">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                IHSAN <span className="text-white/65">MUN</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-foreground/82">
              Empowering the next generation of global leaders through diplomacy,
              debate, and critical thinking at Ihsan Schools.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ihsanmodelun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:mun@ihsanschools.org"
                className="text-white/70 transition-colors hover:text-white"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-8 font-serif text-sm font-bold uppercase tracking-widest text-white">Navigation</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest">
              <li><Link href="/about" className="text-foreground/82 transition-colors hover:text-white">About Us</Link></li>
              <li><Link href="/committees" className="text-foreground/82 transition-colors hover:text-white">Committees</Link></li>
              <li><Link href="/registration" className="text-foreground/82 transition-colors hover:text-white">Registration</Link></li>
              <li><Link href="/resources" className="text-foreground/82 transition-colors hover:text-white">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-8 font-serif text-sm font-bold uppercase tracking-widest text-white">Documents</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest text-foreground/82">
              <li className="cursor-default">Rules of Procedure</li>
              <li className="cursor-default">Study Guides</li>
              <li className="cursor-default">Delegate Handbook</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-8 font-serif text-sm font-bold uppercase tracking-widest text-white">Contact</h4>
            <ul className="space-y-6 text-xs tracking-wide">
              <li className="flex gap-4 text-foreground/82">
                <MapPin size={16} className="shrink-0 text-accent" />
                <span>Ihsan Schools Venue,<br />Istanbul, Turkey</span>
              </li>
              <li className="flex gap-4 text-foreground/82">
                <Mail size={16} className="shrink-0 text-accent" />
                <span>mun@ihsanschools.org</span>
              </li>
              <li className="flex gap-4 text-foreground/82">
                <Globe size={16} className="shrink-0 text-accent" />
                <span>ihsanschools.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 text-[10px] uppercase tracking-[0.2em] text-foreground/82 md:flex-row">
          <div className="space-y-2 text-center md:text-left">
            <p>Copyright {currentYear} IHSAN SCHOOLS MODEL UNITED NATIONS.</p>
            <p className="opacity-80">Designed by Salah Akhsayem & Omar Ajanji</p>
          </div>
          <div className="flex gap-10">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
