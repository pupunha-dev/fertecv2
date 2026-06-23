"use client";

import { motion } from "framer-motion";
import { ChatBubbleLeftRightIcon, BoltIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import SectionTitle from "@/components/ui/SectionTitle";
import Eyebrow from "@/components/ui/Eyebrow";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const CHAT_BENEFITS = [
  {
    icon: BoltIcon,
    title: "Resposta imediata",
    description:
      "Nosso assistente de IA está disponível a qualquer momento para receber sua demanda técnica e direcionar ao especialista certo.",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Atendimento inteligente",
    description:
      "Descreva o componente, a falha observada e o contexto operacional. O chat interpreta o problema e qualifica a solicitação antes de chegar à engenharia.",
  },
  {
    icon: CheckCircleIcon,
    title: "Processo eficiente",
    description:
      "Sem formulários genéricos. A conversa guiada garante que as informações técnicas certas sejam coletadas desde o primeiro contato.",
  },
];

export default function ContactSection() {
  return (
    <section className="bg-bg-void px-[clamp(1.5rem,5vw,4rem)] pb-[7rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="mx-auto max-w-[1280px]"
      >
        <motion.div variants={fadeInUp} className="mb-12 flex flex-col gap-4">
          <Eyebrow>Como funciona</Eyebrow>
          <SectionTitle as="h2">Contato direto com a engenharia</SectionTitle>
          <p className="max-w-2xl font-sans text-base text-text-secondary sm:text-lg">
            O atendimento da Fertec é realizado pelo chat integrado nesta página —
            de forma eficiente, inteligente e sem intermediários. Clique no ícone
            no canto inferior da tela para iniciar.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {CHAT_BENEFITS.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className="flex flex-col gap-4 border border-border-subtle bg-bg-deep p-6 transition-colors hover:border-border-active"
            >
              <Icon className="h-7 w-7 text-orange" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-bold uppercase text-text-primary">
                {title}
              </h3>
              <p className="font-sans text-sm text-text-secondary">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-12 flex flex-col gap-3 border-t border-line-rule pt-8"
        >
          <p className="font-sans text-sm text-text-secondary">
            <span className="text-text-primary">E-mail:</span>{" "}
            <a
              href="mailto:contato@fertec.com.br"
              className="transition-colors hover:text-orange"
            >
              contato@fertec.com.br
            </a>
          </p>
          <p className="font-sans text-sm text-text-secondary">
            <span className="text-text-primary">Localização:</span> Curitiba / PR
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
