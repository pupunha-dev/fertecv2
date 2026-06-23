"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/outline";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";

const CAPABILITIES = [
  {
    title: "Reengenharia de componentes industriais críticos",
    description:
      "Revisão completa do projeto a partir do modo de falha real — geometria, material, tolerâncias e processo. Aplicável a eixos, buchas, mancais, engrenagens, dispositivos de fixação e demais componentes críticos de máquinas e linhas de produção.",
    image: "/images/pages/indimg7.png",
  },
  {
    title: "Soluções para obsolescência industrial",
    description:
      "Quando o fabricante original descontinua um componente, desenvolvemos uma solução funcional equivalente ou superior, validada para a aplicação real — sem depender de importação ou de fornecedores exclusivos.",
    image: "/images/pages/indimg8.png",
  },
  {
    title: "Dispositivos mecânicos especiais",
    description:
      "Projeto e execução de dispositivos sob medida para operações específicas — gabaritos de montagem, dispositivos de fixação e ferramentais de processo — desenvolvidos a partir da necessidade real da operação.",
    image: "/images/pages/indimg9.png",
  },
  {
    title: "Componentes críticos para moldes industriais",
    description:
      "Reengenharia de elementos de moldes sujeitos a desgaste, fadiga térmica e impacto — postiços, machos, buchas de extração e sistemas de refrigeração — com foco em vida útil e repetibilidade dimensional.",
    image: "/images/pages/indimg10.png",
  },
  {
    title: "Melhoria de confiabilidade mecânica",
    description:
      "Revisão de componentes com desempenho instável, com ajustes de geometria, material e acabamento que aumentam a estabilidade do conjunto mecânico em operação.",
    image: "/images/pages/indimg1.png",
  },
  {
    title: "Manufatura técnica de precisão",
    description:
      "Execução do componente reengenheirado com controle dimensional rigoroso — usinagem CNC, retífica e processos complementares aplicados como etapa final de um projeto de engenharia, nunca como ponto de partida.",
    image: "/images/pages/indimg2.png",
  },
];

export default function CapabilitiesAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow>Capacidades Técnicas</Eyebrow>
        <SectionTitle as="h2" className="mt-4 max-w-3xl">
          Manufatura como consequência da engenharia
        </SectionTitle>

        <div className="mt-12 flex flex-col gap-4">
          {CAPABILITIES.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.title}
                className={`border border-border-subtle bg-bg-deep transition-colors duration-200 ${
                  isOpen ? "border-border-active" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <h3 className="font-display text-xl font-bold uppercase text-text-primary sm:text-2xl">
                    {item.title}
                  </h3>
                  <PlusIcon
                    className={`h-6 w-6 shrink-0 text-orange transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-6 p-6 pt-0 lg:grid-cols-[2fr_1fr]">
                        <p className="font-sans text-sm leading-relaxed text-text-secondary sm:text-base">
                          {item.description}
                        </p>
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            loading="lazy"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
