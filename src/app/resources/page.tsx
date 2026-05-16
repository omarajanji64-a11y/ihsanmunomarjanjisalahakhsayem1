import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FileText, Download, LibraryBig } from "lucide-react";
import { EditableImage } from "@/components/editor/editable-image";
import Link from "next/link";
import { rulesOfProcedureFiles } from "@/lib/resource-files";

const resources = [
  {
    title: "Rules of Procedure Hub",
    desc: "Open the full rules page for conference procedure documents.",
    icon: <LibraryBig className="text-accent" />,
    href: "/rules-of-procedure"
  },
  ...rulesOfProcedureFiles.map((file) => ({
    title: file.title,
    desc: file.description,
    icon: <FileText className="text-accent" />,
    href: file.href,
    downloadName: file.downloadName
  })),
  {
    title: "Delegate Handbook",
    desc: "Everything you need to know about the logistics and schedule.",
    icon: <FileText className="text-accent" />
  }
];

export default function ResourcesPage() {
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
              alt="Resources Background"
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Preparation <span className="text-brand-gradient">Center</span></h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              Everything you need to excel in your committee. Download our guides and 
              start your research today.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-32 section-light">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {resources.map((res, i) => (
              <ScrollReveal key={i} delay={i * 100} className="h-full">
                <div className="group flex h-full items-center justify-between rounded-3xl border border-border bg-card p-8 shadow-sm transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/5">
                  <div className="flex gap-6 items-center">
                    <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                      {res.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{res.title}</h3>
                      <p className="text-sm text-foreground/80">{res.desc}</p>
                    </div>
                  </div>
                  {res.href ? (
                    res.downloadName ? (
                      <a
                        href={res.href}
                        download={res.downloadName}
                        className="p-4 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg"
                        aria-label={`Download ${res.title}`}
                      >
                        <Download size={20} />
                      </a>
                    ) : (
                      <Link
                        href={res.href}
                        className="p-4 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg"
                        aria-label={`Open ${res.title}`}
                      >
                        <Download size={20} />
                      </Link>
                    )
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="p-4 rounded-full bg-primary/60 text-white/70 transition-colors shadow-lg disabled:cursor-not-allowed"
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
