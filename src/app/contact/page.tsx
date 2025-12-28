"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { OfficeMap } from "@/components/contact/OfficeMap";

export default function ContactPage() {
  // Shared state for office map interactions
  const [hoveredOffice, setHoveredOffice] = useState<string | null>(null);
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null);
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="luxury-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="luxury-label text-accent">GET IN TOUCH</span>
            <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight">
              Let's Create
              <br />
              <span className="text-gold">Something Beautiful</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-grey max-w-2xl">
              Whether you're planning a new project or renovating an existing
              space, our team is here to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-16">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-xl">
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-8">
                  Send us a message
                </h2>
                <ContactForm />
              </div>
            </motion.div>

            {/* Right: Quick Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <ContactInfoItem
                  icon={Phone}
                  title="Phone"
                  items={["+91 97399 92779", "+91 96068 94352"]}
                />
                <ContactInfoItem
                  icon={Mail}
                  title="Email"
                  items={["info@greenbuildersandinteriors.com"]}
                />
                <ContactInfoItem
                  icon={MapPin}
                  title="Headquarters"
                  items={["Reg Office, G F, NO 6/1, Madivala", "Bengaluru, Karnataka 560068"]}
                />
                <ContactInfoItem
                  icon={Clock}
                  title="Business Hours"
                  items={["Monday - Saturday: 9:00 AM - 7:00 PM", "Sunday: By Appointment"]}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 md:py-24">
        <div className="luxury-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="luxury-label text-accent">OUR PRESENCE</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white">
              5 Offices Across South India
            </h2>
            <p className="mt-6 text-lg text-grey max-w-2xl mx-auto">
              Click on any location to view office details
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[600px] lg:h-[700px] xl:h-[800px] w-full"
          >
            <OfficeMap 
              hoveredOffice={hoveredOffice}
              selectedOffice={selectedOffice}
              onHover={setHoveredOffice}
              onSelect={setSelectedOffice}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

interface ContactInfoItemProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: string[];
}

function ContactInfoItem({ icon: Icon, title, items }: ContactInfoItemProps) {
  return (
    <div className="flex gap-4 group">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <div>
        <h3 className="font-medium text-white mb-2">{title}</h3>
        {items.map((item, index) => (
          <p key={index} className="text-grey text-sm">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
