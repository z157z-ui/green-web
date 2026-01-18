import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://greenbuildersandinteriors.com"),
  title: {
    template: "%s | Green Builders & Interiors",
    default: "Green Builders & Interiors - We Don't Just Build Structures, We Build Dreams",
  },
  description: "At Green Builders and Interiors, we create spaces that beautifully combine design, functionality, and comfort. Headquartered in Bangalore with 5 offices across South India. 8+ years of expertise in villa design, office interiors, and construction.",
  keywords: [
    "interior design",
    "construction",
    "villa design",
    "office renovation",
    "South India",
    "Bangalore interior designer",
    "luxury interiors",
    "apartment design",
    "commercial design",
    "penthouse interior",
    "restaurant design",
    "landscape design",
  ],
  authors: [{ name: "Green Builders & Interiors" }],
  creator: "Green Builders & Interiors",
  publisher: "Green Builders & Interiors",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://greenbuilders.in",
    siteName: "Green Builders & Interiors",
    title: "Green Builders & Interiors - Luxury Interior Design & Construction",
    description: "Luxury interior design and construction firm based in Bengaluru, serving South India with 8+ years of expertise.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Green Builders & Interiors - Luxury Interior Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Builders & Interiors",
    description: "Luxury interior design and construction firm serving South India.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-white">
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
