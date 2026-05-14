import { FaqHero } from "@/components/sections/FaqHero";
import { FaqAgentCard } from "@/components/sections/FaqAgentCard";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Seo } from "@/components/shared/Seo";
import { buildFaqJsonLd } from "@/lib/seo";
import { faqCategories } from "@/content/faq";

type Props = { onOpenAgent: () => void };

export default function FaqPage({ onOpenAgent }: Props) {
  const allItems = faqCategories.flatMap((c) => c.items);
  const jsonLd = buildFaqJsonLd(allItems);

  return (
    <>
      <Seo
        title="Dúvidas frequentes — HealthCare Pilates"
        description="Tire suas dúvidas sobre o método, valores, indicações clínicas e como começar."
        path="/faq"
        jsonLd={jsonLd}
      />
      <FaqHero />
      <FaqAgentCard onOpen={onOpenAgent} />
      <FaqAccordion categories={faqCategories} />
      <ClosingCTA
        title="Não encontrou o que procurava?"
        body="Fale com a Sofia — ela responde na hora, qualquer dia, qualquer hora."
        ctaLabel="Falar com a Sofia"
        onCta={onOpenAgent}
      />
    </>
  );
}
