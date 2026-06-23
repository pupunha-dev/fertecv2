# CLAUDE.md — Fertec v2.0
# Manifesto de desenvolvimento para o Claude Code

---

## 🎯 IDENTIDADE DO PROJETO

**Cliente:** Fertec — Engenharia Aplicada à Confiabilidade Operacional  
**Projeto:** Site institucional premium v2.0  
**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS  
**Deploy:** Vercel (free tier)  
**Idioma:** Português brasileiro

### O que a Fertec É (posicionamento central)
- Engenharia mecânica aplicada
- Reengenharia de componentes críticos
- Solução para obsolescência industrial
- Dispositivos mecânicos especiais
- Confiabilidade operacional

### O que a Fertec NÃO É (proibido transmitir)
- Usinagem commodity
- Ferramentaria comum
- Fabricante de peças sob desenho
- Fabricante seriado

### Psicologia que o site deve evocar
O visitante (gestor de manutenção, engenheiro de planta, diretor industrial) deve sentir:
**"Esses caras entendem profundamente por que a falha continua acontecendo."**

E NÃO: "Esses caras fazem usinagem."

---

## 🎨 DESIGN SYSTEM

### Paleta de Cores (tokens CSS — usar variáveis, nunca hardcode)

```css
:root {
  /* Backgrounds */
  --bg-void: #0a0a0a;          /* fundo principal hero / seções escuras */
  --bg-deep: #111111;          /* cards escuros, seções alternadas */
  --bg-surface: #1a1a1a;       /* superfície de cards / hover states */
  --bg-edge: #222222;          /* bordas sutis, divisores */

  /* Brand */
  --orange: #E8600A;           /* laranja Fertec — acento primário */
  --orange-dim: #B84D08;       /* laranja hover / pressed */
  --orange-glow: rgba(232,96,10,0.15); /* glow sutil em bordas ativas */

  /* Texto */
  --text-primary: #F0F0F0;     /* títulos e copy principal */
  --text-secondary: #A0A0A0;   /* texto de suporte, labels */
  --text-muted: #555555;       /* placeholders, texto terciário */
  --text-accent: #E8600A;      /* destaques inline em laranja */

  /* Utilitários */
  --border-subtle: rgba(255,255,255,0.06);
  --border-active: rgba(232,96,10,0.4);
  --line-rule: rgba(255,255,255,0.08); /* divisores horizontais */
}
```

### Tipografia

**Display / Headlines:** `Barlow Condensed` — peso 700/800, uppercase, tracking apertado  
→ Razão: carrega peso industrial sem parecer agência criativa. Usado com contenção — apenas títulos de seção e hero.

**Body / Copy técnico:** `Inter` — peso 400/500  
→ Leitura limpa para textos técnicos longos, parece engenharia mesmo.

**Labels / Eyebrows:** `Barlow` (não condensed) — peso 600, uppercase, letter-spacing: 0.15em, tamanho 11–12px  
→ Pequenos marcadores acima de títulos. Ex: "ENGENHARIA APLICADA" em laranja antes de um H2.

**Mono / Dados técnicos:** `JetBrains Mono` — peso 400  
→ Para números técnicos, especificações, step numbers no fluxo de processo.

```
Import Google Fonts:
Barlow Condensed: 700, 800
Barlow: 500, 600
Inter: 400, 500
JetBrains Mono: 400
```

### Escala Tipográfica

| Role | Font | Size | Weight | Transform |
|---|---|---|---|---|
| Hero H1 | Barlow Condensed | clamp(3.5rem, 8vw, 7rem) | 800 | uppercase |
| Section H2 | Barlow Condensed | clamp(2rem, 4vw, 3.5rem) | 700 | uppercase |
| Card H3 | Barlow Condensed | 1.5rem–2rem | 700 | uppercase |
| Eyebrow | Barlow | 0.7rem | 600 | uppercase, ls: 0.15em |
| Body | Inter | 1rem–1.0625rem | 400 | none |
| Caption | Inter | 0.875rem | 500 | none |
| Data/Mono | JetBrains Mono | 0.875rem | 400 | none |

### Signature Visual (elemento memorável único)

**Linha de tensão em laranja:** Uma linha horizontal fina (1–2px) em `--orange` que atravessa o layout horizontalmente em momentos-chave — como o divisor entre o eyebrow e o título no hero, ou como borda-topo de cards ativos. Não é decoração: representa o corte de precisão da usinagem. Aparece com contenção — máximo 3 usos por página.

