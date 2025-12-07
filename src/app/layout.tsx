import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Green Builders and Interiors - Create and Customize Your Dream Interior",
  description: "8+ years of expertise in crafting modern, innovative designs. We specialize in complete interior design and construction solutions for homes, offices, and commercial projects in Bangalore and across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
