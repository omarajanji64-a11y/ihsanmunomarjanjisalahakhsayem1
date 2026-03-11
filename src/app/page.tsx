
"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Countdown } from "@/components/countdown";
import { EditableImage } from "@/components/editor/editable-image";
import { useImageEditor } from "@/components/editor/editor-provider";

const committeeHighlights = [
  {
    title: "World Bank",
    desc: "Financing climate resilience and debt relief for developing economies.",
    imageId: "committee-world-bank"
  },
  {
    title: "H-UNSC",
    desc: "USA's invasion of Iraq (2003).",
    imageId: "committee-hunsc"
  },
  {
    title: "UNWOMEN",
    desc: "Prevention of Human Trafficking and Sexual Exploitation of Women in conflict zones.",
    imageId: "committee-unwomen"
  },
  {
    title: "JCC: Avengers Civil War",
    desc: "The Sokovia Accords.",
    imageId: "committee-jcc-avengers"
  },
  {
    title: "CABINET",
    desc: "Coordinating a national response to an energy and food security shock.",
    imageId: "committee-cabinet"
  },
  {
    title: "DISEC",
    desc: "Addressing the Proliferation and Use of Chemical Weapons and strengthening international efforts to eliminate them.",
    imageId: "committee-disec"
  },
  {
    title: "SPECPOL",
    desc: "Aftermath of the Arab Spring.",
    imageId: "committee-specpol"
  },
  {
    title: "Arab League",
    desc: "Addressing Foreign Influence in Arab States.",
    imageId: "committee-arab-league"
  },
  {
    title: "JCC: The Castellammarese War",
    desc: "The Castellammarese War.",
    imageId: "committee-jcc-castellammarese"
  }
];

