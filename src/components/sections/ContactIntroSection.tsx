"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ContactIntroSection() {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] pb-[clamp(2rem,4vw,3rem)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto flex max-w-[1280px] flex-col gap-4"
      >
        <motion.p variants={fadeInUp} className="max-w-2xl font-sans text-base text-text-secondary sm:text-lg">
          Nem todo desenvolvimento começa com todas as definições estabelecidas.
        </motion.p>

        <motion.p variants={fadeInUp} className="max-w-2xl font-sans text-base text-text-secondary sm:text-lg">
          Desenhos, amostras físicas, histórico operacional e demais informações disponíveis podem ser suficientes para iniciar uma avaliação.
        </motion.p>

        <motion.p variants={fadeInUp} className="max-w-2xl font-sans text-base text-text-secondary sm:text-lg">
          A partir dessas informações, a Fertec busca compreender a necessidade e definir os próximos passos.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="mt-2 font-display text-2xl font-bold uppercase leading-snug text-text-accent sm:text-3xl"
        >
          Apresente sua aplicação à Fertec.
        </motion.p>
      </motion.div>
    </section>
  );
}
