"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/outline";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";

const CAPABILITIES = [
  {
    title: "COMPREENDER",
    description:
      "A primeira etapa consiste em entender a necessidade apresentada e relacioná-la às informações disponíveis sobre a aplicação. Desenhos, amostras, histórico operacional, características do conjunto e condições de uso são analisados conforme sua relevância. Quando há falhas, desgaste ou desempenho insuficiente, essas evidências ajudam a compreender o comportamento observado em serviço. Quando a definição técnica já existe, a análise se concentra nos requisitos, interfaces, tolerâncias, montagem e condições de execução.",
    image: "/images/pages/indimg7.png",
  },
  {
    title: "DESENVOLVER",
    description:
      "As informações levantadas são transformadas nas definições técnicas necessárias ao projeto. Materiais e tratamentos térmicos são avaliados de acordo com as propriedades mecânicas e superficiais requeridas. Geometria e transições são definidas considerando carregamentos, solicitações mecânicas e restrições do conjunto. Tolerâncias, ajustes e acabamento superficial são definidos conforme a função das interfaces e suas condições de contato ou movimento. O desenvolvimento busca compatibilizar função, especificação e condições de execução.",
    image: "/images/pages/indimg8.png",
  },
  {
    title: "EXECUTAR",
    description:
      "A definição do processo considera referências geométricas, sequência de fabricação, efeitos dos tratamentos térmicos, ajustagem, montagem e estratégias de controle. Fabricação e controle são conduzidos para obter e verificar as características que influenciam o funcionamento do componente no conjunto.",
    image: "/images/pages/indimg9.png",
  },
  {
    title: "VALIDAR",
    description:
      "Conformidade dimensional, atendimento funcional e comportamento em operação representam níveis distintos de verificação. A extensão da validação depende da natureza do projeto. Inspeção dimensional, montagem, testes funcionais e, quando aplicável, avaliação em serviço verificam o atendimento aos requisitos estabelecidos. Os resultados também podem servir de referência para futuras intervenções.",
    image: "/images/pages/indimg10.png",
  },
];

export default function CapabilitiesAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[1rem]">
      <div className="mx-auto max-w-[1280px]">
        {/* <Eyebrow>Capacidades Técnicas</Eyebrow>
        <SectionTitle as="h2" className="mt-4 max-w-3xl">
          Manufatura como consequência da engenharia
        </SectionTitle> */}

        <div className="mt-12 flex flex-col gap-4">
          {CAPABILITIES.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.title}
                className={`border border-border-subtle bg-bg-deep transition-colors duration-200 ${isOpen ? "border-border-active" : ""
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
                    className={`h-6 w-6 shrink-0 text-orange transition-transform duration-200 ${isOpen ? "rotate-45" : ""
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
