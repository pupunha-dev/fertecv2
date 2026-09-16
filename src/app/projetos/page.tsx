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
        eyebrow="Nossa Visão de Engenharia"
        title="A ENGENHARIA CRIA VALOR QUANDO COMPREENDE A NECESSIDADE ANTES DE DEFINIR A ALTERNATIVA."
        subtitle="Uma decisão técnica consistente começa pela compreensão dos fatores que influenciam a aplicação e pela identificação do que deve ser preservado, revisto ou desenvolvido.
É essa compreensão que orienta as decisões de engenharia.
"
        imageSrc="/images/hero/HERO-PROJETOS-BANNER.svg"
        imageAlt="Biblioteca técnica de cases de engenharia aplicada"
        imageClassName="object-cover object-right"
      />
      <CasesListSection />
      <ClosingCTASection
        eyebrow="Avaliação Técnica"
        title="Tem uma falha recorrente que ainda não foi caracterizada?"
        text=""
      />
    </>
  );
}
