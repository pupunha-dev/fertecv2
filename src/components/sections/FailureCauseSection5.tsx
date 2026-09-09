"use client";

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
            <SectionTitle as="h2">MANUFATURA TÉCNICA

            </SectionTitle>
          </motion.div>
        </div>

        <div className="flex flex-col gap-6">
          <motion.p
            variants={fadeInUp}
            className="font-sans text-lg leading-relaxed text-text-primary sm:text-xl"
          >
            CAPACIDADE DE EXECUÇÃO PARA APLICAÇÕES EM QUE OS REQUISITOS VÃO ALÉM DA GEOMETRIA.

          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
            Forma e dimensões não definem, isoladamente, a condição funcional de um componente.


          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
            Material, propriedades requeridas, tolerâncias, acabamento superficial, referências, ajustes e critérios de controle também fazem parte de sua especificação.

          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
            A Fertec executa componentes, dispositivos e ferramentais integrando fabricação, ajustagem, montagem e controle dimensional aos requisitos definidos para cada aplicação.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
