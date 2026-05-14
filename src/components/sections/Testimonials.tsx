"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/cn";

type Item = { quote: string; name: string; context: string };
type Props = { eyebrow: string; items: Item[] };

export function Testimonials({ eyebrow, items }: Props) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);
  const next = () => setCurrent((c) => (c + 1) % items.length);

  return (
    <section className="section-py bg-[#f7f4ee]" aria-labelledby="testimonials-heading">
      <Container narrow>
        <Reveal>
          <SectionHeading
            id="testimonials-heading"
            eyebrow={eyebrow}
            title=""
            className="sr-only"
          />
          <span className="text-eyebrow mb-12 block font-medium uppercase tracking-[0.18em] text-[#c58a6b]">
            {eyebrow}
          </span>
        </Reveal>

        <div className="relative" aria-live="polite" aria-atomic="true">
          <Reveal key={current}>
            <blockquote className="flex flex-col gap-6">
              <p className="font-display text-display-md font-light text-[#1a1a1a]">
                &ldquo;{items[current].quote}&rdquo;
              </p>
              <footer className="flex flex-col gap-0.5">
                <cite className="not-italic text-sm font-medium text-[#1a1a1a]">
                  {items[current].name}
                </cite>
                <span className="text-xs text-[#8a8a85]">{items[current].context}</span>
              </footer>
            </blockquote>
          </Reveal>

          <div className="mt-10 flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6e2da] text-[#8a8a85] transition-colors hover:border-[#2c3a2e] hover:text-[#2c3a2e]"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="flex gap-2" aria-label={`Depoimento ${current + 1} de ${items.length}`}>
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-[260ms]",
                    i === current ? "w-6 bg-[#2c3a2e]" : "w-1.5 bg-[#e6e2da]"
                  )}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Próximo depoimento"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6e2da] text-[#8a8a85] transition-colors hover:border-[#2c3a2e] hover:text-[#2c3a2e]"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