### Tratamento de Imagens

Todas as imagens de fundo ou hero devem ter overlay:
```css
/* Overlay padrão para fotos industriais */
background: linear-gradient(
  135deg,
  rgba(10,10,10,0.85) 0%,
  rgba(10,10,10,0.6) 50%,
  rgba(232,96,10,0.08) 100%
);
```

Imagens de componentes/peças: fundo escuro, sem overlay agressivo — deixar a textura metálica respirar.

### Grid e Espaçamento

- Container max-width: 1280px, padding horizontal: clamp(1.5rem, 5vw, 4rem)
- Seções: padding vertical mínimo 5rem, padrão 7rem, hero 10vh mínimo
- Gap entre cards: 1.5rem (desktop), 1rem (mobile)
- Grid de cards: CSS Grid, `repeat(auto-fit, minmax(300px, 1fr))`

### Animações (Framer Motion)

Usar `framer-motion` para:
- `fadeInUp`: entrada de seções no scroll — `y: 30 → 0`, `opacity: 0 → 1`, duration 0.6s
- `staggerChildren`: cards entram em sequência com delay 0.1s entre cada um
- Hover em cards: `scale: 1.02`, border color para `--border-active`
- Respeitar `prefers-reduced-motion`: envolver animações em check

**NÃO usar:** parallax pesado, animações de partículas, efeitos 3D, loaders longos.

---

## 🏗️ ARQUITETURA TÉCNICA

### Estrutura de Pastas

```
/
├── app/
│   ├── layout.tsx              # Root layout — fonte, meta global, navbar, footer
│   ├── page.tsx                # Home
│   ├── quem-somos/
│   │   └── page.tsx
│   ├── engenharia-aplicada/
│   │   └── page.tsx
│   ├── capacidades/
│   │   └── page.tsx
│   ├── cases/
│   │   └── page.tsx
│   └── contato/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx          # variantes: primary, ghost, outline
│   │   ├── Eyebrow.tsx         # label laranja acima de títulos
│   │   ├── SectionTitle.tsx    # H2 padronizado
│   │   └── OrangeRule.tsx      # linha de tensão laranja
│   └── sections/               # um arquivo por bloco de página
│       ├── HeroSection.tsx
│       ├── PainPointsSection.tsx
│       ├── ProcessFlowSection.tsx
│       ├── CapabilitiesSection.tsx
│       ├── ResultsSection.tsx
│       ├── AboutSnippetSection.tsx
│       └── ContactForm.tsx
├── lib/
│   └── animations.ts           # variantes Framer Motion reutilizáveis
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── components/         # fotos de peças reais
│   │   └── team/
│   └── logo/
│       ├── fertec-logo.svg
│       └── fertec-logo-white.svg
└── styles/
    └── globals.css             # tokens CSS, reset, base
```

### Convenções de Código

- **Componentes:** PascalCase, sempre com `'use client'` quando usar hooks/animação
- **Tipos:** interfaces TypeScript para todas as props
- **CSS:** Tailwind para layout/spacing, CSS Modules ou classes CSS para animações complexas
- **Imagens:** `next/image` obrigatório — `priority` no hero, `lazy` no restante
- **Links:** `next/link` obrigatório para navegação interna
- **Fontes:** `next/font/google` — nunca @import no CSS

### Dependências a instalar

```bash
npm install framer-motion
npm install @heroicons/react
npm install react-hook-form
npm install @hookform/resolvers zod
```

---

## 📋 PÁGINAS E SEÇÕES

### NAVBAR (global)

- Background: transparente no topo → `--bg-deep` com blur ao scrollar (threshold: 50px)
- Logo: SVG branco, sempre visível
- Links: `Inter 500`, uppercase, 12px, letter-spacing 0.1em, cor `--text-secondary` → hover `--text-primary`
- CTA: botão "SOLICITAR AVALIAÇÃO TÉCNICA" em `--orange`, sem border-radius exagerado (4px máx)
- Mobile: hamburger menu com drawer lateral escuro
- **NÃO usar:** dropdown menus complexos

**Links de navegação:**
- Engenharia Aplicada → `/engenharia-aplicada`
- Capacidades → `/capacidades`
- Cases Técnicos → `/cases`
- Quem Somos → `/quem-somos`
- Contato → `/contato`

---

### PÁGINA 01 — HOME (`/`)

