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
import OrangeRule from "@/components/ui/OrangeRule";
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
    title: "MOLDES E FERRAMENTAIS INDUSTRIAIS",
    description:
      "Manutenção, recuperação, modernização e reengenharia de moldes, ferramentais e seus componentes críticos.",
  },
  {
    icon: CubeIcon,
    title: "Manufatura técnica",
    description:
      "Fabricação, recuperação, ajustagem, montagem e controle dimensional de componentes, dispositivos e ferramentais conforme os requisitos de cada aplicação.",
  },

];

export default function PainPointsSection() {
  return (
    <section className="bg-bg-deep px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,6vw,5rem)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-4 border-b border-border-subtle pb-4 lg:gap-6">
          <Eyebrow>Ativos Industriais</Eyebrow>


          <SectionTitle as="h2" className="max-w-3xl">
            Preservar a capacidade produtiva de ativos estratégicos.
          </SectionTitle>

          <OrangeRule />

          <div className="grid grid-cols-1 gap-x-12 gap-y-4 lg:grid-cols-2">
            <p className="font-sans text-base text-text-secondary sm:text-lg">
              A vida útil de um ativo industrial muitas vezes supera o ciclo de
              fornecimento de seus componentes. Descontinuidade, indisponibilidade
              ou ausência de documentação técnica podem comprometer equipamentos
              que continuam relevantes para o processo produtivo.
            </p>

            <p className="font-sans text-base text-text-secondary sm:text-lg">
              Nessas situações, reconstruir as informações técnicas necessárias
              permite desenvolver alternativas compatíveis com a função, as
              interfaces e as condições de operação.
            </p>
          </div>
        </div>

        <SectionTitle as="h2" className="mt-10 max-w-3xl lg:mt-14">
          Especialidades
        </SectionTitle>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:mt-8 lg:grid-cols-3"
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
              <h3 className="font-display text-lg font-bold uppercase text-text-primary sm:text-xl">
                {item.title}
              </h3>
              <p className="font-sans text-base text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center gap-4 pt-2 sm:flex-row sm:items-center sm:justify-start mt-6 sm:ml-6 lg:mt-8"
        >
          <Button href="/especialidades" variant="primary">
            CONHEÇA NOSSAS ESPECIALIDADES
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
