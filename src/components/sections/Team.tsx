import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/badge";

type Member = {
  name: string;
  role: string;
  credential: string;
  bio: string;
  photo: string;
};

type Props = { eyebrow: string; title: string; members: Member[] };

export function Team({ eyebrow, title, members }: Props) {
  return (
    <section className="section-py bg-white" aria-labelledby="team-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="team-heading"
            eyebrow={eyebrow}
            title={title}
            className="mb-14"
          />
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <article className="flex flex-col gap-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[10px] bg-[#e6e2da]">
                  <img
                    src={member.photo}
                    alt={`Foto de ${member.name}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover grayscale transition-all duration-[420ms] hover:grayscale-0"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-light text-[#1a1a1a]">
                      {member.name}
                    </h3>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#c58a6b]">
                    {member.role}
                  </span>
                  <Badge variant="outline" className="w-fit text-[10px]">
                    {member.credential}
                  </Badge>
                  <p className="mt-1 text-xs leading-relaxed text-[#8a8a85]">{member.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
