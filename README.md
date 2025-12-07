# Green Builders and Interiors - Corporate Website & CMS

A modern, full-stack web application built with Next.js 15 for Green Builders and Interiors, a leading construction and interior design company. Features a public-facing website with an integrated admin dashboard for content management.

## Features

### Public Website
- **Home Page**: Hero section with call-to-action, featured projects grid, and services showcase
- **Services Page**: Comprehensive 12-service catalog including villa design, apartment design, office design, renovations, and construction
- **About Page**: Company overview with 8+ years of experience and company history timeline
- **Team Page**: Team member profiles and leadership information
- **Contact Page**: Multi-location contact information with contact form and 5 office locations (Bangalore, Visakhapatnam, Hyderabad, Kochi, Chennai)
- **Projects Gallery**: Portfolio showcase with filtering capabilities
- **WhatsApp Integration**: Floating chat widget for instant customer communication
- **Smooth Navigation**: Anchor-based smooth scrolling and mega menu for services
- **Responsive Design**: Mobile-first approach with modern UI components

### Admin Dashboard
- Content Management System (CMS) for:
  - Projects (create, edit, delete with image upload)
  - Services (with ordering and descriptions)
  - Team members (with bios, photos, and office locations)
  - News articles (with publishing workflow)
- User authentication and session management
- Protected admin routes with Better-Auth
- Real-time content updates

## Tech Stack

### Frontend
- **Framework:** Next.js 15.3.5 with App Router and Turbopack
- **UI Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Components:** Radix UI (comprehensive component library)
- **Animations:** Framer Motion
- **3D Graphics:** Three.js, React Three Fiber
- **Forms:** React Hook Form with Zod validation
- **Charts:** Recharts
- **Icons:** Lucide React, Heroicons, Tabler Icons

### Backend
- **Database:** Turso (libSQL/SQLite)
- **ORM:** Drizzle ORM
- **Authentication:** Better-Auth
- **Password Hashing:** Bcrypt
- **Validation:** Zod
- **Payment Processing:** Stripe

### Development Tools
- **Linting:** ESLint
- **Type Checking:** TypeScript
- **Build Tool:** Next.js with Turbopack

## Getting Started

### Prerequisites
- Node.js 20 or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd green-web
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```env
# Database
TURSO_DATABASE_URL=your_database_url
TURSO_AUTH_TOKEN=your_auth_token

# Authentication
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

# Stripe (optional)
STRIPE_SECRET_KEY=your_stripe_secret_key
```

4. Run database migrations:
```bash
npx drizzle-kit push
```

5. (Optional) Seed the database with sample data:
```bash
npx tsx src/db/seeds/seed.ts
```

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit files in the `src/app` directory.

### Building for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
green-web/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # Home page
│   │   ├── about/              # About page
│   │   ├── services/           # Services page (NEW)
│   │   ├── contact/            # Contact page (NEW)
│   │   ├── team/               # Team page
│   │   ├── login/              # Login page
│   │   ├── register/           # Registration page
│   │   ├── admin/              # Admin dashboard
│   │   │   ├── dashboard/      # Main dashboard
│   │   │   ├── projects/       # Project management
│   │   │   ├── services/       # Service management
│   │   │   ├── news/           # News management
│   │   │   └── team/           # Team management
│   │   └── api/                # API routes
│   │       ├── auth/           # Authentication API
│   │       ├── projects/       # Project API (restructured)
│   │       │   ├── route.ts    # GET all, POST create
│   │       │   └── [id]/       # GET, PUT, DELETE by ID
│   │       ├── services/       # Services API
│   │       ├── news/           # News API
│   │       └── team/           # Team API
│   ├── components/             # React components
│   │   ├── ui/                 # Reusable UI components (60+)
│   │   ├── sections/           # Page sections (Navigation, Footer, etc.)
│   │   └── WhatsAppWidget.tsx  # WhatsApp chat widget (NEW)
│   ├── db/                     # Database
│   │   ├── schema.ts           # Drizzle schema
│   │   ├── seeds/              # Sample data
│   │   └── index.ts            # DB connection
│   └── lib/                    # Utilities
│       ├── auth.ts             # Auth config
│       ├── sanitize.ts         # HTML sanitization
│       └── utils.ts            # Helper functions
├── public/                     # Static assets
│   ├── images/                 # Image assets
│   │   ├── projects/           # Project gallery images
│   │   ├── services/           # Service showcase images
│   │   ├── team/               # Team member photos
│   │   ├── news/               # News article images
│   │   └── hero/               # Hero section backgrounds
│   ├── videos/                 # Video assets
│   └── icons/                  # Icons
├── drizzle/                    # Database migrations
├── drizzle.config.ts           # Drizzle configuration
├── tailwind.config.ts          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
├── requirements.txt            # Dependencies documentation
└── package.json                # NPM dependencies
```

## Media Assets

### Recommended Directory Structure

```
public/
├── images/           # Image assets
│   ├── projects/     # Project gallery images
│   ├── services/     # Service showcase images
│   ├── team/         # Team member photos
│   ├── news/         # News article images
│   └── hero/         # Hero section backgrounds
├── videos/           # Video assets
│   └── hero-bg.mp4   # Hero background video
└── icons/            # Icons
```

### Referencing Media Files

After placing files in `public/`, reference them with the `/` prefix:

```tsx
// Image example
<img src="/images/projects/project-1.jpg" alt="Project" />

