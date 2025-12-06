import { db } from '@/db';
import { services } from '@/db/schema';

async function main() {
    const sampleServices = [
        {
            title: 'Interior Design & Build',
            description: 'Transform your space with our comprehensive interior design and construction services. From concept to completion, we create beautiful, functional environments.',
            icon: 'layout',
            featuredImage: '/images/services/interior-design.jpg',
            orderPosition: 1,
            status: 'published',
            createdAt: new Date('2024-01-10').toISOString(),
            updatedAt: new Date('2024-01-10').toISOString(),
        },
        {
            title: 'Plumbing Services',
            description: 'Expert plumbing installation, repair, and maintenance for residential and commercial properties. Licensed, insured, and available for emergency services.',
            icon: 'droplet',
            featuredImage: '/images/services/plumbing.jpg',
            orderPosition: 2,
            status: 'published',
            createdAt: new Date('2024-01-12').toISOString(),
            updatedAt: new Date('2024-01-12').toISOString(),
        },
        {
            title: 'Electrical Work',
            description: 'Professional electrical services including wiring, panel upgrades, lighting installation, and troubleshooting. Certified electricians ensure code compliance and safety.',
            icon: 'zap',
            featuredImage: '/images/services/electrical.jpg',
            orderPosition: 3,
            status: 'published',
            createdAt: new Date('2024-01-15').toISOString(),
            updatedAt: new Date('2024-01-15').toISOString(),
        },
        {
            title: 'Kitchen Remodeling',
            description: 'Complete kitchen renovations from design to installation. Custom cabinetry, countertops, appliances, and layout optimization for your dream kitchen.',
            icon: 'home',
            featuredImage: '/images/services/kitchen.jpg',
            orderPosition: 4,
            status: 'published',
            createdAt: new Date('2024-01-18').toISOString(),
            updatedAt: new Date('2024-01-18').toISOString(),
        },
        {
            title: 'Bathroom Renovation',
            description: 'Transform your bathroom into a luxurious retreat. Expert tile work, fixture installation, vanities, and complete bathroom remodeling services.',
            icon: 'droplets',
            featuredImage: '/images/services/bathroom.jpg',
            orderPosition: 5,
            status: 'published',
            createdAt: new Date('2024-01-20').toISOString(),
            updatedAt: new Date('2024-01-20').toISOString(),
        },
        {
            title: 'Commercial Construction',
            description: 'Professional commercial construction services for offices, retail spaces, and industrial facilities. Project management from planning through completion.',
            icon: 'building',
            featuredImage: '/images/services/commercial.jpg',
            orderPosition: 6,
            status: 'published',
            createdAt: new Date('2024-01-25').toISOString(),
            updatedAt: new Date('2024-01-25').toISOString(),
        },
    ];

    await db.insert(services).values(sampleServices);
    
    console.log('✅ Services seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});