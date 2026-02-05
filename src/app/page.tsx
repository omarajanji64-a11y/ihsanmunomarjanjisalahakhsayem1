
"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, BookOpen, Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-bg")!;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-10"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-primary bg-primary/10 rounded-full uppercase">
              Ihsan Schools MUN 2025
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter text-secondary">
              The Future of <br />
              <span className="cinematic-text">Global Diplomacy</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Step into the shoes of global ambassadors. Debate world-shaping issues, 
              form strategic alliances, and lead the conversation at IHSAN MUN.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-7 text-lg group">
                <Link href="/registration">
                  Join the Dialogue <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/5 rounded-full px-10 py-7 text-lg">
                <Link href="/about">Discover the Story</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-secondary/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Narrative Section 1: Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
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
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Where <span className="text-primary">Leadership</span> Meets Global Perspective.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ihsan Schools Model United Nations is more than a conference; it's a transformative journey. 
                  We bring together young minds to tackle the complex challenges of the 21st century through 
                  diplomacy, critical thinking, and collaborative problem-solving.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300} className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Globe className="text-primary" size={32} />
                  <h4 className="font-bold">Global Issues</h4>
                  <p className="text-sm text-muted-foreground">Research and debate real-world UN agenda items.</p>
                </div>
                <div className="space-y-2">
                  <Users className="text-secondary" size={32} />
                  <h4 className="font-bold">Diverse Community</h4>
                  <p className="text-sm text-muted-foreground">Network with bright students from across the region.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section 2: Committees Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <ScrollReveal>
              <h2 className="text-4xl font-bold">A Stage for Every <span className="text-secondary">Interest</span></h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our diverse range of committees, from historical crises to future-focused councils.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Security Council", 
                desc: "Crisis management and international security.", 
                icon: <Star className="text-primary" />,
                img: "committee-unsc"
              },
              { 
                title: "Human Rights Council", 
                desc: "Protecting universal freedoms and justice.", 
                icon: <Users className="text-secondary" />,
                img: "committee-unhrc"
              },
              { 
                title: "ECOSOC", 
                desc: "Economic stability and social welfare growth.", 
                icon: <Globe className="text-primary" />,
                img: "committee-ecosoc"
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 200}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                  <div className="relative h-48">
                    <Image
                      src={PlaceHolderImages.find(img => img.id === item.img)!.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.desc}</p>
                    <Link href="/committees" className="text-primary font-bold inline-flex items-center group-hover:gap-2 transition-all">
                      View Topics <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section 3: Call to Action */}
      <section className="py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Ready to <span className="text-primary">Make History?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
              Registration for the 2025 Ihsan Schools MUN is now open. 
              Whether you are a seasoned delegate or new to the world of MUN, 
              there is a place for you in our story.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 py-8 text-xl font-bold">
              <Link href="/registration">Register as a Delegate</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
