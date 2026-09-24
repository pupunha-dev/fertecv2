"use client";

import { motion } from "framer-motion";
import OrangeRule from "@/components/ui/OrangeRule";
import { fadeInUp } from "@/lib/animations";

export default function ProcessIntroContent() {
  return (
    <div className="mt-8 flex flex-col gap-6">
      <motion.p variants={fadeInUp} className="max-w-full lg:max-w-[45%] font-sans text-base text-text-secondary sm:text-lg">
        Cada trabalho começa pela identificação do que precisa ser preservado, reconstruído, desenvolvido, recuperado ou executado.
      </motion.p>

      <motion.p variants={fadeInUp} className="max-w-full lg:max-w-[45%] font-sans text-base text-text-secondary sm:text-lg">
        Desenhos, amostras físicas, histórico operacional, falhas observadas, interfaces mecânicas, requisitos de inspeção e condições de uso podem fornecer as informações necessárias para essa análise.
      </motion.p>

      <motion.p variants={fadeInUp} className="max-w-full lg:max-w-[45%] font-sans text-base text-text-secondary sm:text-lg">
        A partir dessa compreensão, são definidas as etapas seguintes.
      </motion.p>

      <motion.div variants={fadeInUp} className="pt-2">
        <OrangeRule />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="flex flex-row flex-wrap gap-x-3 gap-y-2"
      >
        {["COMPREENDER", "DESENVOLVER", "EXECUTAR", "VALIDAR"].map((step, index, arr) => (
          <span key={step} className="flex flex-row items-center gap-3">
            <span className="font-display text-lg font-extrabold uppercase tracking-wide text-orange sm:text-2xl lg:text-3xl">
              {step}
            </span>
            {index < arr.length - 1 && (
              <span
                aria-hidden="true"
                className="font-display text-lg font-extrabold text-orange sm:text-2xl lg:text-3xl"
              >
                →
              </span>
            )}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
