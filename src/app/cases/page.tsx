import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CasesListSection from "@/components/sections/CasesListSection";
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
        eyebrow="Biblioteca Técnica"
        title="Cases Técnicos"
        subtitle="Registro técnico de falhas características, suas causas e a engenharia aplicada para restaurar estabilidade operacional."
        imageSrc="/images/pages/indimg4.png"
        imageAlt="Biblioteca técnica de cases de engenharia aplicada"
      />
      <CasesListSection />
      <ClosingCTASection
        eyebrow="Avaliação Técnica"
        title="Tem uma falha recorrente que ainda não foi caracterizada?"
      />
    </>
  );
}
