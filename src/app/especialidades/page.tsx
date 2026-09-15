import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FailureCauseSection from "@/components/sections/FailureCauseSection";
import MethodologySection from "@/components/sections/MethodologySection";
import ClosingCTASection from "@/components/sections/ClosingCTASection";
import FailureCauseSection2 from "@/components/sections/FailureCauseSection2";
import FailureCauseSection3 from "@/components/sections/FailureCauseSection3";
import FailureCauseSection4 from "@/components/sections/FailureCauseSection4";
import FailureCauseSection5 from "@/components/sections/FailureCauseSection5";

export const metadata: Metadata = {
  title: "Engenharia Aplicada | Fertec — Engenharia Aplicada",
  description:
    "Conheça a metodologia de engenharia aplicada da Fertec para caracterizar a causa raiz de falhas recorrentes e reengenheirar componentes industriais críticos.",
};

export default function EngenhariaAplicadaPage() {
  return (
    <>
      <PageHero
        eyebrow=""
        title="EXPERIÊNCIA INDUSTRIAL APLICADA À EVOLUÇÃO TÉCNICA."
        subtitle="Componentes, equipamentos e ferramentais existentes trazem informações importantes sobre sua função, interfaces, características construtivas e comportamento em serviço. A Fertec atua quando essas informações precisam ser reconstruídas, interpretadas ou utilizadas para desenvolver uma nova alternativa.
"
        imageSrc="/images/pages/ESPECIALIDADES-CENTRALIZADO-hero.jpeg"
        imageAlt="Engenharia técnica aplicada a componentes industriais"
      />
      <FailureCauseSection />
      <FailureCauseSection2 />
      <FailureCauseSection3 />
      <FailureCauseSection4 />
      <FailureCauseSection5 />
      {/* <MethodologySection /> */}
      <ClosingCTASection
        eyebrow="Avaliação Técnica"
        title="QUANDO UM ATIVO, COMPONENTE OU FERRAMENTAL EXIGE UMA ALTERNATIVA TÉCNICA, A FERTEC AVALIA, DESENVOLVE E EXECUTA."
        text="Apresente sua aplicação à Fertec."
      />
    </>
  );
}
