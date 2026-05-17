import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Download, Shield, Book } from "lucide-react";
import { EditableImage } from "@/components/editor/editable-image";
import Link from "next/link";

const committees = [
  {
    id: "world-bank",
    title: "World Bank",
    level: "Committee",
    topics: ["Mitigating Structural Aid Dependency in Developing Economies //  Ilaf Bayazid"],
    img: "committee-world-bank",
    description: "Focused on mitigating structural aid dependency in developing economies.",
    studyGuideHref: "/study-guides/world-bank-study-guide.pdf",
    studyGuideDownloadName: "IHSAN-MUN-World-Bank-Study-Guide.pdf",
  },
  {
    id: "h-unsc",
    title: "H-UNSC",
    level: "Committee",
    topics: ["USA's invasion of Iraq (2003)"],
    img: "committee-hunsc",
    description: "Focused on USA's invasion of Iraq (2003).",
    studyGuideHref: "/study-guides/h-unsc-study-guide.pdf",
    studyGuideDownloadName: "IHSAN-MUN-H-UNSC-Study-Guide.pdf",
  },
  {
    id: "unwomen",
    title: "UNWOMEN",
    level: "Committee",
    topics: ["Prevention of Human Trafficking and Sexual Exploitation of Women in conflict zones"],
    img: "committee-unwomen",
    description: "Focused on the prevention of human trafficking and sexual exploitation of women in conflict zones.",
    studyGuideHref: "/study-guides/unwomen-study-guide.pdf",
    studyGuideDownloadName: "IHSAN-MUN-UNWOMEN-Study-Guide.pdf",
  },
  {
    id: "jcc-avengers",
    title: "Avengers Civil War",
    level: "Committee",
    topics: ["The Sokovia Accords"],
    img: "committee-jcc-avengers",
    description: "Focused on the Sokovia Accords.",
    studyGuideHref: "/study-guides/jcc-study-guide.pdf",
    studyGuideDownloadName: "IHSAN-MUN-JCC-Study-Guide.pdf",
  },
  {
    id: "disec",
    title: "DISEC",
    level: "Committee",
    topics: ["Addressing the Proliferation and Use of Chemical Weapons and strengthening international efforts to eliminate them"],
    img: "committee-disec",
    description: "Focused on addressing the proliferation and use of chemical weapons and strengthening international efforts to eliminate them.",
    studyGuideHref: "/study-guides/disec-study-guide.pdf",
    studyGuideDownloadName: "IHSAN-MUN-DISEC-Study-Guide.pdf",
  },
  {
    id: "specpol",
    title: "SPECPOL",
    level: "Committee",
    topics: ["Regulating Private Military Companies and Mercenaries in Modern Conflicts"],
    img: "committee-specpol",
    description: "Focused on regulating private military companies and mercenaries in modern conflicts.",
    studyGuideHref: "/study-guides/specpol-study-guide.pdf",
    studyGuideDownloadName: "IHSAN-MUN-SPECPOL-Study-Guide.pdf",
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
    description: "Focused on the Castellammarese War.",
    studyGuideHref: "/study-guides/jcc-study-guide.pdf",
    studyGuideDownloadName: "IHSAN-MUN-JCC-Study-Guide.pdf",
  }
];

const committeeResources = [
  {
    title: "Rules of Procedure",
    desc: "The definitive guide to parliamentary procedure for our conference.",
    icon: <Shield className="text-accent" />,
    href: "/rules-of-procedure"
  },
  {
    title: "Study Guides",
    desc: "Detailed background research for each committee topic.",
    icon: <Book className="text-accent" />,
    href: "#committee-study-guides"
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
              sizes="100vw"
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
            <p className="text-xl text-white/85 max-w-2xl mx-auto">
              Our committees are designed to challenge delegates of all experience levels. 
              Find your place in the global forum.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="committee-study-guides" className="py-24 section-dark">
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
                          sizes="(min-width: 1024px) 40rem, 100vw"
                        />
                      )}
                    </div>
                    
                    <div className="space-y-6">
                      <Badge className="bg-accent/15 text-accent border-none text-xs font-bold px-3 py-1">
                        {committee.level}
                      </Badge>
                      <h2 className="text-3xl font-bold">{committee.title}</h2>
                      <p className="text-foreground/80 leading-relaxed">
                        {committee.description}
                      </p>
                      
                      <div className="space-y-4">
                        <h4 className="font-bold text-accent flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-accent" />
                          Agenda Topics
                        </h4>
                        <ul className="space-y-3">
                          {committee.topics.map((topic, idx) => (
                            <li key={idx} className="flex gap-3 text-sm p-4 bg-secondary/20 rounded-xl border border-border/50">
                              <span className="text-accent font-bold">Topic {idx + 1}:</span>
                              <span className="text-foreground">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {committee.studyGuideHref && committee.studyGuideDownloadName && (
                        <div className="space-y-4">
                          <h4 className="font-bold text-accent flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent" />
                            Study Guide
                          </h4>
                          <a
                            href={committee.studyGuideHref}
                            download={committee.studyGuideDownloadName}
                            className="inline-flex items-center gap-3 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition-[transform,opacity] duration-200 hover:-translate-y-0.5 hover:opacity-90"
                          >
                            <Download size={18} />
                            Download PDF
                          </a>
                        </div>
                      )}
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
              <h2 className="text-4xl font-bold mb-4">Preparation <span className="text-brand-gradient">Essentials</span></h2>
              <p className="text-foreground/80 max-xl mx-auto">Download these core documents to prepare for your committee sessions.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {committeeResources.map((res, i) => (
              <ScrollReveal key={i} delay={i * 100} className="h-full">
                <div className="surface-panel group flex h-full items-center justify-between rounded-3xl p-8 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1">
                  <div className="flex gap-6 items-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {res.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-foreground">{res.title}</h3>
                      <p className="text-sm text-foreground/80">{res.desc}</p>
                    </div>
                  </div>
                  {res.href ? (
                    <Link
                      href={res.href}
                      className="p-4 rounded-full bg-primary text-white hover:opacity-90 transition-colors shrink-0"
                      aria-label={`Open ${res.title}`}
                    >
                      <Download size={20} />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="p-4 rounded-full bg-primary/60 text-white/70 transition-colors shrink-0 disabled:cursor-not-allowed"
                      aria-label={`${res.title} coming soon`}
                    >
                      <Download size={20} />
                    </button>
                  )}
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
