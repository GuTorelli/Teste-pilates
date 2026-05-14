# Teste Pilates

Repositório do site institucional da **HealthCare Pilates** — rede premium de estúdios de pilates clínico.

## Documentos

- [`PRD.md`](./PRD.md) — Product Requirements Document (visão, posicionamento, escopo, KPIs).
- [`SPEC.md`](./SPEC.md) — Especificação técnica derivada do PRD (estrutura, componentes, system prompt do agente Sofia, conteúdo final, design tokens).

## Próximos passos

A implementação será feita com base no `SPEC.md`:

- Next.js 15 (App Router) + Tailwind CSS 4 + shadcn/ui customizado
- Agente conversacional "Sofia" integrado via `@anthropic-ai/sdk` (modelo `claude-opus-4-7`)
- Deploy na Vercel

Veja a Definition of Done na seção 16 do `SPEC.md`.
