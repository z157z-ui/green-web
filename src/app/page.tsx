import StickyProjectScroller from "@/components/sections/sticky-project-scroller";
import AboutOverview from "@/components/sections/about-overview";
import Statistics from "@/components/sections/statistics";
import CompanyHistory from "@/components/sections/company-history";
import ServicesShowcase from "@/components/sections/services-showcase";
import FeaturedProjectsGrid from "@/components/sections/featured-projects-grid";
import LeadershipTeam from "@/components/sections/leadership-team";
import NewsPerspectives from "@/components/sections/news-perspectives";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Luxury Architectural Hero - Sticky Project Scroller */}
      <StickyProjectScroller />

      {/* Existing Sections - Will inherit new global luxury styles */}
      <AboutOverview />
      <Statistics />

      {/* Enhanced Legacy Timeline */}
      <CompanyHistory />

      <ServicesShowcase />
      <FeaturedProjectsGrid />
      <LeadershipTeam />
      <NewsPerspectives />
    </main>
  );
}
