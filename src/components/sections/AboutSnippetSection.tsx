"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AboutSnippetSection() {
  return (
    <section className="bg-bg-deep px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,6vw,5rem)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto grid max-w-[1280px] grid-cols-1 items-stretch gap-6 lg:grid-cols-[5fr_7fr] lg:gap-12"
      >
        <motion.div
          variants={fadeInUp}
          className="relative aspect-[4/5] w-full overflow-hidden lg:aspect-auto lg:min-h-[420px]"
        >
          <Image
            src="/images/pages/QUEM-SOMOS.png"
            alt="Ferramentaria técnica da Fertec"
            fill
            loading="lazy"
            className="object-cover"
          />
        </motion.div>

        <div className="flex flex-col gap-4 lg:gap-6">
          <motion.div variants={fadeInUp}>
            <Eyebrow>Fertec — Ferramentaria Técnica</Eyebrow>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <SectionTitle as="h2">
              Experiência prática conectada à decisão técnica.
            </SectionTitle>
          </motion.div>

          <motion.p variants={fadeInUp} className="max-w-2xl font-sans text-base text-text-secondary sm:text-lg">
            A experiência em ferramentaria permite considerar, desde o
            desenvolvimento, aspectos relacionados a materiais, fabricação,
            ajustagem, montagem e controle dimensional.
          </motion.p>

          <motion.p variants={fadeInUp} className="max-w-2xl font-sans text-base text-text-secondary sm:text-lg">
            Essa proximidade entre engenharia e manufatura mantém as decisões
            técnicas conectadas à realidade de fabricação e operação.
          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-sm font-medium text-text-secondary">
            Curitiba · Paraná · Brasil
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center mt-4 lg:mt-8"
          >
            <Button href="/nossa-conviccao" variant="primary">
              CONHEÇA NOSSA CONVICÇÃO
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
