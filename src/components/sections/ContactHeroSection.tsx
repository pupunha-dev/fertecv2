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
        className="mx-auto flex max-w-[1280px] flex-col gap-6"
      >
        <motion.div variants={fadeInUp}>
          <Eyebrow>Avaliação Técnica</Eyebrow>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="max-w-3xl font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold uppercase leading-[1.05] text-text-primary"
        >
          NOVAS POSSIBILIDADES COMEÇAM PELA COMPREENSÃO DE UMA NECESSIDADE TÉCNICA.
        </motion.h1>
      </motion.div>
    </section>
  );
}
