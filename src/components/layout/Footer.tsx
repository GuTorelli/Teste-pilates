import Link from "next/link";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Separator } from "@/components/ui/separator";
import { units } from "@/content/units";

export function Footer() {
  return (
    <footer className="bg-[#2c3a2e] text-[#f7f4ee]" aria-label="Rodapé">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-display text-lg font-light tracking-tight">
              Health<span className="font-medium">Care</span>{" "}
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#c58a6b]">
                Pilates
              </span>
            </span>
            <p className="text-sm leading-relaxed text-[#f7f4ee]/60">
              Movimento com propósito clínico. Estúdios premium com método, cuidado e resultado.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f7f4ee]/20 text-[#f7f4ee]/60 transition-colors hover:border-[#f7f4ee]/40 hover:text-[#f7f4ee]"
                aria-label="Instagram da HealthCare Pilates"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f7f4ee]/20 text-[#f7f4ee]/60 transition-colors hover:border-[#f7f4ee]/40 hover:text-[#f7f4ee]"
                aria-label="YouTube da HealthCare Pilates"
              >
                <Youtube className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f7f4ee]/20 text-[#f7f4ee]/60 transition-colors hover:border-[#f7f4ee]/40 hover:text-[#f7f4ee]"
                aria-label="LinkedIn da HealthCare Pilates"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Unidades */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-[#c58a6b]">
              Unidades
            </h3>
            <ul className="flex flex-col gap-2">
              {units.map((u) => (
                <li key={u.id} className="text-sm text-[#f7f4ee]/60">
                  {u.name.replace("HealthCare ", "")}
                  <span className="block text-xs text-[#f7f4ee]/40">{u.address}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegação */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-[#c58a6b]">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/sobre", label: "Sobre nós" },
                { href: "/faq", label: "FAQ" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#f7f4ee]/60 transition-colors hover:text-[#f7f4ee]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horários */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-[#c58a6b]">
              Horários
            </h3>
            <div className="flex flex-col gap-1 text-sm text-[#f7f4ee]/60">
              <span>Segunda a sexta</span>
              <span className="font-medium text-[#f7f4ee]">06h – 22h</span>
              <span className="mt-2">Sábados</span>
              <span className="font-medium text-[#f7f4ee]">08h – 14h</span>
            </div>
          </div>
        </div>

        <Separator className="bg-[#f7f4ee]/10" />

        <div className="flex flex-col items-start justify-between gap-3 py-6 text-xs text-[#f7f4ee]/40 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} HealthCare Pilates. Todos os direitos reservados.</span>
          <Link
            href="/privacidade"
            className="transition-colors hover:text-[#f7f4ee]/70"
          >
            Política de privacidade
          </Link>
        </div>
      </Container>
    </footer>
  );
}
