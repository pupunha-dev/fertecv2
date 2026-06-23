import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FailureCauseSection from "@/components/sections/FailureCauseSection";
import MethodologySection from "@/components/sections/MethodologySection";
import ClosingCTASection from "@/components/sections/ClosingCTASection";

export const metadata: Metadata = {
  title: "Engenharia Aplicada | Fertec — Engenharia Aplicada",
  description:
    "Conheça a metodologia de engenharia aplicada da Fertec para caracterizar a causa raiz de falhas recorrentes e reengenheirar componentes industriais críticos.",
};

export default function EngenhariaAplicadaPage() {
  return (
    <>
      <PageHero
        eyebrow="Engenharia Aplicada"
        title="Engenharia Aplicada à Causa da Falha"
        subtitle="Antes de fabricar qualquer componente, entendemos por que ele falhou — e por que continuaria falhando."
        imageSrc="/images/pages/indimg2.png"
        imageAlt="Engenharia técnica aplicada a componentes industriais"
      />
      <FailureCauseSection />
      <MethodologySection />
      <ClosingCTASection
        eyebrow="Avaliação Técnica"
        title="Toda falha recorrente tem uma causa de engenharia. Vamos identificá-la."
      />
    </>
  );
}
