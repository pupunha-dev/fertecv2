"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function FailureCauseSection() {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,6vw,5rem)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto grid max-w-[1280px] grid-cols-1 items-stretch gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12"
      >
        <motion.div
          variants={fadeInUp}
          className="relative aspect-[4/5] w-full overflow-hidden bg-bg-surface lg:aspect-auto lg:min-h-[360px]"
        >
          <Image
            src="/images/pages/REENGENHARIA.png"
            alt="Reengenharia de componentes críticos"
            fill
            loading="lazy"
            className="object-contain"
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div variants={fadeInUp}>
            <SectionTitle as="h2" size="sm">REENGENHARIA DE COMPONENTES CRÍTICOS</SectionTitle>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="font-sans text-base font-medium leading-relaxed text-text-primary sm:text-lg"
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
