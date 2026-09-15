"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
        className="mx-auto grid max-w-[1280px] grid-cols-1 items-stretch gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12"
      >
        <motion.div
          variants={fadeInUp}
          className="relative aspect-[4/5] w-full overflow-hidden bg-bg-surface lg:aspect-auto lg:min-h-[360px]"
        >
          <Image
            src="/images/pages/MOLDES-FERRAMENTAIS.png"
            alt="Moldes e ferramentais industriais"
            fill
            loading="lazy"
            className="object-contain"
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div variants={fadeInUp}>
            <SectionTitle as="h2" size="sm">MOLDES E FERRAMENTAIS INDUSTRIAIS</SectionTitle>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="font-sans text-base font-medium leading-relaxed text-text-primary sm:text-lg"
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
