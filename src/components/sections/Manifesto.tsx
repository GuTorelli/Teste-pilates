import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

type Props = {
  hero: { eyebrow: string; title: string };
  manifesto: string;
  imageSrc: string;
};

export function Manifesto({ hero, manifesto, imageSrc }: Props) {
  return (
    <>
      <section
        className="relative flex min-h-[60vh] items-end pb-16 pt-32"
        aria-label="Cabeçalho Sobre nós"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={imageSrc}
            alt="Estúdio HealthCare Pilates"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10" />
        </div>
        <Container className="relative z-10">
          <span className="mb-3 block text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/70">
            {hero.eyebrow}
          </span>
          <h1 className="max-w-2xl text-display-lg font-display font-light text-white">
            {hero.title}
          </h1>
        </Container>
      </section>

      <section className="section-py bg-white" aria-label="Manifesto da marca">
        <Container narrow>
          <Reveal>
            <p className="font-display text-xl font-light leading-[1.7] text-[#1a1a1a] md:text-2xl">
              {manifesto}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
