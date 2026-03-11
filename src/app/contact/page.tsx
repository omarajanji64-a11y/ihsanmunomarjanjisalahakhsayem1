"use client";

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
                <h1 className="text-5xl md:text-7xl font-bold">Connect With <span className="text-primary-foreground">IHSAN MUN</span></h1>
                <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
                  Have questions about the conference? Our team is here to help you 
                  start your diplomatic journey. Reach out to us through any of the channels below.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Location Card */}
                <div className="flex flex-col items-center text-center gap-6 p-10 bg-card rounded-[2.5rem] shadow-xl border border-border/50 hover:shadow-primary/5 hover:border-primary/50 transition-all">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Our Campus</h4>
                    <p className="text-muted-foreground">Ihsan Schools Atakent<br />Istanbul, Turkey</p>
                  </div>
                </div>

                {/* Email Card */}
                <a 
                  href="mailto:mun@ihsanschools.org"
                  className="flex flex-col items-center text-center gap-6 p-10 bg-card rounded-[2.5rem] shadow-xl border border-border/50 hover:shadow-primary/5 hover:border-primary/50 transition-all group"
                >
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Email Us</h4>
                    <p className="text-muted-foreground">mun@ihsanschools.org</p>
                    <p className="text-xs text-primary font-bold mt-2 uppercase tracking-wider">Fast Response</p>
                  </div>
                </a>

                {/* Instagram Card */}
                <a 
                  href="https://www.instagram.com/ihsanmodelun?igsh=bWU3YXN0MG5paXJt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center gap-6 p-10 bg-card rounded-[2.5rem] shadow-xl border border-border/50 hover:shadow-primary/5 hover:border-primary/50 transition-all group"
                >
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Follow Us</h4>
                    <p className="text-muted-foreground">@ihsanmodelun</p>
                    <p className="text-xs text-primary font-bold mt-2 uppercase tracking-wider">Daily Updates</p>
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
