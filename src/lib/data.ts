// Project data - will be replaced with database queries later

export interface Project {
  id: string;
  title: string;
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
  {
    id: "azure-villa",
    title: "Azure Villa",
    location: "Bangalore, Karnataka",
    category: "residential",
    year: 2024,
    size: "4,500 sq ft",
    featuredImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
    aspectRatio: "portrait",
    challenge: "The clients desired a modern sanctuary that balanced open-plan living with intimate private spaces, all while maximizing natural light in a dense urban setting.",
    solution: "We designed a central atrium that floods the home with natural light, creating a seamless flow between indoor and outdoor spaces. Custom millwork and locally-sourced materials add warmth to the contemporary aesthetic.",
    description: "A stunning 4-bedroom villa featuring minimalist design with warm wood accents and floor-to-ceiling windows.",
  },
  {
    id: "emerald-heights",
    title: "Emerald Heights Penthouse",
    location: "Hyderabad, Telangana",
    category: "residential",
    year: 2023,
    size: "3,200 sq ft",
    featuredImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
    aspectRatio: "landscape",
    challenge: "Transform a dated penthouse into a contemporary luxury residence with panoramic city views while addressing acoustic challenges from the high-rise location.",
    solution: "Implemented triple-glazed windows and acoustic insulation throughout. The open floor plan maximizes views while custom furniture defines distinct living zones.",
    description: "Luxury penthouse renovation with panoramic views and bespoke Italian furnishings.",
  },
  {
    id: "tech-hub-office",
    title: "TechHub Innovation Center",
    location: "Chennai, Tamil Nadu",
    category: "commercial",
    year: 2024,
    size: "12,000 sq ft",
    featuredImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80",
    ],
    aspectRatio: "portrait",
    challenge: "Create a dynamic workspace that fosters collaboration and innovation for a growing tech startup, while maintaining budget constraints.",
    solution: "Designed flexible modular workspaces with biophilic elements. Used cost-effective materials creatively to achieve a premium look without exceeding budget.",
    description: "Modern tech office featuring collaborative spaces, green walls, and state-of-the-art meeting rooms.",
  },
  {
    id: "coastal-retreat",
    title: "Coastal Retreat",
    location: "Kochi, Kerala",
    category: "residential",
    year: 2023,
    size: "5,800 sq ft",
    featuredImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    ],
    aspectRatio: "square",
    challenge: "Design a beachfront residence that withstands coastal conditions while maximizing ocean views and creating seamless indoor-outdoor living.",
    solution: "Used marine-grade materials and elevated the structure. Large sliding glass walls open to covered terraces, and a central courtyard provides wind protection.",
    description: "Beachfront villa with traditional Kerala architecture fused with contemporary luxury.",
  },
  {
    id: "heritage-restoration",
    title: "Heritage Haveli Restoration",
    location: "Visakhapatnam, AP",
    category: "renovation",
    year: 2022,
    size: "8,500 sq ft",
    featuredImage: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80",
    ],
    aspectRatio: "portrait",
    challenge: "Restore a 100-year-old heritage property to its former glory while integrating modern amenities and meeting contemporary living standards.",
    solution: "Preserved original architectural elements including hand-carved woodwork and traditional tiles. Discretely integrated modern HVAC, lighting, and plumbing systems.",
    description: "Meticulous restoration of a century-old haveli preserving its colonial-era grandeur.",
  },
  {
    id: "skyline-restaurant",
    title: "Skyline Rooftop Restaurant",
    location: "Bangalore, Karnataka",
    category: "hospitality",
    year: 2024,
    size: "6,200 sq ft",
    featuredImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80",
    ],
    aspectRatio: "landscape",
    challenge: "Create an unforgettable dining experience on a challenging rooftop space with structural limitations and exposure to elements.",
    solution: "Designed a retractable roof system and wind barriers. Used dramatic lighting and lush landscaping to create intimate dining zones within the open space.",
    description: "Award-winning rooftop dining destination with 360-degree city views.",
  },
  {
    id: "modern-apartment",
    title: "Urban Oasis Apartment",
    location: "Chennai, Tamil Nadu",
    category: "residential",
    year: 2023,
    size: "2,100 sq ft",
    featuredImage: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
    aspectRatio: "square",
    challenge: "Maximize space in a compact 3-BHK apartment while creating distinct areas for a young professional couple who work from home.",
    solution: "Designed multi-functional furniture and hidden storage throughout. A sliding partition system allows the living space to transform into a home office.",
    description: "Smart apartment design maximizing space with innovative storage solutions.",
  },
  {
    id: "wellness-spa",
    title: "Serenity Wellness Spa",
    location: "Hyderabad, Telangana",
    category: "commercial",
    year: 2024,
    size: "4,800 sq ft",
    featuredImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80",
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&q=80",
    ],
    aspectRatio: "portrait",
    challenge: "Create a tranquil wellness environment in a busy commercial district with noise and light pollution concerns.",
    solution: "Designed a cocoon-like interior with double walls for sound isolation. Used indirect lighting and natural materials to create a serene atmosphere.",
    description: "Luxury wellness center featuring treatment rooms, yoga studio, and meditation spaces.",
  },
  {
    id: "boutique-hotel",
    title: "The Courtyard Boutique Hotel",
    location: "Kochi, Kerala",
    category: "hospitality",
    year: 2023,
    size: "15,000 sq ft",
    featuredImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80",
    ],
    aspectRatio: "landscape",
    challenge: "Convert a colonial-era warehouse into a 20-room boutique hotel while preserving its industrial character and meeting hospitality standards.",
    solution: "Retained exposed brick walls and timber trusses. Each room was designed with a unique theme celebrating Kerala's cultural heritage.",
    description: "Heritage boutique hotel blending colonial architecture with contemporary luxury.",
  },
  {
    id: "villa-renovation",
    title: "Lakeside Villa Renovation",
    location: "Bangalore, Karnataka",
    category: "renovation",
    year: 2024,
    size: "6,000 sq ft",
    featuredImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
    aspectRatio: "square",
    challenge: "Modernize a 1990s villa while respecting the clients' sentimental attachment to the home where they raised their children.",
    solution: "Preserved the overall structure and garden while completely reimagining interiors. Created a memory wall incorporating family photos into the new design.",
    description: "Complete villa transformation with modern amenities while preserving cherished memories.",
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
  { id: "design", label: "Design" },
  { id: "renovation", label: "Renovation" },
  { id: "construction", label: "Construction" },
  { id: "specialty", label: "Specialty" },
] as const;

export type ServiceCategory = typeof serviceCategories[number]["id"];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  if (category === "all") return services;
  return services.filter((s) => s.category === category);
}

