import { Container } from "@/components/shared/Container";

export function FaqHero() {
  return (
    <section className="bg-white pb-12 pt-28 md:pb-16 md:pt-36" aria-label="Cabeçalho FAQ">
      <Container narrow>
        <span className="mb-4 block text-eyebrow font-medium uppercase tracking-[0.18em] text-[#c58a6b]">
          DÚVIDAS FREQUENTES
        </span>
        <h1 className="text-display-lg font-display font-light text-[#1a1a1a]">
          Tire suas dúvidas.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#8a8a85]">
          Respostas rápidas abaixo. Para o resto, fale com a Sofia — nossa especialista digital, disponível agora.
        </p>
      </Container>
    </section>
  );
}
