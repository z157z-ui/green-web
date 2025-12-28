"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollDifference = currentScrollY - lastScrollY;
    
    // Update scrolled state for background
    setScrolled(currentScrollY > 50);
    
    // Determine scroll direction with threshold to avoid jitter
    if (Math.abs(scrollDifference) > 5) {
      const newDirection = scrollDifference > 0 ? 'down' : 'up';
      
      setScrollDirection(prev => {
        // #region agent log
        if (newDirection !== prev) {
          fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Header.tsx:handleScroll',message:'Scroll direction change',data:{currentScrollY,scrollDifference,newDirection,previousDirection:prev},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'NAV_FADE'})}).catch(()=>{});
        }
        // #endregion
        return newDirection;
      });
      
      if (newDirection === 'down') {
        // Hide header when scrolling down past 100px
        if (currentScrollY > 100) {
          setHidden(true);
        }
      } else {
        // Show header when scrolling up
        setHidden(false);
      }
    }
    
    // Always show header at the top
    if (currentScrollY < 50) {
      setHidden(false);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: hidden ? -100 : 0, 
          opacity: hidden ? 0 : 1 
        }}
        transition={{ 
          duration: 0.3,
          ease: scrollDirection === 'down' 
            ? [0.4, 0, 0.2, 1] // Ease out for smooth fade up
            : [0.2, 0, 0.4, 1], // Ease in for smooth fade down
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Animated Background Layer */}
        <motion.div
          className="absolute inset-0 border-b transition-colors duration-500"
          style={{
            backgroundColor: `rgba(13, 26, 18, ${scrolled ? 0.9 : 0})`,
            backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
            borderColor: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          }}
        />
        
        {/* Content Layer */}
        <div className="relative luxury-container">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo with hover effect */}
            <Link 
              href="/" 
              className="relative z-10 group flex-shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/images/logos/LOGO.png"
                  alt="Green Builders & Interiors"
                  width={180}
                  height={50}
                  className="h-10 lg:h-12 w-auto transition-all duration-300 group-hover:brightness-110"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.1 * index,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  <Link
                    href={link.href}
                    className="group relative font-serif text-base text-white/90 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-accent to-gold transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <motion.div 
              className="hidden lg:flex items-center gap-6 flex-shrink-0 ml-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/contact"
                className="relative px-8 py-3 bg-accent text-primary-dark font-medium rounded-full overflow-hidden group transition-all duration-300 hover:bg-gold hover:text-white hover:shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
              >
                <span className="relative z-10">Start Your Project</span>
                {/* Shine effect */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  whileHover={{ translateX: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden relative z-10 p-2 text-white hover:text-accent transition-colors"
              aria-label="Open menu"
              whileTap={{ scale: 0.95 }}
            >
              <Menu size={28} />
            </motion.button>
          </div>
        </div>
        
        {/* Subtle glow line when scrolled */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px]"
          style={{
            background: scrolled 
              ? 'linear-gradient(90deg, transparent, rgba(123, 177, 91, 0.5), transparent)' 
              : 'transparent',
            opacity: scrolled ? 1 : 0,
          }}
        />
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            navLinks={navLinks}
          />
        )}
      </AnimatePresence>
    </>
  );
}
