# PRD — HealthCare Pilates

**Documento:** Product Requirements Document
**Produto:** Site institucional + agente de IA conversacional
**Marca:** HealthCare Pilates (rede de estúdios)
**Versão:** 1.0
**Data:** 14/05/2026
**Autor:** Head de Comunicação & Produto
**Status:** Em revisão

---

## 1. Visão e contexto

### 1.1. Visão de produto
Construir o site institucional da **HealthCare Pilates** como uma vitrine digital premium que comunique cuidado, ciência do movimento e sofisticação — convertendo visitantes em alunos por meio de uma jornada curta, elegante e guiada por um agente de IA especialista no negócio.

### 1.2. Problema que estamos resolvendo
1. A rede precisa de uma presença digital institucional à altura do posicionamento premium das unidades físicas.
2. Visitantes chegam ao site com dúvidas heterogêneas (preço, horários, indicação clínica, diferenças entre modalidades) que um FAQ estático não resolve.
3. O time comercial gasta tempo respondendo perguntas repetitivas no WhatsApp antes de qualificar o lead.
4. Não existe um caminho claro entre "descobri a marca" e "agendei minha aula experimental".

### 1.3. Oportunidade
Um site com **arquitetura editorial minimalista + agente Claude treinado no negócio** transforma o site em um SDR digital: educa o visitante, qualifica a intenção, captura o contato e entrega um lead morno ao WhatsApp da unidade preferida — 24/7, com tom de voz consistente.

---

## 2. Posicionamento de marca

### 2.1. Essência
**"Movimento com propósito clínico."**
A HealthCare Pilates é a ponte entre saúde funcional e bem-estar premium. Não somos academia, não somos clínica — somos um estúdio onde o método pilates é entregue com rigor técnico, infraestrutura impecável e atendimento personalizado.

### 2.2. Pilares de comunicação
| Pilar | O que comunica | Como aparece no site |
|---|---|---|
| **Ciência** | Profissionais habilitados, método com base fisioterapêutica | Página "Sobre", credenciais dos instrutores, linguagem técnica acessível |
| **Cuidado** | Atendimento humano, avaliação individual, plano sob medida | Tom de voz do agente, fotos de atendimento 1:1, CTA "agende sua avaliação" |
| **Elegância** | Ambientes premium, design atemporal, experiência sensorial | Identidade visual, fotografia, microinterações, tipografia |
| **Resultado** | Postura, força, alívio de dor, longevidade | Depoimentos, números (anos de operação, alunos ativos), antes/depois discretos |

### 2.3. Tom de voz
- **Sereno, não eufórico.** Falamos de bem-estar, não de hype.
- **Técnico, mas acolhedor.** "Avaliação fisiocinética" pode aparecer, desde que explicada.
- **Pessoa, não plataforma.** O agente se apresenta com nome ("Olá, sou a **Sofia**, da HealthCare"), não como "assistente virtual".
- **Português brasileiro neutro**, sem gírias regionais, sem emojis excessivos (no máximo 1 por mensagem do agente, quando fizer sentido).

### 2.4. Público-alvo
**Persona primária — "Camila, 38"**
Profissional liberal, classe A/B, sente desconforto postural recorrente, já tentou musculação e não se identificou. Busca um lugar onde se sinta cuidada e o instrutor saiba seu nome. Pesquisa pelo Google, valida pelo Instagram, decide pelo site.

**Persona secundária — "Ricardo, 54"**
Recuperação pós-cirúrgica ou laudo médico indicando pilates. Busca segurança técnica, certificações, infraestrutura. Decisor racional — quer ver credenciais e tirar dúvidas específicas antes de visitar.

**Persona terciária — "Beatriz, 29"**
Sócia/decisora em casal jovem, foco em qualidade de vida e estética funcional. Influenciada por design e estética do espaço.

---

## 3. Objetivos e métricas de sucesso

### 3.1. Objetivos de negócio
1. **Aumentar a conversão visitante → aula experimental agendada.**
2. **Reduzir o tempo de resposta a dúvidas pré-venda** (de horas via WhatsApp humano para segundos via agente).
3. **Posicionar a marca como referência premium** em pilates clínico.

