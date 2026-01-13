import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { EarlyBirdBanner } from "@/components/EarlyBirdBanner";
import { ScrollProgress } from "@/components/ScrollProgress";
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
import { NewsletterSection } from "@/components/NewsletterSection";
import { SocialProofSection } from "@/components/SocialProofSection";

const Index = () => {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <EarlyBirdBanner onVisibilityChange={setBannerVisible} />
      <Navigation bannerVisible={bannerVisible} />
      <HeroSection />
      <StatsSection />
      <SocialProofSection />
      <VideoHighlightsSection />
      <CertificationsSection />
      <SpeakersSection />
      <WhyThisMattersSection />
      <TestimonialsSection />
      <NewsletterSection />
      <FAQSection />
      <SponsorsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
