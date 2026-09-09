"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Button from "../ui/Button";

const STEPS = [
  {
    number: "01",
    title: "Compreender",
    description:
      "Desenhos · Amostras · Histórico · Função · Interfaces · Requisitos · Condições de operação",
  },
  {
    number: "02",
    title: "Desenvolver",
    description:
      "Materiais · Tratamentos térmicos · Geometria · Tolerâncias · Ajustes · Requisitos funcionais",
  },
  {
    number: "03",
    title: "Executar",
    description:
      "Manufatura técnica · Recuperação · Ajustagem · Montagem · Controle dimensional",
  },
  {
    number: "04",
    title: "Validar",
    description:
      "Conformidade · Função · Comportamento em operação",
  },
];

export default function ProcessFlowSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow>PROCESSOS</Eyebrow>
        <SectionTitle as="h2" className="mt-4 max-w-3xl">
          MÉTODO FERTEC
        </SectionTitle>

        {/* Desktop: horizontal steps with connecting line */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="relative mt-16 hidden lg:grid lg:grid-cols-5 lg:gap-6"
        >
          <div className="pointer-events-none absolute left-0 right-0 top-7 h-px bg-orange" />
          {STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative flex flex-col gap-4 bg-bg-void pr-6"
            >
              <span className="font-mono text-4xl text-orange">{step.number}</span>
              <h3 className="font-display text-xl font-bold uppercase text-text-primary">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile / tablet: vertical accordion */}
        <div className="mt-12 flex flex-col border-t border-line-rule lg:hidden">
          {STEPS.map((step, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={step.number} className="border-b border-line-rule">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-2xl text-orange">{step.number}</span>
                    <span className="font-display text-lg font-bold uppercase text-text-primary">
                      {step.title}
                    </span>
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-text-secondary transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 font-sans text-sm text-text-secondary">
                        {step.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center mt-8"
        >
          <Button href="/metodo-fertec" variant="primary">
            CONHEÇA NOSSO PROCESSO
          </Button>
        </motion.div>
      </div>

    </section>
  );
}
