
"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-bg")!;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-[0.25]"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-sm md:text-base font-bold tracking-[0.4em] text-primary mb-4 uppercase">
              The Future of Global Diplomacy
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200} className="fade-only">
            <h1 className="font-serif text-6xl md:text-9xl font-bold mb-6 leading-tight tracking-[0.1em] text-[#F4F1F9] uppercase">
              IHSAN <br /> MUN <span className="font-light opacity-90 text-[0.8em]">'26</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground/80 mb-12 leading-relaxed">
              Step into the shoes of global ambassadors. Debate world-shaping issues, 
              form strategic alliances, and lead the conversation at Ihsan Schools MUN.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 py-8 text-xl group shadow-2xl transition-all">
                <Link href="/registration">
                  Join the Dialogue <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-primary/5 rounded-full px-12 py-8 text-xl">
                <Link href="/about">Our Vision</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Narrative Section 1: Introduction */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
              <Image
                src={PlaceHolderImages.find(img => img.id === "committee-unsc")!.imageUrl}
                alt="Committee Session"
                fill
                className="object-cover"
                data-ai-hint="un session"
              />
            </ScrollReveal>
            
            <div className="space-y-10">
              <ScrollReveal>
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                  Where <span className="text-primary italic">Leadership</span> Meets Global Perspective.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ihsan Schools Model United Nations is a transformative journey. 
                  We bring together young minds to tackle complex global challenges through 
                  diplomacy, critical thinking, and collaborative resolution building.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300} className="grid grid-cols-2 gap-12 pt-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Globe className="text-primary" size={24} />
                  </div>
                  <h4 className="font-bold text-lg">Global Issues</h4>
                  <p className="text-sm text-muted-foreground">Research and debate real-world UN agenda items with precision.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <Users className="text-accent" size={24} />
                  </div>
                  <h4 className="font-bold text-lg">Diverse Community</h4>
                  <p className="text-sm text-muted-foreground">Network with bright students from across the international region.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section 2: Committees Preview */}
      <section className="py-32 bg-secondary/20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-6">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">A Stage for Every <span className="text-primary italic">Interest</span></h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our diverse range of committees, from high-stakes security crises to sustainable global development.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                title: "Security Council", 
                desc: "Crisis management and high-level international security mandates.", 
                icon: <Star className="text-primary" />,
                img: "committee-unsc"
              },
              { 
                title: "Human Rights Council", 
                desc: "Upholding universal freedoms and legislative justice for all.", 
                icon: <Users className="text-accent" />,
                img: "committee-unhrc"
              },
              { 
                title: "ECOSOC", 
                desc: "Strategic economic stability and transformative social welfare.", 
                icon: <Globe className="text-primary" />,
                img: "committee-ecosoc"
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 200}>
                <div className="bg-card rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-primary/5 transition-all duration-500 group border border-white/5">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={PlaceHolderImages.find(img => img.id === item.img)!.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-10">
                    <div className="mb-6 p-3 bg-background rounded-2xl w-fit">{item.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8">{item.desc}</p>
                    <Link href="/committees" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-xs">
                      View Topics <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section 3: Call to Action */}
      <section className="py-40 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
              Ready to <span className="text-primary">Shape the World?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-16 leading-relaxed">
              Registration for the 2026 Ihsan Schools MUN is now open. 
              Secure your place in the global dialogue.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <Button asChild size="lg" className="bg-primary hover:bg-[#6b3a99] text-white rounded-full px-16 py-10 text-2xl font-bold shadow-2xl transition-all hover:scale-105 active:scale-95">
              <Link href="/registration">Register as a Delegate</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
