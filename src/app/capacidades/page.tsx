import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CapabilitiesAccordionSection from "@/components/sections/CapabilitiesAccordionSection";
import ClosingCTASection from "@/components/sections/ClosingCTASection";

export const metadata: Metadata = {
  title: "Capacidades | Fertec — Engenharia Aplicada",
  description:
    "Capacidades técnicas da Fertec em reengenharia de componentes críticos, soluções para obsolescência industrial, dispositivos mecânicos especiais e manufatura de precisão.",
};

export default function CapacidadesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capacidades Técnicas"
        title="Manufatura como Consequência da Engenharia"
        subtitle="A execução técnica é a etapa final de um projeto de engenharia — nunca o ponto de partida."
        imageSrc="/images/pages/indimg3.png"
        imageAlt="Manufatura técnica de precisão como consequência da engenharia"
      />
      <CapabilitiesAccordionSection />
      <ClosingCTASection
        eyebrow="Avaliação Técnica"
        title="Tem um componente crítico que precisa de engenharia antes de fabricação?"
      />
    </>
  );
}
