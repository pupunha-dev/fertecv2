"use client";

import { motion } from "framer-motion";
import {
  ArchiveBoxXMarkIcon,
  GlobeAltIcon,
  ArrowPathIcon,
  ExclamationTriangleIcon,
  Cog6ToothIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Button from "../ui/Button";

const PAIN_POINTS = [
  {
    icon: ArchiveBoxXMarkIcon,
    title: "Obsolescência industrial",
    description:
      "Desenvolvimento de alternativas para componentes descontinuados, indisponíveis ou com fornecimento restrito ao fabricante original.",
  },
  {
    icon: GlobeAltIcon,
    title: "Reengenharia de componentes críticos",
    description:
      "Análise e revisão de componentes sujeitos a falhas recorrentes, desgaste ou vida útil insuficiente, considerando materiais, tratamentos térmicos, geometria, tolerâncias e demais características que influenciam seu desempenho.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Dispositivos mecânicos especiais",
    description:
      "Desenvolvimento de dispositivos para metrologia, inspeção, controle dimensional, montagem, posicionamento e aplicações industriais específicas",
  },
  {
    icon: CubeIcon,
    title: "Manufatura técnica",
    description:
      "Fabricação, recuperação, ajustagem, montagem e controle dimensional de componentes, dispositivos e ferramentais conforme os requisitos de cada aplicação.",
  },
  {
    icon: CubeIcon,
    title: "MOLDES E FERRAMENTAIS INDUSTRIAIS",
    description:
      "Manutenção, recuperação, modernização e reengenharia de moldes, ferramentais e seus componentes críticos.",
  },
];

export default function PainPointsSection() {
  return (
    <section className="bg-bg-deep px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow>Desafios da Operação</Eyebrow>
        <SectionTitle as="h2" className="mt-4 max-w-3xl">
          Especialidades
        </SectionTitle>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PAIN_POINTS.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-4 border border-border-subtle bg-bg-surface p-6 transition-colors duration-200 hover:border-border-active"
            >
              <item.icon className="h-8 w-8 stroke-orange text-orange" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-bold uppercase text-text-primary sm:text-2xl">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center mt-8 ml-6"
        >
          <Button href="/especialidades" variant="primary">
            CONHEÇA NOSSAS ESPECIALIDADES
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
