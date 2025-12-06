import { db } from '@/db';
import { newsArticles } from '@/db/schema';

async function main() {
    const sampleNewsArticles = [
        {
            title: 'GreenBuild Wins Sustainable Construction Award 2024',
            content: 'GreenBuild Construction has been honored with the prestigious Sustainable Construction Award 2024 at the National Building Excellence ceremony held in Chicago. This recognition marks a significant milestone in our commitment to environmentally responsible building practices and innovative green technologies.\n\nThe award specifically recognizes our groundbreaking work on the Riverside Eco-Complex project, which achieved LEED Platinum certification and reduced carbon emissions by 60% compared to traditional construction methods. Our team implemented cutting-edge solar integration, rainwater harvesting systems, and used 85% recycled materials throughout the construction process.\n\n"This award is a testament to our team\'s dedication to pushing the boundaries of sustainable construction," said CEO Michael Roberts. "We believe that building for the future means building responsibly today. Every project we undertake is an opportunity to demonstrate that environmental stewardship and exceptional quality can go hand in hand."\n\nThe judging panel, consisting of industry leaders and environmental experts, praised GreenBuild\'s holistic approach to sustainability, noting that our projects consistently exceed environmental standards while maintaining competitive timelines and budgets. This achievement reinforces our position as a leader in the green building movement and demonstrates our ongoing commitment to creating structures that benefit both communities and the environment.',
            excerpt: 'GreenBuild Construction receives the Sustainable Construction Award 2024 for excellence in environmentally responsible building practices and innovative green technologies.',
            category: 'Awards',
            featured_image: '/images/news/article-1.jpg',
            author: 'Sarah Chen',
            published_date: new Date('2024-03-15T10:00:00Z').toISOString(),
            status: 'published',
            created_at: new Date('2024-03-15T10:00:00Z').toISOString(),
            updated_at: new Date('2024-03-15T10:00:00Z').toISOString(),
        },
        {
            title: 'Featured in Construction Today: The Future of Green Building',
            content: 'GreenBuild Construction\'s innovative approach to sustainable development has captured the attention of Construction Today magazine, which featured our company in their latest cover story. The in-depth article explores how we\'re revolutionizing the construction industry through eco-friendly practices and cutting-edge technology.\n\nThe feature highlights our unique methodology that combines traditional craftsmanship with modern sustainable solutions. From our proprietary energy-efficient building designs to our waste reduction programs that have diverted over 2 million pounds of construction debris from landfills, the article showcases the comprehensive nature of our environmental commitment.\n\nJournalist Emma Williams spent three months shadowing our teams across multiple project sites, documenting our day-to-day operations and interviewing key stakeholders. "What impressed me most was how sustainability isn\'t just a marketing buzzword for GreenBuild—it\'s embedded in every decision they make," Williams noted in the article.\n\nThe feature also examines our community impact programs, including our partnership with local schools to educate the next generation about sustainable construction practices. Our CEO, Michael Roberts, shared insights about the industry\'s trajectory: "We\'re at a pivotal moment where sustainable construction is transitioning from being a specialty to becoming the standard. Companies that don\'t adapt will be left behind."\n\nThe article has already generated significant interest from potential clients and industry partners, further solidifying GreenBuild\'s reputation as a thought leader in sustainable construction.',
            excerpt: 'Construction Today magazine features GreenBuild in a comprehensive cover story exploring our innovative sustainable development practices and industry leadership.',
            category: 'Media',
            featured_image: '/images/news/article-2.jpg',
            author: 'John Martinez',
            published_date: new Date('2024-05-22T14:30:00Z').toISOString(),
            status: 'published',
            created_at: new Date('2024-05-22T14:30:00Z').toISOString(),
            updated_at: new Date('2024-05-22T14:30:00Z').toISOString(),
        },
        {
            title: 'Harbor District Mixed-Use Development Reaches Milestone Completion',
            content: 'GreenBuild Construction celebrates the successful completion of Phase One of the Harbor District Mixed-Use Development, a transformative project that will reshape the downtown waterfront. This ambitious 2.5-acre development represents one of the largest urban renewal initiatives in the city\'s history.\n\nThe completed phase includes three residential towers housing 450 luxury apartments, 80,000 square feet of retail space, and a 5-acre public park with waterfront access. The project has been designed to achieve LEED Gold certification and features state-of-the-art amenities including rooftop gardens, electric vehicle charging stations, and an innovative greywater recycling system.\n\n"The Harbor District project exemplifies our vision of creating vibrant, sustainable communities," said Project Manager Emily Thompson. "We\'ve not only constructed buildings but created spaces where people can live, work, and play while minimizing environmental impact." The development incorporates numerous green features including solar panels that will generate 30% of the complex\'s energy needs and a green roof system that reduces stormwater runoff by 75%.\n\nThe project has already received significant recognition, with the American Institute of Architects praising its thoughtful integration of green spaces and sustainable infrastructure. Local officials have noted the development\'s positive impact on the surrounding neighborhood, including improved pedestrian access and the creation of over 300 permanent jobs.\n\nPhase Two, scheduled to begin next quarter, will add an additional 200 residential units and a boutique hotel. The entire development is expected to be fully completed by 2026.',
            excerpt: 'Phase One of the Harbor District Mixed-Use Development is complete, featuring 450 apartments, retail space, and a public waterfront park with LEED Gold certification.',
            category: 'Projects',
            featured_image: '/images/news/article-3.jpg',
            author: 'Emily Thompson',
            published_date: new Date('2024-07-08T09:15:00Z').toISOString(),
            status: 'published',
            created_at: new Date('2024-07-08T09:15:00Z').toISOString(),
            updated_at: new Date('2024-07-08T09:15:00Z').toISOString(),
        },
        {
            title: 'GreenBuild Expands Operations with New Regional Office',
            content: 'In a significant expansion move, GreenBuild Construction announces the opening of its new regional office in Portland, Oregon. This strategic expansion reflects our commitment to serving the growing demand for sustainable construction services across the Pacific Northwest.\n\nThe 15,000-square-foot office, located in Portland\'s Pearl District, will serve as a hub for our expanding operations in Oregon, Washington, and Northern California. The facility itself exemplifies our commitment to sustainability, featuring a net-zero energy design, reclaimed materials throughout the interior, and a living wall system that naturally purifies indoor air.\n\n"Portland has long been a leader in sustainable development, making it the perfect location for our regional expansion," explained CEO Michael Roberts. "This office will enable us to better serve our clients in the region while partnering with local suppliers and contractors who share our environmental values." The new office will initially house 50 employees, with plans to grow to 150 team members over the next three years.\n\nThe expansion comes on the heels of securing several major contracts in the region, including a $120 million university campus renovation and a mixed-use development in downtown Seattle. Our Portland team will focus on commercial and institutional projects, with a particular emphasis on educational facilities and healthcare infrastructure.\n\nTo celebrate the opening, GreenBuild is hosting a series of community events, including sustainable building workshops for local contractors and educational sessions for architecture students. Mayor Sarah Wilson attended the ribbon-cutting ceremony, praising the company\'s commitment to both environmental responsibility and job creation in the region.',
            excerpt: 'GreenBuild opens a new 15,000-square-foot regional office in Portland, expanding sustainable construction services across the Pacific Northwest.',
            category: 'Company News',
            featured_image: '/images/news/article-4.jpg',
            author: 'Michael Roberts',
            published_date: new Date('2024-09-12T11:00:00Z').toISOString(),
            status: 'published',
            created_at: new Date('2024-09-12T11:00:00Z').toISOString(),
            updated_at: new Date('2024-09-12T11:00:00Z').toISOString(),
        },
        {
            title: 'National Public Radio Features GreenBuild\'s Innovation in Green Technology',
            content: 'GreenBuild Construction was featured in a National Public Radio segment exploring innovation in sustainable construction technology. The 15-minute feature, which aired during NPR\'s "All Things Considered" program, highlighted our pioneering use of recycled materials and renewable energy integration in commercial construction.\n\nThe segment focused specifically on our revolutionary approach to incorporating recycled plastic waste into concrete mixtures, a technology we developed in partnership with materials scientists at MIT. This innovation has the potential to divert millions of pounds of plastic waste from landfills while creating stronger, more durable building materials.\n\nNPR correspondent David Chen interviewed our Chief Innovation Officer, Dr. Sarah Chen, at our research and development facility. "The construction industry generates nearly 600 million tons of debris annually," Dr. Chen explained during the interview. "By reimagining waste as a resource, we\'re not just reducing environmental impact—we\'re creating superior building materials."\n\nThe feature also explored our solar-integrated roofing system, which has been installed on over 50 commercial buildings nationwide. These systems generate enough electricity to power the buildings they protect while maintaining traditional aesthetic appeal. Industry experts interviewed for the segment predicted that GreenBuild\'s innovations could become standard practice within the next decade.\n\nThe NPR feature has generated substantial interest from both the construction industry and environmental advocacy groups. Following the broadcast, we received inquiries from over 200 potential clients and partners interested in implementing our sustainable technologies in their projects.',
            excerpt: 'National Public Radio highlights GreenBuild\'s groundbreaking work in sustainable construction technology, including recycled plastic concrete and solar-integrated roofing systems.',
            category: 'Media',
            featured_image: '/images/news/article-5.jpg',
            author: 'Sarah Chen',
            published_date: new Date('2024-02-28T16:45:00Z').toISOString(),
            status: 'published',
            created_at: new Date('2024-02-28T16:45:00Z').toISOString(),
            updated_at: new Date('2024-02-28T16:45:00Z').toISOString(),
        },
        {
            title: 'Greenfield Community Center Project Breaks Ground',
            content: 'GreenBuild Construction officially breaks ground on the Greenfield Community Center, a $45 million project that will serve as a cornerstone facility for the growing suburban community. The 75,000-square-foot multipurpose center will include recreational facilities, educational spaces, and community gathering areas.\n\nThe project represents a collaboration between GreenBuild, city officials, and community stakeholders who spent two years developing a vision for a facility that meets diverse community needs while achieving the highest standards of environmental performance. The center is designed to achieve LEED Platinum certification and will be the first municipal building in the state to operate as a net-positive energy facility.\n\nKey features of the community center include an Olympic-size swimming pool with a solar heating system, a full-service gymnasium with natural lighting, a 500-seat performing arts theater, and a rooftop urban farm that will supply fresh produce to the center\'s café. The building will also incorporate a geothermal heating and cooling system, reducing energy consumption by an estimated 70% compared to conventional buildings.\n\n"This project embodies everything we believe about creating sustainable community infrastructure," said Project Director John Martinez. "We\'re building more than just a facility—we\'re creating a gathering place that will serve generations while demonstrating that environmental responsibility and community needs are completely compatible."\n\nThe groundbreaking ceremony attracted over 500 community members, local officials, and business leaders. Construction is expected to take 18 months, with a grand opening scheduled for spring 2026. The project is already creating positive economic impact, with commitments to hire 30% of the workforce from the local community and prioritize contracts with regional suppliers.',
            excerpt: 'Construction begins on the $45 million Greenfield Community Center, featuring Olympic-size pool, gymnasium, theater, and net-positive energy design.',
            category: 'Projects',
            featured_image: '/images/news/article-6.jpg',
            author: 'John Martinez',
            published_date: new Date('2024-10-20T13:30:00Z').toISOString(),
            status: 'published',
            created_at: new Date('2024-10-20T13:30:00Z').toISOString(),
            updated_at: new Date('2024-10-20T13:30:00Z').toISOString(),
        },
        {
            title: 'GreenBuild Named to Fortune\'s "Change the World" List',
            content: 'GreenBuild Construction has been recognized on Fortune magazine\'s prestigious "Change the World" list, which honors companies making significant positive social impact through their core business strategies. This recognition places us among an elite group of organizations demonstrating that profitability and social responsibility can coexist.\n\nFortune\'s selection committee evaluated hundreds of companies worldwide, ultimately recognizing GreenBuild for our comprehensive approach to sustainable construction and our measurable impact on reducing carbon emissions in the built environment. The magazine highlighted our commitment to using 100% renewable energy in all operations by 2025 and our innovative workforce development programs.\n\n"This recognition validates our belief that construction companies have a responsibility to lead the fight against climate change," stated CEO Michael Roberts. "Every building we construct is an opportunity to demonstrate that sustainable practices aren\'t just environmentally necessary—they\'re economically viable and socially beneficial."\n\nThe Fortune feature particularly noted our partnership with community colleges to train the next generation of green construction workers. Through this program, we\'ve provided scholarships and apprenticeships to over 500 students, with a focus on underrepresented communities. Ninety percent of program graduates have secured employment in the construction industry.\n\nAdditionally, the magazine recognized our disaster relief construction program, which has rebuilt homes and community facilities in areas affected by natural disasters using sustainable building methods. This program has helped reconstruct over 200 homes following recent hurricanes and wildfires, demonstrating how green building techniques can create more resilient communities. The Fortune recognition is expected to further elevate our profile among socially conscious investors and clients seeking partners committed to meaningful environmental and social impact.',
            excerpt: 'Fortune magazine names GreenBuild to its "Change the World" list, recognizing our impact on sustainable construction and workforce development programs.',
            category: 'Awards',
            featured_image: '/images/news/article-7.jpg',
            author: 'Emily Thompson',
            published_date: new Date('2024-11-05T10:00:00Z').toISOString(),
            status: 'draft',
            created_at: new Date('2024-11-05T10:00:00Z').toISOString(),
            updated_at: new Date('2024-11-05T10:00:00Z').toISOString(),
        },
        {
            title: 'GreenBuild Launches Employee Wellness and Sustainability Initiative',
            content: 'GreenBuild Construction announces the launch of a comprehensive employee wellness and sustainability initiative designed to enhance workplace culture while reinforcing our commitment to environmental stewardship. The program, developed over six months in collaboration with employee focus groups, addresses both personal well-being and environmental responsibility.\n\nThe initiative includes several key components: a subsidized electric vehicle program offering employees favorable lease terms on EVs, expanded mental health resources including on-site counseling services, a fitness reimbursement program, and flexible work arrangements that reduce commuting requirements. Additionally, all employees will receive sustainability training and can earn bonuses for implementing green practices in their personal lives.\n\n"Our people are our greatest asset, and their well-being directly impacts our ability to deliver exceptional sustainable projects," explained Chief People Officer Jennifer Walsh. "This initiative recognizes that creating a culture of sustainability starts with supporting our team members in all aspects of their lives." Early response to the program has been overwhelmingly positive, with 85% of employees expressing interest in the EV lease program alone.\n\nThe company is also introducing an innovation fund that provides grants to employees who develop new sustainable construction methods or technologies. Five grants of $50,000 each will be awarded annually, with recipients receiving support to develop and test their ideas. This program builds on our track record of employee-driven innovation, which has resulted in numerous patented green building technologies.\n\nEnvironmental advocacy groups have praised the initiative as a model for the industry. "GreenBuild is demonstrating that caring for employees and caring for the environment are complementary goals," noted Maria Rodriguez of the Green Construction Alliance. The company plans to publish annual reports tracking both employee satisfaction metrics and the environmental impact of the program.',
            excerpt: 'New employee wellness initiative launches with EV program, mental health resources, sustainability training, and innovation grants for green building technologies.',
            category: 'Company News',
            featured_image: '/images/news/article-8.jpg',
            author: 'Michael Roberts',
            published_date: new Date('2024-01-18T08:00:00Z').toISOString(),
            status: 'published',
            created_at: new Date('2024-01-18T08:00:00Z').toISOString(),
            updated_at: new Date('2024-01-18T08:00:00Z').toISOString(),
        },
    ];

    await db.insert(newsArticles).values(sampleNewsArticles);
    
    console.log('✅ News articles seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});