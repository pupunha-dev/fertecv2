"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import type { TechnicalCase } from "@/data/cases";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface CaseDetailSectionsProps {
  technicalCase: TechnicalCase;
}

const SECTIONS: Array<{
  step: string;
  label: string;
  field: keyof TechnicalCase;
}> = [
  { step: "01", label: "Problema Operacional", field: "problemaOperacional" },
  { step: "02", label: "Condição da Aplicação", field: "condicaoAplicacao" },
  { step: "03", label: "Caracterização da Falha", field: "caracterizacaoFalha" },
  { step: "04", label: "Reengenharia Aplicada", field: "reengenhariaAplicada" },
  { step: "05", label: "Solução Implementada", field: "solucaoImplementada" },
  { step: "06", label: "Resultado Operacional", field: "resultadoOperacional" },
];

export default function CaseDetailSections({ technicalCase }: CaseDetailSectionsProps) {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={staggerContainer}
        className="mx-auto flex max-w-3xl flex-col gap-12"
      >
        {SECTIONS.map(({ step, label, field }) => (
          <motion.div
            key={field}
            variants={fadeInUp}
            className="flex flex-col gap-4 border-t border-line-rule pt-8"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-2xl text-orange">{step}</span>
              <Eyebrow>{label}</Eyebrow>
            </div>
            <p className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
              {technicalCase[field] as string}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
