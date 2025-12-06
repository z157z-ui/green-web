import HeroSection from "@/components/sections/hero-section";
import AboutOverview from "@/components/sections/about-overview";
import Statistics from "@/components/sections/statistics";
import CompanyHistory from "@/components/sections/company-history";
import ServicesShowcase from "@/components/sections/services-showcase";
import FeaturedProjectsGrid from "@/components/sections/featured-projects-grid";
import LeadershipTeam from "@/components/sections/leadership-team";
import NewsPerspectives from "@/components/sections/news-perspectives";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutOverview />
      <Statistics />
      <CompanyHistory />
      <ServicesShowcase />
      <FeaturedProjectsGrid />
      <LeadershipTeam />
      <NewsPerspectives />
    </main>
  );
}
