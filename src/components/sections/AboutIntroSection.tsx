"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AboutIntroSection() {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[clamp(2rem,4vw,3rem)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto flex max-w-[1280px] flex-col gap-4"
      >
        <motion.div variants={fadeInUp}>
          <Eyebrow>Decisões Técnicas</Eyebrow>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <SectionTitle as="h2">Decisões técnicas</SectionTitle>
        </motion.div>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          Antes da fabricação, decisões sobre materiais, geometria,
          tolerâncias, interfaces e demais características já influenciam o
          comportamento de um componente em serviço.
        </motion.p>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          Essas definições estão relacionadas entre si e, em conjunto,
          determinam características importantes para o funcionamento da
          aplicação.
        </motion.p>
      </motion.div>
    </section>
  );
}
