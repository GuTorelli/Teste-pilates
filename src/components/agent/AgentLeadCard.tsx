import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LeadData } from "@/types";

type Props = { lead: LeadData; whatsappUrl: string };

export function AgentLeadCard({ lead, whatsappUrl }: Props) {
  return (
    <div className="rounded-[10px] border border-[#e6e2da] bg-white p-4 shadow-[0_1px_2px_rgb(0_0_0/0.04)]">
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#c58a6b]">
        Próximo passo
      </p>
      <p className="mt-1 text-sm font-medium text-[#1a1a1a]">
        Pronto, {lead.name}! Clique abaixo para confirmar pelo WhatsApp.
      </p>
      <Button
        size="sm"
        className="mt-3 w-full bg-[#25d366] text-white hover:bg-[#25d366]/90"
        asChild
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Continuar no WhatsApp
        </a>
      </Button>
    </div>
  );
}
