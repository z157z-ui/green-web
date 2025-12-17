"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";

interface FooterLink {
  name: string;
  href: string;
}

interface Office {
  city: string;
  region: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const quickLinks: FooterLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "/contact" },
];

const topServices: FooterLink[] = [
  { name: "Villa Design", href: "/services#villa-design" },
  { name: "Apartment Design", href: "/services#apartment-design" },
  { name: "Office Design", href: "/services#office-design" },
  { name: "Renovation", href: "/services#renovation" },
  { name: "Construction", href: "/services#construction" },
];

const offices: Office[] = [
  { city: "Bengaluru", region: "Karnataka (HQ)" },
  { city: "Visakhapatnam", region: "Andhra Pradesh" },
  { city: "Hyderabad", region: "Telangana" },
  { city: "Kochi", region: "Kerala" },
  { city: "Chennai", region: "Tamil Nadu" },
];

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/greenbuildersandinteriors?igsh=ZGdzdmoxYXplaWJv",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/green-builders-interiors/",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1Abd1pKroq/",
    icon: Facebook,
  },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="luxury-container section-padding-md">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logos/LOGO-WHITE.png"
                alt="Green Builders & Interiors"
                width={160}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-grey text-sm leading-relaxed mb-8">
              At Green Builders and Interiors, we create spaces that beautifully 
              combine design, functionality, and comfort. 8+ years of expertise 
              across South India.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-grey hover:text-white hover:border-accent transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="luxury-label mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-grey hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="luxury-label mb-6">Services</h3>
            <ul className="space-y-3">
              {topServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-grey hover:text-white transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Offices */}
          <div>
            <h3 className="luxury-label mb-6">Offices</h3>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="tel:9739992779"
                className="flex items-center gap-3 text-grey hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 97399 92779</span>
              </a>
              <a
                href="mailto:info@greenbuildersandinteriors.com"
                className="flex items-center gap-3 text-grey hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@greenbuildersandinteriors.com</span>
              </a>
            </div>

            {/* Office Locations */}
            <div className="space-y-2">
              {offices.map((office) => (
                <div key={office.city} className="text-grey text-sm">
                  <span className="text-white font-medium">{office.city}</span>
                  <span className="text-grey/70 text-xs ml-2">{office.region}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-grey text-sm">
            © 2025 Green Builders and Interiors. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-grey hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-grey hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
