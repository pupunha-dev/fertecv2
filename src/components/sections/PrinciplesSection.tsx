"use client";

import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  ScaleIcon,
  CheckBadgeIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const PRINCIPLES = [
  {
    icon: ShieldCheckIcon,
    title: "Segurança",
    description: "Projetos que priorizam a integridade da operação e das pessoas envolvidas.",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Responsabilidade Técnica",
    description: "Decisões de engenharia documentadas e tecnicamente justificadas.",
  },
  {
    icon: ClockIcon,
    title: "Disciplina Operacional",
    description: "Processos consistentes, do diagnóstico à entrega do componente.",
  },
  {
    icon: ScaleIcon,
    title: "Ética",
    description: "Relação transparente com clientes sobre prazos, limites e soluções técnicas.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Confiabilidade",
    description: "Compromisso com componentes que se comportam de forma previsível em operação.",
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "Melhoria Contínua",
    description: "Cada projeto revisado é uma oportunidade de elevar o padrão técnico anterior.",
  },
];

export default function PrinciplesSection() {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow>Princípios</Eyebrow>
        <SectionTitle as="h2" className="mt-4 max-w-3xl">
          O que orienta nosso trabalho
        </SectionTitle>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PRINCIPLES.map((item) => (
            <motion.div key={item.title} variants={fadeInUp} className="flex flex-col gap-4">
              <item.icon className="h-8 w-8 text-orange" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-bold uppercase text-text-primary">
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
