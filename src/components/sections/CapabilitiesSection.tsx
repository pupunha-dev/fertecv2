"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const CAPABILITIES = [
  {
    title: "Reengenharia de componentes industriais críticos",
    description:
      "Revisão de projeto a partir do modo de falha real, antes de qualquer fabricação.",
  },
  {
    title: "Soluções para obsolescência industrial",
    description:
      "Substituição funcional de componentes descontinuados pelo fabricante original.",
  },
  {
    title: "Dispositivos mecânicos especiais",
    description:
      "Projetos sob medida para aplicações fora do padrão, alinhados à condição real de operação.",
  },
  {
    title: "Componentes críticos para moldes industriais",
    description:
      "Elementos de moldes reengenheirados para maior vida útil e repetibilidade dimensional.",
  },
  {
    title: "Melhoria de confiabilidade mecânica",
    description:
      "Ajustes de geometria e material que aumentam a estabilidade do componente em operação.",
  },
  {
    title: "Manufatura técnica de precisão",
    description:
      "Execução controlada do componente reengenheirado, como consequência da engenharia aplicada.",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="bg-bg-deep px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,6vw,5rem)]">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow>Engenharia Aplicada a Resultado</Eyebrow>
        <SectionTitle as="h2" className="mt-4 max-w-3xl">
          Capacidades
        </SectionTitle>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-6 grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-y-10"
        >
          {CAPABILITIES.map((item) => (
            <motion.div key={item.title} variants={fadeInUp} className="flex flex-col gap-2">
              <h3 className="font-display text-xl font-bold uppercase text-text-primary">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
          className="mt-8 max-w-3xl font-display text-2xl font-bold uppercase leading-snug text-text-primary sm:text-3xl lg:mt-16"
        >
          Usinagem de precisão é consequência da engenharia — nunca o ponto de
          partida.
        </motion.p>
      </div>
    </section>
  );
}
