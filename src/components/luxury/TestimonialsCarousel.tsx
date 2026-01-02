"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  projectType: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO",
    company: "Tech Innovations Pvt Ltd",
    quote:
      "Green Builders transformed our office space into a modern, inspiring workplace. Their attention to detail and understanding of our brand identity was exceptional. The project was delivered on time and exceeded all expectations.",
    projectType: "Office Renovation",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Homeowner",
    company: "Luxury Villa, Bangalore",
    quote:
      "Our dream villa became a reality thanks to Green Builders. From conceptual design to final execution, they guided us through every step with professionalism and creativity. The result is a stunning home that perfectly reflects our lifestyle.",
    projectType: "Villa Design & Construction",
  },
  {
    id: 3,
    name: "Arjun Reddy",
    role: "Restaurant Owner",
    company: "The Spice Route",
    quote:
      "The ambiance they created for our restaurant is simply phenomenal. Customers constantly compliment the interiors, and we've seen a significant increase in footfall. Green Builders understood our vision and brought it to life beautifully.",
    projectType: "Restaurant Interior Design",
  },
  {
    id: 4,
    name: "Meera Patel",
    role: "Property Developer",
    company: "Skyline Developers",
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
      className="relative overflow-hidden bg-primary-dark section-padding-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative z-10 luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="luxury-label text-gold">Client Testimonials</span>
          <h2 className="mt-4 font-serif text-4xl font-light text-white md:text-6xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {/* Comment Card Style */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Comment Card */}
              <div className="relative rounded-2xl border border-white/10 bg-background-elevated p-8 md:p-12 backdrop-blur-sm shadow-2xl">
                {/* Quote Icon - Top Left */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8">
                  <Quote className="h-8 w-8 md:h-10 md:w-10 text-gold/30" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="relative z-10 mb-8 font-serif text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white/90 pl-8 md:pl-12">
                  "{current.quote}"
                </blockquote>

                {/* Divider */}
                <div className="mb-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                {/* Client Info - Comment Style */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-lg md:text-xl font-semibold text-white mb-1">
                      {current.name}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-grey">
                      <span>{current.role}</span>
                      <span className="text-white/30">•</span>
                      <span>{current.company}</span>
                    </div>
                  </div>
                  
                  {/* Project Type Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
                    <span className="text-xs md:text-sm text-gold font-medium uppercase tracking-wider">
                      {current.projectType}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-24 h-24 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-center gap-4 z-20 relative">
            <button
              onClick={() => navigate(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-background-elevated text-gold transition-all hover:border-gold hover:bg-gold hover:text-primary-dark hover:shadow-lg opacity-100 z-20 relative"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex gap-2 z-20 relative">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-1.5 rounded-full transition-all opacity-100 z-20 relative ${
                    index === currentIndex
                      ? "w-12 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                      : "w-8 bg-gold/30 hover:bg-gold/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-background-elevated text-gold transition-all hover:border-gold hover:bg-gold hover:text-primary-dark hover:shadow-lg opacity-100 z-20 relative"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
