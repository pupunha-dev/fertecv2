"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function MissionVisionValuesSection() {
  return (
    <section className="bg-bg-deep px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto flex max-w-3xl flex-col gap-6"
      >
        <motion.div variants={fadeInUp}>
          <Eyebrow>Fertec Ferramentaria Técnica</Eyebrow>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <SectionTitle as="h2">Fertec ferramentaria técnica</SectionTitle>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="font-display text-2xl font-bold uppercase leading-snug text-text-accent sm:text-3xl"
        >
          Engenharia, experiência em ferramentaria e capacidade de execução.
        </motion.p>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          Na Fertec, desenvolvimento e execução fazem parte do mesmo processo
          técnico.
        </motion.p>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          Essa integração orienta nossa atuação em componentes, dispositivos e
          ferramentais industriais, desde a compreensão da necessidade até a
          execução.
        </motion.p>
      </motion.div>
    </section>
  );
}
