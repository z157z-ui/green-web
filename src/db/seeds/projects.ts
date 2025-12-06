import { db } from '@/db';
import { projects } from '@/db/schema';

async function main() {
    const sampleProjects = [
        {
            title: 'Modern Downtown Office Renovation',
            description: 'Complete renovation of 5,000 sq ft office space including new HVAC system, LED lighting upgrades, and open floor plan design. Project featured custom millwork, glass partitions, and collaborative workspaces to enhance productivity.',
            category: 'Office Buildout',
            location: 'Seattle, WA',
            year: 2024,
            featuredImage: '/images/projects/project-1.jpg',
            galleryImages: JSON.stringify([
                '/images/projects/project-1-gallery-1.jpg',
                '/images/projects/project-1-gallery-2.jpg',
                '/images/projects/project-1-gallery-3.jpg',
                '/images/projects/project-1-gallery-4.jpg'
            ]),
            status: 'published',
            createdAt: new Date('2024-01-15').toISOString(),
            updatedAt: new Date('2024-01-15').toISOString(),
        },
        {
            title: 'Luxury Kitchen Transformation',
            description: 'High-end kitchen remodel featuring custom cabinetry, quartz countertops, and professional-grade appliances. Installation included new plumbing, electrical work, and hardwood flooring throughout the 400 sq ft space.',
            category: 'Kitchen Remodel',
            location: 'Portland, OR',
            year: 2023,
            featuredImage: '/images/projects/project-2.jpg',
            galleryImages: JSON.stringify([
                '/images/projects/project-2-gallery-1.jpg',
                '/images/projects/project-2-gallery-2.jpg',
                '/images/projects/project-2-gallery-3.jpg'
            ]),
            status: 'published',
            createdAt: new Date('2023-08-20').toISOString(),
            updatedAt: new Date('2023-08-20').toISOString(),
        },
        {
            title: 'Historic Building Commercial Plumbing Upgrade',
            description: 'Complete plumbing system overhaul for a 1920s commercial building including copper repiping, new water heaters, and modernized sewage systems. Project maintained historic integrity while meeting current building codes.',
            category: 'Commercial Plumbing',
            location: 'San Francisco, CA',
            year: 2023,
            featuredImage: '/images/projects/project-3.jpg',
            galleryImages: JSON.stringify([
                '/images/projects/project-3-gallery-1.jpg',
                '/images/projects/project-3-gallery-2.jpg',
                '/images/projects/project-3-gallery-3.jpg',
                '/images/projects/project-3-gallery-4.jpg',
                '/images/projects/project-3-gallery-5.jpg'
            ]),
            status: 'published',
            createdAt: new Date('2023-05-10').toISOString(),
            updatedAt: new Date('2023-05-10').toISOString(),
        },
        {
            title: 'Spa-Inspired Master Bathroom',
            description: 'Luxury bathroom renovation featuring heated marble floors, custom vanity with dual sinks, and walk-in shower with rainfall and body spray systems. Project included new ventilation, lighting, and waterproofing throughout the 250 sq ft space.',
            category: 'Bathroom Renovation',
            location: 'Denver, CO',
            year: 2024,
            featuredImage: '/images/projects/project-4.jpg',
            galleryImages: JSON.stringify([
                '/images/projects/project-4-gallery-1.jpg',
                '/images/projects/project-4-gallery-2.jpg',
                '/images/projects/project-4-gallery-3.jpg'
            ]),
            status: 'published',
            createdAt: new Date('2024-02-05').toISOString(),
            updatedAt: new Date('2024-02-05').toISOString(),
        },
        {
            title: 'Contemporary Retail Space Build-Out',
            description: 'Ground-up retail space construction for boutique store including custom display fixtures, modern lighting design, and climate control systems. The 2,500 sq ft space features polished concrete floors and exposed ceiling design.',
            category: 'Retail Space',
            location: 'Austin, TX',
            year: 2023,
            featuredImage: '/images/projects/project-5.jpg',
            galleryImages: JSON.stringify([
                '/images/projects/project-5-gallery-1.jpg',
                '/images/projects/project-5-gallery-2.jpg',
                '/images/projects/project-5-gallery-3.jpg',
                '/images/projects/project-5-gallery-4.jpg'
            ]),
            status: 'draft',
            createdAt: new Date('2023-11-12').toISOString(),
            updatedAt: new Date('2023-11-12').toISOString(),
        },
        {
            title: 'Craftsman Home Interior Restoration',
            description: 'Full interior renovation of 1910 Craftsman home preserving original architectural details while updating electrical, plumbing, and insulation. Work included refinishing hardwood floors, restoring original woodwork, and modernizing kitchen and bathrooms.',
            category: 'Residential Interior',
            location: 'Seattle, WA',
            year: 2022,
            featuredImage: '/images/projects/project-6.jpg',
            galleryImages: JSON.stringify([
                '/images/projects/project-6-gallery-1.jpg',
                '/images/projects/project-6-gallery-2.jpg',
                '/images/projects/project-6-gallery-3.jpg',
                '/images/projects/project-6-gallery-4.jpg',
                '/images/projects/project-6-gallery-5.jpg'
            ]),
            status: 'published',
            createdAt: new Date('2023-03-18').toISOString(),
            updatedAt: new Date('2023-03-18').toISOString(),
        },
        {
            title: 'Executive Office Suite Renovation',
            description: 'Premium office renovation featuring custom woodwork, integrated technology solutions, and sophisticated lighting design. The 3,200 sq ft suite includes private offices, conference rooms, and reception area with high-end finishes throughout.',
            category: 'Office Buildout',
            location: 'Portland, OR',
            year: 2024,
            featuredImage: '/images/projects/project-7.jpg',
            galleryImages: JSON.stringify([
                '/images/projects/project-7-gallery-1.jpg',
                '/images/projects/project-7-gallery-2.jpg',
                '/images/projects/project-7-gallery-3.jpg'
            ]),
            status: 'published',
            createdAt: new Date('2024-03-22').toISOString(),
            updatedAt: new Date('2024-03-22').toISOString(),
        },
        {
            title: 'Chef-Grade Kitchen Remodel',
            description: 'Professional-style kitchen renovation featuring commercial-grade appliances, custom pot filler faucet, and extensive prep areas. Installation included new gas line for range, upgraded electrical service, and custom range hood with make-up air system.',
            category: 'Kitchen Remodel',
            location: 'San Francisco, CA',
            year: 2023,
            featuredImage: '/images/projects/project-8.jpg',
            galleryImages: JSON.stringify([
                '/images/projects/project-8-gallery-1.jpg',
                '/images/projects/project-8-gallery-2.jpg',
                '/images/projects/project-8-gallery-3.jpg',
                '/images/projects/project-8-gallery-4.jpg'
            ]),
            status: 'published',
            createdAt: new Date('2023-09-14').toISOString(),
            updatedAt: new Date('2023-09-14').toISOString(),
        },
        {
            title: 'Multi-Unit Plumbing System Upgrade',
            description: 'Complete plumbing infrastructure replacement for 12-unit apartment building including new water supply lines, drain systems, and water heater installation. Project completed with minimal tenant disruption over 8-week period.',
            category: 'Commercial Plumbing',
            location: 'Denver, CO',
            year: 2022,
            featuredImage: '/images/projects/project-9.jpg',
            galleryImages: JSON.stringify([
                '/images/projects/project-9-gallery-1.jpg',
                '/images/projects/project-9-gallery-2.jpg',
                '/images/projects/project-9-gallery-3.jpg'
            ]),
            status: 'published',
            createdAt: new Date('2023-06-30').toISOString(),
            updatedAt: new Date('2023-06-30').toISOString(),
        },
        {
            title: 'Boutique Fashion Store Build-Out',
            description: 'Custom retail space design and construction featuring modular display systems, accent lighting, and premium finishes. The 1,800 sq ft space includes fitting rooms, storage area, and point-of-sale station with integrated technology.',
            category: 'Retail Space',
            location: 'Austin, TX',
            year: 2024,
            featuredImage: '/images/projects/project-10.jpg',
            galleryImages: JSON.stringify([
                '/images/projects/project-10-gallery-1.jpg',
                '/images/projects/project-10-gallery-2.jpg',
                '/images/projects/project-10-gallery-3.jpg',
                '/images/projects/project-10-gallery-4.jpg'
            ]),
            status: 'draft',
            createdAt: new Date('2024-01-08').toISOString(),
            updatedAt: new Date('2024-01-08').toISOString(),
        }
    ];

    await db.insert(projects).values(sampleProjects);
    
    console.log('✅ Projects seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});