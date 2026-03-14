import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { EditableImage } from "@/components/editor/editable-image";

const team = [
  {
    name: "Maizah Hassan",
    role: "Secretary General",
    bio: "",
    img: "team-maizah-hassan"
  },
  {
    name: "Nada Alghory",
    role: "Secretary General",
    bio: "",
    img: "team-nada-alghory"
  },
  {
    name: "Haya El Houssami",
    role: "Director General",
    bio: "",
    img: "team-haya-el-houssami"
  },
  {
    name: "Omar Soufi",
    role: "Deputy Secretary General",
    bio: "",
    img: "team-omar-soufi"
  },
  {
    name: "Maria Arslan",
    role: "Deputy Director General",
    bio: "",
    img: "team-maria-arslan"
  }
];

export default function SecretariatPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === "secretariat-bg") || PlaceHolderImages.find(img => img.id === "hero-bg");

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section className="relative py-32 text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          {heroImage?.imageUrl && (
            <EditableImage
              imageId={heroImage?.id ?? "hero-bg"}
              src={heroImage.imageUrl}
              alt="Secretariat Background"
              fill
              className="object-cover opacity-[0.2]"
              priority
              sizes="100vw"
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">The <span className="text-accent">Secretariat</span></h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              Meet the dedicated team from Ihsan Schools working behind the scenes 
              to bring you a world-class conference.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => {
              const memberImage = PlaceHolderImages.find(img => img.id === member.img);
              return (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="bg-card border border-border rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-primary/5 transition-all h-full flex flex-col">
                    <div className="relative h-[350px] overflow-hidden">
                      {memberImage?.imageUrl && (
                        <EditableImage
                          imageId={member.img}
                          src={memberImage.imageUrl}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(min-width: 1024px) 22rem, (min-width: 768px) 50vw, 100vw"
                        />
                      )}
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                      <p className="text-accent font-bold text-sm mb-4">{member.role}</p>
                      {member.bio && (
                        <p className="text-foreground/80 text-sm leading-relaxed">{member.bio}</p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
