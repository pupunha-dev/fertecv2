"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const DIFFERENTIALS = [
  "Diagnóstico técnico aprofundado da causa raiz da falha",
  "Reengenharia do componente antes de qualquer fabricação",
  "Independência de fornecedores OEM internacionais",
  "Soluções para componentes obsoletos ou descontinuados",
  "Acompanhamento técnico do componente em operação",
];

export default function EngineeringSection() {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,6vw,5rem)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-8 lg:grid-cols-[3fr_2fr] lg:gap-12"
      >
        <div className="flex flex-col gap-6">
          <motion.div variants={fadeInUp}>
            <Eyebrow>Processo</Eyebrow>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <SectionTitle as="h2">MÉTODO FERTEC</SectionTitle>
          </motion.div>

          <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
            Falhas repetitivas comprometem produtividade, disponibilidade e
            segurança operacional. Antes de fabricar qualquer peça, a Fertec
            caracteriza o modo de falha e revisa a engenharia do componente —
            geometria, material e condição de trabalho — para que a solução
            resolva a causa, não apenas o sintoma.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="font-display text-2xl font-bold uppercase leading-snug text-text-accent sm:text-3xl"
          >
            Não substituímos componentes. Restauramos estabilidade e
            confiabilidade operacional.
          </motion.p>

          <motion.ul variants={fadeInUp} className="flex flex-col gap-3">
            {DIFFERENTIALS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-sans text-sm font-medium text-text-primary"
              >
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div variants={fadeInUp} className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src="/images/pages/indimg6.png"
            alt="Engenharia aplicada à reengenharia de componentes industriais"
            fill
            loading="lazy"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
