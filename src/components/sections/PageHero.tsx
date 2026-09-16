"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  imageWrapperClassName?: string;
  imageClassName?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imageWrapperClassName = "absolute inset-0",
  imageClassName = "object-cover",
}: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? "visible" : "hidden";

  return (
    <section className="relative flex min-h-[75vh] items-end overflow-hidden bg-bg-void px-[clamp(1.5rem,5vw,4rem)] pt-[15vh]">
      <div className={imageWrapperClassName}>
        <Image src={imageSrc} alt={imageAlt} fill priority className={imageClassName} />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.6) 50%, rgba(232,96,10,0.08) 100%)",
        }}
      />

      <motion.div
        initial={initial}
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto w-full max-w-[1280px] pb-20"
      >
        <motion.div variants={fadeInUp}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="mt-4 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold uppercase leading-[1.05] text-text-primary"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-2xl font-sans text-base text-text-secondary sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
