import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://healthcare-pilates.vercel.app";

export { SITE_URL };

export function buildMetadata({
  title,
  description,
  path,
  image = "/og-default.svg",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "HealthCare Pilates",
      images: [{ url: image, width: 1200, height: 630 }],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}

export function buildBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: "HealthCare Pilates",
    url: SITE_URL,
    image: `${SITE_URL}/og-default.jpg`,
    priceRange: "R$$$",
    areaServed: "São Paulo, SP",
    description: "Rede premium de estúdios de pilates com método clínico.",
    openingHours: ["Mo-Fr 06:00-22:00", "Sa 08:00-14:00"],
  };
}
