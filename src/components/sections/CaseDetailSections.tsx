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
    { label: "COMPETÊNCIAS APLICADAS", field: "resultadoOperacional" },
  ];

export default function CaseDetailSections({ technicalCase }: CaseDetailSectionsProps) {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={staggerContainer}
        className="mx-auto flex max-w-5xl flex-col gap-12"
      >
        {SECTIONS.map(({ label, field, imageField }) => {
          const imageSrc = imageField ? (technicalCase[imageField] as string | undefined) : undefined;

          return (
            <motion.div
              key={field}
              variants={fadeInUp}
              className="border-t border-line-rule pt-8"
            >
              <div
                className={`grid grid-cols-1 gap-8 ${imageSrc ? "lg:grid-cols-[1fr_2fr] lg:items-center" : ""}`}
              >
                {imageSrc && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={`${technicalCase.titulo} — ${label}`}
                      fill
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="flex flex-col gap-4">
                  <Eyebrow>{label}</Eyebrow>
                  <p className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
                    {technicalCase[field] as string}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
