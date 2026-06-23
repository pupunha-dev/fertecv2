import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseHeroSection from "@/components/sections/CaseHeroSection";
import CaseDetailSections from "@/components/sections/CaseDetailSections";
import ClosingCTASection from "@/components/sections/ClosingCTASection";
import { CASES, getCaseBySlug } from "@/data/cases";

interface CasePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CASES.map((technicalCase) => ({ slug: technicalCase.slug }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const technicalCase = getCaseBySlug(slug);

  if (!technicalCase) {
    return {
      title: "Case Técnico | Fertec — Engenharia Aplicada",
    };
  }

  return {
    title: `${technicalCase.titulo} | Fertec — Engenharia Aplicada`,
    description: technicalCase.resumoProblema,
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const technicalCase = getCaseBySlug(slug);

  if (!technicalCase) {
    notFound();
  }

  return (
    <>
      <CaseHeroSection technicalCase={technicalCase} />
      <CaseDetailSections technicalCase={technicalCase} />
      <ClosingCTASection
        eyebrow="Avaliação Técnica"
        title="Tem um componente com falha semelhante na sua operação?"
      />
    </>
  );
}
