"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Countdown } from "@/components/countdown";

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-bg")!;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Cinematic Treatment */}
      <section className="relative min-h-[95vh] flex flex-col items-center pt-16 md:pt-24 overflow-visible">
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

        <div className="container mx-auto px-6 relative z-10 text-center pb-32">
          <ScrollReveal className="fade-only mt-0">
            <h2 className="text-[10px] md:text-xs font-medium tracking-[0.4em] text-[#EDEAF3] mb-8 md:mb-12 uppercase">
              The Future of Global Diplomacy
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200} className="fade-only">
            <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl font-bold mb-8 md:mb-12 leading-[0.85] tracking-tight text-white uppercase flex flex-col items-center">
              <span>IHSAN</span>
              <span className="flex items-baseline gap-4">
                MUN <span className="text-[0.7em] opacity-40 italic font-light tracking-normal">'26</span>
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={400} className="fade-only">
            <p className="max-w-[650px] mx-auto text-base md:text-lg text-[#EDEAF3] mb-8 md:mb-12 leading-[1.6] font-normal opacity-90 px-4">
              Step into the shoes of global ambassadors. Debate world-shaping issues, 
              form strategic alliances, and lead the conversation at Ihsan Schools MUN.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500} className="fade-only">
            <div className="mt-0 flex flex-col items-center">
              <div className="max-w-4xl mx-auto w-full">
                <Countdown />
              </div>
              
              {/* Animated Realistic Architectural Branding - Enhanced Neoclassical Summit Logo */}
              <div className="mt-24 md:mt-40 flex flex-col items-center gap-8 opacity-50 animate-in fade-in zoom-in duration-1000 group">
                <div className="relative">
                  {/* Scanning Light Effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-lg">
                    <div className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-diplomatic-scanner" />
                  </div>

                  <svg viewBox="0 0 120 80" className="w-28 h-20 md:w-40 md:h-28 fill-none stroke-white" strokeWidth="0.4">
                    {/* Realistic Waving Flag with Text */}
                    <line x1="60" y1="26" x2="60" y2="6" strokeWidth="0.8" className="stroke-white/60" />
                    <g className="animate-waving-flag" style={{ transformOrigin: '60px 10px' }}>
                      {/* Flag Body - Solid White */}
                      <path 
                        d="M60 6 C70 4.5, 80 9, 95 6.5 L95 22.5 C80 25, 70 20.5, 60 22 Z" 
                        className="fill-white"
                      />
                      {/* Text - Purple (Primary Color) */}
                      <text 
                        x="77.5" 
                        y="17" 
                        className="fill-primary font-bold" 
                        textAnchor="middle" 
                        style={{ fontSize: '7.5px', letterSpacing: '0.1px', fontWeight: '900' }}
                      >
                        IHSAN MUN
                      </text>
                    </g>

                    {/* Detailed Base and Stairs */}
                    <path d="M5 78 L115 78" strokeWidth="0.6" className="opacity-30" />
                    <path d="M10 75 L110 75" strokeWidth="0.5" />
                    <path d="M15 72 L105 72" strokeWidth="0.4" />
                    
                    {/* Central Grand Staircase */}
                    <path d="M50 72 L70 72 L70 69 L50 69 Z" className="fill-white/10" />
                    <path d="M52 69 L68 69 L68 66 L52 66 Z" className="fill-white/15" />

                    {/* Left Wing Architecture */}
                    <path d="M15 72 L45 72 L45 42 L15 42 Z" className="fill-white/5" />
                    {/* Left Wing Windows - Detailed */}
                    {[
                      {x: 20, y: 48}, {x: 28, y: 48}, {x: 36, y: 48},
                      {x: 20, y: 58}, {x: 28, y: 58}, {x: 36, y: 58}
                    ].map((w, i) => (
                      <g key={`lw-${i}`} className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
                        <rect x={w.x} y={w.y} width="4" height="6" className="fill-white/20" />
                        <line x1={w.x + 2} y1={w.y} x2={w.x + 2} y2={w.y + 6} strokeWidth="0.1" className="stroke-white/40" />
                        <line x1={w.x} y1={w.y + 3} x2={w.x + 4} y2={w.y + 3} strokeWidth="0.1" className="stroke-white/40" />
                      </g>
                    ))}

                    {/* Right Wing Architecture */}
                    <path d="M75 72 L105 72 L105 42 L75 42 Z" className="fill-white/5" />
                    {/* Right Wing Windows - Detailed */}
                    {[
                      {x: 80, y: 48}, {x: 88, y: 48}, {x: 96, y: 48},
                      {x: 80, y: 58}, {x: 88, y: 58}, {x: 96, y: 58}
                    ].map((w, i) => (
                      <g key={`rw-${i}`} className="animate-pulse" style={{ animationDelay: `${i * 0.2 + 0.5}s` }}>
                        <rect x={w.x} y={w.y} width="4" height="6" className="fill-white/20" />
                        <line x1={w.x + 2} y1={w.y} x2={w.x + 2} y2={w.y + 6} strokeWidth="0.1" className="stroke-white/40" />
                        <line x1={w.x} y1={w.y + 3} x2={w.x + 4} y2={w.y + 3} strokeWidth="0.1" className="stroke-white/40" />
                      </g>
                    ))}

                    {/* Main Portico (The Facade) */}
                    <path d="M42 72 L78 72 L78 38 L60 26 L42 38 Z" className="fill-white/10" />
                    
                    {/* Neoclassical Columns with Bases and Capitals */}
                    {[45, 51, 57, 63, 69, 75].map((x, i) => (
                      <g key={`col-${i}`}>
                        <line x1={x} y1={40} x2={x} y2={72} strokeWidth="0.8" className="stroke-white/80" />
                        <rect x={x - 1.2} y={38.5} width="2.4" height="1.5" className="fill-white/40" /> {/* Capital */}
                        <rect x={x - 1.2} y={70.5} width="2.4" height="1.5" className="fill-white/40" /> {/* Base */}
                      </g>
                    ))}

                    {/* Pediment Detail (The Triangular Top) */}
                    <path d="M42 38 L60 26 L78 38" strokeWidth="1.2" className="stroke-white" />
                    <circle cx="60" cy="33" r="2.5" className="fill-white/20 animate-pulse" />
                    <circle cx="60" cy="33" r="1.2" className="fill-white/40" />

                    {/* Architectural Trim */}
                    <path d="M15 42 L105 42" strokeWidth="0.3" className="opacity-40" />
                    <path d="M15 44 L105 44" strokeWidth="0.15" className="opacity-20" />
                  </svg>
                </div>

                <div className="flex flex-col items-center gap-2 text-center px-4">
                  <span className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] font-medium text-white/70">
                    Official Summit Platform
                  </span>
                  <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-light text-white/40">
                    Ihsan Schools Global Network
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 1: Introduction (Deep Purple Transition) */}
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

      {/* Section 3: Call to Action (Deep Purple Transition) */}
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
