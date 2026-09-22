import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import AboutIntroSection from "@/components/sections/AboutIntroSection";
import OriginStorySection from "@/components/sections/OriginStorySection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import MissionVisionValuesSection from "@/components/sections/MissionVisionValuesSection";
import ClosingCTASection from "@/components/sections/ClosingCTASection";

export const metadata: Metadata = {
  title: "Nossa Convicção | Fertec — Engenharia Aplicada",
  description:
    "A convicção de engenharia que orienta a atuação da Fertec: compreender a necessidade antes de definir a alternativa técnica.",
};

export default function NossaConviccaoPage() {
  return (
    <>
      <PageHero
        eyebrow="Nossa Convicção"
        title="A ENGENHARIA CRIA VALOR QUANDO COMPREENDE A NECESSIDADE ANTES DE DEFINIR A ALTERNATIVA."
        subtitle="Uma decisão técnica consistente começa pela compreensão dos fatores que influenciam a aplicação e pela identificação do que deve ser preservado, revisto ou desenvolvido. É essa compreensão que orienta as decisões de engenharia."
        showImage={false}
      />
      <AboutIntroSection />
      <OriginStorySection />
      <PhilosophySection />
      <MissionVisionValuesSection />
      <ClosingCTASection
        eyebrow="Avaliação Técnica"
        title="Sua operação enfrenta uma necessidade técnica que exige mais do que fabricação?"
        text="Apresente sua aplicação à Fertec."
      />
    </>
  );
}
