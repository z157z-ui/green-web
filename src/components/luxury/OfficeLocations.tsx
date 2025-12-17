"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, X } from "lucide-react";
import Image from "next/image";

interface Office {
  id: number;
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  image: string;
  mapPosition: { top: string; left: string };
}

const offices: Office[] = [
  {
    id: 1,
    city: "Bangalore",
    address: "HSR Layout, Sector 1, Bangalore - 560102",
    phone: "+91 97399 92779",
    email: "bangalore@greenbuilders.in",
    hours: "Mon-Sat: 9:00 AM - 7:00 PM",
    image: "https://images.unsplash.com/photo-1562887284-5233bb1677b9?w=600&q=80",
    mapPosition: { top: "45%", left: "30%" },
  },
  {
    id: 2,
    city: "Hyderabad",
    address: "Hitech City, Madhapur, Hyderabad - 500081",
    phone: "+91 97399 92779",
    email: "hyderabad@greenbuilders.in",
    hours: "Mon-Sat: 9:00 AM - 7:00 PM",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    mapPosition: { top: "40%", left: "42%" },
  },
  {
    id: 3,
    city: "Visakhapatnam",
    address: "Rushikonda, Visakhapatnam - 530045",
    phone: "+91 97399 92779",
    email: "vizag@greenbuilders.in",
    hours: "Mon-Sat: 9:00 AM - 7:00 PM",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
    mapPosition: { top: "30%", left: "54%" },
  },
  {
    id: 4,
    city: "Kochi",
    address: "Marine Drive, Kochi - 682011",
    phone: "+91 97399 92779",
    email: "kochi@greenbuilders.in",
    hours: "Mon-Sat: 9:00 AM - 7:00 PM",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80",
    mapPosition: { top: "60%", left: "20%" },
  },
  {
    id: 5,
    city: "Chennai",
    address: "Anna Nagar, Chennai - 600040",
    phone: "+91 97399 92779",
    email: "chennai@greenbuilders.in",
    hours: "Mon-Sat: 9:00 AM - 7:00 PM",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80",
    mapPosition: { top: "55%", left: "44%" },
  },
];

