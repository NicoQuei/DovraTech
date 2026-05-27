# DOVRA TECH — Design System (MASTER)

> Source of truth for the site-experiência. Every page inherits this unless a
> file in `DESIGN_SYSTEM/pages/` overrides it. Generated with the ui-ux-pro-max
> design intelligence (palette + typography + style synthesis).

## Princípio condutor

O site **é a prova de competência**. Cada interação demonstra domínio técnico.
Performance é inegociável. Dark mode é a identidade, não uma opção. Movimento
sempre com propósito e sempre respeitando `prefers-reduced-motion`.

## Style synthesis

Blend de três estilos do banco de dados:

- **Dark Mode / OLED (#7)** — base near-black, acentos neon vibrantes, alto contraste.
- **Motion-Driven (#15)** — scroll-telling, micro-interações, reveals, parallax sutil.
- **Minimalism & Swiss (#1)** — grid, hierarquia tipográfica forte, espaço negativo.

Anti-padrões a evitar: emojis como ícones, hover com scale que desloca layout,
gradientes/sombras pesadas que matam performance, texto cinza-claro de baixo contraste.

## Cores

| Token | Hex | Uso |
|-------|-----|-----|
| `ink` / `ink-900` | `#06070A` | fundo base |
| `ink-800` | `#0B0D12` | superfície elevada |
| `ink-700` | `#11141B` | cards |
| `ink-600` | `#171B24` | hover de superfície |
| `line` | `#1B2029` | bordas (≈ branco 8%) |
| `line-strong` | `#2A313D` | bordas em foco |
| `fg` | `#EAEEEC` | texto primário |
| `fg-muted` | `#8B95A7` | texto secundário (≥ 4.5:1) |
| `fg-faint` | `#5A6373` | texto decorativo |
| **`brand` (500)** | **`#19E57D`** | **verde da marca** — acento, CTA, links, glow |
| `brand-bright` (300) | `#54FFA6` | brilho/gradiente |
| `brand-dim` (600) | `#0FA85C` | estados pressed |
| `accent` | `#00D9C0` | teal secundário p/ profundidade de gradiente |
| `danger` | `#FF5C5C` | erro |
| `warning` | `#F5B544` | aviso |
| `info` | `#4DA8FF` | informação |

Verde sobre near-black tem contraste altíssimo — usar como acento, não como
texto de corpo. CTA = `brand` com texto `ink`.

## Tipografia (pairing "Tech Startup" #3)

- **Display / headings:** Space Grotesk (600/700) — `font-display`
- **Body:** DM Sans (400/500) — `font-sans`
- **Técnico / eyebrows / stats / código:** JetBrains Mono — `font-mono`

Escalas fluidas: `text-display-xl/lg/md` (clamp). Corpo 16–20px, `leading` 1.5–1.75,
linha 65–75ch. Eyebrows em mono uppercase tracking `0.22em` na cor `brand`.

## Motion

- Micro-interações: 150–250ms.
- Reveals / scroll: 500–700ms, easing `expo` `cubic-bezier(0.16,1,0.3,1)`.
- Animar apenas `transform` e `opacity` (GPU). Nunca `width/height/top/left`.
- Scroll suave: **Lenis**; scroll-telling: **Framer Motion** `useScroll/useTransform`.
- **Sempre** ramificar em `useReducedMotion` — sem motion, conteúdo aparece estático e legível.

## Stack

Next.js (App Router, SSG/SSR) · Tailwind · Framer Motion · Lenis ·
Canvas 2D para o hero (decisão de performance — evita ~600KB de three.js) ·
lucide-react (ícones SVG) · next/font (Space Grotesk, DM Sans, JetBrains Mono).

## Layout

- Container: `max-w-container` (1280px), padding `px-5 sm:px-8 lg:px-12`.
- Header flutuante que encolhe no scroll; offset de conteúdo via `--header-h`.
- z-index: base 10, sticky/header 30, overlay/menu 50, toast 60.
- Breakpoints de QA: 375 / 768 / 1024 / 1440.

## Acessibilidade (CRÍTICO)

Contraste ≥ 4.5:1 · foco visível on-brand · alvos de toque ≥ 44px ·
`aria-label` em botões só-ícone · labels em inputs · cor nunca é o único indicador ·
`prefers-reduced-motion` honrado global + por componente.

## Voz / copy

pt-BR. Posicionamento antes de lista de serviços. Direto, técnico, confiante,
sem jargão vazio. Ex.: "Engenharia digital sob medida", "Vamos construir algo?".
