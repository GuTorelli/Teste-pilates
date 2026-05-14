# HealthCare Pilates

Site institucional da **HealthCare Pilates** — rede premium de estúdios de pilates clínico com agente de IA conversacional integrado.

## Visão geral

Três páginas (Home, Sobre, FAQ) + agente "Sofia" alimentado pelo Claude que guia visitantes até o agendamento de aula experimental via WhatsApp. Design editorial premium, responsivo, foco em conversão.

## Stack

- **Next.js 15** (App Router, SSG)
- **Tailwind CSS 4** + design tokens CSS custom properties
- **shadcn/ui** + Radix UI (acessibilidade nativa)
- **Framer Motion** (microinterações com `prefers-reduced-motion`)
- **`@anthropic-ai/sdk`** (streaming client-side, modelo `claude-opus-4-7`)
- **Lucide React** (icons)
- **Playwright** (E2E smoke tests)
- **Vercel** (deploy recomendado)

## Setup local

```bash
# Pré-requisitos: Node.js ≥ 20, pnpm

pnpm install
pnpm dev
# → http://localhost:3000
```

## Configurar o agente Sofia

1. Obtenha sua chave em [console.anthropic.com](https://console.anthropic.com)
2. Abra o site e clique no FAB verde (canto inferior direito)
3. Cole a chave no campo (`sk-ant-...`) e salve
4. A chave fica salva **apenas no seu navegador** (localStorage)

> ⚠️ **Modo demo**: a chave trafega só no cliente. Para produção, migre para Vercel Edge Function (ver `PRD.md §12 / Roadmap v1.1`).

## Scripts

| Comando | Descrição |
|---|---|
| `pnpm dev` | Dev server (localhost:3000) |
| `pnpm build` | Build de produção |
| `pnpm start` | Servidor de produção |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | TypeScript sem emitir |
| `pnpm test:e2e` | Playwright E2E |

## Estrutura resumida

```
src/
├── app/           # Páginas Next.js (/, /sobre, /faq)
├── components/
│   ├── layout/    # Header, Footer, CookieBanner, ClientLayout
│   ├── sections/  # Seções de cada página
│   ├── agent/     # AgentFAB, AgentDrawer, Sofia UI
│   └── ui/        # Primitivos (Button, Input, Accordion…)
├── content/       # Copy e dados estruturados das páginas
├── hooks/         # useAgent, useApiKey, useRateLimit…
└── lib/           # claude/, lead/, seo, cn, storage…
```

## Substituir antes do go-live

Busque `{{` no código para encontrar todos os placeholders:

- `src/content/faq.ts` — valores de planos, cidades
- `src/content/units.ts` — endereços e telefones reais das 6 unidades
- `public/images/` — substituir SVGs de placeholder por fotos reais
- `src/lib/seo.ts` — `SITE_URL` com domínio real

## Deploy (Vercel)

```bash
# 1. Push para main no GitHub
# 2. Conecte no Vercel: Import Project → Next.js detectado automaticamente
# 3. (Opcional) adicionar NEXT_PUBLIC_SITE_URL como env var
```

## Documentação

- [`PRD.md`](./PRD.md) — Requisitos de produto, posicionamento, KPIs
- [`SPEC.md`](./SPEC.md) — Especificação técnica completa
