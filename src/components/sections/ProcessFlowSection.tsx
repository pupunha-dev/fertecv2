"use client";

import { motion } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
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
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,6vw,5rem)]">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow>PROCESSO</Eyebrow>
        <SectionTitle as="h2" className="mt-4 max-w-3xl">
          MÉTODO FERTEC
        </SectionTitle>
        <p className="mt-4 max-w-none font-sans text-base text-text-secondary sm:text-lg">
          Cada projeto parte da necessidade apresentada, das informações
          disponíveis e dos requisitos da aplicação.
        </p>

        {/* Desktop: horizontal steps with connecting arrows */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-16 hidden lg:flex lg:w-full lg:items-start"
        >
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-1 items-start"
            >
              <motion.div
                variants={fadeInUp}
                className="flex w-full flex-col items-start gap-4 text-left"
              >
                <h3 className="font-display text-xl font-bold uppercase text-text-primary">
                  {step.title}
                </h3>
                <p className="font-sans text-base text-text-secondary">{step.description}</p>
              </motion.div>

              {index < STEPS.length - 1 && (
                <motion.svg
                  variants={fadeInUp}
                  className="mt-8 h-5 w-9 shrink-0 text-orange mx-2"
                  viewBox="0 0 32 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M1 10H31M31 10L22 1M31 10L22 19"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              )}
            </div>
          ))}
        </motion.div>

        {/* Mobile / tablet: fixed vertical flow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-6 flex flex-col border-t border-line-rule lg:hidden"
        >
          {STEPS.map((step, index) => (
            <motion.div key={step.number} variants={fadeInUp}>
              <div className="flex items-center justify-between gap-4 border-b border-line-rule py-4 lg:py-6">
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg font-bold uppercase text-text-primary">
                    {step.title}
                  </h3>
                  <p className="font-sans text-base text-text-secondary">{step.description}</p>
                </div>
                {index < STEPS.length - 1 && (
                  <ArrowDownIcon
                    className="h-5 w-5 shrink-0 text-orange"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center mt-6 lg:mt-8"
        >
          <Button href="/processo" variant="primary">
            CONHEÇA NOSSO PROCESSO
          </Button>
        </motion.div>
      </div>

    </section>
  );
}
