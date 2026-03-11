"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { CheckCircle2, User, Users, ShieldCheck, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<string | null>(null);

  const handleRoleSelection = (id: string) => {
    setRole(id);
    
    // Redirect logic for all roles
    if (id === "delegate") {
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScgbJ3cXVHr02AWIlgjbs1Rt7tFd0zVip9rl5YahKIgbYcafg/viewform?pli=1";
      return;
    }
    if (id === "team") {
      window.location.href = "https://forms.gle/nvU2roK1YHKx7xGu6";
      return;
    }
    if (id === "staff") {
      window.location.href = "https://forms.gle/QNeT9wvBfTYda81P7";
      return;
    }
    if (id === "chair") {
      window.location.href = "https://forms.gle/UPjTiJB5UXAuD8mK6";
      return;
    }
  };
  
  const pricing = [
    { label: "Early Delegate", price: "1300TL" },
    { label: "Delegate", price: "1400TL" },
    { label: "Late Delegate", price: "1500TL" },
    { label: "PR and IT and Logistics", price: "950TL" },
    { label: "Press and Admins", price: "1200TL" },
    { label: "Chairs", price: "1100TL" },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h1 className="text-5xl font-bold mb-6">Begin Your <span className="text-primary">Journey</span></h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-muted-foreground">
                Join the Ihsan Schools MUN 2026. Choose your path below to begin registration.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            {step === 1 && (
              <div className="space-y-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { id: "delegate", name: "Early Delegate", icon: <User />, desc: "Apply for early registration via Google Forms." },
                    { id: "chair", name: "Chair / DA", icon: <ShieldCheck />, desc: "Moderate committee sessions." },
                    { id: "staff", name: "Admin / Press", icon: <Users />, desc: "Support the conference logistics." },
                    { id: "team", name: "Team", icon: <Briefcase />, desc: "Apply for the organizing team." }
                  ].map((item) => (
                    <Card 
                      key={item.id}
                      className={`cursor-pointer transition-all border-2 hover:border-primary group bg-card ${role === item.id ? 'border-primary bg-primary/5' : 'border-border'}`}
                      onClick={() => handleRoleSelection(item.id)}
                    >
                      <CardContent className="p-8 text-center space-y-4">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto transition-colors ${role === item.id ? 'bg-primary text-white' : 'bg-secondary text-primary group-hover:bg-primary/10 group-hover:text-primary'}`}>
                          {item.icon}
                        </div>
                        <h3 className="font-bold text-xl">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold">Delegate Pricing</h2>
                    <p className="text-muted-foreground mt-2">All prices listed in Turkish Lira (TL).</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pricing.map((item) => (
                      <Card key={item.label} className="bg-card border border-border">
                        <CardContent className="p-6 flex items-center justify-between">
                          <div className="font-semibold">{item.label}</div>
                          <div className="text-primary font-bold">{item.price}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="max-w-3xl mx-auto text-center py-20 animate-in fade-in zoom-in-90 duration-700">
                <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner shadow-primary/20">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-4xl font-bold mb-4">Registration Received!</h2>
                <p className="text-xl text-muted-foreground mb-10">
                  Thank you for your application to IHSAN MUN 2026. 
                  Please check your email for further instructions.
                </p>
                <Button asChild variant="outline" className="rounded-full px-10 py-6 text-lg border-primary text-primary hover:bg-primary/10">
                  <a href="/">Return Home</a>
                </Button>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
