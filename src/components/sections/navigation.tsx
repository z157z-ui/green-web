"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  { href: '/services', label: 'Services', isMegaMenu: true },
  { href: '#projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

const services: Service[] = [
  { title: "Villa Design", description: "Complete villa design including architecture, landscape, electrical, plumbing, and civil engineering.", href:"/services#villa-design" },
  { title: "Apartment Design", description: "Modern apartment interiors tailored to maximize space and functionality.", href:"/services#apartment-design" },
  { title: "Penthouse Interior Design", description: "Luxury penthouse interiors with sophisticated design and premium finishes.", href:"/services#penthouse-design" },
  { title: "Curtains & Soft Furnishings", description: "Custom curtains and soft furnishings to complete your interior design.", href:"/services#curtains" },
  { title: "Office Designing", description: "Professional office spaces that enhance productivity and reflect your brand.", href:"/services#office-design" },
  { title: "Restaurant Design", description: "Captivating restaurant interiors that create memorable dining experiences.", href:"/services#restaurant-design" },
  { title: "Landscape Design", description: "Beautiful outdoor spaces that complement your architecture.", href:"/services#landscape-design" },
  { title: "Villa Renovation", description: "Transform your existing villa with modern updates and enhanced functionality.", href:"/services#villa-renovation" },
  { title: "Barber Shop Design", description: "Stylish and functional barber shop interiors that attract customers.", href:"/services#barber-shop-design" },
  { title: "Apartment Renovation", description: "Modernize your apartment with expert renovation and interior upgrades.", href:"/services#apartment-renovation" },
  { title: "Office Renovation", description: "Refresh your workspace with contemporary design and improved layouts.", href:"/services#office-renovation" },
  { title: "Villa Construction", description: "Complete villa construction services from foundation to finishing.", href:"/services#villa-construction" },
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
        <div className="absolute top-full left-0 w-full invisible group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
            {/* Backdrop - Pure White */}
            <div className="absolute inset-0 bg-white border-t border-[rgb(var(--color-divider))]"></div>

            {/* Content */}
            <div className="relative luxury-container py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                    {services.map((service) => (
                        <Link href={service.href} key={service.title} className="group/service block">
                            <h4 className="luxury-label text-black mb-3 group-hover/service:text-[rgb(var(--color-text-secondary))] transition-colors duration-300">{service.title}</h4>
                            <p className="text-sm text-[rgb(var(--color-text-secondary))] leading-relaxed">{service.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
            scrolled ? 'bg-white/95 backdrop-blur-md border-b border-[rgb(var(--color-divider))]' : (isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md' : 'bg-transparent')
        )}>
            <div className="luxury-container flex items-center h-[70px] md:h-[90px]">
                <Link href="/" className="z-20 flex items-center">
                    {/* Replace with your logo: Place image.png in the public/ folder */}
                    {/* Uncomment the Image component below and remove the span when logo is ready */}
                    {/* <Image
                        src="/image.png"
                        alt="Green Builders and Interiors"
                        width={200}
                        height={60}
                        priority
                        className="h-10 md:h-12 w-auto"
                    /> */}
                    <span className="luxury-label text-sm md:text-base text-black">
                        GREEN BUILDERS
                    </span>
                </Link>

                <nav className="hidden md:flex items-center h-full ml-auto mr-0">
                    <ul className="flex items-center gap-8 lg:gap-12 h-full">
                        {navLinks.map((link) => (
                            <li key={link.label} className={cn("h-full flex items-center", link.isMegaMenu && 'group')}>
                                <Link href={link.href} className="flex items-center gap-1.5 luxury-label text-black hover:text-[rgb(var(--color-text-secondary))] transition-colors relative group/link">
                                    {link.label}
                                    {link.isMegaMenu && <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />}
                                    <span className="absolute bottom-[-2px] left-0 h-px bg-black w-0 group-hover/link:w-full transition-all duration-300"></span>
                                </Link>
                                {link.isMegaMenu && renderMegaMenu()}
                            </li>
                        ))}
                    </ul>
                </nav>

                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu" className="md:hidden z-20 text-black ml-auto">
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