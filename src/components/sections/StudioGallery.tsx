import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

type Props = { eyebrow: string; title: string; gallery: string[] };

export function StudioGallery({ eyebrow, title, gallery }: Props) {
  return (
    <section className="section-py bg-[#f7f4ee]" aria-labelledby="gallery-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="gallery-heading"
            eyebrow={eyebrow}
            title={title}
            className="mb-14"
          />
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((src, i) => (
            <Reveal key={src} delay={i * 0.06}>
              <div
                className={`relative overflow-hidden rounded-[10px] bg-[#e6e2da] ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2 aspect-square" : "aspect-video"
                }`}
              >
                <Image
                  src={src}
                  alt={`Estúdio HealthCare Pilates — imagem ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-[420ms] hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
