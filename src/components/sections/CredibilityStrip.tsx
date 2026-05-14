import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

type Item = { value: string; label: string };

export function CredibilityStrip({ items }: { items: Item[] }) {
  return (
    <section className="border-y border-[#e6e2da] bg-white py-10" aria-label="Números da rede">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="font-display text-4xl font-light tracking-tight text-[#2c3a2e]">
                  {item.value}
                </span>
                <span className="text-xs uppercase tracking-[0.15em] text-[#8a8a85]">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
