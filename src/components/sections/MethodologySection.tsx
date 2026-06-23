"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const STEPS = [
  {
    number: "01",
    title: "Caracterização do modo de falha",
    description:
      "Levantamento técnico do histórico de falhas, das condições de operação e dos mecanismos de degradação do componente.",
  },
  {
    number: "02",
    title: "Reengenharia funcional",
    description:
      "Revisão da função do componente dentro do sistema, identificando o que de fato precisa ser resolvido na engenharia.",
  },
  {
    number: "03",
    title: "Adequação de materiais e geometria",
    description:
      "Seleção de materiais e ajuste de geometria compatíveis com os esforços reais identificados na operação.",
  },
  {
    number: "04",
    title: "Comportamento mecânico da aplicação",
    description:
      "Análise do comportamento do componente sob carga, vibração, temperatura e demais variáveis da aplicação real.",
  },
  {
    number: "05",
    title: "Estabilidade e previsibilidade operacional",
    description:
      "Validação de que a solução proposta resulta em comportamento estável e previsível em operação contínua.",
  },
  {
    number: "06",
    title: "Resultado operacional mensurado",
    description:
      "Acompanhamento do componente em campo para confirmar, com dados, o resultado técnico obtido.",
  },
];

export default function MethodologySection() {
  return (
    <section className="bg-bg-deep px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow>Metodologia</Eyebrow>
        <SectionTitle as="h2" className="mt-4 max-w-3xl">
          Engenharia aplicada em 6 etapas
        </SectionTitle>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mt-16 flex flex-col"
        >
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className={`grid grid-cols-[auto_1fr] gap-6 border-line-rule py-8 sm:grid-cols-[6rem_1fr] sm:gap-10 ${
                index !== STEPS.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="font-mono text-4xl text-orange sm:text-5xl">{step.number}</span>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl font-bold uppercase text-text-primary sm:text-2xl">
                  {step.title}
                </h3>
                <p className="max-w-2xl font-sans text-sm text-text-secondary sm:text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