### 3.2. KPIs (90 dias pós-lançamento)
| KPI | Meta |
|---|---|
| Taxa de conversão homepage → clique em CTA primário | ≥ 8% |
| Taxa de conversa iniciada com agente / visitantes únicos | ≥ 15% |
| Taxa de lead qualificado capturado / conversas iniciadas | ≥ 25% |
| Lighthouse Performance (mobile) | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Core Web Vitals (LCP / INP / CLS) | "Good" em 100% das páginas |
| Tempo médio na página "Sobre" | ≥ 45s |

---

## 4. Escopo do produto

### 4.1. Páginas (v1)
1. **Home (`/`)** — vitrine, prova social, CTA principal
2. **Sobre (`/sobre`)** — história, método, time, infraestrutura
3. **FAQ (`/faq`)** — perguntas fixas + agente Claude integrado

> **Fora do escopo desta versão:** páginas por unidade, blog, área do aluno, integração com sistema de agendamento, pagamento online, multi-idioma. Documentar como "futuro" na seção 11.

### 4.2. Elementos globais
- **Header** fixo, traslúcido sobre hero, sólido ao rolar. Logo + navegação (Home / Sobre / FAQ) + CTA "Agendar aula" (abre o agente em modal).
- **Footer** com logo, endereços das unidades (placeholder), redes sociais, navegação secundária, créditos e link para política de privacidade.
- **Botão flutuante de chat** persistente em todas as páginas (canto inferior direito), abre o agente.
- **Banner discreto de cookies / LGPD** (consentimento simples, descartável).

### 4.3. CTA principal e secundários
- **Primário (global):** "Agende sua aula experimental" → abre o agente em modal pré-configurado para qualificação.
- **Secundário:** "Conheça nosso método" → leva à página Sobre.
- **Terciário:** "Tire suas dúvidas" → leva ao FAQ.

---

## 5. Especificação por página

### 5.1. Home (`/`)

**Objetivo:** em até 5 segundos, comunicar quem somos, para quem somos e como começar.

**Estrutura (ordem de leitura):**

1. **Hero full-bleed**
   - Imagem ou vídeo loop (sem som) de aula em estúdio bem iluminado.
   - Headline curta: *"O pilates como ele deveria ser praticado."*
   - Sub-headline (1 linha): *"Estúdios premium com método clínico, instrutores certificados e atendimento que reconhece você pelo nome."*
   - CTA primário + CTA secundário lado a lado.

2. **Faixa de credibilidade**
   - 3 a 4 indicadores: anos de operação, unidades, instrutores certificados, alunos ativos. Tipografia grande, leve, sem ícones espalhafatosos.

3. **Seção "Por que HealthCare"**
   - 3 cards horizontais (vira stack no mobile): Método, Estrutura, Cuidado.
   - Cada card: ícone fino (line), título, 2 linhas de copy.

4. **Modalidades**
   - Carrossel/grid de 4 a 6 modalidades (Pilates Solo, Pilates Aparelho, Pilates Clínico, Funcional, Pré e Pós-natal, Reabilitação).
   - Hover/tap revela descrição curta.

5. **Prova social**
   - Depoimentos em formato carrossel sutil (3 depoimentos).
   - Nome, foto, 1 linha de contexto ("Aluna há 2 anos, unidade Jardins").

6. **Bloco "Como começar"**
   - 3 passos numerados: Avaliação → Plano personalizado → Sua primeira aula.

7. **CTA de fechamento**
   - Faixa full-width com headline forte e botão "Agende sua aula experimental".

8. **Footer.**

**Princípios visuais da home:**
- Hierarquia tipográfica clara: 1 H1 visível por viewport.
- Bastante respiro (padding vertical generoso entre seções: 96–128px desktop).
- Imagens em alta resolução, otimizadas (AVIF/WebP, lazy loading exceto hero).
- Microanimações sutis: fade-up nas seções ao entrar no viewport (sem parallax pesado).

---

### 5.2. Sobre (`/sobre`)

**Objetivo:** transmitir autoridade técnica + humanidade da marca. Página que converte cético em interessado.

**Estrutura:**

