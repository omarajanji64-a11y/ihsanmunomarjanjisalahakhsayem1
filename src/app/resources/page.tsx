
"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { FileText, Download, PenTool } from "lucide-react";

const resources = [
  {
    title: "Position Paper Guide",
    desc: "How to draft a winning position paper for your committee.",
    icon: <PenTool className="text-secondary" />
  },
  {
    title: "Delegate Handbook",
    desc: "Everything you need to know about the logistics and schedule.",
    icon: <FileText className="text-secondary" />
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />
      
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-5xl font-bold mb-8">Preparation <span className="text-primary">Scene</span></h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to excel in your committee. Download our guides and 
              start your research today.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((res, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="p-8 border border-border rounded-3xl flex items-center justify-between group hover:border-primary hover:bg-primary/5 transition-all">
                  <div className="flex gap-6 items-center">
                    <div className="w-16 h-16 bg-white border border-border rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                      {res.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{res.title}</h3>
                      <p className="text-sm text-muted-foreground">{res.desc}</p>
                    </div>
                  </div>
                  <button className="p-4 rounded-full bg-secondary text-white hover:bg-primary transition-colors">
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
