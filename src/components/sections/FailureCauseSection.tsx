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
            <Eyebrow>Diagnóstico</Eyebrow>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <SectionTitle as="h2">Por que a falha continua acontecendo</SectionTitle>
          </motion.div>
        </div>

        <div className="flex flex-col gap-6">
          <motion.p
            variants={fadeInUp}
            className="font-sans text-lg leading-relaxed text-text-primary sm:text-xl"
          >
            Quando um componente falha, a resposta mais comum é substituí-lo
            por um igual. Mas se a peça original já apresentava o defeito que
            levou à falha, a peça nova vai falhar pelo mesmo motivo — em um
            prazo parecido, ou menor.
          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
            Falhas recorrentes raramente são causadas por desgaste natural
            isolado. Na maioria dos casos, há um fator de engenharia que não
            foi tratado: geometria que concentra tensão, material inadequado
            para o esforço real, tolerância que não corresponde à condição de
            operação, ou um modo de falha que nunca foi caracterizado
            corretamente.
          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
            Substituir o componente resolve o sintoma. Resolver a causa exige
            entender o comportamento mecânico real da aplicação — cargas,
            vibração, temperatura, ciclos — e comparar esse comportamento com
            o projeto original do componente.
          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
            É nesse ponto que a engenharia aplicada se torna necessária: não
            para desenhar uma peça nova, mas para identificar exatamente onde
            o projeto original e a operação real divergem — e corrigir essa
            divergência antes de qualquer fabricação.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
