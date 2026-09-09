"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function FailureCauseSection() {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr]"
      >
        <div className="flex flex-col gap-4 lg:sticky lg:top-32 lg:self-start">
          <motion.div variants={fadeInUp}>
            <Eyebrow>Especialidades</Eyebrow>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <SectionTitle as="h2">REENGENHARIA DE COMPONENTES CRÍTICOS
            </SectionTitle>
          </motion.div>
        </div>

        <div className="flex flex-col gap-6">
          <motion.p
            variants={fadeInUp}
            className="font-sans text-lg leading-relaxed text-text-primary sm:text-xl"
          >
            REVISÃO TÉCNICA ORIENTADA PELO COMPORTAMENTO DO COMPONENTE EM SERVIÇO.
          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
            Falhas recorrentes, desgaste prematuro ou vida útil insuficiente podem indicar a necessidade de rever as definições do componente.

          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
            Materiais, tratamentos térmicos, geometria, tolerâncias, ajustes, acabamento superficial e interfaces são analisados de acordo com sua influência sobre a função e o desempenho observado.

          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
            A análise orienta as especificações da nova configuração de acordo com as condições identificadas na aplicação.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
