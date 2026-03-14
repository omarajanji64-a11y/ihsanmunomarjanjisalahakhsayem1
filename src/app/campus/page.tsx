"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function CampusPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-bold">
                Ihsan Schools <span className="text-accent">Atakent</span>
              </h1>
              <p className="text-xl text-foreground/85 mt-6 max-w-3xl mx-auto">
                Explore the venue and find us on the map.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={150}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
              <div className="bg-card border border-border/50 rounded-[2.5rem] overflow-hidden shadow-xl">
                <img
                  src="https://res.cloudinary.com/dl1pjkqmv/image/upload/v1773265765/WhatsApp_Image_2026-03-12_at_00.48.03_gowxeu.jpg"
                  alt="Ihsan Schools Atakent"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-card border border-border/50 rounded-[2.5rem] overflow-hidden shadow-xl">
                <iframe
                  title="Ihsan Schools Atakent Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.887980162073!2d28.772239075132248!3d41.049578716882245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5e4b14d9497%3A0x1d933957e7f163df!2sIhsan%20Okullar%C4%B1%20Atakent%20Kamp%C3%BCs%C3%BC%20(Ihsan%20Schools)!5e0!3m2!1sen!2str!4v1773265855242!5m2!1sen!2str"
                  className="w-full h-[420px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
