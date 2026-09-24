"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function FailureCauseSection() {
  return (
    <section id="dispositivos-mecanicos-especiais" className="scroll-mt-24 bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[clamp(2rem,4vw,3rem)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto grid max-w-[1280px] grid-cols-1 items-stretch gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12"
      >
        <motion.div
          variants={fadeInUp}
          className="relative aspect-[4/5] w-full overflow-hidden bg-bg-void lg:aspect-auto lg:h-full lg:min-h-[360px]"
        >
          <Image
            src="/images/pages/DISPOSITIVOS-MECANICOS.png"
            alt="Dispositivos mecânicos especiais"
            fill
            loading="lazy"
            className="object-contain"
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div variants={fadeInUp}>
            <SectionTitle as="h2" size="sm">DISPOSITIVOS MECÂNICOS ESPECIAIS</SectionTitle>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="font-sans text-base font-medium leading-relaxed text-text-primary sm:text-lg"
          >
            REFERÊNCIAS MECÂNICAS PARA INSPEÇÃO, CONTROLE, POSICIONAMENTO E MONTAGEM.
          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
            Dispositivos mecânicos estabelecem referências, apoios e condições de posicionamento necessárias às operações de metrologia, inspeção, controle dimensional e montagem.


          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
            O desenvolvimento considera apoio, localização, fixação, estabilidade, acessibilidade e demais características necessárias ao uso do dispositivo.

          </motion.p>

        </div>
      </motion.div>
    </section>
  );
}
