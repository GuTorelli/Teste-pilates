import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Activity, Dumbbell, Heart } from "lucide-react";

const ICONS = [Activity, Dumbbell, Heart];

type Item = { title: string; body: string };
type Props = {
  eyebrow: string;
  title: string;
  items: Item[];
};

export function WhyHealthCare({ eyebrow, title, items }: Props) {
  return (
    <section className="section-py bg-[#f7f4ee]" aria-labelledby="why-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="why-heading"
            eyebrow={eyebrow}
            title={title}
            className="mb-14"
          />
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i] ?? Activity;
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <article className="flex flex-col gap-4 rounded-[10px] border border-[#e6e2da] bg-white p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2c3a2e]/8">
                    <Icon className="h-5 w-5 text-[#2c3a2e]" aria-hidden="true" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-light text-[#1a1a1a]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#8a8a85]">{item.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
