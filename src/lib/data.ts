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
  // Real projects from content-to-upload
  {
    id: "aravind-bel-air-apartment",
    title: "Aravind Bel - Air Apartment",
    location: "Bangalore, Karnataka",
    category: "residential",
    year: 2025,
    size: "Apartment",
    featuredImage: "/images/projects/aravind-bel-air-apartment-1.jpeg",
    images: [
      "/images/projects/aravind-bel-air-apartment-1.jpeg",
      "/images/projects/aravind-bel-air-apartment-2.jpeg",
      "/images/projects/aravind-bel-air-apartment-3.jpeg",
      "/images/projects/aravind-bel-air-apartment-4.jpeg",
      "/images/projects/aravind-bel-air-apartment-5.jpeg",
      "/images/projects/aravind-bel-air-apartment-6.jpeg",
      "/images/projects/aravind-bel-air-apartment-7.jpeg",
      "/images/projects/aravind-bel-air-apartment-8.jpeg",
      "/images/projects/aravind-bel-air-apartment-9.jpeg",
      "/images/projects/aravind-bel-air-apartment-10.jpeg",
    ],
    aspectRatio: "landscape",
    challenge: "Transform a standard apartment into a modern, functional living space that maximizes comfort and style within urban constraints. The challenge was to create a cohesive design that reflects contemporary living while ensuring optimal space utilization and aesthetic appeal.",
    solution: "Designed a sophisticated apartment interior with smart space planning, modern finishes, and thoughtful lighting. Integrated modular storage solutions, contemporary furniture selections, and premium materials to create a luxurious yet practical living environment. The design emphasizes open spaces, natural light optimization, and seamless flow between different functional areas.",
    description: "A contemporary apartment interior design project showcasing modern aesthetics, smart space utilization, and premium finishes. This project demonstrates our expertise in creating stylish, functional residential spaces that enhance daily living experiences.",
  },
  {
    id: "brigade-buena-vista-apartment",
    title: "Brigade Buena Vista Apartment",
    location: "Budigare Cross, KR Puram, Bangalore",
    category: "residential",
    year: 2025,
    size: "200 sq ft",
    featuredImage: "/images/projects/brigade-buena-vista-apartment-1.jpeg",
    images: [
      "/images/projects/brigade-buena-vista-apartment-1.jpeg",
    ],
    aspectRatio: "landscape",
    challenge: "Design a compact 1 BHK apartment of just 200 sq ft that feels spacious and functional. The primary challenge was maximizing every square foot while maintaining comfort, storage, and modern aesthetics without creating a cramped environment.",
    solution: "Implemented innovative space-saving solutions including multi-functional furniture, vertical storage systems, and strategic use of mirrors and lighting to create an illusion of space. Designed a flexible layout with convertible spaces that adapt to different needs throughout the day. Used light colors, minimal design, and smart partitioning to enhance the sense of openness.",
    description: "A compact 1 BHK apartment transformation in Brigade Buena Vista, demonstrating exceptional space optimization and modern design principles. This project showcases how thoughtful design can make even the smallest spaces feel luxurious and functional.",
  },
  {
    id: "kargil-equipments-ceo-office",
    title: "Kargil Equipments CEO Office",
    location: "Peeniya, Bangalore",
    category: "commercial",
    year: 2025,
    size: "500 sq ft",
    featuredImage: "/images/projects/kargil-equipments-ceo-office-1.jpeg",
    images: [
      "/images/projects/kargil-equipments-ceo-office-1.jpeg",
      "/images/projects/kargil-equipments-ceo-office-2.jpeg",
      "/images/projects/kargil-equipments-ceo-office-3.jpeg",
      "/images/projects/kargil-equipments-ceo-office-4.jpeg",
    ],
    aspectRatio: "landscape",
    challenge: "Create an executive office space that reflects corporate prestige and professionalism within a 500 sq ft area. The challenge was to design a space that accommodates both formal meetings and private work while projecting authority and sophistication.",
    solution: "Designed a premium executive office with a sophisticated layout featuring a spacious work area, elegant meeting zone, and refined finishes. Integrated high-quality materials, professional lighting, and ergonomic furniture to create an environment that commands respect. The design balances functionality with luxury, ensuring the space serves both operational needs and brand representation.",
    description: "A prestigious CEO office design for Kargil Equipments, showcasing executive-level interior design with premium materials, sophisticated aesthetics, and functional excellence. This project demonstrates our expertise in creating corporate spaces that reflect leadership and professionalism.",
  },
  {
    id: "skandha-devlopers-apartment",
    title: "SKANDHA Developers Apartment",
    location: "Bagalur, Yelahanka Road, Bangalore",
    category: "residential",
    year: 2025,
    size: "1,000 sq ft",
    featuredImage: "/images/projects/skandha-devlopers-apartment-1.jpeg",
    images: [
      "/images/projects/skandha-devlopers-apartment-1.jpeg",
      "/images/projects/skandha-devlopers-apartment-2.jpeg",
      "/images/projects/skandha-devlopers-apartment-3.jpeg",
      "/images/projects/skandha-devlopers-apartment-4.jpeg",
      "/images/projects/skandha-devlopers-apartment-5.jpeg",
      "/images/projects/skandha-devlopers-apartment-6.jpeg",
      "/images/projects/skandha-devlopers-apartment-7.jpeg",
      "/images/projects/skandha-devlopers-apartment-8.jpeg",
      "/images/projects/skandha-devlopers-apartment-9.jpeg",
      "/images/projects/skandha-devlopers-apartment-10.jpeg",
    ],
    aspectRatio: "landscape",
    challenge: "Design a comprehensive 1,000 sq ft apartment interior that balances modern aesthetics with practical living requirements. The challenge was to create distinct functional zones while maintaining visual continuity and ensuring the space feels spacious and well-organized.",
    solution: "Developed a cohesive interior design scheme with well-defined living, dining, and private areas. Implemented contemporary design elements, premium finishes, and smart storage solutions throughout. The design emphasizes natural light, open layouts, and seamless transitions between spaces. Selected furniture and fixtures that complement the overall aesthetic while maximizing functionality.",
    description: "A complete apartment interior design project in SKANDHA Developers, featuring modern design principles, premium materials, and thoughtful space planning. This 1,000 sq ft transformation showcases contemporary residential design excellence.",
  },
  {
    id: "sri-ram-south-east-apartment",
    title: "Sri Ram South East Apartment",
    location: "Bangalore, Karnataka",
    category: "residential",
    year: 2025,
    size: "Apartment",
    featuredImage: "/images/projects/sri-ram-south-east-apartment-1.jpeg",
    images: [
      "/images/projects/sri-ram-south-east-apartment-1.jpeg",
      "/images/projects/sri-ram-south-east-apartment-2.jpeg",
      "/images/projects/sri-ram-south-east-apartment-3.jpeg",
    ],
    aspectRatio: "landscape",
    challenge: "Create a modern, inviting apartment interior that reflects contemporary lifestyle preferences while ensuring functionality and aesthetic appeal. The challenge was to design a space that feels both luxurious and livable, with attention to detail and quality finishes.",
    solution: "Designed a sophisticated apartment interior with contemporary styling, premium materials, and thoughtful layout planning. Integrated modern design elements, quality fixtures, and elegant finishes to create a cohesive living environment. The design focuses on creating comfortable, stylish spaces that enhance daily living while maintaining a sense of luxury and refinement.",
    description: "A contemporary apartment interior design project in Sri Ram South East, showcasing modern residential design with attention to detail, quality materials, and sophisticated aesthetics. This project demonstrates our commitment to creating beautiful, functional living spaces.",
  },
  {
    id: "vaishnavi-gardenia-apartment",
    title: "Vaishnavi Gardenia Apartment",
    location: "Jalahalli, Bangalore",
    category: "renovation",
    year: 2025,
    size: "1,100 sq ft",
    featuredImage: "/images/projects/vaishnavi-gardenia-apartment-1.jpeg",
    images: [
      "/images/projects/vaishnavi-gardenia-apartment-1.jpeg",
    ],
    aspectRatio: "landscape",
    challenge: "Complete renovation of a 2 BHK apartment in Vaishnavi Gardenia, transforming an outdated space into a modern, functional home. The challenge was to update all systems, finishes, and layouts while working within existing structural constraints and ensuring minimal disruption to the building.",
    solution: "Executed a comprehensive renovation including updated electrical and plumbing systems, modern kitchen and bathroom designs, fresh paint and finishes throughout, and improved space planning. Used contemporary materials, energy-efficient fixtures, and smart storage solutions to maximize functionality. The renovation transformed the apartment into a modern, comfortable 2 BHK home with updated aesthetics and improved livability.",
    description: "A complete 2 BHK apartment renovation in Vaishnavi Gardenia, Jalahalli, showcasing our expertise in residential renovation projects. This 1,100 sq ft transformation demonstrates how thoughtful renovation can breathe new life into existing spaces.",
  },
  {
    id: "toyota-rd",
    title: "Toyota R&D Office",
    client: "Toyota",
    location: "Bangalore, Karnataka",
    category: "commercial",
    year: 2025,
    size: "Office Space",
    featuredImage: "/images/projects/toyota-rd-1.jpeg",
    images: [
      "/images/projects/toyota-rd-1.jpeg",
      "/images/projects/toyota-rd-2.jpeg",
      "/images/projects/toyota-rd-3.jpeg",
      "/images/projects/toyota-rd-4.jpeg",
      "/images/projects/toyota-rd-5.jpeg",
      "/images/projects/toyota-rd-6.jpeg",
    ],
    aspectRatio: "landscape",
    challenge: "Design and execute a modern R&D office space for Toyota that reflects innovation, collaboration, and Japanese corporate excellence. The challenge was to create a workspace that supports research and development activities while maintaining Toyota's brand identity and providing a productive, inspiring environment for engineers and researchers.",
    solution: "Developed a contemporary office design featuring collaborative workspaces, modern meeting rooms, and ergonomic workstations. Integrated advanced technology infrastructure, flexible layouts for team collaboration, and premium finishes that reflect Toyota's commitment to quality. The design emphasizes natural light, open communication areas, and spaces that foster innovation while maintaining professional aesthetics.",
    description: "A state-of-the-art R&D office design for Toyota in Bangalore, showcasing modern commercial interior design with focus on innovation, collaboration, and corporate excellence. This project demonstrates our expertise in creating high-tech workspaces for leading global corporations.",
  },
  {
    id: "nandini-madikeri-coorg",
    title: "Nandini Madikeri Coorg",
    location: "B 27/7, Madikeri, Coorg, Karnataka",
    category: "residential",
    year: 2024,
    size: "2000 sq ft",
    featuredImage: "/images/projects/nandini-madikeri-coorg-1.jpeg",
    images: [
      "/images/projects/nandini-madikeri-coorg-1.jpeg",
      "/images/projects/nandini-madikeri-coorg-2.jpeg",
      "/images/projects/nandini-madikeri-coorg-3.jpeg",
      "/images/projects/nandini-madikeri-coorg-4.jpeg",
      "/images/projects/nandini-madikeri-coorg-5.jpeg",
    ],
    aspectRatio: "landscape",
    challenge: "Design a spacious 2 BHK, 2-floor residential home in the scenic location of Madikeri, Coorg. The challenge was to create a comfortable, modern living space that takes advantage of the beautiful surroundings while providing all modern amenities and efficient space utilization across two floors.",
    solution: "Designed a comprehensive 2 BHK home spread across two floors with thoughtful space planning, modern interiors, and premium finishes. Created distinct functional zones for living, dining, and private areas while ensuring seamless flow between floors. Integrated contemporary design elements, quality materials, and smart storage solutions to maximize the 2000 sq ft space. The design emphasizes natural light, ventilation, and connection with the beautiful Coorg landscape.",
    description: "A complete 2 BHK residential design project in Madikeri, Coorg, featuring modern design principles, efficient space planning across two floors, and premium finishes. This 2000 sq ft home showcases contemporary residential design excellence in a beautiful hill station setting.",
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

