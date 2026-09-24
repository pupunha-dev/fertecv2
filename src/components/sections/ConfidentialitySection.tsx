"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ConfidentialitySection() {
  return (
    <section className="bg-bg-deep px-[clamp(1.5rem,5vw,4rem)] pb-[clamp(3rem,6vw,5rem)] pt-[clamp(2rem,4vw,3rem)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto flex max-w-[1280px] flex-col gap-4"
      >
        <motion.div variants={fadeInUp} className="lg:max-w-[80%]">
          <Eyebrow>Confidencialidade</Eyebrow>
        </motion.div>

        <motion.div variants={fadeInUp} className="lg:max-w-[80%]">
          <SectionTitle as="h2">
            A proteção da propriedade intelectual integra nossa atuação
          </SectionTitle>
        </motion.div>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg lg:max-w-[80%]">
          Informações técnicas, geometrias, identificações, contextos de aplicação e
          detalhes visuais apresentados nesta biblioteca podem ter sido omitidos,
          tratados ou parcialmente recompostos para preservar a confidencialidade dos
          projetos desenvolvidos para nossos clientes.
        </motion.p>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg lg:max-w-[80%]">
          As imagens têm finalidade técnica e institucional e respeitam os limites de
          divulgação definidos para cada projeto.
        </motion.p>
      </motion.div>
    </section>
  );
}
