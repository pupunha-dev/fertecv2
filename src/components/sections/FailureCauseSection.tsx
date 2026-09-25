"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function FailureCauseSection() {
  return (
    <section id="obsolescencia-industrial" className="scroll-mt-24 bg-bg-void px-[clamp(1.5rem,5vw,4rem)] py-[clamp(2rem,4vw,3rem)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto grid max-w-[1280px] grid-cols-1 items-stretch gap-4 lg:grid-cols-[2fr_3fr] lg:gap-12"
      >
        <motion.div
          variants={fadeInUp}
          className="relative aspect-[4/5] w-full overflow-hidden bg-bg-void lg:aspect-auto lg:h-full lg:min-h-[360px]"
        >
          <Image
            src="/images/pages/OBSOLESCENCIA-INDUSTRIAL.png"
            alt="Obsolescência industrial"
            fill
            loading="lazy"
            className="object-contain"
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div variants={fadeInUp}>
            <SectionTitle as="h2" size="sm">OBSOLESCÊNCIA INDUSTRIAL</SectionTitle>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="font-sans text-base font-medium leading-relaxed text-text-primary sm:text-lg"
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
          </motion.p>

          <motion.p variants={fadeInUp} className="font-sans text-base font-bold leading-relaxed text-text-secondary sm:text-lg">
            Essa capacidade amplia a autonomia sobre componentes críticos e contribui para manter em operação ativos que continuam relevantes para o processo produtivo.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
