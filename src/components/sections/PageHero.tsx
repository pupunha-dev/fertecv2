"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string | string[];
  tags?: string[];
  imageSrc?: string;
  imageAlt?: string;
  logoSrc?: string;
  imageWrapperClassName?: string;
  imageClassName?: string;
  showImage?: boolean;
  titleMaxWidthClassName?: string;
  subtitleMaxWidthClassName?: string;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  tags,
  imageSrc,
  imageAlt,
  logoSrc,
  imageWrapperClassName = "absolute inset-0",
  imageClassName = "object-cover",
  showImage = true,
  titleMaxWidthClassName = "max-w-3xl",
  subtitleMaxWidthClassName = "max-w-2xl",
  children,
}: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? "visible" : "hidden";

  return (
    <section className="relative flex min-h-[75vh] items-end overflow-hidden bg-bg-void px-[clamp(1.5rem,5vw,4rem)] pt-[15vh]">
      {showImage && imageSrc ? (
        <div className={imageWrapperClassName}>
          <Image src={imageSrc} alt={imageAlt ?? ""} fill priority className={imageClassName} />
        </div>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 55%, #222222 100%)",
          }}
        />
      )}

      <motion.div
        initial={initial}
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto w-full max-w-[1280px] pb-20"
      >
        <div
          className={
            logoSrc
              ? "grid grid-cols-[1fr_auto] items-start gap-x-4 lg:grid-cols-[minmax(0,720px)_auto] lg:justify-start lg:gap-x-16"
              : undefined
          }
        >
          <div className={logoSrc ? "contents" : undefined}>
            <motion.div variants={fadeInUp} className={logoSrc ? "col-span-2" : undefined}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className={`mt-4 ${titleMaxWidthClassName} font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold uppercase leading-[1.05] text-text-primary`}
            >
              {title}
            </motion.h1>

            {subtitle && (
              <div className={`mt-4 flex ${subtitleMaxWidthClassName} flex-col gap-3 ${logoSrc ? "col-span-2" : ""}`}>
                {(Array.isArray(subtitle) ? subtitle : [subtitle]).map((paragraph, index) => (
                  <motion.p
                    key={index}
                    variants={fadeInUp}
                    className="font-sans text-base text-text-secondary sm:text-lg"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            )}

            {tags && tags.length > 0 && (
              <motion.p
                variants={fadeInUp}
                className={`mt-4 ${subtitleMaxWidthClassName} font-sans text-sm font-medium tracking-[0.05em] text-text-primary sm:text-base`}
              >
                {tags.join(" · ")}
              </motion.p>
            )}

          </div>
          {logoSrc && (
            <motion.div
              variants={fadeInUp}
              className="relative col-start-2 row-start-2 mt-4 aspect-square w-14 shrink-0 self-start sm:w-24 lg:h-full lg:w-auto lg:self-stretch"
            >
              <Image
                src={logoSrc}
                alt="Fertec — logo oficial"
                fill
                priority
                sizes="(min-width: 1024px) 200px, 96px"
                className="object-contain"
              />
            </motion.div>
          )}
        </div>

        {children}
      </motion.div>
    </section>
  );
}
