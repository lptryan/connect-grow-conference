import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { VideoHighlightsSection } from "@/components/VideoHighlightsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { StatsSection } from "@/components/StatsSection";
import { SpeakersSection } from "@/components/SpeakersSection";
import { WhyThisMattersSection } from "@/components/WhyThisMattersSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <VideoHighlightsSection />
      <CertificationsSection />
      <SpeakersSection />
      <WhyThisMattersSection />
      <TestimonialsSection />
      <FAQSection />
      <SponsorsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
