import type { Metadata } from "next";
import ContactHeroSection from "@/components/sections/ContactHeroSection";
import ContactIntroSection from "@/components/sections/ContactIntroSection";
import ContactInfoSection from "@/components/sections/ContactInfoSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Avaliação Técnica | Fertec — Engenharia Aplicada",
  description:
    "Solicite uma avaliação técnica da Fertec para falhas recorrentes, obsolescência industrial ou componentes críticos da sua operação.",
};

export default function AvaliacaoTecnicaPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactIntroSection />
      <ContactInfoSection />
      {/* <ContactSection /> */}
    </>
  );
}