#### Bloco 1: Hero Principal
- **Layout:** Full-viewport, imagem de fundo (componente mecânico crítico) com overlay escuro
- **Conteúdo:**
  - Eyebrow: "ENGENHARIA APLICADA À CONFIABILIDADE OPERACIONAL"
  - H1: "QUANDO A FALHA\nSE TORNA\nRECORRENTE."
  - Subtítulo (Inter, max-width 560px): texto do briefing hero
  - Checkmarks: 4 indicadores em lista com ícone check laranja
  - CTA primário: "SOLICITAR AVALIAÇÃO TÉCNICA"
  - CTA secundário (ghost): "CONHECER A FERTEC"
  - Quote lateral (desktop): frase de apoio em itálico, borda esquerda laranja
- **Visual:** imagem ocupa 100% do fundo, texto ancorado à esquerda, padding-top: 15vh

#### Bloco 2: Dores Industriais (Pain Points)
- **Layout:** Grid 2×3 de cards (desktop), 1 coluna (mobile)
- **Título H2:** "ONDE A ENGENHARIA SE TORNA NECESSÁRIA"
- **6 Cards escuros com:**
  - Ícone técnico (stroke, laranja)
  - Título do problema (Barlow Condensed 700)
  - Texto de 2–3 linhas (Inter 400)
- **Cards:**
  1. Obsolescência industrial
  2. Dependência de OEM internacional
  3. Falhas recorrentes
  4. Instabilidade operacional
  5. Dispositivos mecânicos especiais
  6. Componentes críticos para moldes industriais
- **Visual:** fundo `--bg-deep`, hover eleva card com borda laranja sutil

#### Bloco 3: Engenharia Aplicada à Operação
- **Layout:** 60/40 — texto esquerda, visual direita (ou invertido em mobile)
- **Conteúdo:** texto do briefing "Falhas repetitivas comprometem..." + 5 diferenciais em checkmarks
- **Frase de destaque:** "Não substituímos componentes. Restauramos estabilidade e confiabilidade operacional." — tipografia maior, cor `--text-accent`

#### Bloco 4: Fluxo de Processo (Como transformamos falhas em confiabilidade)
- **Layout:** 5 steps horizontais em linha (desktop) / vertical accordion (mobile)
- **Numeração:** JetBrains Mono, cor `--orange`, tamanho grande como elemento visual
- **Steps sequenciais** — numeração aqui faz sentido pois é processo real:
  1. Caracterização do modo de falha
  2. Reengenharia aplicada ao componente
  3. Melhoria funcional e estrutural
  4. Manufatura técnica controlada
  5. Resultado aplicado à operação
- **Visual:** linha conectora horizontal fina em laranja entre steps (desktop)

#### Bloco 5: Capacidades (onde engenharia gera resultado)
- **Layout:** 2 colunas de texto técnico — grid de 3×2 items
- **Cada item:** título bold + 2 linhas de descrição, sem cards excessivos
- **Frase de fechamento:** destaque isolado, tipografia maior

#### Bloco 6: Resultados Operacionais
- **Layout:** 6 items em grid, fundo `--bg-deep`
- **Visual:** cada item com ícone check laranja e texto Inter 500
- **Frase final:** isolada, centralizada, tipografia display

#### Bloco 7: Quem Somos (snippet)
- **Layout:** 50/50 — foto industrial esquerda, texto direita
- **Conteúdo:** texto institucional resumido (3 parágrafos)
- **CTA:** "CONHECER A FERTEC →"

#### Footer
- **Layout:** 4 colunas (logo/tagline | navegação | capacidades | contato)
- **Fundo:** `--bg-void` com border-top laranja 1px
- **Itens:** logo branca, navegação, e-mail, localização (Curitiba/PR), redes sociais

---

### PÁGINA 02 — QUEM SOMOS (`/quem-somos`)

**Seções:**
1. **Hero interno:** título + subtítulo sobre fundo escuro com foto de engenharia/bancada
2. **Introdução institucional:** texto corrido, sem bullet points excessivos
3. **A experiência que originou a Fertec:** narrativa de trajetória profissional (NÃO "25 anos de empresa")
4. **Filosofia:** 4 cards com princípios — "Engenharia antes da fabricação", "Reengenharia em vez de cópia", "Melhorar sempre que possível", "Confiabilidade como resultado"
5. **Missão / Visão / Valores:** layout em 3 colunas simples, sem excesso de decoração
6. **Princípios:** Segurança, Responsabilidade Técnica, Disciplina Operacional, Ética, Confiabilidade, Melhoria Contínua

---

### PÁGINA 03 — ENGENHARIA APLICADA (`/engenharia-aplicada`)

