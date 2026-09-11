"use client";

import { motion, useReducedMotion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ContactHeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? "visible" : "hidden";

  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] pb-[2rem] pt-[15vh]">
      <motion.div
        initial={initial}
        animate="visible"
        variants={staggerContainer}
        className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center"
      >
        <motion.div variants={fadeInUp}>
          <Eyebrow>Avaliação Técnica</Eyebrow>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="font-display text-[clamp(2rem,5vw,4rem)] font-extrabold uppercase leading-tight text-text-primary"
        >
          NOVAS POSSIBILIDADES COMEÇAM PELA COMPREENSÃO DE UMA NECESSIDADE TÉCNICA.
        </motion.h1>
      </motion.div>
    </section>
  );
}
