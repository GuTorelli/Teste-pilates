"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { WhyHealthCare } from "@/components/sections/WhyHealthCare";
import { Modalities } from "@/components/sections/Modalities";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowToStart } from "@/components/sections/HowToStart";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { homeContent } from "@/content/home";

const AgentDrawer = dynamic(
  () => import("@/components/agent/AgentDrawer").then((m) => ({ default: m.AgentDrawer })),
  { ssr: false }
);

export default function HomePage() {
  const [agentOpen, setAgentOpen] = useState(false);
  const { hero, credibility, why, modalities, testimonials, howToStart, closingCta } =
    homeContent;

  return (
    <>
      <Hero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        primaryCta={{ label: hero.primaryCta, onClick: () => setAgentOpen(true) }}
        secondaryCta={{ label: hero.secondaryCta, href: "/sobre" }}
        imageSrc="/images/hero-home.svg"
        imageAlt="Aluna praticando pilates no aparelho em estúdio HealthCare"
      />
      <CredibilityStrip items={credibility} />
      <WhyHealthCare eyebrow={why.eyebrow} title={why.title} items={why.items} />
      <Modalities
        eyebrow={modalities.eyebrow}
        title={modalities.title}
        items={modalities.items}
      />
      <Testimonials eyebrow={testimonials.eyebrow} items={testimonials.items} />
      <HowToStart
        eyebrow={howToStart.eyebrow}
        title={howToStart.title}
        steps={howToStart.steps}
      />
      <ClosingCTA
        title={closingCta.title}
        body={closingCta.body}
        ctaLabel={closingCta.ctaLabel}
        onCta={() => setAgentOpen(true)}
      />
      <AgentDrawer open={agentOpen} onOpenChange={setAgentOpen} />
    </>
  );
}
