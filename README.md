# HealthCare Pilates

Site institucional da **HealthCare Pilates** — rede premium de estúdios de pilates clínico com agente de IA conversacional integrado.

> **Branches:** esta versão (`claude/vite-migration`) é a **migração para Vite + React Router** com foco em performance máxima. A versão Next.js mora em `claude/pilates-studio-website-y9piN`.

## Stack

- **Vite 6** (build ultra-rápido, HMR instantâneo)
- **React 19** + **React Router 7** (SPA com lazy routes)
- **Tailwind CSS 4** via plugin Vite oficial (`@tailwindcss/vite`)
- **react-helmet-async** (meta tags por página + JSON-LD)
- **shadcn/ui** + **Radix UI** (componentes acessíveis)
- **Framer Motion** (microinterações, respeita `prefers-reduced-motion`)
- **`@anthropic-ai/sdk`** (streaming Claude `claude-opus-4-7`)
- **vite-plugin-compression** (brotli + gzip pré-comprimidos)

## Performance (build atual)

| Recurso | Bruto | Gzip | Brotli |
|---|---:|---:|---:|
| `index.html` | 2.14 kB | 0.93 kB | 0.71 kB |
| CSS total | 43.02 kB | 8.21 kB | 6.77 kB |
| `react-vendor` | 48.50 kB | 17.13 kB | 15.02 kB |
| `ui-vendor` (Radix + Lucide) | 51.12 kB | 16.23 kB | 14.03 kB |
| `motion` (Framer) | 111.43 kB | 36.65 kB | 31.99 kB |
| `index` (app shell) | 231.43 kB | 73.86 kB | 62.49 kB |
| **AgentDrawer (lazy)** | 196.90 kB | 60.26 kB | 51.51 kB |
| Páginas (chunks individuais) | ~9 kB | ~4 kB | ~3 kB |

> **Initial load (Home, brotli):** ~131 KB. Agente carregado sob demanda.

## Setup local

```bash
# Requisitos: Node 20+, pnpm 10+
pnpm install
pnpm dev   # http://localhost:3000
```

## Configurar agente Sofia

1. Obtenha chave em [console.anthropic.com](https://console.anthropic.com)
2. Abra o site → clique no FAB verde (canto inferior direito)
3. Cole `sk-ant-...` no campo do drawer
4. A chave fica salva **só no seu navegador** (`localStorage`)

> ⚠️ Modo demo. Para produção real, mover para backend (Netlify Function / Edge Function).

## Scripts

| Comando | Descrição |
|---|---|
| `pnpm dev` | Vite dev server |
| `pnpm build` | TypeScript check + Vite build (dist/) |
| `pnpm preview` | Servir build localmente |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | `tsc -b --noEmit` |
| `pnpm test:e2e` | Playwright |

## Deploy no Netlify (apontando pro repo)

1. Mescle a PR no `main`
2. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**
3. Selecione `gutorelli/Teste-pilates` → branch `main`
4. O `netlify.toml` já está configurado:
   - Build: `pnpm build`
   - Publish: `dist`
   - SPA redirect: `/* → /index.html (200)`
   - Cache headers: assets imutáveis com `max-age=31536000`
5. (Opcional) env var `VITE_SITE_URL` com seu domínio final

A cada `push` para `main`, deploy automático.

## Estrutura

```
src/
├── main.tsx              # entry: HelmetProvider + BrowserRouter
├── App.tsx               # routes + agent state
├── index.css             # Tailwind + tokens
├── pages/                # Home, Sobre, FAQ, NotFound (lazy)
├── components/
│   ├── layout/           # Header, Footer, CookieBanner
│   ├── sections/         # seções editoriais por página
│   ├── agent/            # FAB, Drawer, Messages, Input, Settings
│   ├── shared/           # Container, Reveal, Seo, SectionHeading
│   └── ui/               # primitivos (Button, Input, Accordion...)
├── content/              # copy + dados estruturados
├── hooks/                # useAgent, useApiKey, useRateLimit
├── lib/                  # claude/, lead/, seo, cn, storage
└── styles/tokens.css     # design tokens CSS custom properties
```

## Substituir antes do go-live

- `public/images/*.svg` → fotos reais (estúdio + instrutores, formato AVIF/WebP)
- `src/content/units.ts` → endereços e telefones reais
- `src/content/faq.ts` → valores definitivos de planos
- `VITE_SITE_URL` na Netlify
- (Opcional v1.1) backend para chave Claude

## Documentação

- [`PRD.md`](./PRD.md) — Requisitos de produto
- [`SPEC.md`](./SPEC.md) — Especificação técnica
