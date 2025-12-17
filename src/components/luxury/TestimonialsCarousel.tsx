"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  companyLogo: string;
  quote: string;
  projectType: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO",
    company: "Tech Innovations Pvt Ltd",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    companyLogo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
    quote:
      "Green Builders transformed our office space into a modern, inspiring workplace. Their attention to detail and understanding of our brand identity was exceptional. The project was delivered on time and exceeded all expectations.",
    projectType: "Office Renovation",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Homeowner",
    company: "Luxury Villa, Bangalore",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    companyLogo: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=200&q=80",
    quote:
      "Our dream villa became a reality thanks to Green Builders. From conceptual design to final execution, they guided us through every step with professionalism and creativity. The result is a stunning home that perfectly reflects our lifestyle.",
    projectType: "Villa Design & Construction",
  },
  {
    id: 3,
    name: "Arjun Reddy",
    role: "Restaurant Owner",
    company: "The Spice Route",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    companyLogo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&q=80",
    quote:
      "The ambiance they created for our restaurant is simply phenomenal. Customers constantly compliment the interiors, and we've seen a significant increase in footfall. Green Builders understood our vision and brought it to life beautifully.",
    projectType: "Restaurant Interior Design",
  },
  {
    id: 4,
    name: "Meera Patel",
    role: "Property Developer",
    company: "Skyline Developers",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    companyLogo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=80",
    quote:
      "We've partnered with Green Builders on multiple projects, and they consistently deliver excellence. Their innovative designs and commitment to quality make them our go-to choice for all our premium developments.",
    projectType: "Multi-Unit Residential Complex",
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Auto-advance every 6 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length;
      } else {
        return prev === 0 ? testimonials.length - 1 : prev - 1;
      }
    });
  };

  const current = testimonials[currentIndex];

  return (
    <section
      className="relative overflow-hidden bg-black section-padding-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')",
          backgroundSize: "120%",
        }}
      />

      <div className="relative z-10 luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="luxury-label text-gold">Client Testimonials</span>
          <h2 className="mt-4 font-display text-4xl font-light text-white md:text-6xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image Side with Ken Burns Effect */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current.id}
                  custom={direction}
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      opacity: { duration: 0.6 },
                      scale: { duration: 12, ease: "linear" }, // Ken Burns zoom
                    },
                  }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Company Logo */}
              <div className="absolute bottom-8 left-8 right-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-gold">
                    <Image
                      src={current.companyLogo}
                      alt={current.company}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gold">{current.projectType}</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Content Side */}
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Quote Icon */}
                  <Quote className="mb-6 h-12 w-12 text-gold" />

                  {/* Testimonial Text */}
                  <blockquote className="mb-8 font-display text-2xl font-light leading-relaxed text-white md:text-3xl">
                    "{current.quote}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="mb-8 border-l-2 border-gold pl-6">
                    <p className="mb-1 text-xl font-medium text-white">
                      {current.name}
                    </p>
                    <p className="text-gray-400">
                      {current.role}, {current.company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate(-1)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:border-gold hover:bg-gold hover:text-black"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      className={`h-1 transition-all ${
                        index === currentIndex ? "w-12 bg-gold" : "w-8 bg-gold/30"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => navigate(1)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:border-gold hover:bg-gold hover:text-black"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