export function OfficeLocations() {
  const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);
  const [hoveredOffice, setHoveredOffice] = useState<number | null>(null);

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 section-padding-lg">
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="luxury-label text-gold">Find Us</span>
          <h2 className="mt-4 font-display text-4xl font-light md:text-6xl">
            Office Locations
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Serving clients across India with offices in major cities
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square"
          >
            {/* India Map SVG or Image */}
            <div className="relative h-full w-full rounded-lg border-2 border-gold/20 bg-gradient-to-br from-gray-100 to-gray-50 p-8">
              {/* Simplified India Map Shape */}
              <svg
                viewBox="0 0 400 500"
                className="h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M200 50 C250 50, 300 80, 320 120 L330 180 C330 220, 310 260, 300 280 L280 350 C270 380, 260 400, 240 430 L220 460 C200 480, 180 480, 160 460 L140 430 C120 400, 110 380, 100 350 L80 280 C70 260, 50 220, 50 180 L60 120 C80 80, 130 50, 180 50 Z"
                  fill="#f9fafb"
                  stroke="rgb(212, 175, 55)"
                  strokeWidth="2"
                />
              </svg>

              {/* Office Markers */}
              {offices.map((office) => (
                <OfficeMarker
                  key={office.id}
                  office={office}
                  isHovered={hoveredOffice === office.id}
                  isSelected={selectedOffice?.id === office.id}
                  onHover={() => setHoveredOffice(office.id)}
                  onLeave={() => setHoveredOffice(null)}
                  onClick={() => setSelectedOffice(office)}
                />
              ))}

              {/* Connection Lines */}
              <svg
                className="absolute inset-0 pointer-events-none"
                viewBox="0 0 100 100"
              >
                {offices.map((office, index) => {
                  if (index === offices.length - 1) return null;
                  const next = offices[index + 1];
                  return (
                    <motion.line
                      key={office.id}
                      x1={office.mapPosition.left}
                      y1={office.mapPosition.top}
                      x2={next.mapPosition.left}
                      y2={next.mapPosition.top}
                      stroke="rgb(212, 175, 55)"
                      strokeWidth="0.2"
                      strokeDasharray="2,2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.3 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: index * 0.2 }}
                    />
                  );
                })}
              </svg>
            </div>
          </motion.div>

          {/* Office Details or List */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {selectedOffice ? (
                <OfficeDetail
                  office={selectedOffice}
                  onClose={() => setSelectedOffice(null)}
                />
              ) : (
                <OfficeList
                  offices={offices}
                  onSelect={setSelectedOffice}
                  hoveredOffice={hoveredOffice}
                  onHover={setHoveredOffice}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

interface OfficeMarkerProps {
  office: Office;
  isHovered: boolean;
  isSelected: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}

function OfficeMarker({
  office,
  isHovered,
  isSelected,
  onHover,
  onLeave,
  onClick,
}: OfficeMarkerProps) {
  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        top: office.mapPosition.top,
        left: office.mapPosition.left,
        transform: "translate(-50%, -50%)",
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      whileHover={{ scale: 1.2 }}
    >
      {/* Pulsing Ring */}
      <motion.div
        className="absolute inset-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Marker Pin */}
      <motion.div
        className={`relative h-8 w-8 rounded-full transition-colors ${
          isSelected || isHovered ? "bg-gold" : "bg-gold/70"
        } shadow-lg flex items-center justify-center`}
        animate={isHovered || isSelected ? { y: -5 } : { y: 0 }}
      >
        <MapPin className="h-5 w-5 text-black" />
      </motion.div>

      {/* Label */}
      <AnimatePresence>
        {(isHovered || isSelected) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full mt-2 whitespace-nowrap rounded bg-black px-3 py-1 text-xs font-medium text-white shadow-lg"
          >
            {office.city}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface OfficeDetailProps {
  office: Office;
  onClose: () => void;
}

function OfficeDetail({ office, onClose }: OfficeDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="relative rounded-lg border-2 border-gold/20 bg-white p-8 shadow-xl"
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="mb-6 aspect-video relative overflow-hidden rounded">
        <Image
          src={office.image}
          alt={office.city}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="mb-4 font-display text-3xl font-light">{office.city}</h3>

      <div className="space-y-4">
        <div className="flex gap-3">
          <MapPin className="h-5 w-5 flex-shrink-0 text-gold" />
          <p className="text-gray-600">{office.address}</p>
        </div>
        <div className="flex gap-3">
          <Phone className="h-5 w-5 flex-shrink-0 text-gold" />
          <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-gold">
            {office.phone}
          </a>
        </div>
        <div className="flex gap-3">
          <Mail className="h-5 w-5 flex-shrink-0 text-gold" />
          <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-gold">
            {office.email}
          </a>
        </div>
        <div className="flex gap-3">
          <Clock className="h-5 w-5 flex-shrink-0 text-gold" />
          <p className="text-gray-600">{office.hours}</p>
        </div>
      </div>

      <a
        href="#contact"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-gold px-6 py-3 text-black font-medium transition-colors hover:bg-black hover:text-gold border-2 border-gold"
      >
        Contact This Office
      </a>
    </motion.div>
  );
}

interface OfficeListProps {
  offices: Office[];
  onSelect: (office: Office) => void;
  hoveredOffice: number | null;
  onHover: (id: number | null) => void;
}

function OfficeList({ offices, onSelect, hoveredOffice, onHover }: OfficeListProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      {offices.map((office, index) => (
        <motion.button
          key={office.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onSelect(office)}
          onMouseEnter={() => onHover(office.id)}
          onMouseLeave={() => onHover(null)}
          className={`w-full rounded-lg border-2 p-6 text-left transition-all ${
            hoveredOffice === office.id
              ? "border-gold bg-gold/5"
              : "border-gray-200 hover:border-gold/50"
          }`}
        >
          <h3 className="mb-2 font-display text-xl font-light">{office.city}</h3>
          <p className="text-sm text-gray-600">{office.address}</p>
        </motion.button>
      ))}
    </motion.div>
  );
}
