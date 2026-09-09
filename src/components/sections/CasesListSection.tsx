"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CASES } from "@/data/cases";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function CasesListSection() {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {CASES.map((technicalCase) => (
          <motion.div key={technicalCase.slug} variants={fadeInUp}>
            <Link
              href={`/nossa-conviccao/${technicalCase.slug}`}
              className="group flex h-full flex-col border border-border-subtle bg-bg-deep transition-colors duration-200 hover:border-border-active"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={technicalCase.image}
                  alt={technicalCase.titulo}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
                {technicalCase.emBreve && (
                  <span className="absolute right-4 top-4 rounded-[4px] border border-border-active bg-bg-void/80 px-3 py-1 font-label text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-orange">
                    Em Breve
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">

                <h3 className="font-display text-xl font-bold uppercase leading-snug text-text-primary sm:text-2xl">
                  {technicalCase.titulo}
                </h3>

                <div className="flex flex-col gap-3 border-t border-line-rule">
                  <div>
                    <p className="mt-1 font-sans text-sm text-text-secondary">
                      {technicalCase.resumoProblema}
                    </p>
                  </div>
                  <div>
                    {/* <p className="font-label text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-text-secondary">
                      Resultado
                    </p> */}
                    <p className="mt-1 font-sans text-sm text-text-secondary">
                      {technicalCase.resumoResultado}
                    </p>
                  </div>
                </div>

                <span className="font-label text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-orange">
                  <p>Clique para ver conteúdo completo</p>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
