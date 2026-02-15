
"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Countdown } from "@/components/countdown";

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-bg")!;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Cinematic Treatment */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-visible">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-[0.25]"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center pb-32 -mt-12 md:-mt-24">
          <ScrollReveal className="fade-only">
            <h2 className="text-xs font-medium tracking-[0.4em] text-[#EDEAF3] mb-10 uppercase">
              The Future of Global Diplomacy
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200} className="fade-only">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.85] tracking-tight text-white uppercase flex flex-col items-center">
              <span>IHSAN</span>
              <span className="flex items-baseline gap-4">
                MUN <span className="text-[0.7em] opacity-40 italic font-light tracking-normal">'26</span>
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={400} className="fade-only">
            <p className="max-w-[650px] mx-auto text-lg text-[#EDEAF3] mb-20 leading-[1.6] font-normal opacity-90">
              Step into the shoes of global ambassadors. Debate world-shaping issues, 
              form strategic alliances, and lead the conversation at Ihsan Schools MUN.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500} className="fade-only">
            <div className="mt-8">
              <div className="max-w-4xl mx-auto">
                <Countdown />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 1: Introduction (Softened Deep Purple Transition) */}
      <section className="py-40 section-light">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
            <ScrollReveal className="relative h-[550px] rounded-[1rem] overflow-hidden shadow-2xl border border-primary/10">
              <Image
                src={PlaceHolderImages.find(img => img.id === "committee-unsc")!.imageUrl}
                alt="Committee Session"
                fill
                className="object-cover"
                data-ai-hint="un session"
              />
            </ScrollReveal>
            
            <div className="space-y-8">
              <ScrollReveal>
                <div className="w-12 h-[2px] bg-primary mb-6" />
                <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                  Where Leadership Meets <span className="text-primary italic">Global Perspective.</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg text-secondary-foreground/80 leading-relaxed max-w-[600px]">
                  Ihsan Schools Model United Nations is a transformative journey. 
                  We bring together young minds to tackle complex global challenges through 
                  diplomacy, critical thinking, and collaborative resolution building.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300} className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-xl">Global Research</h4>
                  <p className="text-sm text-secondary-foreground/60">Debate real-world UN agenda items with academic precision.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-xl">Diplomatic Network</h4>
                  <p className="text-sm text-secondary-foreground/60">Network with bright students from across the international region.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Committees (Dark Background) */}
      <section className="py-40 section-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 space-y-6">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">A Stage for <span className="text-primary italic">Every Interest</span></h2>
              <div className="w-16 h-[1px] bg-white/20 mx-auto mt-8" />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {[
              { 
                title: "Security Council", 
                desc: "Crisis management and high-level international security mandates.", 
                img: "committee-unsc"
              },
              { 
                title: "Human Rights Council", 
                desc: "Upholding universal freedoms and legislative justice for all.", 
                img: "committee-unhrc"
              },
              { 
                title: "ECOSOC", 
                desc: "Strategic economic stability and transformative social welfare.", 
                img: "committee-ecosoc"
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 150} className="h-full">
                <div className="bg-white/5 rounded-[1rem] overflow-hidden group border border-white/5 hover:border-white/10 transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden shrink-0">
                    <Image
                      src={PlaceHolderImages.find(img => img.id === item.img)!.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-10 space-y-4 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed mt-4">{item.desc}</p>
                    </div>
                    <Link href="/committees" className="text-primary text-[10px] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-[0.2em] pt-6">
                      View Agenda <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Call to Action (Softened Deep Purple Transition) */}
      <section className="py-48 section-light text-center">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tight">
              Ready to <span className="text-primary">Shape the World?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-secondary-foreground/80 mb-16 leading-relaxed">
              Registration for the 2026 Ihsan Schools MUN is now open. 
              Join a community of students dedicated to international cooperation and leadership.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 py-8 text-sm font-bold uppercase tracking-widest btn-premium">
              <Link href="/registration">Register as a Delegate</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
