"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "/especialidades", label: "Especialidades" },
  { href: "/processos", label: "Processos" },
  { href: "/projetos", label: "Projetos" },
  { href: "/nossa-conviccao", label: "Nossa Convicção" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${isScrolled
        ? "border-b border-border-subtle bg-bg-deep/80 backdrop-blur-md"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-[clamp(1.5rem,5vw,4rem)] py-5">
        <Link href="/" className="relative flex items-center gap-3">
          <Image
            src="/logo/logo-oficial.png"
            alt="Fertec"
            width={140}
            height={36}
            priority
            style={{ height: "36px", width: "auto", transition: "opacity 0.3s" }}
            className={isScrolled ? "opacity-0" : "opacity-100"}
          />
          <Image
            src="/logo/logo-oficial.png"
            alt=""
            aria-hidden
            width={140}
            height={36}
            priority
            style={{
              height: "36px",
              width: "auto",
              filter: "brightness(0) invert(1)",
              position: "absolute",
              top: 0,
              left: 0,
              transition: "opacity 0.3s",
            }}
          // className={isScrolled ? "opacity-100" : "opacity-0"}
          />
          <span className="font-display text-xl font-extrabold uppercase tracking-wide text-text-primary">
            FERTEC
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contato" variant="primary">
            Solicitar Avaliação Técnica
          </Button>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="text-text-primary lg:hidden"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      <div
        aria-hidden={!isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-bg-void/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
      />

      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col gap-8 border-l border-border-subtle bg-bg-deep px-8 py-8 transition-transform duration-300 lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/logo-oficial.png"
              alt="Fertec"
              width={120}
              height={32}
              style={{ height: "32px", width: "auto", filter: "brightness(0) invert(1)" }}
            />
            <span className="font-display text-lg font-extrabold uppercase tracking-wide text-text-primary">
              FERTEC
            </span>
          </div>
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setIsMenuOpen(false)}
            className="text-text-primary"
          >
            <XMarkIcon className="h-7 w-7" />
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-sans text-sm font-medium uppercase tracking-[0.1em] text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          href="https://wa.me/554132652745?text=Vim%20do%20site%20da%20Fertec"
          variant="primary"
          onClick={() => setIsMenuOpen(false)}
          className="mt-auto justify-center"
        >
          Solicitar Avaliação Técnica
        </Button>
      </div>
    </header>
  );
}
