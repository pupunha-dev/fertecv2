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
            <SectionTitle as="h2" size="sm">OBSOLESCÊNCIA INDUSTRIAL</SectionTitle>
          </motion.div>
          <motion.div variants={fadeInUp} className="relative h-40 w-full max-w-xs overflow-hidden">
            <Image
              src="/images/pages/OBSOLESCENCIA-INDUSTRIAL.png"
              alt="Obsolescência industrial"
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
            COMPONENTES OBSOLETOS NÃO PRECISAM DETERMINAR A SUBSTITUIÇÃO DE ATIVOS QUE AINDA GERAM VALOR À OPERAÇÃO.
          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
            A indisponibilidade de componentes pode tornar ativos ainda produtivos dependentes do fabricante original, de estoques remanescentes ou de fontes de fornecimento cada vez mais restritas.
          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
            A Fertec reconstrói as informações necessárias para desenvolver alternativas compatíveis com a função e as características do equipamento.
          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
            Geometria, materiais, propriedades, tolerâncias e requisitos funcionais são definidos de acordo com a necessidade do projeto. Essas informações formam uma base técnica para fabricação, documentação e futuras intervenções.
            Essa capacidade amplia a autonomia sobre componentes críticos e contribui para manter em operação ativos que continuam relevantes para o processo produtivo.

          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
