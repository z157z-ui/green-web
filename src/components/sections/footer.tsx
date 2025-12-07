'use client';

import Link from 'next/link';
import { Instagram, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';

const servicesLinks = [
  { name: "Villa Design", href: "/services#villa-design" },
  { name: "Apartment Design", href: "/services#apartment-design" },
  { name: "Penthouse Interior Design", href: "/services#penthouse-design" },
  { name: "Curtains", href: "/services#curtains" },
  { name: "Office Designing", href: "/services#office-design" },
  { name: "Restaurant Design", href: "/services#restaurant-design" },
  { name: "Landscape Design", href: "/services#landscape-design" },
  { name: "Villa Renovation", href: "/services#villa-renovation" },
  { name: "Barber Shop Design", href: "/services#barber-shop-design" },
  { name: "Apartment Renovation", href: "/services#apartment-renovation" },
  { name: "Office Renovation", href: "/services#office-renovation" },
  { name: "Villa Construction", href: "/services#villa-construction" },
];

const companyLinks = [
  "About",
  "Projects",
  "Team",
  "Careers",
  "Contact",
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/greenbuildersandinteriors?igsh=ZGdzdmoxYXplaWJv", name: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/green-builders-interiors/", name: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/share/1Abd1pKroq/", name: "Facebook" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#2a2a2a] text-gray-300 font-body">
      <div className="container mx-auto px-5 md:px-10 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-x-8 gap-y-12">
          
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <Link href="/" className="font-display text-3xl text-white">
              Green Builders and Interiors
            </Link>
            <p className="text-body-small text-gray-400 max-w-xs leading-relaxed">
              With 8+ years of expertise in crafting modern, innovative designs, we create spaces that beautifully combine design, functionality, and comfort. Headquartered in Bangalore, we specialize in complete interior design and construction solutions.
            </p>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h3 className="text-button text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-body-small text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Company */}
          <div>
            <h3 className="text-button text-white mb-6">Company</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-body-small text-gray-400 hover:text-white transition-colors duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-button text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-body-small text-gray-400">
              <li>Phone: 9739992779</li>
              <li>Phone: 9606894352</li>
              <li>Email: info@greenbuildersandinteriors.com</li>
              <li>Bangalore: banglore@greenbuildersandinteriors.com</li>
              <li className="pt-2">
                G F, NO 6/1, Madivala,<br />
                Bengaluru, Karnataka, 560068
              </li>
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div className="space-y-8">
            <div>
              <h3 className="text-button text-white mb-6">Connect</h3>
              <div className="flex space-x-5">
                {socialLinks.map((social) => (
                  <Link key={social.name} href={social.href} aria-label={social.name} className="text-gray-400 hover:text-white transition-colors duration-300">
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-button text-white mb-4">Stay informed</h3>
              <form>
                <div className="flex items-end border-b border-gray-600 focus-within:border-white transition-colors duration-300">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="bg-transparent w-full py-2 text-body-small placeholder-gray-500 text-white outline-none border-none"
                    aria-label="Email for newsletter"
                  />
                  <button type="submit" className="p-2 -mr-2 text-gray-400 hover:text-white" aria-label="Subscribe to newsletter">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
        
        <div className="mt-20 pt-8 border-t border-white/10">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center text-center md:text-left gap-y-4">
            <p className="text-metadata text-gray-500">
              © 2025 Green Builders and Interiors. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-metadata text-gray-500 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-metadata text-gray-500 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;