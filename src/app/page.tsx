import HeroSection from "@/components/sections/HeroSection";
import PainPointsSection from "@/components/sections/PainPointsSection";
import EngineeringSection from "@/components/sections/EngineeringSection";
import ProcessFlowSection from "@/components/sections/ProcessFlowSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import ResultsSection from "@/components/sections/ResultsSection";
import AboutSnippetSection from "@/components/sections/AboutSnippetSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      {/* <EngineeringSection /> */}
      <ProcessFlowSection />
      <CapabilitiesSection />
      <ResultsSection />
      <AboutSnippetSection />
    </>
  );
}
