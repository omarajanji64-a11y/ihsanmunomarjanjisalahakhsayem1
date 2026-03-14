import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { User, Users, ShieldCheck, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const registrationPaths = [
  {
    id: "delegate",
    name: "Early Delegate",
    icon: <User />,
    desc: "Apply for early registration via Google Forms.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScgbJ3cXVHr02AWIlgjbs1Rt7tFd0zVip9rl5YahKIgbYcafg/viewform?pli=1",
  },
  {
    id: "chair",
    name: "Chair / Academic Assistant",
    icon: <ShieldCheck />,
    desc: "Guide debates and support committee flow.",
    href: "https://forms.gle/UPjTiJB5UXAuD8mK6",
  },
  {
    id: "staff",
    name: "Admin / Press",
    icon: <Users />,
    desc: "Support the conference logistics.",
    href: "https://forms.gle/QNeT9wvBfTYda81P7",
  },
  {
    id: "team",
    name: "Team",
    icon: <Briefcase />,
    desc: "Apply for the organizing team.",
    href: "https://forms.gle/oY6NGBmL4J7bKcAe8",
  },
];

export default function RegistrationPage() {
  const pricing = [
    { label: "Early Delegate", price: "1300TL" },
    { label: "PR, IT, Media and Logistics", price: "950TL" },
    { label: "Press and Admins", price: "1000TL" },
    { label: "Chair/Academic Assistant", price: "1100TL" },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h1 className="text-5xl font-bold mb-6">Begin Your <span className="text-brand-gradient">Journey</span></h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-foreground/85">
                Join the Ihsan Schools MUN 2026. Pick your path below to get started.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="space-y-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {registrationPaths.map((item) => (
                  <a key={item.id} href={item.href} className="block h-full">
                    <Card className="surface-panel group h-full border-2 border-border transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-accent hover:bg-primary/10">
                      <CardContent className="p-8 text-center space-y-4">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-accent transition-colors group-hover:bg-accent/15 group-hover:text-accent">
                          {item.icon}
                        </div>
                        <h3 className="font-bold text-xl">{item.name}</h3>
                        <p className="text-sm text-foreground/78">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold">Delegate Pricing</h2>
                  <p className="text-foreground/78 mt-2">All prices listed in Turkish Lira (TL).</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pricing.map((item) => (
                    <Card key={item.label} className="surface-panel border border-border">
                      <CardContent className="p-6 flex items-center justify-between">
                        <div className="font-semibold">{item.label}</div>
                        <div className="text-accent font-bold">{item.price}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
