"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-primary-dark/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="luxury-container">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <Image
                src="/images/logos/LOGO-WHITE.png"
                alt="Green Builders & Interiors"
                width={180}
                height={50}
                className="h-10 lg:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative font-serif text-base text-white/90 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="/contact"
                className="relative px-8 py-3 bg-accent text-primary-dark font-medium rounded-full overflow-hidden group transition-all duration-300 hover:bg-gold hover:text-white hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="relative z-10">Start Your Project</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden relative z-10 p-2 text-white hover:text-accent transition-colors"
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
