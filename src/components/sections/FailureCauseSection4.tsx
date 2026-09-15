"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function FailureCauseSection() {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,6vw,5rem)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr] lg:gap-12"
      >
        <div className="flex flex-col gap-4 lg:sticky lg:top-32 lg:self-start">
          <motion.div variants={fadeInUp}>
            <Eyebrow>Especialidades</Eyebrow>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <SectionTitle as="h2" size="sm">MOLDES E FERRAMENTAIS INDUSTRIAIS

            </SectionTitle>
          </motion.div>
          <motion.div variants={fadeInUp} className="relative h-40 w-full max-w-xs overflow-hidden">
            <Image
              src="/images/pages/MOLDES-FERRAMENTAIS.png"
              alt="Moldes e ferramentais industriais"
              fill
              loading="lazy"
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-6">
          <motion.p
            variants={fadeInUp}
            className="font-sans text-lg leading-relaxed text-text-primary sm:text-xl"
          >
            PRESERVAR MOLDES E FERRAMENTAIS É PRESERVAR CAPACIDADE PRODUTIVA JÁ INSTALADA.
          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
            Referências geométricas, ajustes, superfícies funcionais e componentes trabalham em conjunto e determinam o funcionamento do ferramental.

          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
            Desgaste, danos, obsolescência ou novas exigências de processo não determinam necessariamente sua substituição integral. A Fertec atua na manutenção, recuperação e modernização de moldes e ferramentais, além do desenvolvimento e da reengenharia de componentes críticos.
          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
            A intervenção pode restabelecer referências, ajustes e superfícies funcionais ou adaptar o ferramental a novas necessidades, preservando o que continua tecnicamente adequado.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
