"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, User, Users, ShieldCheck, Clock, CalendarCheck, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<string | null>(null);
  const [delegateType, setDelegateType] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handleRoleSelection = (id: string) => {
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
    
    setRole(id);
    if (id === "delegate") {
      setStep(1.5); // Move to delegate type selection
    } else {
      setStep(2); // Move directly to form for other roles
    }
  };

  const handleDelegateTypeSelection = (type: string) => {
    setDelegateType(type);
    setStep(2);
  };

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
                Join the Ihsan Schools MUN 2026. Choose your path below.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            {step === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { id: "delegate", name: "Delegate", icon: <User />, desc: "Represent a nation in committee." },
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
            )}

            {step === 1.5 && (
              <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Button variant="ghost" className="mb-4 text-primary hover:text-primary/80" onClick={() => setStep(1)}>← Back to role selection</Button>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold">Select Delegate Type</h2>
                  <p className="text-muted-foreground">Please choose your preferred registration tier.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { id: "early", name: "Early Delegate", icon: <CalendarCheck />, desc: "Discounted early-bird registration." },
                    { id: "standard", name: "Delegate", icon: <User />, desc: "Standard delegate registration." },
                    { id: "late", name: "Late Delegate", icon: <Clock />, desc: "Last-minute registration tier." }
                  ].map((item) => (
                    <Card 
                      key={item.id}
                      className={`cursor-pointer transition-all border-2 hover:border-primary group bg-card ${delegateType === item.id ? 'border-primary bg-primary/5' : 'border-border'}`}
                      onClick={() => handleDelegateTypeSelection(item.name)}
                    >
                      <CardContent className="p-8 text-center space-y-4">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto transition-colors ${delegateType === item.id ? 'bg-primary text-white' : 'bg-secondary text-primary group-hover:bg-primary/10 group-hover:text-primary'}`}>
                          {item.icon}
                        </div>
                        <h3 className="font-bold text-xl">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="max-w-3xl mx-auto bg-card border border-border p-10 rounded-[2rem] shadow-xl animate-in zoom-in-95 duration-500">
                <Button variant="ghost" className="mb-8 text-primary hover:text-primary/80" onClick={() => role === "delegate" ? setStep(1.5) : setStep(1)}>← Back</Button>
                <h2 className="text-3xl font-bold mb-8">
                  {delegateType ? delegateType : (role ? role.charAt(0).toUpperCase() + role.slice(1) : "Role")} Registration
                </h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required className="py-6 rounded-xl bg-secondary/30 border-border text-foreground focus:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required className="py-6 rounded-xl bg-secondary/30 border-border text-foreground focus:ring-primary" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="school" className="text-foreground">School / Institution</Label>
                      <Input id="school" placeholder="Ihsan Schools" required className="py-6 rounded-xl bg-secondary/30 border-border text-foreground focus:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                      <Input id="phone" placeholder="+90 5XX XXX XXXX" className="py-6 rounded-xl bg-secondary/30 border-border text-foreground focus:ring-primary" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-foreground">Previous MUN Experience (if any)</Label>
                    <Textarea id="experience" placeholder="List committees and roles..." className="min-h-[120px] rounded-xl bg-secondary/30 border-border text-foreground focus:ring-primary" />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-8 text-lg rounded-xl transition-all">Complete Registration</Button>
                </form>
              </div>
            )}

            {step === 3 && (
              <div className="max-w-3xl mx-auto text-center py-20 animate-in fade-in zoom-in-90 duration-700">
                <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner shadow-primary/20">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-4xl font-bold mb-4">Registration Received!</h2>
                <p className="text-xl text-muted-foreground mb-10">
                  Thank you for applying to be a {delegateType || role} at IHSAN MUN 2026. 
                  A confirmation email has been sent to your inbox.
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