import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = { q: string; a: string };
type FaqCategory = { id: string; title: string; items: FaqItem[] };
type Props = { categories: FaqCategory[] };

export function FaqAccordion({ categories }: Props) {
  return (
    <section className="section-py bg-white" aria-label="FAQ por categoria">
      <Container narrow>
        <div className="flex flex-col gap-14">
          {categories.map((cat, ci) => (
            <Reveal key={cat.id} delay={ci * 0.06}>
              <div>
                <h2 className="mb-1 text-eyebrow font-medium uppercase tracking-[0.18em] text-[#c58a6b]">
                  {cat.title}
                </h2>
                <Accordion type="multiple">
                  {cat.items.map((item) => (
                    <AccordionItem key={item.q} value={item.q}>
                      <AccordionTrigger>{item.q}</AccordionTrigger>
                      <AccordionContent>{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