1. **Hero editorial** — imagem em formato magazine, com título e bigode editorial ("Nossa história").
2. **Manifesto da marca** — texto curto (120–180 palavras) em primeira pessoa do plural, ocupando uma coluna estreita centralizada (estilo editorial). Comunica origem, propósito e o que nos diferencia.
3. **O método** — explicação em 3 a 4 parágrafos do que é pilates clínico na HealthCare, com infográfico discreto (fluxo: avaliação → prescrição → execução → reavaliação).
4. **Time** — grid de instrutores (foto preto e branco editorial, nome, formação, especialidade, 1 linha pessoal). Mock com 4–6 profissionais.
5. **Estrutura** — galeria de fotos do estúdio (4 a 6 imagens, formato masonry leve). Lightbox opcional.
6. **Linha do tempo** (opcional, v1) — 3 a 5 marcos da rede.
7. **CTA de fechamento.**

---

### 5.3. FAQ (`/faq`)

**Objetivo:** resolver dúvidas frequentes sem fricção + oferecer atendimento conversacional ilimitado via agente.

**Estrutura:**

1. **Hero curto** — título "Tire suas dúvidas" + sub "Respostas rápidas. Para o resto, fale com a Sofia."
2. **Bloco do agente — destaque visual** (card grande no topo, antes das perguntas fixas)
   - Headline: *"Converse com a Sofia, nossa especialista digital."*
   - Botão "Iniciar conversa" → abre o painel do agente.
   - Se token não estiver configurado, mostra estado vazio elegante com instruções (ver seção 6.5).
3. **Categorias de FAQ** (acordeão, agrupado por tema):
   - **Sobre o método**
   - **Aulas e agendamento**
   - **Investimento**
   - **Saúde e indicações clínicas**
   - **Unidades e horários**
4. **CTA de fechamento** — "Não encontrou? Fale com a Sofia."

**Lista mínima de FAQs fixos (15 perguntas)** — conteúdo a ser produzido na fase de implementação, com base no posicionamento. Exemplos:
- O que diferencia a HealthCare de uma academia de pilates comum?
- Preciso de indicação médica para começar?
- Quantas aulas por semana são recomendadas?
- Pilates ajuda em dor lombar / hérnia / escoliose?
- Como funciona a aula experimental?
- Vocês atendem gestantes?
- Qual o investimento?
- (etc.)

---

## 6. Agente de IA — "Sofia"

### 6.1. Persona
**Nome:** Sofia
**Papel:** Especialista digital da HealthCare Pilates. Conhece o método, as modalidades, indicações, contraindicações genéricas, valores em faixa, unidades. Não substitui avaliação profissional.
**Tom:** Sereno, técnico-acessível, acolhedor. Trata o visitante com cordialidade brasileira sem familiaridade excessiva.

### 6.2. Modelo e configuração
- **Modelo:** `claude-opus-4-7` (qualidade premium para a experiência institucional) com fallback configurável para `claude-sonnet-4-6`.
- **Temperatura:** 0.4 (consistência de tom).
- **Max tokens output:** 1024.
- **Streaming:** sim — resposta aparece progressivamente para sensação de conversa em tempo real.
- **System prompt:** carregado no front-end, descreve persona, escopo, guardrails e fluxo de captura de lead.

### 6.3. Escopo (o que pode e o que não pode)

**Pode:**
- Explicar o método pilates da HealthCare.
- Falar de modalidades, público, indicações gerais.
- Orientar sobre como agendar aula experimental.
- Citar faixas de investimento ("a partir de R$X" — valores como placeholder a serem fornecidos).
- Coletar nome, telefone e unidade preferida.
- Gerar link de WhatsApp pré-preenchido.

**Não pode:**
- Dar diagnóstico ou prescrição médica/fisioterápica.
- Falar de assuntos fora do escopo do negócio.
- Inventar preços, horários, unidades ou nomes de profissionais que não estejam no contexto fornecido.
- Negociar descontos por conta própria.

### 6.4. Fluxo conversacional alvo
```
1. Boas-vindas + pergunta aberta
   "Olá! Sou a Sofia, da HealthCare Pilates. Como posso te ajudar hoje?"

2. Escuta a intenção do visitante
   (responde dúvidas usando knowledge base do system prompt)

3. Após 2-3 trocas (ou intenção clara de conversão),
   propõe a aula experimental:
   "Pelo que você me contou, acho que vale conhecer nosso estúdio
    ao vivo. Posso te ajudar a agendar uma aula experimental?"

4. Se sim → coleta em sequência (1 pergunta por vez):
   - Nome
   - Telefone (WhatsApp)
   - Unidade de preferência

5. Confirmação + handoff:
   "Tudo pronto, {nome}. Vou te direcionar para o WhatsApp da
    unidade {unidade}. Te esperamos!"
   → Renderiza botão WhatsApp com link `wa.me` pré-preenchido com
     mensagem contextual (nome, interesse, origem: site).
```

