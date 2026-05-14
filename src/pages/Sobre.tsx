import { Manifesto } from "@/components/sections/Manifesto";
import { Method } from "@/components/sections/Method";
import { Team } from "@/components/sections/Team";
import { StudioGallery } from "@/components/sections/StudioGallery";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Seo } from "@/components/shared/Seo";
import { sobreContent } from "@/content/sobre";

type Props = { onOpenAgent: () => void };

export default function SobrePage({ onOpenAgent }: Props) {
  const { hero, manifesto, method, team, studio, closingCta } = sobreContent;

  return (
    <>
      <Seo
        title="Sobre — HealthCare Pilates"
        description="Conheça a história, o método clínico e os profissionais por trás da HealthCare Pilates."
        path="/sobre"
      />
      <Manifesto hero={hero} manifesto={manifesto} imageSrc="/images/hero-sobre.svg" />
      <Method
        eyebrow={method.eyebrow}
        title={method.title}
        body={method.body}
        pillars={method.pillars}
      />
      <Team eyebrow={team.eyebrow} title={team.title} members={team.members} />
      <StudioGallery
        eyebrow={studio.eyebrow}
        title={studio.title}
        gallery={studio.gallery}
      />
      <ClosingCTA
        title={closingCta.title}
        body=""
        ctaLabel={closingCta.ctaLabel}
        onCta={onOpenAgent}
      />
    </>
  );
}
