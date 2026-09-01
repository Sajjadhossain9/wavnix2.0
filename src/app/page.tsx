import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CapabilitiesStrip from "@/components/CapabilitiesStrip";
import ServicesExperience from "@/components/ServicesExperience";
import SelectedWork from "@/components/SelectedWork";
import HowWavnixWorks from "@/components/HowWavnixWorks";
import ProductShowcase from "@/components/ProductShowcase";
import ProjectEstimator from "@/components/ProjectEstimator";
import DomainSearch from "@/components/DomainSearch";
import StoryAndTeam from "@/components/StoryAndTeam";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen text-text-main bg-bg-primary overflow-hidden selection:bg-accent selection:text-bg-primary">
      {/* Precision grid pattern layout as subtle baseline texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />
      
      {/* Sticky top-level premium navigation */}
      <Navbar />

      {/* Main structured showcase sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Strip / Smooth Marquee */}
        <CapabilitiesStrip />

        {/* 3. Interactive Services Selection Platform */}
        <ServicesExperience />

        {/* 4. Verified Selected Case Studies */}
        <SelectedWork />

        {/* 5. Connected Work Delivery Pipeline */}
        <HowWavnixWorks />

        {/* 6. Proprietary Campus ERP Showcase */}
        <ProductShowcase />

        {/* 7. Live Pricing Project Estimator Engine */}
        <ProjectEstimator />

        {/* 8. Namespace Verification & Cloud Hosting Comparison */}
        <DomainSearch />

        {/* 9. Human Core Narrative & Commits Log */}
        <StoryAndTeam />
      </main>

      {/* 10. Unified Final CTA, Contact form & Global Footer */}
      <Footer />
    </div>
  );
}
