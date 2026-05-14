import { units } from "@/content/units";
import type { LeadData } from "@/types";

export function buildWhatsAppUrl(lead: LeadData): string {
  const unit = units.find((u) => u.id === lead.unit);
  if (!unit) {
    const fallback = units[0];
    const msg = `Olá! Sou ${lead.name}. Vim pelo site da HealthCare Pilates e gostaria de agendar uma aula experimental.`;
    return `https://wa.me/${fallback.phone.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
  }
  const target = unit.phone.replace(/\D/g, "");
  const msg = `Olá! Sou ${lead.name}. Vim pelo site da HealthCare Pilates e gostaria de agendar uma aula experimental na unidade ${unit.name}.`;
  return `https://wa.me/${target}?text=${encodeURIComponent(msg)}`;
}
