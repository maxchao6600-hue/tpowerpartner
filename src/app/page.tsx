import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhyTpowerSection } from "@/components/home/WhyTpowerSection";
import { PerformanceSection } from "@/components/home/PerformanceSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { CommissionSection } from "@/components/home/CommissionSection";
import { PartnerTypesSection } from "@/components/home/PartnerTypesSection";
import { PartnerJourneySection } from "@/components/home/PartnerJourneySection";
import { ResourcesSection } from "@/components/home/ResourcesSection";
import { BuiltForPartnersSection } from "@/components/home/BuiltForPartnersSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <WhyTpowerSection />
      <PerformanceSection />
      <HowItWorksSection />
      <CommissionSection />
      <PartnerTypesSection />
      <PartnerJourneySection />
      <ResourcesSection />
      <BuiltForPartnersSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
