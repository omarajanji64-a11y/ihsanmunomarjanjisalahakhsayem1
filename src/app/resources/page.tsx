"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FileText, Download, PenTool } from "lucide-react";

const resources = [
  {
    title: "Position Paper Guide",
    desc: "How to draft a winning position paper for your committee.",
    icon: <PenTool className="text-primary" />
  },
  {
    title: "Delegate Handbook",
    desc: "Everything you need to know about the logistics and schedule.",
    icon: <FileText className="text-primary" />
  }
];

export default function ResourcesPage() {
  const headerBg = PlaceHolderImages.find(img => img.id === "hero-bg")!;

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      {/* Header with Background Image */}
      <section className="relative py-32 text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src={headerBg.imageUrl}
            alt="Resources Background"
            fill
            className="object-cover opacity-[0.2]"
            priority
            data-ai-hint={headerBg.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Preparation <span className="text-primary">Center</span></h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Everything you need to excel in your committee. Download our guides and 
              start your research today.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Resources Grid - Standardized Transition */}
      <section className="py-32 section-light">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {resources.map((res, i) => (
              <ScrollReveal key={i} delay={i * 100} className="h-full">
                <div className="h-full p-8 border border-border rounded-3xl flex items-center justify-between group hover:border-primary hover:bg-primary/5 transition-all bg-card shadow-sm">
                  <div className="flex gap-6 items-center">
                    <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                      {res.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{res.title}</h3>
                      <p className="text-sm text-muted-foreground">{res.desc}</p>
                    </div>
                  </div>
                  <button className="p-4 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg">
                    <Download size={20} />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
