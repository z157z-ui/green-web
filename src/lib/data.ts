// Project data - Updated with real projects from pitch deck

export interface Project {
  id: string;
  title: string;
  client?: string;
  location: string;
  category: "residential" | "commercial" | "renovation" | "hospitality";
  year: number;
  size: string;
  featuredImage: string;
  images: string[];
  aspectRatio: "portrait" | "landscape" | "square";
  challenge: string;
  solution: string;
  description: string;
}

export const projects: Project[] = [
  // Real projects from pitch deck
  {
    id: "uma-luxury-villa",
    title: "Luxury Villa",
    client: "Mrs. Uma",
    location: "Chandapura, Bangalore",
    category: "residential",
    year: 2023,
    size: "3,500 sq ft",
    featuredImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
    aspectRatio: "portrait",
    challenge: "Create a luxurious family residence that balances contemporary aesthetics with practical living spaces for multi-generational family.",
    solution: "Designed an elegant villa with open living areas, modern kitchen, and dedicated spaces for each family member. Integrated HVAC systems ensure year-round comfort.",
    description: "A luxurious 3,500 sq ft villa featuring contemporary design, premium finishes, and smart home integration.",
  },
  {
    id: "krishna-duplex",
    title: "Modern Duplex",
    client: "Mr. Krishna Kumar",
    location: "Yelahanka, Bangalore",
    category: "residential",
    year: 2024,
    size: "2,200 sq ft",
    featuredImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
    aspectRatio: "landscape",
    challenge: "Transform a builder-flat duplex into a personalized living space with efficient use of vertical space and natural light.",
    solution: "Created double-height living area, custom staircase design, and maximized storage. Modern finishes throughout with energy-efficient lighting.",
    description: "Contemporary duplex with open-plan living, double-height ceiling, and modern minimalist design.",
  },
  {
    id: "nandini-resort-home",
    title: "Resort Home",
    client: "Mrs. Nandini",
    location: "Madikeri, Karnataka",
    category: "residential",
    year: 2023,
    size: "4,800 sq ft",
    featuredImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    ],
    aspectRatio: "square",
    challenge: "Design a resort-style home in the hills that embraces the natural surroundings while providing modern luxury amenities.",
    solution: "Incorporated local materials, large windows for mountain views, and outdoor living spaces. Climate-controlled interiors with sustainable design principles.",
    description: "Stunning resort-style home nestled in Coorg hills with panoramic views and luxury amenities.",
  },
  {
    id: "cheriyan-renovation",
    title: "3BHK Renovation",
    client: "Mr. Cheriyan",
    location: "Bel Road, Bangalore",
    category: "renovation",
    year: 2024,
    size: "1,800 sq ft",
    featuredImage: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80",
    ],
    aspectRatio: "portrait",
    challenge: "Complete renovation of an aging 3BHK apartment with outdated fixtures while minimizing disruption to the family.",
    solution: "Phased renovation approach, modern modular kitchen, updated bathrooms, and fresh living spaces. Completed in 45 days.",
    description: "Complete apartment transformation with modern kitchen, contemporary bathrooms, and refreshed living spaces.",
  },
  // Additional showcase projects
  {
    id: "awfis-commercial",
    title: "Awfis Co-Working Space",
    client: "Awfis",
    location: "Bangalore, Karnataka",
    category: "commercial",
    year: 2024,
    size: "8,000 sq ft",
    featuredImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    ],
    aspectRatio: "portrait",
    challenge: "Design a flexible co-working space that accommodates startups to enterprises with integrated HVAC systems.",
    solution: "Created modular workstations, private cabins, meeting rooms, and collaborative zones. Full HVAC integration for optimal climate control.",
    description: "Modern co-working space with flexible layouts, premium amenities, and integrated HVAC systems.",
  },
  {
    id: "thoughtworks-office",
    title: "Corporate Office Fit-Out",
    client: "Thoughtworks",
    location: "Bangalore, Karnataka",
    category: "commercial",
    year: 2023,
    size: "6,500 sq ft",
    featuredImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    ],
    aspectRatio: "landscape",
    challenge: "Create an innovative tech workspace that reflects the company's agile culture and promotes collaboration.",
    solution: "Designed open collaboration areas, quiet zones, and tech-enabled meeting rooms with biophilic design elements.",
    description: "Tech-forward office design fostering innovation and collaboration for leading software consultancy.",
  },
  {
    id: "toyota-showroom",
    title: "Automotive Showroom",
    client: "Toyota",
    location: "Bangalore, Karnataka",
    category: "commercial",
    year: 2024,
    size: "12,000 sq ft",
    featuredImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    ],
    aspectRatio: "landscape",
    challenge: "Design a premium automotive showroom that showcases vehicles effectively while providing exceptional customer experience.",
    solution: "Created dramatic lighting for vehicle display, comfortable customer lounges, and seamless service integration.",
    description: "Premium automotive showroom with stunning vehicle displays and customer-centric design.",
  },
  {
    id: "aster-pharmacy",
    title: "Pharmacy Retail Fit-Out",
    client: "Aster Pharmacy",
    location: "Bangalore, Karnataka",
    category: "commercial",
    year: 2023,
    size: "2,500 sq ft",
    featuredImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    ],
    aspectRatio: "square",
    challenge: "Design a modern pharmacy that balances retail efficiency with healthcare service areas.",
    solution: "Created intuitive product displays, private consultation areas, and efficient checkout zones with clean medical aesthetics.",
    description: "Modern pharmacy design combining retail excellence with healthcare functionality.",
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "renovation", label: "Renovation" },
  { id: "hospitality", label: "Hospitality" },
] as const;

