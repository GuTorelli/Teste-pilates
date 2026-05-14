import type { LeadData } from "@/types";

const LEAD_RX =
  /\[LEAD_READY\s+name="([^"]+)"\s+phone="([^"]+)"\s+unit="([^"]+)"\]/;

export function extractLead(
  text: string
): { lead: LeadData; cleanText: string } | null {
  const match = text.match(LEAD_RX);
  if (!match) return null;
  const [full, name, phone, unit] = match;
  return {
    lead: {
      name: name.trim(),
      phone: phone.replace(/\D/g, ""),
      unit: unit.trim(),
    },
    cleanText: text.replace(full, "").trim(),
  };
}
