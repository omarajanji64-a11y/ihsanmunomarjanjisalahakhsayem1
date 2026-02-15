"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Download, Shield, Book } from "lucide-react";

const committees = [
  {
    id: "unsc",
    title: "United Nations Security Council",
    level: "Advanced",
    topics: ["Stabilization of Middle Eastern Conflicts", "Future of Private Military Contractors"],
    img: "committee-unsc",
    description: "The primary organ responsible for maintenance of international peace and security. This committee will tackle fast-paced crises."
  },
  {
    id: "unhrc",
    title: "United Nations Human Rights Council",
    level: "Intermediate",
    topics: ["Freedom of Information in the Digital Age", "Refugee Rights in the Mediterranean"],
    img: "committee-unhrc",
    description: "Focusing on the protection and promotion of human rights globally. A committee of deep ethical debate."
  },
  {
    id: "ecosoc",
    title: "Economic and Social Council",
    level: "Beginner",
    topics: ["Post-Pandemic Economic Recovery", "Sustainable Development Goals 2030"],
    img: "committee-ecosoc",
    description: "Coordinating the economic and social work of the UN. Ideal for those interested in policy and global growth."
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
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-5xl font-bold mb-6">Committees</h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our committees are designed to challenge delegates of all experience levels. 
              Find your place in the global forum.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {committees.map((committee, i) => (
              <ScrollReveal key={committee.id} delay={i * 100}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`relative h-[400px] rounded-3xl overflow-hidden shadow-xl ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={PlaceHolderImages.find(img => img.id === committee.img)!.imageUrl}
                      alt={committee.title}
                      fill
                      className="object-cover"
                    />
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
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Resources Section */}
      <section className="py-24 bg-secondary/10 border-t border-border">
        <div className="container mx-auto px-6">
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
                      <h3 className="text-xl font-bold mb-1">{res.title}</h3>
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
