"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AboutSnippetSection() {
  return (
    <section className="bg-bg-deep px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-2"
      >
        <motion.div variants={fadeInUp} className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src="/images/pages/indimg5.png"
            alt="Bancada de engenharia industrial da Fertec"
            fill
            loading="lazy"
            className="object-cover"
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div variants={fadeInUp}>
            <Eyebrow>Quem Somos</Eyebrow>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <SectionTitle as="h2">Quem somos</SectionTitle>
          </motion.div>

          <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
            A Fertec nasceu da experiência prática de quem atuou diretamente
            na manutenção e na engenharia de plantas industriais — e viu, de
            perto, como falhas recorrentes são tratadas como rotina quando, na
            verdade, são sintoma de um problema de engenharia não resolvido.
          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
            Essa trajetória deu origem a uma forma diferente de atuar: antes
            de fabricar, entender. Cada componente crítico é tratado como um
            problema de engenharia a ser resolvido, não como uma peça a ser
            copiada.
          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
            Hoje, a Fertec aplica essa metodologia a componentes críticos,
            dispositivos mecânicos especiais e soluções para obsolescência
            industrial — sempre com foco em restaurar confiabilidade
            operacional.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button href="/projetos" variant="ghost" className="px-0">
              Conhecer a Fertec →
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
