"use client";

import { motion } from "framer-motion";
import OrangeRule from "@/components/ui/OrangeRule";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AboutIntroSection() {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,6vw,5rem)] mb-[-50px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto flex max-w-[1280px] flex-col gap-6"
      >
        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          Cada trabalho começa pela identificação do que precisa ser preservado, reconstruído, desenvolvido, recuperado ou executado.
        </motion.p>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          Desenhos, amostras físicas, histórico operacional, falhas observadas, interfaces mecânicas, requisitos de inspeção e condições de uso podem fornecer as informações necessárias para essa análise. A partir dessa compreensão, são definidas as etapas seguintes.
        </motion.p>

        <motion.div variants={fadeInUp} className="pt-2">
          <OrangeRule />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="hidden sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-3"
        >
          {["COMPREENDER", "DESENVOLVER", "EXECUTAR", "VALIDAR"].map((step, index, arr) => (
            <span key={step} className="flex flex-row items-center gap-3">
              <span className="font-display text-2xl font-extrabold uppercase tracking-wide text-orange lg:text-3xl">
                {step}
              </span>
              {index < arr.length - 1 && (
                <span
                  aria-hidden="true"
                  className="font-display text-2xl font-extrabold text-orange lg:text-3xl"
                >
                  →
                </span>
              )}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
