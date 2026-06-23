import Link from "next/link";

const NAV_LINKS = [
  { href: "/engenharia-aplicada", label: "Engenharia Aplicada" },
  { href: "/capacidades", label: "Capacidades" },
  { href: "/cases", label: "Cases Técnicos" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/contato", label: "Contato" },
];

const CAPABILITIES = [
  "Reengenharia de componentes críticos",
  "Soluções para obsolescência industrial",
  "Dispositivos mecânicos especiais",
  "Componentes para moldes industriais",
  "Melhoria de confiabilidade mecânica",
  "Manufatura técnica de precisão",
];

const SOCIAL_LINKS = [
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-orange bg-bg-void">
      <div className="mx-auto max-w-[1280px] px-[clamp(1.5rem,5vw,4rem)] py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="font-display text-2xl font-extrabold uppercase tracking-wide text-text-primary">
              Fertec
            </span>
            <p className="max-w-[28ch] font-sans text-sm text-text-secondary">
              Engenharia aplicada à confiabilidade operacional.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-label text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-text-secondary">
              Navegação
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-label text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-text-secondary">
              Capacidades
            </h3>
            <ul className="flex flex-col gap-3">
              {CAPABILITIES.map((item) => (
                <li key={item} className="font-sans text-sm text-text-secondary">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-label text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-text-secondary">
              Contato
            </h3>
            <a
              href="mailto:contato@fertec.com.br"
              className="font-sans text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              contato@fertec.com.br
            </a>
            <p className="font-sans text-sm text-text-secondary">Curitiba / PR</p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans text-sm text-text-secondary transition-colors hover:text-orange"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-16 font-sans text-xs text-text-muted">
          © {new Date().getFullYear()} Fertec — Engenharia Aplicada à Confiabilidade Operacional.
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
