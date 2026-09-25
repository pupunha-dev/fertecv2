"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface ClosingCTASectionProps {
  eyebrow: string;
  title: string;
  text: string;
  text2?: string;
}

export default function ClosingCTASection({ eyebrow, title, text, text2 }: ClosingCTASectionProps) {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,6vw,5rem)]">
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
        <motion.p
          variants={fadeInUp}
          className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          {text}
        </motion.p>

        {text2 && (
          <motion.p
            variants={fadeInUp}
            className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            {text2}
          </motion.p>
        )}

        {/* Solicitar avaliação técnica block  */}
        <motion.div variants={fadeInUp} className="w-full sm:w-auto">
          <Button href="/contato" variant="primary" className="w-full normal-case sm:w-auto" >
            <span className="capitalize text-[14px]">Solicitar Avaliação Técnica</span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
