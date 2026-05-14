import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { ClientLayout } from "@/components/layout/ClientLayout";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata, buildBusinessJsonLd, SITE_URL } from "@/lib/seo";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: "HealthCare Pilates — Movimento com propósito clínico",
  description:
    "Estúdios premium de pilates com método clínico, instrutores certificados e atendimento personalizado em São Paulo.",
  path: "/",
});

const businessJsonLd = buildBusinessJsonLd();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#f7f4ee] font-sans antialiased" style={{ fontFamily: "var(--font-sans)" }}>
        <ClientLayout>
          <main id="content">{children}</main>
        </ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
