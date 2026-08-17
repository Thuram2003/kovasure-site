import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoverageSection from "@/components/CoverageSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustSection from "@/components/TrustSection";
import DownloadSection from "@/components/DownloadSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white antialiased">
      <Header />
      
      <main role="main" className="overflow-x-hidden pt-16">
        <HeroSection />
        <CoverageSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TrustSection />
        <DownloadSection />
        <FAQSection />
        <BlogSection />
      </main>

      <Footer />
    </div>
  );
}
