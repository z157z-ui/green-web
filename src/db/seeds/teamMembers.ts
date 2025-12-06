import { db } from '@/db';
import { teamMembers } from '@/db/schema';

async function main() {
    const sampleTeamMembers = [
        {
            name: 'David Anderson',
            title: 'CEO & Founder',
            bio: 'David brings over 25 years of experience in commercial and residential construction. He founded GreenBuild with a vision to revolutionize sustainable building practices in the Pacific Northwest. A LEED Accredited Professional with an MBA from Stanford, David has overseen the completion of over 200 major projects valued at more than $500 million. His commitment to excellence and innovation has earned GreenBuild numerous industry awards.',
            image: '/images/team/member-1.jpg',
            officeLocation: 'Seattle, WA',
            email: 'd.anderson@greenbuild.com',
            orderPosition: 1,
            status: 'published',
            createdAt: new Date('2024-01-10').toISOString(),
            updatedAt: new Date('2024-01-10').toISOString(),
        },
        {
            name: 'Jennifer Lopez',
            title: 'Chief Operating Officer',
            bio: 'Jennifer has 22 years of experience in construction operations and project management. She holds a degree in Civil Engineering from UC Berkeley and is a certified Project Management Professional (PMP). Jennifer specializes in streamlining construction workflows and implementing cutting-edge project management systems. Her operational expertise has improved project delivery times by 30% while maintaining the highest quality standards.',
            image: '/images/team/member-2.jpg',
            officeLocation: 'Seattle, WA',
            email: 'j.lopez@greenbuild.com',
            orderPosition: 2,
            status: 'published',
            createdAt: new Date('2024-01-10').toISOString(),
            updatedAt: new Date('2024-01-10').toISOString(),
        },
        {
            name: 'Robert Kim',
            title: 'Director of Construction',
            bio: 'Robert is a licensed general contractor with 20 years of experience in large-scale commercial construction projects. He earned his degree in Construction Management from the University of Washington and holds multiple safety certifications including OSHA 30-hour. Robert specializes in high-rise construction and has successfully managed projects ranging from corporate headquarters to mixed-use developments. His attention to detail and safety record is unmatched in the industry.',
            image: '/images/team/member-3.jpg',
            officeLocation: 'Portland, OR',
            email: 'r.kim@greenbuild.com',
            orderPosition: 3,
            status: 'published',
            createdAt: new Date('2024-01-10').toISOString(),
            updatedAt: new Date('2024-01-10').toISOString(),
        },
        {
            name: 'Sarah Mitchell',
            title: 'Senior Project Manager',
            bio: 'Sarah has 18 years of experience managing complex construction projects across the West Coast. She holds a Master\'s degree in Construction Engineering and is a certified LEED Green Associate. Sarah excels in sustainable building practices and has led the construction of over 50 LEED-certified buildings. Her collaborative approach and problem-solving skills ensure projects are completed on time and within budget while exceeding client expectations.',
            image: '/images/team/member-4.jpg',
            officeLocation: 'San Francisco, CA',
            email: 's.mitchell@greenbuild.com',
            orderPosition: 4,
            status: 'published',
            createdAt: new Date('2024-01-10').toISOString(),
            updatedAt: new Date('2024-01-10').toISOString(),
        },
        {
            name: 'Michael Chen',
            title: 'Head of Design',
            bio: 'Michael brings 19 years of experience in architectural design and interior design for commercial and residential projects. He graduated with honors from the Rhode Island School of Design and is a member of the American Institute of Architects. Michael specializes in creating innovative, sustainable spaces that balance aesthetics with functionality. His award-winning designs have been featured in numerous architectural publications and have set new standards for modern construction.',
            image: '/images/team/member-5.jpg',
            officeLocation: 'Seattle, WA',
            email: 'm.chen@greenbuild.com',
            orderPosition: 5,
            status: 'published',
            createdAt: new Date('2024-01-10').toISOString(),
            updatedAt: new Date('2024-01-10').toISOString(),
        },
        {
            name: 'Amanda Rodriguez',
            title: 'VP of Business Development',
            bio: 'Amanda has 15 years of experience in business development and client relations within the construction industry. She holds an MBA from the University of Southern California and specializes in strategic partnerships and market expansion. Amanda has successfully secured over $300 million in new contracts and built lasting relationships with key stakeholders across the Pacific Northwest. Her strategic vision and client-focused approach have been instrumental in GreenBuild\'s continued growth and success.',
            image: '/images/team/member-6.jpg',
            officeLocation: 'Portland, OR',
            email: 'a.rodriguez@greenbuild.com',
            orderPosition: 6,
            status: 'published',
            createdAt: new Date('2024-01-10').toISOString(),
            updatedAt: new Date('2024-01-10').toISOString(),
        },
    ];

    await db.insert(teamMembers).values(sampleTeamMembers);
    
    console.log('✅ Team members seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});