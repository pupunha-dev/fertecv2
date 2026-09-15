"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const TRIGGERS = [
  "Obsolescência",
  "Falhas recorrentes",
  "Vida útil insuficiente",
  "Ausência de documentação técnica",
  "Dependência do fabricante original",
  "Moldes e ferramentais",
  "Dispositivos especiais",
];

export default function TechnicalEvaluationSection() {
  return (
    <section className="bg-bg-deep px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,6vw,5rem)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto flex max-w-[1280px] flex-col gap-4 lg:gap-6"
      >
        <motion.div variants={fadeInUp}>
          <Eyebrow>Avaliação Técnica</Eyebrow>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <SectionTitle as="h2">
            Quando uma limitação técnica compromete o desempenho do seu
            ativo, a abordagem convencional nem sempre é suficiente.
          </SectionTitle>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="font-sans text-sm font-medium uppercase tracking-[0.05em] text-text-accent sm:text-base"
        >
          {TRIGGERS.join(" · ")}
        </motion.p>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          Essas situações podem exigir uma avaliação técnica antes da
          definição dos próximos passos.
        </motion.p>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          A Fertec analisa a necessidade, desenvolve as definições necessárias
          e executa a alternativa de acordo com os requisitos da aplicação.
        </motion.p>

        <motion.div variants={fadeInUp} className="pt-4">
          <Button href="/contato" variant="primary">
            SOLICITE UMA AVALIAÇÃO TÉCNICA
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
