
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = { onClick: () => void };

export function AgentFAB({ onClick }: Props) {
  return (
    <button
      id="agent-fab"
      onClick={onClick}
      aria-label="Conversar com a Sofia"
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#2c3a2e] text-[#f7f4ee] shadow-[0_8px_28px_rgb(0_0_0/0.2)] transition-all duration-[260ms] hover:scale-105 hover:shadow-[0_12px_32px_rgb(0_0_0/0.25)] active:scale-95"
      )}
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      <span
        className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#c58a6b]"
        aria-hidden="true"
      >
        <span className="h-2 w-2 animate-ping rounded-full bg-[#c58a6b] opacity-75" />
      </span>
    </button>
  );
}