**Seções:**
1. **Hero interno** com copy técnico
2. **Engenharia aplicada à causa da falha** — texto explicativo profundo
3. **Metodologia em 6 etapas:**
   - Caracterização do modo de falha
   - Reengenharia funcional
   - Adequação de materiais e geometria
   - Comportamento mecânico da aplicação
   - Estabilidade e previsibilidade operacional
   - Resultado operacional mensurado
4. **Visual técnico:** imagens de CAD, inspeção dimensional, componentes reais

---

### PÁGINA 04 — CAPACIDADES TÉCNICAS (`/capacidades`)

**Seções:**
1. **Hero interno** — "MANUFATURA COMO CONSEQUÊNCIA DA ENGENHARIA"
2. **6 capacidades em cards expandíveis:**
   - Reengenharia de componentes industriais críticos
   - Soluções para obsolescência industrial
   - Dispositivos mecânicos especiais
   - Componentes críticos para moldes industriais
   - Melhoria de confiabilidade mecânica
   - Manufatura técnica de precisão
3. **Cada card:** expandir ao clicar revela descrição técnica detalhada + imagem real

**IMPORTANTE:** Usinagem deve aparecer como consequência da engenharia — nunca como o serviço principal.

---

### PÁGINA 05 — CASES TÉCNICOS (`/cases`)

**Estrutura de cada case:**
1. Problema operacional
2. Condição da aplicação
3. Caracterização da falha
4. Reengenharia aplicada
5. Solução implementada
6. Resultado operacional

**Layout:** cards-lista na página index, página individual por case com layout editorial técnico.

**Tom:** biblioteca técnica, não catálogo comercial. Linguagem objetiva, industrial, sem superlativo.

**Placeholder:** criar estrutura com 2–3 cases fictícios técnicos até o cliente fornecer cases reais.

---

### PÁGINA 06 — CONTATO / AVALIAÇÃO TÉCNICA (`/contato`)

**Frase principal (hero):**
"Quando a recorrência da falha começa a comprometer produtividade, disponibilidade e estabilidade operacional, a engenharia aplicada deixa de ser opcional."

