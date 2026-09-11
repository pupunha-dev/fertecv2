"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function FailureCauseSection() {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr]"
      >
        <div className="flex flex-col gap-4 lg:sticky lg:top-32 lg:self-start">
          <motion.div variants={fadeInUp}>
            <Eyebrow>Especialidades</Eyebrow>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <SectionTitle as="h2" size="sm">DISPOSITIVOS MECÂNICOS ESPECIAIS
            </SectionTitle>
          </motion.div>
          <motion.div variants={fadeInUp} className="relative h-40 w-full max-w-xs overflow-hidden">
            <Image
              src="/images/pages/DISPOSITIVOS-MECANICOS.png"
              alt="Dispositivos mecânicos especiais"
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
