"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AboutIntroSection() {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto flex max-w-3xl flex-col gap-6"
      >
        <motion.div variants={fadeInUp}>
          <Eyebrow>Quem Somos</Eyebrow>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <SectionTitle as="h2">Engenharia como ponto de partida</SectionTitle>
        </motion.div>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          A Fertec é uma empresa de engenharia mecânica aplicada à
          confiabilidade operacional. Atuamos onde falhas recorrentes,
          obsolescência de componentes e instabilidade operacional deixam de
          ser tratadas como rotina e passam a exigir uma resposta de
          engenharia.
        </motion.p>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          Nosso trabalho começa antes da fabricação: caracterizamos o modo de
          falha, revisamos a engenharia do componente e só então definimos a
          melhor forma de executá-lo. Essa ordem — engenharia antes de
          manufatura — é o que diferencia uma reengenharia de uma simples
          cópia.
        </motion.p>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          Atendemos plantas industriais que dependem de componentes críticos
          para operar com previsibilidade, e que precisam de um parceiro
          técnico capaz de entender a causa da falha — não apenas reproduzir
          a peça que falhou.
        </motion.p>
      </motion.div>
    </section>
  );
}
