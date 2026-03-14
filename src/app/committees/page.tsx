
"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Download, Shield, Book } from "lucide-react";
import { EditableImage } from "@/components/editor/editable-image";

const committees = [
  {
    id: "world-bank",
    title: "World Bank",
    level: "Committee",
    topics: ["Financing climate resilience and debt relief for developing economies"],
    img: "committee-world-bank",
    description: "Focused on financing climate resilience and debt relief for developing economies."
  },
  {
    id: "h-unsc",
    title: "H-UNSC",
    level: "Committee",
    topics: ["USA's invasion of Iraq (2003)"],
    img: "committee-hunsc",
    description: "Focused on USA's invasion of Iraq (2003)."
  },
  {
    id: "unwomen",
    title: "UNWOMEN",
    level: "Committee",
    topics: ["Prevention of Human Trafficking and Sexual Exploitation of Women in conflict zones"],
    img: "committee-unwomen",
    description: "Focused on the prevention of human trafficking and sexual exploitation of women in conflict zones."
  },
  {
    id: "jcc-avengers",
    title: "Avengers Civil War",
    level: "Committee",
    topics: ["The Sokovia Accords"],
    img: "committee-jcc-avengers",
    description: "Focused on the Sokovia Accords."
  },
  {
    id: "disec",
    title: "DISEC",
    level: "Committee",
    topics: ["Addressing the Proliferation and Use of Chemical Weapons and strengthening international efforts to eliminate them"],
    img: "committee-disec",
    description: "Focused on addressing the proliferation and use of chemical weapons and strengthening international efforts to eliminate them."
  },
  {
    id: "specpol",
    title: "SPECPOL",
    level: "Committee",
    topics: ["Regulating Private Military Companies and Mercenaries in Modern Conflicts"],
    img: "committee-specpol",
    description: "Focused on regulating private military companies and mercenaries in modern conflicts."
  },
  {
    id: "arab-league",
    title: "Arab League",
    level: "Committee",
    topics: ["Addressing Foreign Influence in Arab States"],
    img: "committee-arab-league",
    description: "Focused on addressing foreign influence in Arab states."
  },
  {
    id: "jcc-castellammarese",
    title: "JCC: The Castellammarese War",
    level: "Committee",
    topics: ["The Castellammarese War"],
    img: "committee-jcc-castellammarese",
    description: "Focused on the Castellammarese War."
  }
];

const committeeResources = [
  {
    title: "Rules of Procedure",
    desc: "The definitive guide to parliamentary procedure for our conference.",
    icon: <Shield className="text-primary" />
  },
  {
    title: "Study Guides",
    desc: "Detailed background research for each committee topic.",
    icon: <Book className="text-primary" />
  }
];

export default function CommitteesPage() {
  const headerBg = PlaceHolderImages.find(img => img.id === "hero-bg");

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      {/* Header with Background Image */}
      <section className="relative py-32 text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          {headerBg?.imageUrl && (
            <EditableImage
              imageId="hero-bg"
              src={headerBg.imageUrl}
              alt="Committees Background"
              fill
              className="object-cover opacity-[0.2]"
              priority
              data-ai-hint={headerBg.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Committees</h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Our committees are designed to challenge delegates of all experience levels. 
              Find your place in the global forum.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 section-dark">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {committees.map((committee, i) => {
              const committeeImage = PlaceHolderImages.find(img => img.id === committee.img);
              return (
                <ScrollReveal key={committee.id} delay={i * 100}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`relative h-[400px] rounded-3xl overflow-hidden shadow-xl ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                      {committeeImage?.imageUrl && (
                        <EditableImage
                          imageId={committee.img}
                          src={committeeImage.imageUrl}
                          alt={committee.title}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    
                    <div className="space-y-6">
                      <Badge className="bg-primary/10 text-primary border-none text-xs font-bold px-3 py-1">
                        {committee.level}
                      </Badge>
                      <h2 className="text-3xl font-bold">{committee.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {committee.description}
                      </p>
                      
                      <div className="space-y-4">
                        <h4 className="font-bold text-primary flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          Agenda Topics
                        </h4>
                        <ul className="space-y-3">
                          {committee.topics.map((topic, idx) => (
                            <li key={idx} className="flex gap-3 text-sm p-4 bg-secondary/20 rounded-xl border border-border/50">
                              <span className="text-primary font-bold">Topic {idx + 1}:</span>
                              <span className="text-foreground">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Preparation Resources Section */}
      <section className="py-32 section-light">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl font-bold mb-4">Preparation <span className="text-primary">Essentials</span></h2>
              <p className="text-muted-foreground max-xl mx-auto">Download these core documents to prepare for your committee sessions.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {committeeResources.map((res, i) => (
              <ScrollReveal key={i} delay={i * 100} className="h-full">
                <div className="h-full p-8 bg-card border border-border rounded-3xl flex items-center justify-between group hover:border-primary transition-all">
                  <div className="flex gap-6 items-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {res.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-foreground">{res.title}</h3>
                      <p className="text-sm text-muted-foreground">{res.desc}</p>
                    </div>
                  </div>
                  <button className="p-4 rounded-full bg-primary text-white hover:opacity-90 transition-colors shrink-0">
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
