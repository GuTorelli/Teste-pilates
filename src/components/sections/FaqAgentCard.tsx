"use client";

import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";

type Props = { onOpen: () => void };

export function FaqAgentCard({ onOpen }: Props) {
  return (
    <section className="bg-[#f7f4ee] py-8" aria-label="Agente Sofia">
      <Container narrow>
        <div className="flex flex-col items-start gap-4 rounded-[10px] border border-[#2c3a2e]/15 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2c3a2e]">
              <Sparkles className="h-4 w-4 text-[#f7f4ee]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#1a1a1a]">
                Converse com a Sofia, nossa especialista digital.
              </p>
              <p className="mt-0.5 text-xs text-[#8a8a85]">
                Ela responde dúvidas e, se quiser, te ajuda a agendar uma aula experimental.
              </p>
            </div>
          </div>
          <Button size="sm" onClick={onOpen} className="shrink-0">
            Iniciar conversa
          </Button>
        </div>
      </Container>
    </section>
  );
}
