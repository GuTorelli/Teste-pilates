import { Hero } from "@/components/sections/Hero";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { WhyHealthCare } from "@/components/sections/WhyHealthCare";
import { Modalities } from "@/components/sections/Modalities";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowToStart } from "@/components/sections/HowToStart";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Seo } from "@/components/shared/Seo";
import { homeContent } from "@/content/home";

type Props = { onOpenAgent: () => void };

export default function HomePage({ onOpenAgent }: Props) {
  const { hero, credibility, why, modalities, testimonials, howToStart, closingCta } =
    homeContent;

  return (
    <>
      <Seo
        title="HealthCare Pilates — Movimento com propósito clínico"
        description="Estúdios premium de pilates com método clínico, instrutores certificados e atendimento personalizado em São Paulo."
        path="/"
      />
      <Hero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        primaryCta={{ label: hero.primaryCta, onClick: onOpenAgent }}
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
        onCta={onOpenAgent}
      />
    </>
  );
}