export type ProjectCategory = typeof projectCategories[number]["id"];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}

export function getAdjacentProjects(currentId: string): { prev: Project | null; next: Project | null } {
  const currentIndex = projects.findIndex((p) => p.id === currentId);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
}

// ============================================
// SERVICES DATA
// ============================================

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string; // Lucide icon name
  image: string;
  category: "design" | "renovation" | "construction" | "specialty";
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  benefits: string[];
  relatedProjects: string[]; // Project IDs
}

export const services: Service[] = [
  // DESIGN SERVICES
  {
    slug: "villa-design",
    title: "Villa Design",
    shortDescription: "Bespoke luxury villa interiors that blend elegance with functionality.",
    fullDescription: "Our villa design services encompass complete interior solutions for standalone luxury homes. We create spaces that reflect your personality while maximizing comfort and aesthetic appeal. From traditional to contemporary, our designs are tailored to your lifestyle.",
    icon: "Home",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    category: "design",
    process: [
      { step: 1, title: "Discovery & Vision", description: "We begin with understanding your lifestyle, preferences, and vision for your dream villa." },
      { step: 2, title: "Concept Development", description: "Our designers create mood boards and conceptual designs for your approval." },
      { step: 3, title: "Detailed Design", description: "Complete 3D visualizations, material selections, and technical drawings." },
      { step: 4, title: "Execution & Handover", description: "Meticulous implementation with regular updates until your perfect space is ready." },
    ],
    benefits: [
      "Personalized design reflecting your unique style",
      "Optimal space utilization for luxury living",
      "Premium material sourcing from trusted vendors",
      "Dedicated project manager for seamless execution",
      "5-year warranty on all installations",
    ],
    relatedProjects: ["azure-villa", "coastal-retreat"],
  },
  {
    slug: "apartment-design",
    title: "Apartment Design",
    shortDescription: "Smart, stylish apartment interiors maximizing every square foot.",
    fullDescription: "Transform your apartment into a sophisticated urban sanctuary. Our apartment design services focus on intelligent space planning, clever storage solutions, and contemporary aesthetics that make compact living feel luxurious.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80",
    category: "design",
    process: [
      { step: 1, title: "Space Analysis", description: "Comprehensive assessment of your apartment's potential and constraints." },
      { step: 2, title: "Smart Planning", description: "Innovative layouts that maximize functionality without compromising style." },
      { step: 3, title: "Material Selection", description: "Curated materials that balance quality, durability, and budget." },
      { step: 4, title: "Turnkey Delivery", description: "Complete execution from demolition to styling and handover." },
    ],
    benefits: [
      "Space optimization for urban living",
      "Multi-functional furniture solutions",
      "Smart home integration options",
      "Quick turnaround times",
      "Budget-friendly packages available",
    ],
    relatedProjects: ["modern-apartment", "emerald-heights"],
  },
  {
    slug: "penthouse-interior",
    title: "Penthouse Interior",
    shortDescription: "Ultra-luxury penthouse designs for discerning homeowners.",
    fullDescription: "Penthouses demand extraordinary design solutions. We create breathtaking interiors that leverage panoramic views, double-height spaces, and premium finishes to deliver the ultimate in luxury living.",
    icon: "Building",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
    category: "design",
    process: [
      { step: 1, title: "Exclusive Consultation", description: "Private sessions to understand your vision for ultimate luxury." },
      { step: 2, title: "Bespoke Concept", description: "Custom designs leveraging unique penthouse features." },
      { step: 3, title: "Premium Sourcing", description: "Access to exclusive materials and furnishings worldwide." },
      { step: 4, title: "White Glove Delivery", description: "Personalized project management with attention to every detail." },
    ],
    benefits: [
      "Access to exclusive designer collections",
      "Custom furniture and millwork",
      "Integration with building amenities",
      "Dedicated concierge service during project",
      "Post-completion styling and maintenance support",
    ],
    relatedProjects: ["emerald-heights"],
  },
  {
    slug: "office-design",
    title: "Office Design",
    shortDescription: "Productive workspace designs that inspire and perform.",
    fullDescription: "Modern offices need to balance productivity, collaboration, and employee wellbeing. Our commercial design team creates workspaces that reflect your brand, boost productivity, and attract top talent.",
    icon: "Briefcase",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    category: "design",
    process: [
      { step: 1, title: "Workplace Analysis", description: "Understanding your team dynamics, workflow, and culture." },
      { step: 2, title: "Strategic Planning", description: "Space planning optimized for productivity and collaboration." },
      { step: 3, title: "Brand Integration", description: "Designs that reinforce your corporate identity." },
      { step: 4, title: "Phased Execution", description: "Minimal disruption installation during off-hours if needed." },
    ],
    benefits: [
      "Ergonomic workstation design",
      "Biophilic design elements for wellness",
      "Acoustic solutions for focus areas",
      "Flexible and modular configurations",
      "IT infrastructure integration",
    ],
    relatedProjects: ["tech-hub-office", "wellness-spa"],
  },
  {
    slug: "restaurant-design",
    title: "Restaurant Design",
    shortDescription: "Memorable dining experiences through exceptional design.",
    fullDescription: "A restaurant's design is as important as its menu. We create immersive dining environments that tell your culinary story, optimize operational flow, and keep guests coming back.",
    icon: "UtensilsCrossed",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    category: "design",
    process: [
      { step: 1, title: "Concept Development", description: "Creating a unique identity that sets you apart." },
      { step: 2, title: "Guest Journey Mapping", description: "Designing every touchpoint from entrance to exit." },
      { step: 3, title: "Kitchen & BOH Planning", description: "Efficient back-of-house operations integrated seamlessly." },
      { step: 4, title: "Launch Ready", description: "Complete fit-out including furniture, lighting, and décor." },
    ],
    benefits: [
      "Increased seating capacity without crowding",
      "Optimized service flow and efficiency",
      "Instagram-worthy design moments",
      "Compliance with F&B regulations",
      "Lighting design for ambiance",
    ],
    relatedProjects: ["skyline-restaurant"],
  },
  {
    slug: "barber-shop-design",
    title: "Barber Shop Design",
    shortDescription: "Classic and contemporary barbershop interiors.",
    fullDescription: "Create the perfect grooming destination with our specialized barbershop designs. We blend traditional barbershop charm with modern amenities to create spaces that clients love to visit.",
    icon: "Scissors",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&q=80",
    category: "design",
    process: [
      { step: 1, title: "Style Direction", description: "Classic, modern, or fusion - defining your signature look." },
      { step: 2, title: "Station Planning", description: "Optimal layout for workflow and client comfort." },
      { step: 3, title: "Atmosphere Creation", description: "Lighting, music, and scent design for the complete experience." },
      { step: 4, title: "Turnkey Setup", description: "From chairs to mirrors, complete installation." },
    ],
    benefits: [
      "Ergonomic station design for barbers",
      "Premium waiting area experience",
      "Retail display integration",
      "Ventilation and hygiene compliance",
      "Social media-ready interiors",
    ],
    relatedProjects: [],
  },
  // RENOVATION SERVICES
  {
    slug: "villa-renovation",
    title: "Villa Renovation",
    shortDescription: "Breathe new life into your existing villa with complete renovation.",
    fullDescription: "Whether it's a heritage property or a dated villa, our renovation expertise transforms tired spaces into contemporary masterpieces while preserving cherished elements.",
    icon: "Hammer",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    category: "renovation",
    process: [
      { step: 1, title: "Structural Assessment", description: "Complete evaluation of existing structure and systems." },
      { step: 2, title: "Renovation Planning", description: "Detailed scope defining what stays, what goes, and what's new." },
      { step: 3, title: "Phased Execution", description: "Systematic renovation minimizing disruption." },
      { step: 4, title: "Final Touches", description: "Styling and handover of your transformed villa." },
    ],
    benefits: [
      "Preservation of valuable architectural elements",
      "Modern amenity integration",
      "Energy efficiency upgrades",
      "Structural repairs and waterproofing",
      "Value appreciation for your property",
    ],
    relatedProjects: ["heritage-restoration", "villa-renovation"],
  },
  {
    slug: "apartment-renovation",
    title: "Apartment Renovation",
    shortDescription: "Complete apartment makeovers for modern living.",
    fullDescription: "Update your apartment with contemporary finishes, better layouts, and modern functionality. From kitchen remodels to complete overhauls, we handle it all.",
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    category: "renovation",
    process: [
      { step: 1, title: "Current State Audit", description: "Documenting existing conditions and potential." },
      { step: 2, title: "Society Approvals", description: "Handling permissions and neighbor coordination." },
      { step: 3, title: "Efficient Execution", description: "Fast-track renovation with quality control." },
      { step: 4, title: "Move-In Ready", description: "Deep cleaning and handover." },
    ],
    benefits: [
      "Minimal disruption to daily life",
      "Society and regulation compliance",
      "Noise and dust management",
      "Weekend and off-hours work available",
      "Warranty on all work",
    ],
    relatedProjects: ["modern-apartment"],
  },
  {
    slug: "office-renovation",
    title: "Office Renovation",
    shortDescription: "Modernize your workspace without major disruption.",
    fullDescription: "Upgrade your office environment to boost productivity and reflect your evolving brand. We specialize in phased renovations that keep your business running.",
    icon: "HardHat",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
    category: "renovation",
    process: [
      { step: 1, title: "Business Impact Analysis", description: "Planning around your operational needs." },
      { step: 2, title: "Phased Approach", description: "Zone-by-zone renovation to maintain operations." },
      { step: 3, title: "After-Hours Execution", description: "Night and weekend work to minimize disruption." },
      { step: 4, title: "Seamless Transition", description: "Furniture moving and IT reconnection support." },
    ],
    benefits: [
      "Zero business interruption planning",
      "IT infrastructure upgrades",
      "Improved energy efficiency",
      "Enhanced employee experience",
      "Compliance with latest regulations",
    ],
    relatedProjects: ["tech-hub-office"],
  },
  // CONSTRUCTION & SPECIALTY
  {
    slug: "villa-construction",
    title: "Villa Construction",
    shortDescription: "End-to-end villa construction from foundation to finish.",
    fullDescription: "Build your dream villa from the ground up. Our construction services cover everything from architectural planning to final landscaping, delivering turnkey luxury homes.",
    icon: "Landmark",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    category: "construction",
    process: [
      { step: 1, title: "Architectural Design", description: "Custom home design aligned with your vision." },
      { step: 2, title: "Permissions & Planning", description: "All approvals and structural engineering." },
      { step: 3, title: "Quality Construction", description: "Foundation to roofing with premium materials." },
      { step: 4, title: "Interior & Handover", description: "Complete interiors and landscaping." },
    ],
    benefits: [
      "Single point of responsibility",
      "Transparent pricing and timelines",
      "Quality materials with documentation",
      "Regular progress updates and site visits",
      "10-year structural warranty",
    ],
    relatedProjects: ["azure-villa", "coastal-retreat"],
  },
  {
    slug: "landscape-design",
    title: "Landscape Design",
    shortDescription: "Beautiful outdoor spaces that extend your living area.",
    fullDescription: "Transform your outdoor spaces into stunning landscapes. From intimate courtyards to sprawling gardens, we create outdoor environments that complement your architecture.",
    icon: "TreePine",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    category: "specialty",
    process: [
      { step: 1, title: "Site Analysis", description: "Understanding soil, climate, and existing features." },
      { step: 2, title: "Landscape Concept", description: "Design incorporating hardscape and softscape elements." },
      { step: 3, title: "Plant Selection", description: "Native and suitable species for low maintenance." },
      { step: 4, title: "Installation & Care", description: "Professional planting and initial maintenance." },
    ],
    benefits: [
      "Increased property value",
      "Outdoor living and entertainment spaces",
      "Sustainable and water-efficient designs",
      "Privacy screening and noise reduction",
      "Seasonal color and interest",
    ],
    relatedProjects: ["azure-villa", "coastal-retreat"],
  },
  {
    slug: "curtains-soft-furnishing",
    title: "Curtains & Soft Furnishing",
    shortDescription: "Finishing touches that complete your interior design.",
    fullDescription: "The perfect curtains and soft furnishings add warmth, texture, and personality to any space. Our textile experts help you select and install the perfect fabrics.",
    icon: "Palette",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
    category: "specialty",
    process: [
      { step: 1, title: "Consultation", description: "Understanding your style and functional needs." },
      { step: 2, title: "Fabric Selection", description: "Curated options from premium suppliers." },
      { step: 3, title: "Custom Creation", description: "Bespoke tailoring for perfect fit." },
      { step: 4, title: "Installation", description: "Professional fitting and styling." },
    ],
    benefits: [
      "Access to exclusive fabric collections",
      "Light control and privacy solutions",
      "Motorized and smart curtain options",
      "Coordination with interior design",
      "Maintenance and cleaning services",
    ],
    relatedProjects: ["emerald-heights", "modern-apartment"],
  },
];

