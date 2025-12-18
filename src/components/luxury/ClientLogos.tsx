"use client";

import { motion } from "framer-motion";

const clients = [
  "Smart Node",
  "Alsina",
  "Toyota",
  "Bajaj Allianz",
  "Mitsubishi Electric",
  "Kargil Equipments",
  "Fateh",
  "SAPRO Global",
  "Thoughtworks",
  "BluArmor",
  "Awfis",
  "Mibo",
  "Aster Pharmacy",
  "Credel Capital",
  "Softtek",
];

export function ClientLogos() {
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

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <motion.div
          className="flex gap-8 md:gap-12"
          animate={{
            x: [0, -50 * clients.length * 16], // Move by total width of first set
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedClients.map((client, index) => (
            <ClientLogo key={`${client}-${index}`} name={client} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface ClientLogoProps {
  name: string;
}

function ClientLogo({ name }: ClientLogoProps) {
  return (
    <div className="flex-shrink-0 group">
      <div className="flex items-center justify-center h-16 md:h-20 px-8 md:px-12 rounded-xl border border-white/10 bg-primary-dark/50 backdrop-blur-sm transition-all duration-300 group-hover:border-gold/30 group-hover:bg-primary-dark">
        {/* Placeholder text logo - replace with actual images when available */}
        <span className="text-lg md:text-xl font-medium text-white/50 group-hover:text-gold whitespace-nowrap transition-colors duration-300">
          {name}
        </span>
      </div>
    </div>
  );
}

