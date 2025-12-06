import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as schema from './schema';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const client = createClient({
  url: process.env.TURSO_CONNECTION_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN || '',
});

const db = drizzle(client, { schema });

async function main() {
  console.log('Seeding database...');

  // Seed Services
  console.log('Seeding services...');
  await db.insert(schema.services).values([
    {
      title: 'Villa Design',
      description: 'Complete villa design including architecture, landscape, electrical, plumbing, furniture design, renovation, and civil engineering services.',
      icon: 'home',
      featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      orderPosition: 1,
      status: 'published',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      title: 'Apartment Design',
      description: 'Modern apartment interiors tailored to maximize space, functionality, and aesthetic appeal for contemporary living.',
      icon: 'building',
      featuredImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800',
      orderPosition: 2,
      status: 'published',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      title: 'Penthouse Interior Design',
      description: 'Luxury penthouse interiors with sophisticated design, premium materials, and custom finishes for discerning clients.',
      icon: 'sparkles',
      featuredImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
      orderPosition: 3,
      status: 'published',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      title: 'Office Designing',
      description: 'Professional office space design that enhances productivity, reflects brand identity, and creates inspiring work environments.',
      icon: 'briefcase',
      featuredImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      orderPosition: 4,
      status: 'published',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      title: 'Restaurant Design',
      description: 'Captivating restaurant interiors that create memorable dining experiences through thoughtful design and ambiance.',
      icon: 'utensils',
      featuredImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      orderPosition: 5,
      status: 'published',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      title: 'Landscape Design',
      description: 'Beautiful outdoor spaces and landscape architecture that complement your property and enhance curb appeal.',
      icon: 'tree',
      featuredImage: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800',
      orderPosition: 6,
      status: 'published',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);

  // Seed Projects
  console.log('Seeding projects...');
  await db.insert(schema.projects).values([
    {
      title: 'Bright Orange Modular Kitchen',
      description: 'A vibrant modular kitchen design featuring bold orange cabinetry with modern appliances and smart storage solutions.',
      category: 'Kitchen Design',
      location: 'Bangalore, Karnataka',
      year: 2024,
      featuredImage: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800',
      galleryImages: JSON.stringify(['https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800']),
      status: 'published',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      title: 'Modern Open Kitchen',
      description: 'Contemporary open kitchen design with sleek finishes, integrated appliances, and seamless flow into living spaces.',
      category: 'Kitchen Design',
      location: 'Bangalore, Karnataka',
      year: 2024,
      featuredImage: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800',
      galleryImages: JSON.stringify(['https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800']),
      status: 'published',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      title: 'Minimalist Living Room',
      description: 'Clean, minimalist living room design emphasizing simplicity, natural light, and functional elegance.',
      category: 'Living Room Design',
      location: 'Bangalore, Karnataka',
      year: 2023,
      featuredImage: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800',
      galleryImages: JSON.stringify(['https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800']),
      status: 'published',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);

  // Seed News Articles
  console.log('Seeding news articles...');
  await db.insert(schema.newsArticles).values([
    {
      title: 'Sustainable Building Trends for 2024',
      content: 'The construction industry is experiencing a major shift towards sustainability...',
      excerpt: 'Discover the latest trends in sustainable building practices and eco-friendly materials.',
      category: 'Sustainability',
      featuredImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      author: 'Jane Smith',
      publishedDate: new Date().toISOString(),
      status: 'published',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);

  // Seed Team Members
  console.log('Seeding team members...');
  await db.insert(schema.teamMembers).values([
    {
      name: 'Sanal Das KV',
      title: 'Founder & CEO',
      bio: 'BSc Interior Design + Diploma in Building & Construction. 9 years interior design experience and 4 years in construction & project management. Expertise in execution and HVAC integration. Founded Green Builders and Interiors in 2017.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      officeLocation: 'Bangalore',
      email: 'info@greenbuildersandinteriors.com',
      orderPosition: 1,
      status: 'published',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      name: 'Praveen Kumar R',
      title: 'Co-Founder & CTO',
      bio: 'BE Electrical & Electronics. Operations Manager at Awfis Space Solutions. 10 years in space management and facility operations. Specialization in HVAC for commercial spaces.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      officeLocation: 'Bangalore',
      email: 'info@greenbuildersandinteriors.com',
      orderPosition: 2,
      status: 'published',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      name: 'Bluvin Ravindran',
      title: 'Co-Founder & COO',
      bio: 'Mechanical Engineering. Managing Director at C-Zero, Co-Founder of Super Biochar (New York), Associate Director at Suarcsh Filters. 10+ years in business development.',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400',
      officeLocation: 'Bangalore',
      email: 'info@greenbuildersandinteriors.com',
      orderPosition: 3,
      status: 'published',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);

  console.log('Database seeded successfully!');
  process.exit(0);
}

main().catch((err) => {
  console.error('Seeding failed!', err);
  process.exit(1);
});
