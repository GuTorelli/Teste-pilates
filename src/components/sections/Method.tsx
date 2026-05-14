import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

type Pillar = { title: string; body: string };
type Props = {
  eyebrow: string;
  title: string;
  body: string[];
  pillars: Pillar[];
};

export function Method({ eyebrow, title, body, pillars }: Props) {
  return (
    <section className="section-py bg-[#f7f4ee]" aria-labelledby="method-heading">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              id="method-heading"
              eyebrow={eyebrow}
              title={title}
              className="mb-8"
            />
            <div className="flex flex-col gap-4">
              {body.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-[#8a8a85]">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="flex flex-col gap-2 rounded-[10px] border border-[#e6e2da] bg-white p-6"
                >
                  <span className="font-display text-3xl font-light text-[#2c3a2e]/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-medium text-[#1a1a1a]">{pillar.title}</h3>
                  <p className="text-xs leading-relaxed text-[#8a8a85]">{pillar.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
