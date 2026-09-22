"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const COMPREENDER_TAGS = [
  "Desenhos",
  "Amostras",
  "Histórico",
  "Função",
  "Interfaces",
  "Tolerâncias",
  "Modos de Falha",
  "Condições de operação",
];

const DESENVOLVER_TAGS = [
  "Materiais",
  "Tratamentos térmicos",
  "Geometria",
  "Tolerâncias",
  "Ajustes",
  "Acabamento superficial",
  "Requisitos funcionais",
];

const EXECUTAR_TAGS = [
  "Manufatura técnica",
  "Referências geométricas",
  "Processos de fabricação",
  "Ajustagem",
  "Montagem",
  "Controle dimensional",
];
const VALIDAR_TAGS = [
  "Conformidade dimensional",
  "Montagem",
  "Resultados funcionais",
  "Comportamento em operação",
];

const CAPABILITIES = [
  {
    title: "COMPREENDER",
    description: [
      "A primeira etapa consiste em entender a necessidade apresentada e relacioná-la às informações disponíveis sobre a aplicação.",
      "Desenhos, amostras, histórico operacional, características do conjunto e condições de uso são analisados conforme sua relevância.",
      "Quando há falhas, desgaste ou desempenho insuficiente, essas evidências ajudam a compreender o comportamento observado em serviço. Quando a definição técnica já existe, a análise se concentra nos requisitos, interfaces, tolerâncias, montagem e condições de execução.",
    ],
    tags: COMPREENDER_TAGS,
  },
  {
    title: "DESENVOLVER",
    description: [
      "As informações levantadas são transformadas nas definições técnicas necessárias ao projeto.",
      "Materiais e tratamentos térmicos são avaliados de acordo com as propriedades mecânicas e superficiais requeridas. Geometria e transições são definidas considerando carregamentos, solicitações mecânicas e restrições do conjunto.",
      "Tolerâncias, ajustes e acabamento superficial são definidos conforme a função das interfaces e suas condições de contato ou movimento.",
      "O desenvolvimento busca compatibilizar função, especificação e condições de execução.",
    ],
    tags: DESENVOLVER_TAGS,
  },
  {
    title: "EXECUTAR",
    subtitle: "A EXECUÇÃO DEVE PRESERVAR O QUE FOI DEFINIDO PELA ENGENHARIA",
    description: [
      "A definição do processo considera referências geométricas, sequência de fabricação, efeitos dos tratamentos térmicos, ajustagem, montagem e estratégias de controle.",
      "Fabricação e controle são conduzidos para obter e verificar as características que influenciam o funcionamento do componente no conjunto.",
    ],
    tags: EXECUTAR_TAGS,
  },
  {
    title: "VALIDAR",
    description: [
      "Conformidade dimensional, atendimento funcional e comportamento em operação representam níveis distintos de verificação.",
      "A extensão da validação depende da natureza do projeto. Inspeção dimensional, montagem, testes funcionais e, quando aplicável, avaliação em serviço verificam o atendimento aos requisitos estabelecidos.",
      "Os resultados também podem servir de referência para futuras intervenções.",
    ],
    tags: VALIDAR_TAGS,
  },
];

export default function CapabilitiesAccordionSection() {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[10px]">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-6 grid grid-cols-1 gap-4 lg:mt-12 lg:gap-6"
        >
          {CAPABILITIES.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-4 bg-bg-surface p-6 transition-colors duration-200"
            >
              <h3 className="font-display text-xl font-bold uppercase text-text-primary sm:text-2xl">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="font-sans text-base font-medium leading-relaxed text-text-primary sm:text-lg">
                  {item.subtitle}
                </p>
              )}
              {(Array.isArray(item.description) ? item.description : [item.description]).map(
                (paragraph, index) => (
                  <p
                    key={index}
                    className="font-sans text-base text-text-secondary sm:text-lg"
                  >
                    {paragraph}
                  </p>
                )
              )}
              {item.tags && (
                <p className="font-sans text-sm font-medium uppercase tracking-[0.05em] text-orange sm:text-base">
                  {item.tags.join(" · ")}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
