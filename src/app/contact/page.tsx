
"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Instagram, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />
      
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <ScrollReveal>
                <h1 className="text-5xl md:text-6xl font-bold">Connect With <span className="text-primary">IHSAN MUN</span></h1>
                <p className="text-xl text-muted-foreground mt-6">
                  Have questions about the conference? Our team is here to help you 
                  start your diplomatic journey.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200} className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Our Campus</h4>
                    <p className="text-muted-foreground">Ihsan Schools, Istanbul, Turkey</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center shrink-0">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <p className="text-muted-foreground">mun@ihsanschools.org</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Instagram />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Follow Us</h4>
                    <p className="text-muted-foreground">@ihsanschoolsmun</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400} className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-border/50">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Full Name</Label>
                  <Input id="contact-name" placeholder="How should we address you?" className="py-6 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input id="contact-email" type="email" placeholder="email@address.com" className="py-6 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-subject">Subject</Label>
                  <Input id="contact-subject" placeholder="What is this about?" className="py-6 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea id="contact-message" placeholder="Type your message here..." className="min-h-[150px] rounded-xl" />
                </div>
                <Button className="w-full bg-primary py-8 text-lg rounded-xl flex items-center gap-2 group">
                  Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
