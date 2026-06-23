"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const RESULTS = [
  "Redução de paradas não planejadas",
  "Aumento da vida útil de componentes críticos",
  "Independência de fornecedores OEM internacionais",
  "Maior previsibilidade da manutenção",
  "Padronização de componentes reengenheirados",
  "Redução de custos com importação de peças",
];

export default function ResultsSection() {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow>Resultados Operacionais</Eyebrow>
        <SectionTitle as="h2" className="mt-4 max-w-3xl">
          Resultados operacionais
        </SectionTitle>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {RESULTS.map((item) => (
            <motion.div key={item} variants={fadeInUp} className="flex items-start gap-3">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
              <span className="font-sans text-base font-medium text-text-primary">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
          className="mt-16 text-center font-display text-3xl font-bold uppercase leading-snug text-text-primary sm:text-4xl"
        >
          Confiabilidade operacional como resultado da engenharia.
        </motion.p>
      </div>
    </section>
  );
}
