"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Navigation2, Clock } from "lucide-react";

interface Office {
  id: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  isHQ?: boolean;
}

const offices: Office[] = [
  {
    id: "bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    address: "Reg Office, G F, NO 6/1, Madivala, Bengaluru, Karnataka, 560068",
    phone: "+91 97399 92779",
    email: "banglore@greenbuildersandinteriors.com",
    isHQ: true,
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    address: "Ground Floor D' Desks, Road Number 12, Banjara Hills, Hyderabad, Telangana",
    phone: "+91 97399 92779",
    email: "hyderabad@greenbuildersandinteriors.com",
  },
  {
    id: "chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    address: "1st Floor, 111 A, Rajiv Gandhi Road, OMR, Kottivakkam, Chennai, Tamil Nadu 600041",
    phone: "+91 97399 92779",
    email: "chennai@greenbuildersandinteriors.com",
  },
  {
    id: "kochi",
    city: "Kochi",
    state: "Kerala",
    address: "3rd Floor AWFIS office, Mezhukkattil Matrix, Chittoor Road, Ernakulam, Kochi 682011",
    phone: "+91 96068 94352",
    email: "kochi@greenbuildersandinteriors.com",
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    address: "Mastec QuadGen Wireless LLP, 2nd Floor, Synophic Tower, IT Tech Park, Madhurawada, Visakhapatnam, AP 530045",
    phone: "+91 96068 94352",
    email: "Visakhapatnam@greenbuildersandinteriors.com",
  },
];

export function OfficeDetailsPanel() {
  const [selectedOffice, setSelectedOffice] = useState<Office | null>(offices.find(o => o.isHQ) || offices[0]);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-2">
          Office Locations
        </h3>
        <p className="text-text-grey text-sm">
          Select an office to view details
        </p>
      </div>

      {/* Office List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar space-y-3 pr-2">
        {offices.map((office, index) => (
          <motion.button
            key={office.id}
            onClick={() => setSelectedOffice(office)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
              selectedOffice?.id === office.id
                ? "bg-primary-dark/80 border-gold/50 shadow-lg shadow-gold/10"
                : "bg-background-elevated/50 border-white/10 hover:border-accent/30 hover:bg-background-elevated"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg flex-shrink-0 ${
                office.isHQ ? "bg-gold/10" : "bg-accent/10"
              }`}>
                <MapPin className={`w-5 h-5 ${
                  office.isHQ ? "text-gold" : "text-accent"
                }`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-serif text-lg font-medium text-white">
                    {office.city}
                  </h4>
                  {office.isHQ && (
                    <span className="luxury-label text-gold text-xs px-2 py-0.5 bg-gold/10 rounded-full border border-gold/30">
                      HQ
                    </span>
                  )}
                </div>
                <p className="text-xs text-text-grey mb-2">{office.state}</p>
                <p className="text-sm text-text-grey line-clamp-2">{office.address}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Selected Office Details */}
      {selectedOffice && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-6 bg-primary-dark/50 rounded-xl border border-accent/20"
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-serif text-xl font-medium text-white mb-1">
                {selectedOffice.city} Office
              </h4>
              <p className="text-sm text-text-grey">{selectedOffice.state}</p>
            </div>

            <div className="h-px bg-accent/20" />

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent/10 flex-shrink-0">
                  <Navigation2 className="w-4 h-4 text-accent" />
                </div>
                <p className="text-sm text-text-grey leading-relaxed pt-1">
                  {selectedOffice.address}
                </p>
              </div>

              <a
                href={`tel:${selectedOffice.phone}`}
                className="flex items-center gap-3 text-text-grey hover:text-accent transition-colors group"
              >
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{selectedOffice.phone}</span>
              </a>

              <a
                href={`mailto:${selectedOffice.email}`}
                className="flex items-center gap-3 text-text-grey hover:text-accent transition-colors group"
              >
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium break-all">{selectedOffice.email}</span>
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const address = encodeURIComponent(selectedOffice.address);
                window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
              }}
              className="w-full py-3 bg-accent text-primary-dark text-center font-semibold rounded-lg hover:bg-accent-dark transition-colors shadow-lg hover:shadow-accent/20 mt-4"
            >
              Get Directions
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}