### 6.5. Configuração do token de API (modo demo)
- O site é shippado como **demo de portfólio/MVP**, então o token Claude é fornecido pelo próprio operador.
- Na primeira vez que o usuário tenta abrir o agente, o painel exibe um **modal de configuração**:
  - Campo `password` para colar a chave (`sk-ant-...`).
  - Texto explicativo curto + link para gerar a chave em `console.anthropic.com`.
  - Checkbox: "Salvar no meu navegador" (default ligado).
  - Aviso visível: *"⚠️ Esta chave fica salva apenas no seu navegador (localStorage). Não é enviada para nenhum servidor nosso. Em produção, recomendamos uso via backend."*
- A chave é persistida em `localStorage` sob a chave `hc_anthropic_key` e usada client-side em chamadas diretas à API Claude.
- Há um botão "Trocar chave" / "Remover chave" nas configurações do painel do chat.

### 6.6. UI do agente
- **Aciona por:** botão flutuante global (FAB) + CTAs do site.
- **Formato:** painel lateral (drawer) à direita no desktop (largura ~420px), bottom sheet no mobile (full height com handle).
- **Componentes:**
  - Header com avatar + nome ("Sofia · HealthCare") + ícone de configurações + fechar.
  - Área de mensagens com bolhas alternadas (Sofia = bolha clara sem fundo forte, usuário = bolha com cor da marca).
  - Indicador "Sofia está digitando…" durante streaming.
  - Input com auto-resize + botão enviar + Enter para enviar / Shift+Enter para quebra de linha.
  - Estado vazio inicial com 3 "sugestões rápidas" (chips clicáveis): *"Quero conhecer o método"*, *"Tenho dor lombar, pilates ajuda?"*, *"Quanto custa?"*.
  - Estado de erro elegante (chave inválida, rate limit, sem rede) com microcopy clara.

### 6.7. Guardrails técnicos
- Limite de mensagens por sessão (50) para evitar abuso de custo.
- Histórico mantido em memória da sessão (não persistido entre reloads, exceto opcional via localStorage com toggle).
- Sanitização do conteúdo renderizado (Markdown seguro, sem HTML arbitrário).
- Rate limit local: máximo 1 mensagem a cada 1.5s para evitar spam acidental.
- Em caso de erro de API, microcopy honesta sem expor stack trace.

---

## 7. Direção visual e identidade

### 7.1. Princípios
- **Editorial premium**, inspiração em hotéis boutique, wellness de alto padrão (Aman, Six Senses, marcas de skincare como Aesop e Byredo). **Não** parecer academia, **não** parecer clínica fria.
- **Espaço em branco** é o protagonista. Layouts respiram.
- **Tipografia faz o trabalho pesado.** Pouca ornamentação.
- **Fotografia editorial**, paleta natural, foco em pessoa + ambiente.

### 7.2. Paleta sugerida
| Token | Hex (referência) | Uso |
|---|---|---|
| Off-white / fundo | `#F7F4EE` | Background principal |
| Branco puro | `#FFFFFF` | Cards, contraste |
| Verde-musgo profundo | `#2C3A2E` | Cor de marca primária (texto, botões) |
| Terracota suave | `#C58A6B` | Acento, hovers, destaques |
| Cinza-pedra | `#8A8A85` | Texto secundário |
| Carvão | `#1A1A1A` | Texto principal sobre off-white |

### 7.3. Tipografia
- **Display / títulos:** serifa contemporânea com personalidade (ex: *Fraunces*, *Cormorant Garamond*, ou *PP Editorial New*). Pesos: regular + light.
- **Corpo / UI:** sans-serif neutra (ex: *Inter*, *Geist*, ou *Söhne*). Pesos: regular + medium.
- Escala tipográfica: 12 / 14 / 16 / 18 / 22 / 28 / 36 / 48 / 64 / 80 (clamp responsivo).

