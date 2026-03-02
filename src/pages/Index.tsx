import UrgencyBar from "@/components/UrgencyBar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import LearningSection from "@/components/LearningSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EarningsSimulation from "@/components/EarningsSimulation";
import CreatorSection from "@/components/CreatorSection";
import IncludedSection from "@/components/IncludedSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import SocialProofPopup from "@/components/SocialProofPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <UrgencyBar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <LearningSection />
      <TestimonialsSection />
      <EarningsSimulation />
      <CreatorSection />
      <IncludedSection />
      <GuaranteeSection />
      <FAQSection />
      <FooterSection />
      <SocialProofPopup />
    </div>
  );
};

export default Index;