export const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "design", label: "Interior Design" },
  { id: "construction", label: "Contracting & Civil" },
  { id: "hvac", label: "HVAC Solutions" },
  { id: "facility", label: "Facility Management" },
  { id: "specialty", label: "Painting & Maintenance" },
] as const;

// 6 Core Services from Pitch Deck
export const coreServices = [
  {
    id: 1,
    title: "Contracting & Civil Works",
    description: "Structural works, finishing, and construction quality management",
    icon: "Building",
    features: ["Structural works", "Finishing", "Quality management"],
  },
  {
    id: 2,
    title: "Interior Designing",
    description: "Creative space planning, interior décor, and complete design execution",
    icon: "Palette",
    features: ["Space planning", "Interior décor", "Design execution"],
  },
  {
    id: 3,
    title: "HVAC Contracting",
    description: "Climate control system design, installation, and commissioning",
    icon: "Thermometer",
    features: ["System design", "Installation", "Commissioning"],
  },
  {
    id: 4,
    title: "Facility Management",
    description: "Ongoing operations support, maintenance, and facility optimization",
    icon: "Settings",
    features: ["Operations support", "Maintenance", "Optimization"],
  },
  {
    id: 5,
    title: "Painting & Décor",
    description: "Aesthetic finishing, branding elements, and color consulting",
    icon: "Brush",
    features: ["Aesthetic finishing", "Branding", "Color consulting"],
  },
  {
    id: 6,
    title: "Maintenance Services",
    description: "Preventive maintenance, repairs, and 24/7 emergency response",
    icon: "Wrench",
    features: ["Preventive maintenance", "Repairs", "24/7 response"],
  },
];

export type ServiceCategory = typeof serviceCategories[number]["id"];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  if (category === "all") return services;
  return services.filter((s) => s.category === category);
}