### 7.4. Sistema de design
- Componentização via **shadcn/ui** customizado com a paleta acima.
- Tokens semânticos: `--color-bg`, `--color-fg`, `--color-accent`, `--radius-sm/md/lg`, `--shadow-soft`.
- Cantos: predominantemente retos ou raio muito sutil (2–4px). Botões podem ter raio 8px.
- Sombras: extremamente sutis (`0 1px 2px rgba(0,0,0,0.04)`), nunca dramáticas.
- Iconografia: **line icons** finos (1.5px), estilo Phosphor/Lucide.

### 7.5. Microinterações
- Transições suaves (200–300ms, easing `cubic-bezier(0.4, 0, 0.2, 1)`).
- Fade-up + leve translate-y nas seções ao entrar no viewport (uma vez, não em loop).
- Hover de botão: leve mudança de luminosidade + leve elevação. **Sem** glow, **sem** gradiente animado.
- Cursor pointer com transição. Sem cursores customizados.

---

## 8. Performance, acessibilidade e SEO

### 8.1. Performance (não-negociável)
- Lighthouse Performance mobile ≥ 90.
- LCP < 2.5s no 3G simulado.
- Imagens via `next/image` com AVIF + WebP fallback.
- Fontes auto-hospedadas com `font-display: swap` e subset latin.
- Zero bibliotecas pesadas no client (no carousel libs pesadas — usar CSS scroll-snap ou Embla).
- JS bundle inicial < 150KB gzipped na home.

### 8.2. Acessibilidade
- WCAG 2.1 AA mínimo.
- Contraste mínimo 4.5:1 para texto corrido.
- Navegação por teclado em 100% dos componentes interativos (incluindo chat).
- `prefers-reduced-motion` respeitado.
- ARIA labels em todos os ícones-botão.
- Foco visível custom (outline elegante com cor de acento).

### 8.3. SEO
- Meta tags por página (title, description, OG, Twitter).
- JSON-LD: `LocalBusiness` (com `HealthClub`/`SportsActivityLocation`), `FAQPage` na página de FAQ.
- Sitemap e robots gerados automaticamente.
- URLs limpas, sem parâmetros desnecessários.
- Heading hierarchy estrita (1 `<h1>` por página).
- Idioma: `pt-BR`.

### 8.4. Responsividade
Breakpoints alvo:
- Mobile: 360–767px
- Tablet: 768–1023px
- Desktop: 1024–1439px
- Wide: 1440px+

Mobile-first no CSS. Testar nos devices reais: iPhone SE, iPhone 15, iPad, MacBook 13", monitor 1440p.

### 8.5. Privacidade / LGPD
- Banner de consentimento de cookies (apenas se houver analytics).
- Política de privacidade básica (placeholder estruturado).
- Aviso explícito de que a chave da API fica apenas no navegador.

---

## 9. Stack técnica

| Camada | Escolha | Justificativa |
|---|---|---|
| Framework | **Next.js 15+ (App Router)** | SSG/SSR/ISR nativos, melhor SEO, ecossistema, deploy zero-config na Vercel |
| Estilização | **Tailwind CSS 4** | Velocidade de desenvolvimento, design tokens consistentes, zero CSS morto |
| Componentes | **shadcn/ui** customizado | Acessibilidade pronta, controle total do código (não é dependência) |
| Animações | **Framer Motion** (uso parcimonioso) | Microinterações com `prefers-reduced-motion` nativo |
| Ícones | **Lucide** | Line icons consistentes, tree-shakeable |
| Tipografia | `next/font` (Google Fonts auto-hospedadas) | Performance |
| Cliente Claude | **`@anthropic-ai/sdk`** (com `dangerouslyAllowBrowser: true` no modo demo) | Oficial, streaming nativo |
| Markdown no chat | `react-markdown` + `rehype-sanitize` | Renderização segura |
| Deploy | **Vercel** | Edge network, image optimization, analytics |
| Analytics (opcional v1.1) | Vercel Analytics ou Plausible | Privacy-first, sem cookies invasivos |
| Lint/format | ESLint + Prettier + Tailwind plugin | Padrão |
| Testes (mínimo) | Playwright para smoke E2E em 3 jornadas-chave | Confiança no fluxo do agente |

---

## 10. Aprendizados do `awesome-claude-code` aplicados

Itens curados do repositório de referência e como aplicamos:

