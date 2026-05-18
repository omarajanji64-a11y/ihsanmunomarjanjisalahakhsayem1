import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { EditableImage } from "@/components/editor/editable-image";
import { CalendarDays, Clock3 } from "lucide-react";

const scheduleDays = [
  {
    id: "day-1",
    label: "Day 1",
    date: "May 22, 2026",
    events: [
      { title: "Registration", time: "16:30 to 17:30" },
      { title: "Opening Ceremony", time: "17:30 to 18:45" },
      { title: "Lunch Break", time: "18:45 to 19:30" },
      { title: "Session 1", time: "19:30 to 20:30" },
    ],
  },
  {
    id: "day-2",
    label: "Day 2",
    date: "May 23, 2026",
    events: [
      { title: "Session 2", time: "9:00 to 10:00" },
      { title: "Coffee Break", time: "10:00 to 10:30" },
      { title: "Session 3", time: "10:30 to 12:30" },
      { title: "Lunch Break", time: "12:30 to 14:00" },
      { title: "Session 4", time: "14:00 to 15:30" },
      { title: "Coffee Break", time: "15:30 to 16:00" },
      { title: "Session 5", time: "16:00 to 17:30" },
      { title: "Coffee Break", time: "17:30 to 18:00" },
      { title: "Session 6", time: "18:00 to 19:00" },
    ],
  },
  {
    id: "day-3",
    label: "Day 3",
    date: "May 24, 2026",
    events: [
      { title: "Session 7", time: "9:00 to 10:00" },
      { title: "Coffee Break", time: "10:00 to 10:30" },
      { title: "Session 8", time: "10:30 to 12:00" },
      { title: "Lunch Break", time: "12:00 to 13:30" },
      { title: "Session 9", time: "13:30 to 15:00" },
      { title: "Coffee Break", time: "15:00 to 15:30" },
      { title: "Session 10", time: "15:30 to 16:30" },
      { title: "Coffee Break", time: "16:30 to 16:45" },
      { title: "Closing Ceremony", time: "16:45 to 18:45" },
    ],
  },
] as const;

export default function SchedulePage() {
  const heroBg = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/5 py-32 text-center">
        <div className="absolute inset-0 z-0">
          {heroBg?.imageUrl && (
            <EditableImage
              imageId="hero-bg"
              src={heroBg.imageUrl}
              alt="Schedule Background"
              fill
              className="object-cover opacity-[0.2]"
              priority
              sizes="100vw"
              data-ai-hint={heroBg.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-5xl font-bold md:text-7xl">
              Conference <span className="text-brand-gradient">Schedule</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/85">
              The official program for May 22, 2026 through May 24, 2026.
              Plan your sessions, breaks, and ceremonies in advance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-light py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal className="mx-auto mb-14 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              <CalendarDays size={14} />
              Three-Day Program
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-foreground/80">
              All times are listed in local conference time. Please arrive early for your first activity each day.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
            {scheduleDays.map((day, dayIndex) => (
              <ScrollReveal key={day.id} delay={dayIndex * 100} className="h-full">
                <div className="surface-panel flex h-full flex-col rounded-[2rem] p-8">
                  <div className="border-b border-white/8 pb-6">
                    <div className="flex items-center gap-3 text-accent">
                      <CalendarDays size={20} />
                      <span className="text-xs font-bold uppercase tracking-[0.28em]">{day.label}</span>
                    </div>
                    <h2 className="mt-4 text-3xl font-bold text-foreground">{day.date}</h2>
                  </div>

                  <div className="mt-8 space-y-4">
                    {day.events.map((event) => (
                      <div
                        key={`${day.id}-${event.title}-${event.time}`}
                        className="rounded-2xl border border-border/60 bg-secondary/20 p-5"
                      >
                        <div className="flex items-start gap-4">
                          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                            <Clock3 size={18} />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-base font-bold text-foreground">{event.title}</h3>
                            <p className="mt-1 text-sm text-foreground/80">{event.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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
