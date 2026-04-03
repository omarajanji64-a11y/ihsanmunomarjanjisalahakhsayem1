import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Instagram, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-16 text-center">
              <ScrollReveal>
                <h1 className="text-5xl md:text-7xl font-bold">Connect With <span className="text-brand-gradient">IHSAN MUN</span></h1>
                <p className="text-xl text-foreground/85 mt-6 max-w-2xl mx-auto">
                  Have questions about the conference? Our team is here to help you 
                  start your diplomatic journey. Reach out to us through any of the channels below.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Location Card */}
                <div className="surface-panel flex flex-col items-center gap-6 rounded-[2.5rem] p-10 text-center transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Our Venue</h4>
                    <p className="text-foreground/80">Ihsan Schools Atakent<br />Istanbul, Turkey</p>
                  </div>
                </div>

                {/* Email Card */}
                <a 
                  href="mailto:ihsanmunpr@gmail.com"
                  className="surface-panel group flex flex-col items-center gap-6 rounded-[2.5rem] p-10 text-center transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Email Us</h4>
                    <p className="text-foreground/80">ihsanmunpr@gmail.com</p>
                    <p className="text-xs text-accent mt-2 uppercase tracking-wider">Fast Response</p>
                  </div>
                </a>

                {/* Instagram Card */}
                <a 
                  href="https://www.instagram.com/ihsanmodelun?igsh=bWU3YXN0MG5paXJt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-panel group flex flex-col items-center gap-6 rounded-[2.5rem] p-10 text-center transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Follow Us</h4>
                    <p className="text-foreground/80">@ihsanmodelun</p>
                    <p className="text-xs text-accent mt-2 uppercase tracking-wider">Daily Updates</p>
                  </div>
                </a>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
