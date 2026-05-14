"use client";

import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";

type Props = {
  title: string;
  body: string;
  ctaLabel: string;
  onCta?: () => void;
};

export function ClosingCTA({ title, body, ctaLabel, onCta }: Props) {
  return (
    <section
      className="section-py bg-[#2c3a2e]"
      aria-labelledby="closing-cta-heading"
    >
      <Container narrow>
        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center">
            <h2
              id="closing-cta-heading"
              className="text-display-lg font-display font-light text-[#f7f4ee]"
            >
              {title}
            </h2>
            <p className="max-w-md text-base leading-relaxed text-[#f7f4ee]/70">{body}</p>
            <Button
              size="lg"
              className="bg-[#f7f4ee] text-[#2c3a2e] hover:bg-[#f7f4ee]/90"
              onClick={onCta}
            >
              {ctaLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
