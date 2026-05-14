"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { FaqHero } from "@/components/sections/FaqHero";
import { FaqAgentCard } from "@/components/sections/FaqAgentCard";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { faqCategories } from "@/content/faq";

const AgentDrawer = dynamic(
  () => import("@/components/agent/AgentDrawer").then((m) => ({ default: m.AgentDrawer })),
  { ssr: false }
);

export default function FaqPage() {
  const [agentOpen, setAgentOpen] = useState(false);

  return (
    <>
      <FaqHero />
      <FaqAgentCard onOpen={() => setAgentOpen(true)} />
      <FaqAccordion categories={faqCategories} />
      <ClosingCTA
        title="Não encontrou o que procurava?"
        body="Fale com a Sofia — ela responde na hora, qualquer dia, qualquer hora."
        ctaLabel="Falar com a Sofia"
        onCta={() => setAgentOpen(true)}
      />
      <AgentDrawer open={agentOpen} onOpenChange={setAgentOpen} />
    </>
  );
}
