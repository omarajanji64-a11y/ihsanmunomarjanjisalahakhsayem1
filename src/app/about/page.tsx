
"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Target, Eye, ShieldCheck, History, Globe } from "lucide-react";
import { EditableImage } from "@/components/editor/editable-image";

export default function AboutPage() {
  const timelineImage = PlaceHolderImages.find(img => img.id === "about-timeline");
  const heroBg = PlaceHolderImages.find(img => img.id === "hero-bg");

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      {/* Hero */}
      <section className="relative py-32 text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          {heroBg?.imageUrl && (
            <EditableImage
              imageId="hero-bg"
              src={heroBg.imageUrl}
              alt="About Background"
              fill
              className="object-cover opacity-[0.2]"
              priority
              data-ai-hint={heroBg.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Our <span className="text-white">Purpose</span></h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
              Driven by the legacy of Ihsan Schools, our MUN club is built on the pillars 
              of excellence, empathy, and global citizenship.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Storytelling Narrative */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <ScrollReveal>
                <div className="flex items-center gap-4 text-white/90 font-bold tracking-widest uppercase text-sm">
                  <span className="w-12 h-[2px] bg-primary" />
                  The Mission
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <h2 className="text-4xl font-bold">To Cultivate <span className="text-white">Enlightened</span> Leaders.</h2>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Model United Nations at Ihsan Schools isn't just a simulation—it's a training ground. 
                  We aim to bridge the gap between academic theory and real-world implementation, 
                  encouraging students to see beyond their own borders and understand the interconnectedness 
                  of our modern world.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={400} className="space-y-6">
                <div className="flex gap-4 p-6 bg-secondary/30 rounded-2xl border border-white/5">
                  <Target className="text-primary shrink-0" size={32} />
                  <div>
                    <h4 className="font-bold text-lg text-foreground">Goal-Oriented Debate</h4>
                    <p className="text-sm text-foreground/80">Focusing on practical resolutions that could actually change the world.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-secondary/30 rounded-2xl border border-white/5">
                  <Eye className="text-primary shrink-0" size={32} />
                  <div>
                    <h4 className="font-bold text-lg text-foreground">Visionary Thinking</h4>
                    <p className="text-sm text-foreground/80">Looking at the long-term impact of diplomatic decisions on society.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl rotate-1">
              {timelineImage?.imageUrl && (
                <EditableImage
                  imageId="about-timeline"
                  src={timelineImage.imageUrl}
                  alt="Ihsan Schools Venue"
                  fill
                  className="object-cover"
                />
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 section-light">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal className="text-center space-y-4">
              <ShieldCheck className="mx-auto text-primary" size={48} />
              <h3 className="text-2xl font-bold">Integrity</h3>
              <p className="text-foreground/80">Upholding the highest standards of honesty and ethics in every negotiation.</p>
            </ScrollReveal>
            <ScrollReveal delay={200} className="text-center space-y-4">
              <History className="mx-auto text-primary" size={48} />
              <h3 className="text-2xl font-bold">Legacy</h3>
              <p className="text-foreground/80">Building upon the foundation of Ihsan Schools to leave a lasting impact.</p>
            </ScrollReveal>
            <ScrollReveal delay={400} className="text-center space-y-4">
              <Globe className="mx-auto text-primary" size={48} />
              <h3 className="text-2xl font-bold">Inclusion</h3>
              <p className="text-foreground/80">Embracing diverse perspectives to reach truly global solutions.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