// Next.js Image component (recommended)
import Image from "next/image";
<Image
  src="/images/team/member-1.jpg"
  width={400}
  height={400}
  alt="Team member"
/>

// Video example
<video src="/videos/hero-bg.mp4" autoPlay loop muted />
```

**Recommendation:** Download all external media assets (currently hosted on Supabase/Vimeo) and organize them in the `public/` directory for better performance and reliability.

## API Endpoints

### Projects (Restructured)
- `GET /api/projects` - Get all projects (public endpoint)
- `POST /api/projects` - Create a new project (requires authentication)
- `GET /api/projects/[id]` - Get single project by ID
- `PUT /api/projects/[id]` - Update a project (requires authentication)
- `DELETE /api/projects/[id]` - Delete a project (requires authentication)

### Services
- `GET /api/services` - Get all services
- `POST /api/services` - Create a new service (requires authentication)
- `PUT /api/services/[id]` - Update a service (requires authentication)
- `DELETE /api/services/[id]` - Delete a service (requires authentication)

### Team
- `GET /api/team` - Get all team members
- `POST /api/team` - Add a team member (requires authentication)
- `PUT /api/team/[id]` - Update a team member (requires authentication)
- `DELETE /api/team/[id]` - Remove a team member (requires authentication)

### News
- `GET /api/news` - Get all news articles
- `POST /api/news` - Create a news article (requires authentication)
- `PUT /api/news/[id]` - Update a news article (requires authentication)
- `DELETE /api/news/[id]` - Delete a news article (requires authentication)

### Authentication
- `POST /api/auth/sign-up` - Register a new user
- `POST /api/auth/sign-in` - Login
- `POST /api/auth/sign-out` - Logout

## Company Information

### Services Offered
Green Builders and Interiors specializes in 12 comprehensive services:
1. **Villa Design** - Complete architectural and interior design
2. **Apartment Design** - Modern space-optimized interiors
3. **Penthouse Interior Design** - Luxury high-end designs
4. **Office Designing** - Professional workspace solutions
5. **Restaurant Design** - Memorable dining experiences
6. **Landscape Design** - Outdoor space planning
7. **Villa Renovation** - Modern updates and enhancements
8. **Apartment Renovation** - Interior upgrades and modernization
9. **Office Renovation** - Workspace refresh and updates
10. **Villa Construction** - Complete construction services
11. **Curtains & Soft Furnishings** - Custom window treatments
12. **Barber Shop Design** - Stylish commercial interiors

### Office Locations
- **Bangalore** (Head Office): Reg Office, G F, NO 6/1, Madivala, Bengaluru, Karnataka, 560068
- **Visakhapatnam**: Mastec QuadGen Wireless LLP, 2nd Floor, Synophic Tower, Madhurawada
- **Hyderabad**: Ground Floor D' Desks, Road Number 12, Banjara Hills
- **Kochi**: 3rd floor AWFIS office, Mezhukkattil Matrix, Ernakulam
- **Chennai**: 1st Floor, 111 A Rajiv Gandhi Road, OMR, Kottivakkam

### Contact Information
- **Phone**: 9739992779, 9606894352
- **WhatsApp**: 919739992779
- **Email**: [city]@greenbuildersandinteriors.com

## Database Schema

The application uses the following main tables:
- `users` - User accounts and authentication
- `sessions` - User sessions
- `projects` - Project portfolio items
- `services` - Company services
- `team` - Team member information
- `news` - News articles and blog posts

## Security

- Passwords are hashed using bcrypt
- HTML content is sanitized using DOMPurify to prevent XSS attacks
- Authentication is handled by Better-Auth with session management
- Protected routes require authentication

## Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

### Other Technologies
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Better-Auth](https://better-auth.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Environment Variables

Make sure to set up all required environment variables in your deployment platform:
- `TURSO_DATABASE_URL`
- `TURSO_AUTH_TOKEN`
- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL`
- `STRIPE_SECRET_KEY` (if using Stripe)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.
