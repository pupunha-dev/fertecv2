"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import type { TechnicalCase } from "@/data/cases";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface CaseDetailSectionsProps {
  technicalCase: TechnicalCase;
}

const SECTIONS: Array<{
  label: string;
  field: keyof TechnicalCase;
  imageField?: keyof TechnicalCase;
}> = [
    { label: "DESAFIO", field: "problemaOperacional", imageField: "imagemDesafio" },
    { label: "ANÁLISE TÉCNICA", field: "condicaoAplicacao", imageField: "imagemAnaliseTecnica" },
    { label: "DESENVOLVIMENTO", field: "caracterizacaoFalha", imageField: "imagemDesenvolvimento" },
    { label: "EXECUÇÃO", field: "reengenhariaAplicada", imageField: "imagemExecucao" },
    { label: "RESULTADO", field: "solucaoImplementada", imageField: "imagemResultado" },
    { label: "COMPETÊNCIAS APLICADAS", field: "resultadoOperacional", imageField: "imagemCompetenciasAplicadas" },
  ];

export default function CaseDetailSections({ technicalCase }: CaseDetailSectionsProps) {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,6vw,5rem)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={staggerContainer}
        className="mx-auto flex max-w-5xl flex-col gap-8 lg:gap-12"
      >
        <motion.div variants={fadeInUp} className="flex flex-col gap-4">
          {technicalCase.resumoProblema.trim() && (
            <p className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
              {technicalCase.resumoProblema}
            </p>
          )}
          {technicalCase.resumoResultado.trim() && (
            <p className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
              {technicalCase.resumoResultado}
            </p>
          )}
        </motion.div>

        {SECTIONS.map(({ label, field, imageField }) => {
          const imageSrc = imageField ? (technicalCase[imageField] as string | undefined) : undefined;
          const displayLabel = technicalCase.sectionLabelOverrides?.[label] ?? label;

          return (
            <motion.div
              key={field}
              variants={fadeInUp}
              className="border-t border-line-rule pt-6 lg:pt-8"
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-8">
                {imageSrc ? (
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={`${technicalCase.titulo} — ${displayLabel}`}
                      fill
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="hidden lg:block" aria-hidden="true" />
                )}

                <div className="flex flex-col gap-4">
                  <Eyebrow>{displayLabel}</Eyebrow>
                  {(technicalCase[field] as string).split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
