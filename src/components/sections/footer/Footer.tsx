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
      <div className="luxury-container section-padding-sm">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logos/LOGO.png"
                alt="Green Builders & Interiors"
                width={140}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-grey text-xs leading-relaxed mb-6">
              At Green Builders and Interiors, we create spaces that beautifully 
              combine design, functionality, and comfort. 8+ years of expertise 
              across South India.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-grey hover:text-white hover:border-accent transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="luxury-label mb-4 text-xs">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-grey hover:text-white transition-colors duration-300 text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="luxury-label mb-4 text-xs">Services</h3>
            <ul className="space-y-2">
              {topServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-grey hover:text-white transition-colors duration-300 text-xs"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Offices */}
          <div>
            <h3 className="luxury-label mb-4 text-xs">Offices</h3>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <a
                href="tel:9739992779"
                className="flex items-center gap-2 text-grey hover:text-white transition-colors text-xs"
              >
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                <span>+91 97399 92779</span>
              </a>
              <a
                href="mailto:info@greenbuildersandinteriors.com"
                className="flex items-center gap-2 text-grey hover:text-white transition-colors text-xs"
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="break-all">info@greenbuildersandinteriors.com</span>
              </a>
            </div>

            {/* Office Locations */}
            <div className="space-y-1.5">
              {offices.map((office) => (
                <div key={office.city} className="text-grey text-xs">
                  <span className="text-white font-medium">{office.city}</span>
                  <span className="text-grey/70 text-xs ml-1.5">{office.region}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-grey text-xs">
            © 2025 Green Builders and Interiors. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-grey hover:text-white text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-grey hover:text-white text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
