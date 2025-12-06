This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


##  media location 
public/
├── images/           <- Create this folder for images
│   ├── projects/     <- Project gallery images
│   ├── services/     <- Service showcase images
│   ├── team/         <- Team member photos
│   ├── news/         <- News article images
│   └── hero/         <- Hero section backgrounds
├── videos/           <- Create this folder for videos
│   └── hero-bg.mp4   <- Hero background video
└── icons/            <- Icons (currently: file.svg, globe.svg, etc.)

## how Reference Media Files:

After placing files in public/, reference them with / prefix:

// Image example
<img src="/images/projects/project-1.jpg" alt="Project" />

// Next.js Image component (recommended)
import Image from "next/image";
<Image src="/images/team/member-1.jpg" width={400} height={400} />

// Video example (like in your hero section)
<video src="/videos/hero-bg.mp4" autoPlay loop muted />
Current Usage in Code:

Hero video: External Vimeo URL
Project images: External Supabase URLs
Service images: External Supabase URLs
News images: External Supabase URLs
Recommendation: Download all media assets and organize them in public/ folders as shown above, then update the component URLs to use local paths instead of external URLs for better performance and reliability.

