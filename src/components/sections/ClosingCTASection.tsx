"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface ClosingCTASectionProps {
  eyebrow: string;
  title: string;
}

export default function ClosingCTASection({ eyebrow, title }: ClosingCTASectionProps) {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={staggerContainer}
        className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center"
      >
        <motion.div variants={fadeInUp}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="font-display text-3xl font-bold uppercase leading-snug text-text-primary sm:text-4xl"
        >
          {title}
        </motion.h2>

        <motion.div variants={fadeInUp}>
          <Button href="/contato" variant="primary">
            Solicitar Avaliação Técnica
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
