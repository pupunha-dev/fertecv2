"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function PhilosophySection() {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[clamp(1.5rem,3vw,2.5rem)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto flex max-w-[1280px] flex-col gap-4"
      >
        <motion.div variants={fadeInUp}>
          {/* <Eyebrow>Experiência Transformada em Conhecimento</Eyebrow> */}
        </motion.div>

        <motion.div variants={fadeInUp}>
          <SectionTitle as="h2">Experiência transformada em conhecimento</SectionTitle>
        </motion.div>

        <motion.p variants={fadeInUp} className="max-w-full lg:max-w-[80%] font-sans text-base text-text-secondary sm:text-lg">
          A integração entre engenharia, ferramentaria e manufatura mantém as
          decisões técnicas próximas da realidade de fabricação, montagem e
          operação.
        </motion.p>

        <motion.p variants={fadeInUp} className="max-w-full lg:max-w-[80%] font-sans text-base text-text-secondary sm:text-lg">
          Soluções validadas, dificuldades encontradas e resultados observados
          ampliam o conhecimento acumulado e servem de referência para novos
          trabalhos.
        </motion.p>
      </motion.div>
    </section>
  );
}
