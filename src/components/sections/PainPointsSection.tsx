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

const PAIN_POINTS = [
  {
    icon: ArchiveBoxXMarkIcon,
    title: "Obsolescência industrial",
    description:
      "Componentes descontinuados pelo fabricante original comprometem a continuidade operacional e a manutenção de equipamentos críticos.",
  },
  {
    icon: GlobeAltIcon,
    title: "Dependência de OEM internacional",
    description:
      "Prazos longos, custos elevados e indisponibilidade de peças importadas expõem a operação a riscos desnecessários.",
  },
  {
    icon: ArrowPathIcon,
    title: "Falhas recorrentes",
    description:
      "Quando a mesma falha volta a ocorrer após reparo, o problema não está na peça — está na engenharia que não foi revisada.",
  },
  {
    icon: ExclamationTriangleIcon,
    title: "Instabilidade operacional",
    description:
      "Variações de desempenho e paradas não planejadas indicam um comportamento mecânico que precisa ser caracterizado e corrigido.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Dispositivos mecânicos especiais",
    description:
      "Aplicações fora do padrão exigem dispositivos projetados sob medida para a real condição de operação da planta.",
  },
  {
    icon: CubeIcon,
    title: "Componentes críticos para moldes industriais",
    description:
      "Elementos de moldes sujeitos a desgaste e fadiga exigem reengenharia para garantir vida útil e repetibilidade dimensional.",
  },
];

export default function PainPointsSection() {
  return (
    <section className="bg-bg-deep px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow>Desafios da Operação</Eyebrow>
        <SectionTitle as="h2" className="mt-4 max-w-3xl">
          Onde a engenharia se torna necessária
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
      </div>
    </section>
  );
}
