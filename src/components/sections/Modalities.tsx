
import { useState } from "react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/cn";

type Item = { name: string; body: string };
type Props = { eyebrow: string; title: string; items: Item[] };

export function Modalities({ eyebrow, title, items }: Props) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="section-py bg-white" aria-labelledby="modalities-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="modalities-heading"
            eyebrow={eyebrow}
            title={title}
            className="mb-14"
          />
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06}>
              <button
                className={cn(
                  "group w-full rounded-[10px] border p-6 text-left transition-all duration-[260ms]",
                  active === i
                    ? "border-[#2c3a2e] bg-[#2c3a2e] text-[#f7f4ee]"
                    : "border-[#e6e2da] bg-[#f7f4ee] hover:border-[#2c3a2e]/30 hover:bg-white"
                )}
                onClick={() => setActive(active === i ? null : i)}
                aria-expanded={active === i}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={cn(
                      "font-medium text-sm",
                      active === i ? "text-[#f7f4ee]" : "text-[#1a1a1a]"
                    )}
                  >
                    {item.name}
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 shrink-0 text-lg leading-none transition-transform duration-[260ms]",
                      active === i ? "rotate-45 text-[#f7f4ee]/70" : "text-[#8a8a85]"
                    )}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </div>
                {active === i && (
                  <p className="mt-3 text-sm leading-relaxed text-[#f7f4ee]/80">{item.body}</p>
                )}
              </button>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
