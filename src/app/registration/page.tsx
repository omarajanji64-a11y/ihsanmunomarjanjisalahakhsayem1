
"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, User, Users, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />
      
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h1 className="text-5xl font-bold mb-6">Begin Your <span className="text-primary">Journey</span></h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-muted-foreground">
                Join the Ihsan Schools MUN 2025. Choose your path below.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { id: "delegate", name: "Delegate", icon: <User />, desc: "Represent a nation in committee." },
                  { id: "chair", name: "Chair / DA", icon: <ShieldCheck />, desc: "Moderate committee sessions." },
                  { id: "staff", name: "Press / Staff", icon: <Users />, desc: "Support the conference logistics." }
                ].map((item) => (
                  <Card 
                    key={item.id}
                    className={`cursor-pointer transition-all border-2 hover:border-primary group ${role === item.id ? 'border-primary bg-primary/5' : 'border-border'}`}
                    onClick={() => {
                      setRole(item.id);
                      setStep(2);
                    }}
                  >
                    <CardContent className="p-8 text-center space-y-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto transition-colors ${role === item.id ? 'bg-primary text-white' : 'bg-muted text-secondary group-hover:bg-primary/10 group-hover:text-primary'}`}>
                        {item.icon}
                      </div>
                      <h3 className="font-bold text-xl">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="bg-white border border-border p-10 rounded-[2rem] shadow-xl animate-in zoom-in-95 duration-500">
                <Button variant="ghost" className="mb-8" onClick={() => setStep(1)}>← Back to selection</Button>
                <h2 className="text-3xl font-bold mb-8">{role?.charAt(0).toUpperCase()}{role?.slice(1)} Registration</h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required className="py-6 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required className="py-6 rounded-xl" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="school">School / Institution</Label>
                      <Input id="school" placeholder="Ihsan Schools" required className="py-6 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+90 5XX XXX XXXX" className="py-6 rounded-xl" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Previous MUN Experience (if any)</Label>
                    <Textarea id="experience" placeholder="List committees and roles..." className="min-h-[120px] rounded-xl" />
                  </div>

                  <Button type="submit" className="w-full bg-primary py-8 text-lg rounded-xl">Complete Registration</Button>
                </form>
              </div>
            )}

            {step === 3 && (
              <div className="text-center py-20 animate-in fade-in zoom-in-90 duration-700">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-4xl font-bold mb-4">Registration Received!</h2>
                <p className="text-xl text-muted-foreground max-w-lg mx-auto mb-10">
                  Thank you for applying to be a {role} at IHSAN MUN 2025. 
                  A confirmation email has been sent to your inbox.
                </p>
                <Button asChild variant="outline" className="rounded-full px-10 py-6 text-lg">
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
