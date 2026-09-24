import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CapabilitiesAccordionSection from "@/components/sections/CapabilitiesAccordionSection";
import ClosingCTASection from "@/components/sections/ClosingCTASection";
import AboutIntroSection from "@/components/sections/AboutIntroSection";
import ProcessIntroContent from "@/components/sections/ProcessIntroContent";

export const metadata: Metadata = {
  title: "Capacidades | Fertec — Engenharia Aplicada",
  description:
    "Capacidades técnicas da Fertec em reengenharia de componentes críticos, soluções para obsolescência industrial, dispositivos mecânicos especiais e manufatura de precisão.",
};

export default function CapacidadesPage() {
  return (
    <>
      <PageHero
        eyebrow="Processo"
        title="UMA DECISÃO TÉCNICA CONSISTENTE COMEÇA PELA COMPREENSÃO DA NECESSIDADE E DOS REQUISITOS DA APLICAÇÃO."
        subtitle=""
        imageSrc="/images/hero/HERO-PROCESSO-BANNER.svg"
        imageAlt="Manufatura técnica de precisão como consequência da engenharia"

        imageClassName="object-cover object-right"
      >
        <ProcessIntroContent />
      </PageHero>
      <CapabilitiesAccordionSection />
      <ClosingCTASection
        eyebrow="Avaliação Técnica"
        title="QUANDO UMA NECESSIDADE TÉCNICA COMPROMETE UM ATIVO INDUSTRIAL, O CUSTO NÃO ESTÁ APENAS NO COMPONENTE."
        text="Obsolescência, falhas recorrentes, ausência de documentação, necessidades de inspeção e recuperação de ferramentais podem afetar disponibilidade, qualidade, prazo e continuidade operacional."
        text2="Apresente sua aplicação à Fertec."
      />
    </>
  );
}
