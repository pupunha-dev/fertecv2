"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const ITEMS = [
  {
    title: "Missão",
    description:
      "Aplicar engenharia mecânica para resolver a causa raiz de falhas recorrentes, devolvendo estabilidade e confiabilidade à operação industrial.",
  },
  {
    title: "Visão",
    description:
      "Ser referência em reengenharia de componentes críticos e em soluções para obsolescência industrial.",
  },
  {
    title: "Valores",
    description:
      "Segurança, responsabilidade técnica, disciplina operacional, ética, confiabilidade e melhoria contínua em cada projeto.",
  },
];

export default function MissionVisionValuesSection() {
  return (
    <section className="bg-bg-deep px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 sm:grid-cols-3"
      >
        {ITEMS.map((item) => (
          <motion.div key={item.title} variants={fadeInUp} className="flex flex-col gap-3">
            <h3 className="font-display text-2xl font-bold uppercase text-orange">{item.title}</h3>
            <p className="font-sans text-sm text-text-secondary sm:text-base">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
