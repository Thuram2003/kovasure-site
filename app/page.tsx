import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoverageSection from "@/components/CoverageSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import DownloadSection from "@/components/DownloadSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white antialiased">
      <Header />
      
      <main role="main" className="overflow-x-hidden">
        <HeroSection />
        <CoverageSection />
        <HowItWorksSection />
        <BenefitsSection />
        <DownloadSection />
        <BlogSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
