"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

// Utility for combining Tailwind classes
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

interface NavLink {
  href: string;
  label: string;
  isMegaMenu?: boolean;
}

interface Service {
  title: string;
  description: string;
  href: string;
}

const navLinks: NavLink[] = [
  { href: '#services', label: 'Services', isMegaMenu: true },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

const services: Service[] = [
  { title: "Interior Design", description: "Bespoke interior solutions that blend aesthetics with functionality.", href:"#" },
  { title: "Renovation & Remodeling", description: "Transforming existing spaces into modern, sustainable environments.", href:"#" },
  { title: "Custom Plumbing Solutions", description: "Expert design and installation of high-efficiency plumbing systems.", href:"#" },
  { title: "Sustainable Building", description: "Eco-friendly materials and green construction practices.", href:"#" },
  { title: "Kitchen & Bath Design", description: "Crafting luxurious and practical kitchens and bathrooms.", href:"#" },
  { title: "Project Management", description: "Seamless oversight from concept to completion for your project.", href:"#" },
];

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if(isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            // Reset mobile sub-menu when main menu opens
            setIsMobileServicesOpen(false);
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [isMobileMenuOpen]);

    const renderMegaMenu = () => (
        <div className="absolute top-full left-0 w-full bg-pure-white text-foreground shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                    {services.map((service) => (
                        <Link href={service.href} key={service.title} className="group/service">
                            <h4 className="font-display font-normal text-xl mb-2 group-hover/service:text-text-secondary transition-colors duration-300">{service.title}</h4>
                            <p className="text-body-small text-text-secondary">{service.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
            scrolled ? 'bg-background shadow-[0_2px_8px_rgba(0,0,0,0.1)]' : (isMobileMenuOpen ? 'bg-background' : 'bg-transparent')
        )}>
            <div className="container flex items-center justify-between h-[60px] md:h-[80px]">
                <Link href="/" className="z-20">
                    <span className="font-display text-2xl md:text-3xl font-medium text-foreground">GreenBuild</span>
                </Link>

                <nav className="hidden md:flex items-center h-full">
                    <ul className="flex items-center gap-8 h-full">
                        {navLinks.map((link) => (
                            <li key={link.label} className={cn("h-full flex items-center", link.isMegaMenu && 'group')}>
                                <Link href={link.href} className="flex items-center gap-1 text-button text-foreground hover:text-text-secondary transition-colors relative group/link">
                                    {link.label}
                                    {link.isMegaMenu && <ChevronDown size={16} className="mt-0.5 transition-transform duration-300 group-hover:rotate-180" />}
                                    <span className="absolute bottom-[-4px] left-0 h-px bg-foreground w-0 group-hover/link:w-full transition-all duration-300"></span>
                                </Link>
                                {link.isMegaMenu && renderMegaMenu()}
                            </li>
                        ))}
                    </ul>
                </nav>

                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu" className="md:hidden z-20 text-foreground">
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={cn(
                    "md:hidden fixed inset-0 top-[60px] bg-background transform transition-transform duration-300 ease-in-out",
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                )}>
                    <nav className="container pt-8 h-full overflow-y-auto">
                        <ul className="flex flex-col">
                            {navLinks.map((link) => (
                                <li key={link.label} className="border-b border-divider">
                                    {!link.isMegaMenu ? (
                                        <Link 
                                            href={link.href} 
                                            className="block py-4 text-subheading font-normal"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <div>
                                            <button 
                                                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} 
                                                className="w-full flex justify-between items-center py-4 text-subheading font-normal"
                                            >
                                                {link.label}
                                                <ChevronDown size={20} className={cn('transition-transform duration-300', isMobileServicesOpen && 'rotate-180')} />
                                            </button>
                                            <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", isMobileServicesOpen ? "max-h-96" : "max-h-0")}>
                                                <div className="pt-2 pb-4 pl-4">
                                                    <ul className="flex flex-col gap-2">
                                                        {services.map(service => (
                                                            <li key={service.title}>
                                                                <Link 
                                                                    href={service.href} 
                                                                    className="block py-2 text-body-regular text-text-secondary"
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                >
                                                                    {service.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navigation;