**Formulário (react-hook-form + zod):**
- Nome *
- Empresa *
- Segmento industrial *
- Telefone *
- E-mail *
- Descrição técnica do problema (textarea, mínimo 20 chars) *
- Upload de fotos/componentes (accept: image/*, .pdf)

**CTA:** "SOLICITAR AVALIAÇÃO TÉCNICA"

**Validação:** todos os campos marcados com * são obrigatórios. Feedback de erro inline, sem alert().

**Post-submit:** mensagem de sucesso inline, não redirecionar.

**Nota:** formulário envia para e-mail via endpoint configurado pelo dev (ou Formspree como fallback).

---

## ✅ CHECKLIST DE QUALIDADE

Antes de considerar qualquer página concluída, verificar:

### Design
- [ ] Usa apenas os tokens CSS definidos — sem cores hardcoded no JSX
- [ ] Fontes carregadas via `next/font/google`
- [ ] Todas as seções têm eyebrow label em laranja acima do H2
- [ ] Linha de tensão laranja usada com contenção (máx 3x por página)
- [ ] Nenhum border-radius acima de 6px em elementos industriais (cards, botões)
- [ ] Contraste de texto passa WCAG AA (verificar com DevTools)
- [ ] Hover states em todos os elementos interativos

### Responsividade
- [ ] Mobile-first: testar em 375px, 768px, 1280px, 1920px
- [ ] Hero legível em mobile (H1 não quebra feio)
- [ ] Navbar mobile com hamburger funcional
- [ ] Grids colapsam corretamente (não overflow)
- [ ] Imagens com `object-fit: cover` e dimensões definidas

### Performance
- [ ] Todas as imagens em `next/image` com `width` e `height` definidos
- [ ] Hero image com `priority={true}`
- [ ] Fontes com `display: 'swap'`
- [ ] Nenhum `console.log` em produção
- [ ] `next build` sem erros de TypeScript

### Conteúdo / Tom
- [ ] Nenhuma referência a "usinagem" como serviço principal
- [ ] "Reengenharia" aparece antes de "fabricação" em toda hierarquia
- [ ] Nenhum texto placeholder ("Lorem ipsum") em produção
- [ ] CTAs sempre dizem "AVALIAÇÃO TÉCNICA", não "Orçamento"
- [ ] Cases escritos como biblioteca técnica, não marketing

### Acessibilidade
- [ ] Imagens com `alt` descritivo (não vazio em imagens informativas)
- [ ] Formulário com `label` associado a cada input
- [ ] Focus visible em todos os elementos interativos
- [ ] Headings em ordem hierárquica correta (H1 → H2 → H3)

---

## 🚫 REGRAS ABSOLUTAS

### Nunca fazer
1. **NUNCA** usar a palavra "orçamento" — substituir sempre por "avaliação técnica"
2. **NUNCA** posicionar usinagem como serviço principal — é consequência da engenharia
3. **NUNCA** usar border-radius > 6px em cards ou botões principais (visual industrial)
4. **NUNCA** usar gradientes coloridos (azul-roxo etc) — apenas escuro→escuro+laranja sutil
5. **NUNCA** usar animações de partículas, glitch, ou efeitos exageradamente futuristas
6. **NUNCA** usar banco de imagens com fotos genéricas (engrenagens aleatórias, fábricas genéricas, robôs)
7. **NUNCA** mencionar "25 anos" ou qualquer referência de tempo da empresa — falar de trajetória profissional
8. **NUNCA** usar emoji em nenhuma parte do site
9. **NUNCA** criar dropdown de navegação complexo — navegação objetiva e direta
10. **NUNCA** usar cores fora do sistema de tokens definido

### Sempre fazer
1. **SEMPRE** usar `next/image` para todas as imagens
2. **SEMPRE** testar mobile antes de considerar pronto
3. **SEMPRE** manter o posicionamento: engenharia → confiabilidade (não: usinagem → peças)
4. **SEMPRE** usar eyebrow label em laranja acima de títulos de seção
5. **SEMPRE** validar formulários com Zod antes de submeter
6. **SEMPRE** usar variáveis CSS para cores — nunca Tailwind color classes diretas para brand colors
7. **SEMPRE** que criar nova seção, verificar se o copy está no tom industrial-técnico (não marketing genérico)

---

## 🔧 COMANDOS ÚTEIS

```bash
# Desenvolvimento
npm run dev              # inicia em localhost:3000

# Build e verificação
npm run build            # build de produção
npm run lint             # checar erros ESLint
npx tsc --noEmit         # checar erros TypeScript sem buildar

# Deploy
vercel                   # deploy manual via CLI
vercel --prod            # deploy para produção

# Instalar dependências do projeto
npm install framer-motion @heroicons/react react-hook-form @hookform/resolvers zod
```

---

## 📝 NOTAS DE DESENVOLVIMENTO

### Imagens — solução provisória
Enquanto o cliente não fornecer fotos reais, usar imagens de `unsplash.com` com query específica:
- Hero: `https://images.unsplash.com/...` — busca por "industrial machining precision", "cnc turning steel", "mechanical component close"
- Componentes: fotos com textura metálica real, iluminação dramática
- Evitar: fotos com fundo branco de estúdio

### Cases Técnicos
Criar 2 cases placeholder com estrutura completa mas marcados visualmente como "Em breve" até receber material real do cliente.

### Formulário de contato
Usar [Formspree](https://formspree.io) como solução zero-backend para produção:
```tsx
// action="https://formspree.io/f/SEU_ID"
```
Ou configurar Route Handler em `app/api/contact/route.ts` para Nodemailer se o cliente tiver SMTP.

### SEO
- Cada página deve ter `metadata` exportado com `title` e `description` únicos
- Title pattern: `[Nome da Página] | Fertec — Engenharia Aplicada`
- OG image: criar imagem padrão 1200×630 com logo e tagline

### Variáveis de ambiente
```
# .env.local
NEXT_PUBLIC_SITE_URL=https://fertec.com.br
FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxx
```

---

## 🗂️ ORDEM DE EXECUÇÃO RECOMENDADA

Execute nesta ordem para ter sempre algo funcional para mostrar:

1. **Setup inicial** — estrutura de pastas, globals.css com tokens, fontes
2. **Componentes UI base** — Button, Eyebrow, SectionTitle, OrangeRule
3. **Navbar + Footer** — layout global
4. **Home — Hero** — primeiro impacto visual
5. **Home — todos os blocos** — em sequência
6. **Página Quem Somos**
7. **Página Engenharia Aplicada**
8. **Página Capacidades**
9. **Página Contato + Formulário**
10. **Página Cases** — estrutura + placeholders
11. **Responsividade final** — revisão em todos os breakpoints
12. **SEO + metadata** — todas as páginas
13. **Build final + deploy Vercel**