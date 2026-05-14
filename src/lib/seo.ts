export const SITE_URL =
  import.meta.env.VITE_SITE_URL || "https://healthcare-pilates.netlify.app";

export type SeoData = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function buildFaqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };
}
