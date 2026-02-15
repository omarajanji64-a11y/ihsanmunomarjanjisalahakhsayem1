
"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Omar Al-Faruq",
    role: "Secretary-General",
    bio: "Passionate about global politics and education, Omar leads the IHSAN MUN with a vision for true diplomatic impact.",
    img: "team-secgen"
  },
  {
    name: "Leyla Demir",
    role: "Deputy Secretary-General",
    bio: "An experienced MUNer with a focus on human rights and academic excellence in committee preparation.",
    img: "team-deputy"
  },
  {
    name: "Zaid Hassan",
    role: "Under-Secretary General for Logistics",
    bio: "Ensuring every detail of the conference runs smoothly for a seamless delegate experience.",
    img: "team-secgen"
  },
  {
    name: "Sara Mahmoud",
    role: "Under-Secretary General for Finance",
    bio: "Managing the resources to ensure the highest quality experience for all participants.",
    img: "team-deputy"
  }
];

export default function SecretariatPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === "secretariat-bg") || PlaceHolderImages.find(img => img.id === "hero-bg")!;

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section className="relative py-32 text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt="Secretariat Background"
            fill
            className="object-cover opacity-[0.2]"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">The <span className="text-primary">Secretariat</span></h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Meet the dedicated team from Ihsan Schools working behind the scenes 
              to bring you a world-class conference.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-card border border-border rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-primary/5 transition-all h-full flex flex-col">
                  <div className="relative h-[350px] overflow-hidden">
                    <Image
                      src={PlaceHolderImages.find(img => img.id === member.img)!.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                          <Linkedin size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                          <Mail size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                    <p className="text-primary font-bold text-sm mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </div>
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
