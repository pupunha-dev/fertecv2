"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const INDICATORS = [
  "Obsolescência Industrial",
  "Reengenharia de Componentes Críticos",
  "Dispositivos Mecânicos Especiais",
  "Moldes e Ferramentais Industriais",
  "Manufatura Técnica"
];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? "visible" : "hidden";

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-bg-void pt-[15vh] pb-24">
      <Image
        src="/images/pages/HOME-CENTRALIZADO-hero.jpeg"
        alt="Componente mecânico industrial em processo de reengenharia"
        fill
        priority
        className="object-cover object-center"
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
        className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-[clamp(1.5rem,5vw,4rem)] lg:grid lg:grid-cols-[1fr_auto] lg:items-end"
      >
        <div className="flex max-w-3xl flex-col gap-6">
          <motion.div variants={fadeInUp}>
            <Eyebrow>Engenharia Aplicada à Confiabilidade Operacional</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-display text-6xl font-extrabold uppercase leading-[0.95] text-text-primary"
          // text-[clamp(2.5rem,4vw+2rem,7rem)]
          >
            ENGENHARIA MECÂNICA, FERRAMENTARIA E MANUFATURA TÉCNICA PARA NECESSIDADES INDUSTRIAIS CRÍTICAS.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-[560px] font-sans text-base text-text-secondary sm:text-lg"
          >
            A Fertec integra engenharia mecânica, experiência em ferramentaria e capacidade de manufatura para desenvolver, recuperar e executar componentes, dispositivos e ferramentais industriais.

          </motion.p>

          <motion.ul variants={fadeInUp} className="flex flex-col gap-3">
            {INDICATORS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-sans text-sm font-medium text-text-primary"
              >
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <span className="min-w-0">{item}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center"
          >
            <Button href="/contato" variant="primary">
              Solicitar Avaliação Técnica
            </Button>
            {/* <Button href="/quem-somos" variant="ghost">
              Conhecer a Fertec
            </Button> */}
          </motion.div>
        </div>

        {/* <motion.div
          variants={fadeInUp}
          className="hidden max-w-xs border-l-[3px] border-orange pl-6 lg:block"
        >
          <p className="font-sans text-lg italic leading-relaxed text-text-secondary">
            &ldquo;Não substituímos componentes. Restauramos estabilidade e
            confiabilidade operacional.&rdquo;
          </p>
        </motion.div> */}
      </motion.div>
    </section>
  );
}
