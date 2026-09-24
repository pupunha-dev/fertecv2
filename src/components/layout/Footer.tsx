import Link from "next/link";

const NAV_LINKS = [
  { href: "/especialidades", label: "Especialidades" },
  { href: "/processo", label: "Processo" },
  { href: "/nossa-conviccao", label: "Nossa Convicção" },
  { href: "/projetos", label: "Projetos" },
  // { href: "/contato", label: "Contato" },
];

const SPECIALTY_LINKS = [
  { href: "/especialidades#obsolescencia-industrial", label: "Obsolescência Industrial" },
  { href: "/especialidades#reengenharia-componentes-criticos", label: "Reengenharia de Componentes Críticos" },
  { href: "/especialidades#dispositivos-mecanicos-especiais", label: "Dispositivos Mecânicos Especiais" },
  { href: "/especialidades#moldes-ferramentais-industriais", label: "Moldes e Ferramentais Industriais" },
  { href: "/especialidades#manufatura-tecnica", label: "Manufatura Técnica" },
];

// const CAPABILITIES = [
//   "Reengenharia de componentes críticos",
//   "Soluções para obsolescência industrial",
//   "Dispositivos mecânicos especiais",
//   "Componentes para moldes industriais",
//   "Melhoria de confiabilidade mecânica",
//   "Manufatura técnica de precisão",
// ];

const SOCIAL_LINKS = [
  { href: "https://br.linkedin.com/company/fertec-ferramentaria-t-cnica", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-orange bg-bg-void">
      <div className="mx-auto max-w-[1280px] px-[clamp(1.5rem,5vw,4rem)] py-16">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="font-display text-2xl font-extrabold uppercase tracking-wide text-text-primary">
              Fertec
            </span>
            <p className="max-w-[28ch] font-sans text-sm text-text-secondary">
              Ferramentaria Técnica
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-label text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-text-secondary">
              VISÃO GERAL
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

          <div className="flex flex-col gap-4 lg:-ml-6">
            <h3 className="font-label text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-text-secondary">
              Especialidades
            </h3>
            <nav className="flex flex-col gap-3">
              {SPECIALTY_LINKS.map((link) => (
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
              Contato
            </h3>
            <a
              href="mailto:comercial@fertec.com.br"
              className="font-sans text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              comercial@fertec.com.br
            </a>
            <a
              href="https://wa.me/554132652745"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Telefone / Whatsapp: (41) 3265-2745
            </a>

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
            <p className="font-sans text-sm text-text-secondary">Curitiba · Paraná</p>
          </div>
        </div>

        <p className="mt-16 font-sans text-xs text-text-muted">
          © {new Date().getFullYear()} Fertec - FERTEC Ferramentaria Técnica Ltda · Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
