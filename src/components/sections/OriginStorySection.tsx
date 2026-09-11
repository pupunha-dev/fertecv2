"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import OrangeRule from "@/components/ui/OrangeRule";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function OriginStorySection() {
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
          <Eyebrow>Evolução Técnica</Eyebrow>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <SectionTitle as="h2">Evolução técnica</SectionTitle>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <OrangeRule />
        </motion.div>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          Todo componente existente traz informações sobre sua aplicação.
        </motion.p>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          Geometria, materiais, interfaces e sinais de desgaste ajudam a
          compreender como foi concebido e como se comporta em operação.
        </motion.p>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          Evoluir não significa alterar por princípio. Significa preservar o
          que permanece adequado e concentrar a engenharia nos pontos que
          justificam revisão ou aprimoramento.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="font-display text-2xl font-bold uppercase leading-snug text-text-accent sm:text-3xl"
        >
          Toda alteração precisa ter uma razão técnica.
        </motion.p>
      </motion.div>
    </section>
  );
}
