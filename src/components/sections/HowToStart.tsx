import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

type Step = { n: string; title: string; body: string };
type Props = { eyebrow: string; title: string; steps: Step[] };

export function HowToStart({ eyebrow, title, steps }: Props) {
  return (
    <section className="section-py bg-white" aria-labelledby="how-to-start-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="how-to-start-heading"
            eyebrow={eyebrow}
            title={title}
            className="mb-14"
          />
        </Reveal>

        <div className="grid gap-0 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1}>
              <div className="relative flex flex-col gap-5 border-t border-[#e6e2da] pt-8 md:border-l md:border-t-0 md:pl-8 md:first:border-l-0 md:first:pl-0">
                <span className="font-display text-5xl font-light text-[#2c3a2e]/15">
                  {step.n}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-light text-[#1a1a1a]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[#8a8a85]">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
