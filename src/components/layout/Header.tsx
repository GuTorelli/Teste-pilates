import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/cn";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/faq", label: "FAQ" },
];

type HeaderProps = {
  onOpenAgent?: () => void;
};

export function Header({ onOpenAgent }: HeaderProps) {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <a
        href="#content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:rounded focus-visible:bg-white focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:shadow-lg"
      >
        Pular para conteúdo
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-[260ms]",
          scrolled
            ? "bg-[#f7f4ee]/95 shadow-[0_1px_2px_rgb(0_0_0/0.04)] backdrop-blur-sm"
            : "bg-transparent"
        )}
      >
        <Container>
          <div className="md:h-18 flex h-16 items-center justify-between gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 focus-visible:outline-[#c58a6b]"
              aria-label="HealthCare Pilates — página inicial"
            >
              <span className="font-display text-lg font-light tracking-tight text-[#2c3a2e]">
                Health<span className="font-medium">Care</span>
              </span>
              <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-[#c58a6b] sm:inline">
                Pilates
              </span>
            </Link>

            <nav
              className="hidden items-center gap-6 md:flex"
              aria-label="Navegação principal"
            >
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    "text-sm transition-colors duration-[180ms]",
                    pathname === to
                      ? "font-medium text-[#2c3a2e]"
                      : "text-[#8a8a85] hover:text-[#1a1a1a]"
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                size="sm"
                onClick={onOpenAgent}
                className="hidden md:inline-flex"
                aria-label="Agendar aula experimental"
              >
                Agendar aula
              </Button>

              <button
                className="flex h-9 w-9 items-center justify-center rounded-md text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a]/5 md:hidden"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </Container>

        {menuOpen && (
          <div className="border-t border-[#e6e2da] bg-[#f7f4ee] px-5 py-4 md:hidden">
            <nav className="flex flex-col gap-1" aria-label="Navegação mobile">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm transition-colors",
                    pathname === to
                      ? "font-medium text-[#2c3a2e]"
                      : "text-[#8a8a85] hover:bg-[#1a1a1a]/5 hover:text-[#1a1a1a]"
                  )}
                >
                  {label}
                </Link>
              ))}
              <div className="mt-3 border-t border-[#e6e2da] pt-3">
                <Button
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenAgent?.();
                  }}
                >
                  Agendar aula
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
