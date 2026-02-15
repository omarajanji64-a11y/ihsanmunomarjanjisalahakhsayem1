
"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Instagram, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />
      
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-16 text-center">
              <ScrollReveal>
                <h1 className="text-5xl md:text-7xl font-bold">Connect With <span className="text-primary">IHSAN MUN</span></h1>
                <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
                  Have questions about the conference? Our team is here to help you 
                  start your diplomatic journey. Reach out to us through any of the channels below.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center gap-6 p-10 bg-white rounded-[2.5rem] shadow-xl border border-border/50 hover:shadow-2xl transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Our Campus</h4>
                    <p className="text-muted-foreground">Ihsan Schools<br />Istanbul, Turkey</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-6 p-10 bg-white rounded-[2.5rem] shadow-xl border border-border/50 hover:shadow-2xl transition-shadow">
                  <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Email Us</h4>
                    <p className="text-muted-foreground">mun@ihsanschools.org</p>
                    <p className="text-xs text-primary font-bold mt-2 uppercase tracking-wider">Fast Response</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-6 p-10 bg-white rounded-[2.5rem] shadow-xl border border-border/50 hover:shadow-2xl transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <Instagram size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Follow Us</h4>
                    <p className="text-muted-foreground">@ihsanschoolsmun</p>
                    <p className="text-xs text-secondary font-bold mt-2 uppercase tracking-wider">Daily Updates</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400} className="pt-8">
                <p className="text-muted-foreground text-sm italic">
                  Our secretariat typically responds within 24-48 business hours.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
