"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const PRINCIPLES = [
  {
    title: "Engenharia antes da fabricação",
    description:
      "Nenhum componente é fabricado antes de o problema ser compreendido. O projeto vem primeiro.",
  },
  {
    title: "Reengenharia em vez de cópia",
    description:
      "Reproduzir uma peça obsoleta perpetua a falha. Reengenheirar resolve a causa.",
  },
  {
    title: "Melhorar sempre que possível",
    description:
      "Cada componente revisado é uma oportunidade de aumentar vida útil e estabilidade operacional.",
  },
  {
    title: "Confiabilidade como resultado",
    description:
      "O objetivo final não é a peça entregue — é a operação estável e previsível.",
  },
];

export default function PhilosophySection() {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow>Filosofia</Eyebrow>
        <SectionTitle as="h2" className="mt-4 max-w-3xl">
          Princípios que orientam cada projeto
        </SectionTitle>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PRINCIPLES.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="flex flex-col gap-3 border-t-2 border-orange bg-bg-deep p-6"
            >
              <h3 className="font-display text-lg font-bold uppercase text-text-primary">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