1. **System prompts robustos com persona explícita, escopo e guardrails.** O system prompt da Sofia segue o padrão "Identidade → Conhecimento → Tom → Limites → Fluxo".
2. **Streaming first.** Toda resposta usa streaming via SSE para reduzir TTFB percebido — padrão recomendado para apps conversacionais.
3. **Few-shot examples no system prompt** para alinhar tom e ancorar o comportamento em conversões (não em conversas infinitas).
4. **Stop sequences e estrutura de resposta** para evitar respostas longas demais; alvo de 2–5 frases por turno.
5. **Tool use planejado como evolução v1.1** (ex: `get_units`, `get_pricing`, `create_lead`) — na v1 mantemos tudo no system prompt para velocidade.
6. **Prompt caching** para a porção estática do system prompt (knowledge base do negócio) — reduz custo e latência significativamente em conversas longas.
7. **Guardrails de escopo** com instruções explícitas para redirecionar perguntas fora do domínio ("Sou especialista em pilates da HealthCare. Para isso, recomendo…").
8. **Logs de conversa em sessão** para depuração local (sem envio externo na v1).
9. **Microcopy de erro humano** em vez de stack traces — padrão recomendado para apps customer-facing.
10. **Token management consciente** — máximo de turnos, contexto truncado quando necessário, com aviso ao usuário.

---

## 11. Roadmap pós-v1

| Fase | Item | Valor |
|---|---|---|
| v1.1 | Backend leve (Vercel Edge Function) para proteger token em produção | Segurança |
| v1.1 | Tool use no agente: consultar unidades, horários, criar lead em CRM | Conversão |
| v1.2 | Páginas por unidade com SEO local | SEO local |
| v1.2 | Integração com agenda (Calendly, Reservio ou próprio) | Conversão direta |
| v1.3 | Blog editorial (artigos sobre método, saúde, longevidade) | SEO + autoridade |
| v1.3 | Área do aluno (login, plano, próximas aulas) | Retenção |
| v2.0 | Multi-idioma (PT/EN/ES) | Expansão |
| v2.0 | Tradução de voz / áudio no chat | Acessibilidade |

---

## 12. Riscos e mitigações

| Risco | Impacto | Mitigação |
|---|---|---|
| Token exposto no front (modo demo) | Médio — uso indevido se vazar | Aviso explícito, escopo demo, roadmap para backend em v1.1 |
| Agente alucina informação (preço, horário) | Alto — quebra de confiança | System prompt explícito proibindo invenção; instrução de redirecionar para WhatsApp em casos sem contexto |
| Custo de API descontrolado | Médio | Limite de mensagens por sessão, rate limit, prompt caching, modelo Haiku como fallback |
| Performance ruim em 3G | Médio — perda de público mobile | Budget de performance estrito, imagens otimizadas, JS mínimo |
| Conteúdo placeholder não substituído antes do go-live | Alto — vergonha pública | Checklist de conteúdo no SPEC, marcação visível `[PLACEHOLDER]` em dev |

---

## 13. Critérios de aceitação (Definition of Done v1)

A v1 está pronta quando:

- [ ] As 3 páginas (Home, Sobre, FAQ) estão implementadas conforme spec visual e de conteúdo.
- [ ] Todas as páginas atingem Lighthouse ≥ 90 em performance e ≥ 95 em acessibilidade no mobile.
- [ ] O agente Sofia responde com streaming, persona consistente, e completa o fluxo de captura de lead em pelo menos 3 cenários de teste.
- [ ] O fluxo de configuração de token funciona: validação, persistência, troca e remoção.
- [ ] Link WhatsApp gerado pelo agente está corretamente pré-preenchido com nome, unidade e mensagem.
- [ ] Site é totalmente responsivo, testado em iPhone SE, iPhone 15, iPad e desktop ≥ 1440px.
- [ ] Sem console errors. Sem warnings de a11y do axe-core.
- [ ] Meta tags, OG, JSON-LD e sitemap presentes.
- [ ] README com instruções de setup local, build e deploy.
- [ ] Smoke E2E passando: (1) home → CTA → chat abre, (2) FAQ → expandir pergunta, (3) chat → fluxo de captura → link WhatsApp.

---

## 14. Próximos passos

1. **Revisão e aprovação deste PRD** pelo stakeholder.
2. Geração do **SPEC.md** com detalhes técnicos de implementação (estrutura de pastas, contratos de componentes, system prompt completo da Sofia, conteúdo final das páginas, design tokens em código).
3. Implementação faseada conforme SPEC.
4. QA + deploy.

---

*Fim do documento.*
