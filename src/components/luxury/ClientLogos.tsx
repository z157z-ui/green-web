"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: "Smart Node", logo: "/images/logos/clients/smart-node.jpg" },
  { name: "Alsina", logo: "/images/logos/clients/alsina.jpg" },
  { name: "Bajaj Allianz", logo: "/images/logos/clients/bajaj.jpg" },
  { name: "Mitsubishi Electric", logo: "/images/logos/clients/mistubishi.jpg" },
  { name: "Thoughtworks", logo: "/images/logos/clients/thoughtworks.jpg" },
  { name: "BluArmor", logo: "/images/logos/clients/blua.jpg" },
  { name: "Awfis", logo: "/images/logos/clients/awfis.jpg" },
  { name: "Credel Capital", logo: "/images/logos/clients/credal.jpg" },
];

export function ClientLogos() {
  const [isPaused, setIsPaused] = useState(false);
  
  // Double the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 md:py-20 bg-background overflow-hidden">
      <div className="luxury-container mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="luxury-label text-gold">Trusted Partners</span>
          <h2 className="mt-4 font-serif text-2xl md:text-3xl font-light text-white">
            Companies We&apos;ve Worked With
          </h2>
        </motion.div>
      </div>

      {/* Marquee Container - scrollable with animation */}
      <div className="relative">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrollable Container - allows manual scrolling while animation continues */}
        <div 
          className="overflow-x-auto hide-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Animated Scrolling Track */}
        <div 
          className="flex gap-8 md:gap-12 animate-marquee-slow"
          style={{ 
            width: "max-content",
            animationPlayState: isPaused ? "paused" : "running"
          }}
        >
          {duplicatedClients.map((client, index) => (
            <ClientLogo key={`${client.name}-${index}`} client={client} />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ClientLogoProps {
  client: Client;
}

function ClientLogo({ client }: ClientLogoProps) {
  return (
    <div className="flex-shrink-0 group">
      <div className="relative h-20 md:h-24 w-[142px] md:w-[170px] rounded-xl border border-white/10 bg-primary-dark/50 backdrop-blur-sm transition-all duration-300 group-hover:border-gold/30 group-hover:bg-primary-dark/80 overflow-hidden">
          <Image
            src={client.logo}
            alt={client.name}
            fill
            className="object-contain object-center opacity-70 group-hover:opacity-100 transition-all duration-300"
          sizes="(max-width: 768px) 120px, 140px"
            unoptimized
          />
      </div>
    </div>
  );
}
