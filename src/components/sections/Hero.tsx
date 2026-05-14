"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; onClick?: () => void };
  secondaryCta?: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
}: HeroProps) {
  return (
    <section
      className="relative flex min-h-[88vh] items-end pb-16 pt-32 lg:min-h-[92vh]"
      aria-label="Banner principal"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/10" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-2xl">
          {eyebrow && (
            <span className="mb-4 inline-block text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/70">
              {eyebrow}
            </span>
          )}
          <h1 className="text-display-xl font-display font-light text-white">
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={primaryCta.onClick}
              aria-label={primaryCta.label}
            >
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                <a href={secondaryCta.href}>{secondaryCta.label}</a>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
