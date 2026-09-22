import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CasesListSection from "@/components/sections/CasesListSection";
import ConfidentialitySection from "@/components/sections/ConfidentialitySection";
import ClosingCTASection from "@/components/sections/ClosingCTASection";

export const metadata: Metadata = {
  title: "Cases Técnicos | Fertec — Engenharia Aplicada",
  description:
    "Biblioteca técnica de casos de reengenharia aplicada da Fertec — falhas recorrentes, condições de aplicação, caracterização e resultado operacional.",
};

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="PROJETOS DE ENGENHARIA"
        title="RESULTADOS DE ALTA PERFORMANCE"
        subtitle={[
          "Necessidades industriais distintas podem exigir análise, reconstrução, desenvolvimento, recuperação ou execução técnica de componentes, dispositivos e ferramentais.",
          "Os projetos a seguir mostram como essas competências são aplicadas a situações reais.",
        ]}
        imageSrc="/images/hero/HERO-PROJETOS-BANNER.svg"
        imageAlt="Biblioteca técnica de cases de engenharia aplicada"
        imageClassName="object-cover object-right"
      />
      <CasesListSection />
      <ConfidentialitySection />
      {/* <ClosingCTASection
        eyebrow="Avaliação Técnica"
        title="APRESENTE SUA APLICAÇÃO À FERTEC"
        text=""
      /> */}
    </>
  );
}
