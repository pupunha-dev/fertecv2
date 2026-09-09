"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AboutIntroSection() {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto flex max-w-3xl flex-col gap-6"
      >
        <motion.div variants={fadeInUp}>
          <Eyebrow>PROCESSOS</Eyebrow>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <SectionTitle as="h2">UMA DECISÃO TÉCNICA CONSISTENTE COMEÇA PELA COMPREENSÃO DA NECESSIDADE E DOS REQUISITOS DA APLICAÇÃO.
          </SectionTitle>
        </motion.div>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          Cada trabalho começa pela identificação do que precisa ser preservado, reconstruído, desenvolvido, recuperado ou executado.

        </motion.p>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          Desenhos, amostras físicas, histórico operacional, falhas observadas, interfaces mecânicas, requisitos de inspeção e condições de uso podem fornecer as informações necessárias para essa análise. A partir dessa compreensão, são definidas as etapas seguintes.

        </motion.p>

        <motion.p variants={fadeInUp} className="font-sans text-base font-bold text-text-secondary sm:text-lg">
          COMPREENDER → DESENVOLVER → EXECUTAR → VALIDAR
        </motion.p>
      </motion.div>
    </section>
  );
}
