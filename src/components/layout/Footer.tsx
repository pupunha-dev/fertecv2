import Link from "next/link";

const NAV_LINKS = [
  { href: "/especialidades", label: "Especialidades" },
  { href: "/processos", label: "Processos" },
  { href: "/nossa-conviccao", label: "Nossa Convicção" },
  { href: "/projetos", label: "Projetos" },
  // { href: "/contato", label: "Contato" },
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
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 lg:grid-cols-3">
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

          {/* <div className="flex flex-col gap-4">
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
          </div> */}

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
            <p

              className="font-sans text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Telefone / Whatsapp:<a
                href="https://wa.me/554136252745"
                className="font-sans text-sm text-text-secondary transition-colors hover:text-text-primary pl-2"
              >
                (41) 3265-2745
              </a>
            </p>

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
            <p className="font-sans text-sm text-text-secondary">Curitiba / PR</p>
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
