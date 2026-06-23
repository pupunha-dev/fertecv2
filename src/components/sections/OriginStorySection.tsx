"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import OrangeRule from "@/components/ui/OrangeRule";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function OriginStorySection() {
  return (
    <section className="bg-bg-deep px-[clamp(1.5rem,5vw,4rem)] py-[7rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto flex max-w-3xl flex-col gap-6"
      >
        <motion.div variants={fadeInUp}>
          <Eyebrow>Trajetória</Eyebrow>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <SectionTitle as="h2">A experiência que originou a Fertec</SectionTitle>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <OrangeRule />
        </motion.div>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          A Fertec é resultado direto de uma trajetória construída dentro da
          operação industrial — passando pela manutenção mecânica, pela
          ferramentaria e pela engenharia de processos. Foi nesse percurso que
          ficou evidente um padrão: a maioria das falhas que se repetem não é
          resolvida porque é tratada como problema de reposição, não de
          engenharia.
        </motion.p>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          Acompanhar componentes críticos desde a falha até a solução —
          passando pelo desenho, pela escolha de material e pelo processo de
          fabricação — mostrou que o caminho mais curto para a confiabilidade
          não é substituir mais rápido, e sim entender por que aquele
          componente falhou primeiro.
        </motion.p>

        <motion.p variants={fadeInUp} className="font-sans text-base text-text-secondary sm:text-lg">
          Essa experiência prática, somada à formação técnica em engenharia
          mecânica, deu origem à Fertec: uma empresa criada para tratar a
          reengenharia de componentes industriais como o que ela realmente é —
          um problema de engenharia, com método e responsabilidade técnica.
        </motion.p>
      </motion.div>
    </section>
  );
}
