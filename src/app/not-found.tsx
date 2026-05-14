import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";

export default function NotFound() {
  return (
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
            <Link href="/">Voltar ao início</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
