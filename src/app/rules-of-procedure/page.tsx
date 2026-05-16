import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { EditableImage } from "@/components/editor/editable-image";
import { rulesOfProcedureFiles } from "@/lib/resource-files";
import { Download, Shield } from "lucide-react";

export default function RulesOfProcedurePage() {
  const headerBg = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/5 py-32 text-center">
        <div className="absolute inset-0 z-0">
          {headerBg?.imageUrl && (
            <EditableImage
              imageId="hero-bg"
              src={headerBg.imageUrl}
              alt="Rules of Procedure Background"
              fill
              className="object-cover opacity-[0.2]"
              priority
              sizes="100vw"
              data-ai-hint={headerBg.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-5xl font-bold md:text-7xl">
              Rules of <span className="text-brand-gradient">Procedure</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-white/85">
              Download the official procedure files your committee will use during the conference.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-light py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal className="mx-auto mb-14 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              <Shield size={14} />
              Conference Documents
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-foreground/80">
              Use the correct file for your committee format. Each card below downloads the document directly.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {rulesOfProcedureFiles.map((file, i) => (
              <ScrollReveal key={file.id} delay={i * 100} className="h-full">
                <div className="surface-panel flex h-full flex-col justify-between rounded-[2rem] p-8">
                  <div className="space-y-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Shield size={28} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{file.title}</h2>
                      {"description" in file && file.description ? (
                        <p className="mt-3 text-sm leading-relaxed text-foreground/80">{file.description}</p>
                      ) : null}
                    </div>
                  </div>

                  <a
                    href={file.href}
                    download={file.downloadName}
                    className="mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 text-sm font-bold text-white transition-[transform,opacity] duration-200 hover:-translate-y-0.5 hover:opacity-90"
                  >
                    <Download size={18} />
                    Download PDF
                  </a>
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