export default function Home() {
  const { isEditorEnabled, getImageUrl, openImageEditor } = useImageEditor();
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-bg");
  const committeeImageMap = new Map(PlaceHolderImages.map((img) => [img.id, img]));
  const introImage = committeeImageMap.get("committee-world-bank") ?? heroImage;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Cinematic Treatment */}
      <section
        className={`relative min-h-[95vh] flex flex-col items-center pt-36 md:pt-48 overflow-visible ${isEditorEnabled ? "cursor-pointer" : ""}`}
        onClick={() => {
          if (!isEditorEnabled || !heroImage?.imageUrl) {
            return;
          }

          openImageEditor({
            id: "hero-bg",
            currentUrl: getImageUrl("hero-bg", heroImage.imageUrl),
          });
        }}
      >
        <div className="absolute inset-0 z-0">
          {heroImage?.imageUrl && (
            <EditableImage
              imageId="hero-bg"
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover opacity-[0.25]"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center pb-28">
          <ScrollReveal className="fade-only mt-0">
            <h2 className="text-[10px] md:text-xs font-medium tracking-[0.4em] text-[#EDEAF3] mb-4 md:mb-6 uppercase">
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
            <div className="max-w-4xl mx-auto w-full mb-16 md:mb-20">
              <Countdown />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500} className="fade-only">
            <div className="flex flex-col items-center pt-8 md:pt-12">
              <p className="max-w-[650px] mx-auto text-base md:text-lg text-[#EDEAF3] mb-8 md:mb-12 leading-[1.6] font-normal opacity-90 px-4">
                Step into the shoes of global ambassadors. Debate big issues,
                build alliances, and enjoy the energy of Ihsan Schools MUN.
              </p>
              
              {/* Animated Realistic Architectural Branding */}
              <div className="mt-12 md:mt-20 flex flex-col items-center gap-8 opacity-50 animate-in fade-in zoom-in duration-1000 group">
                <div className="relative">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-lg">
                    <div className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-diplomatic-scanner" />
                  </div>

                  <svg viewBox="0 0 120 80" className="w-28 h-20 md:w-40 md:h-28 fill-none stroke-white" strokeWidth="0.4">
                    <line x1="60" y1="26" x2="60" y2="6" strokeWidth="0.8" className="stroke-white/60" />
                    <g className="animate-waving-flag" style={{ transformOrigin: '60px 10px' }}>
                      <path 
                        d="M60 6 C70 4.5, 80 9, 95 6.5 L95 22.5 C80 25, 70 20.5, 60 22 Z" 
                        className="fill-white"
                        stroke="none"
                      />
                      <text 
                        x="77.5" 
                        y="13" 
                        className="fill-[#48252F] font-bold" 
                        textAnchor="middle" 
                        style={{ fontSize: '5px', letterSpacing: '0.1px', fontWeight: '900' }}
                      >
                        IHSAN
                      </text>
                      <text 
                        x="77.5" 
                        y="19" 
                        className="fill-[#48252F] font-bold" 
                        textAnchor="middle" 
                        style={{ fontSize: '5px', letterSpacing: '0.1px', fontWeight: '900' }}
                      >
                        MUN
                      </text>
                    </g>

                    <path d="M5 78 L115 78" strokeWidth="0.6" className="opacity-30" />
                    <path d="M10 75 L110 75" strokeWidth="0.5" />
                    <path d="M15 72 L105 72" strokeWidth="0.4" />
                    
                    <path d="M50 72 L70 72 L70 69 L50 69 Z" className="fill-white/10" />
                    <path d="M52 69 L68 69 L68 66 L52 66 Z" className="fill-white/15" />

                    <path d="M15 72 L45 72 L45 42 L15 42 Z" className="fill-white/5" />
                    {[
                      {x: 20, y: 48}, {x: 28, y: 48}, {x: 36, y: 48},
                      {x: 20, y: 58}, {x: 28, y: 58}, {x: 36, y: 58}
                    ].map((w, i) => (
                      <g key={`lw-${i}`} className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
                        <rect x={w.x} y={w.y} width="4" height="6" className="fill-white/20" />
                      </g>
                    ))}

                    <path d="M75 72 L105 72 L105 42 L75 42 Z" className="fill-white/5" />
                    {[
                      {x: 80, y: 48}, {x: 88, y: 48}, {x: 96, y: 48},
                      {x: 80, y: 58}, {x: 88, y: 58}, {x: 96, y: 58}
                    ].map((w, i) => (
                      <g key={`rw-${i}`} className="animate-pulse" style={{ animationDelay: `${i * 0.2 + 0.5}s` }}>
                        <rect x={w.x} y={w.y} width="4" height="6" className="fill-white/20" />
                      </g>
                    ))}

                    <path d="M42 72 L78 72 L78 38 L60 26 L42 38 Z" className="fill-white/10" />
                    {[45, 51, 57, 63, 69, 75].map((x, i) => (
                      <g key={`col-${i}`}>
                        <line x1={x} y1={40} x2={x} y2={72} strokeWidth="0.8" className="stroke-white/80" />
                      </g>
                    ))}

                    <path d="M42 38 L60 26 L78 38" strokeWidth="1.2" className="stroke-white" />
                  </svg>
                </div>

                <div className="flex flex-col items-center gap-2 text-center px-4">
                  <span className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] font-medium text-white/70">
                    Official Summit Platform
                  </span>
                  <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-light text-white/40">
                    Ihsan Schools
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-40 section-light">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
            <ScrollReveal className="relative h-[550px] rounded-[1rem] overflow-hidden shadow-2xl border border-primary/10">
              {introImage?.imageUrl && (
                <EditableImage
                  imageId={introImage.id}
                  src={introImage.imageUrl}
                  alt="Committee Session"
                  fill
                  className="object-cover"
                  data-ai-hint={introImage.imageHint}
                />
              )}
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
            </div>
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-40 section-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 space-y-6">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">A Stage for <span className="text-primary-foreground italic">Every Interest</span></h2>
              <div className="w-16 h-[1px] bg-white/20 mx-auto mt-8" />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {committeeHighlights.map((item, i) => {
              const image = committeeImageMap.get(item.imageId);
              return (
              <ScrollReveal key={i} delay={i * 150} className="h-full">
                <div className="bg-white/5 rounded-[1rem] overflow-hidden group border border-white/5 hover:border-white/10 transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden shrink-0">
                    {image?.imageUrl && (
                      <EditableImage
                        imageId={item.imageId}
                        src={image.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <div className="p-10 space-y-4 flex-1 flex flex-col">
                    <h3 className="text-xl font-serif font-bold">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mt-4 flex-1">{item.desc}</p>
                    <Link href="/committees" className="text-primary text-[10px] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-[0.2em] pt-6">
                      View Agenda <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
              Join a community of students ready to collaborate, learn, and lead.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 py-8 text-sm font-bold uppercase tracking-widest btn-premium">
              <Link href="/registration">Apply Now</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
