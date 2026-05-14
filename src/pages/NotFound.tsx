import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { Seo } from "@/components/shared/Seo";

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Página não encontrada — HealthCare Pilates"
        description="O conteúdo que você procura pode ter sido movido ou não existe."
        path="/404"
      />
      <div className="flex min-h-screen items-center justify-center bg-[#f7f4ee]">
        <Container narrow>
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="font-display text-8xl font-light text-[#2c3a2e]/20">404</span>
            <h1 className="text-display-md font-display font-light text-[#1a1a1a]">
              Página não encontrada.
            </h1>
            <p className="text-sm text-[#8a8a85]">
              O conteúdo que você procura pode ter sido movido ou não existe.
            </p>
            <Button asChild>
              <Link to="/">Voltar ao início</Link>
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
