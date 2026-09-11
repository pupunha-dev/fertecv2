"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.001 2C6.478 2 2 6.477 2 12c0 1.876.52 3.632 1.42 5.13L2 22l4.995-1.394A9.947 9.947 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12.001 2zm0 18.09a8.07 8.07 0 0 1-4.13-1.13l-.296-.176-2.965.827.816-2.916-.193-.3A8.073 8.073 0 0 1 3.91 12c0-4.465 3.626-8.09 8.091-8.09 4.465 0 8.09 3.625 8.09 8.09 0 4.465-3.625 8.09-8.09 8.09z"
      />
    </svg>
  );
}

const CONTACT_ITEMS = [
  {
    icon: EnvelopeIcon,
    label: "comercial@fertec.com.br",
    href: "mailto:comercial@fertec.com.br",
  },
  {
    icon: MapPinIcon,
    label: "Curitiba / PR",
    href: undefined,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/fertec-ferramentaria-t-cnica/posts/?viewAsMember=true",
  },
  {
    icon: WhatsAppIcon,
    label: "Tel:(41)3625-2745",
    href: "https://wa.me/554136252745",
  },
];

export default function ContactInfoSection() {
  return (
    <section className="bg-bg-deep px-[clamp(1.5rem,5vw,4rem)] py-[3rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto flex max-w-4xl flex-wrap items-start justify-center gap-x-12 gap-y-8"
      >
        {CONTACT_ITEMS.map(({ icon: Icon, label, href }) => {
          const content = (
            <div className="flex flex-col items-center gap-3 text-center">
              <Icon className="h-7 w-7 shrink-0 text-orange" strokeWidth={1.5} />
              <span className="font-sans text-sm font-medium text-text-primary">{label}</span>
            </div>
          );

          return (
            <motion.div key={label} variants={fadeInUp}>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
