"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Manifesto } from "@/components/sections/Manifesto";
import { Method } from "@/components/sections/Method";
import { Team } from "@/components/sections/Team";
import { StudioGallery } from "@/components/sections/StudioGallery";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { sobreContent } from "@/content/sobre";

const AgentDrawer = dynamic(
  () => import("@/components/agent/AgentDrawer").then((m) => ({ default: m.AgentDrawer })),
  { ssr: false }
);

export default function SobrePage() {
  const [agentOpen, setAgentOpen] = useState(false);
  const { hero, manifesto, method, team, studio, closingCta } = sobreContent;

  return (
    <>
      <Manifesto
        hero={hero}
        manifesto={manifesto}
        imageSrc="/images/hero-sobre.svg"
      />
      <Method
        eyebrow={method.eyebrow}
        title={method.title}
        body={method.body}
        pillars={method.pillars}
      />
      <Team eyebrow={team.eyebrow} title={team.title} members={team.members} />
      <StudioGallery
        eyebrow={studio.eyebrow}
        title={studio.title}
        gallery={studio.gallery}
      />
      <ClosingCTA
        title={closingCta.title}
        body=""
        ctaLabel={closingCta.ctaLabel}
        onCta={() => setAgentOpen(true)}
      />
      <AgentDrawer open={agentOpen} onOpenChange={setAgentOpen} />
    </>
  );
}
