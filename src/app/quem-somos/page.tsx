import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import AboutIntroSection from "@/components/sections/AboutIntroSection";
import OriginStorySection from "@/components/sections/OriginStorySection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import MissionVisionValuesSection from "@/components/sections/MissionVisionValuesSection";
import PrinciplesSection from "@/components/sections/PrinciplesSection";

export const metadata: Metadata = {
  title: "Quem Somos | Fertec — Engenharia Aplicada",
  description:
    "Conheça a trajetória técnica e a filosofia de engenharia que originaram a Fertec, empresa de engenharia mecânica aplicada à confiabilidade operacional.",
};

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quem Somos"
        title="Engenharia com Profundidade Técnica"
        subtitle="A trajetória e a filosofia de engenharia que deram origem à Fertec."
        imageSrc="/images/pages/indimg1.png"
        imageAlt="Bancada de engenharia industrial"
      />
      <AboutIntroSection />
      <OriginStorySection />
      <PhilosophySection />
      <MissionVisionValuesSection />
      <PrinciplesSection />
    </>
  );
}
