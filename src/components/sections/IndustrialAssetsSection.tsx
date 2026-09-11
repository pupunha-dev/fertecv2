"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import OrangeRule from "@/components/ui/OrangeRule";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function IndustrialAssetsSection() {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto flex max-w-[900px] flex-col gap-6"
      >
        <motion.div variants={fadeInUp}>
          <Eyebrow>Ativos Industriais</Eyebrow>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <SectionTitle as="h2">
            Preservar a capacidade produtiva de ativos estratégicos.
          </SectionTitle>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <OrangeRule />
        </motion.div>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          A vida útil de um ativo industrial muitas vezes supera o ciclo de
          fornecimento de seus componentes.
        </motion.p>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          Descontinuidade, indisponibilidade ou ausência de documentação
          técnica podem comprometer equipamentos que continuam relevantes
          para o processo produtivo.
        </motion.p>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          Nessas situações, reconstruir as informações técnicas necessárias
          permite desenvolver alternativas compatíveis com a função, as
          interfaces e as condições de operação.
        </motion.p>
      </motion.div>
    </section>
  );
}
