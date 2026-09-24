"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { TechnicalCase } from "@/data/cases";

interface CaseHeroSectionProps {
  technicalCase: TechnicalCase;
}

export default function CaseHeroSection({ technicalCase }: CaseHeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? "visible" : "hidden";

  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-bg-void pt-[15vh]">
      <Image
        src={technicalCase.image}
        alt={technicalCase.titulo}
        fill
        priority
        className={
          technicalCase.slug === "dispositivos-de-controle-dimensional"
            ? "object-contain object-[80%_center]"
            : "object-contain"
        }
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.6) 50%, rgba(232,96,10,0.08) 100%)",
        }}
      />

      <motion.div
        initial={initial}
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto w-full max-w-[1280px] px-[clamp(1.5rem,5vw,4rem)] pb-20"
      >
        <motion.div variants={fadeInUp}>
          <Link
            href="/projetos"
            className="font-label text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-text-secondary transition-colors hover:text-orange"
          >
            ← Biblioteca Técnica
          </Link>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-6">
          <Eyebrow>{technicalCase.setor}</Eyebrow>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="mt-4 max-w-3xl font-display text-[clamp(1.75rem,4vw,3.25rem)] font-bold uppercase leading-[1.1] text-text-primary"
        >
          {technicalCase.titulo}
        </motion.h1>

        {technicalCase.emBreve && (
          <motion.span
            variants={fadeInUp}
            className="mt-6 inline-block rounded-[4px] border border-border-active bg-bg-void/80 px-3 py-1 font-label text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-orange"
          >
            Em Breve
          </motion.span>
        )}
      </motion.div>
    </section>
  );
}
