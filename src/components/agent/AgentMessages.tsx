
import { useEffect, useRef } from "react";
import { AgentMessage } from "./AgentMessage";
import { AgentLeadCard } from "./AgentLeadCard";
import type { AgentMessage as Msg, LeadData } from "@/types";

type Props = {
  messages: Msg[];
  isStreaming: boolean;
  lead: LeadData | null;
  whatsappUrl: string | null;
};

export function AgentMessages({ messages, isStreaming, lead, whatsappUrl }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const lastIsStreaming =
    isStreaming &&
    messages.length > 0 &&
    messages[messages.length - 1].role === "assistant" &&
    messages[messages.length - 1].content === "";

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4" aria-live="polite" aria-atomic="false">
      {messages.map((msg) => (
        <AgentMessage key={msg.id} message={msg} />
      ))}
      {lastIsStreaming && (
        <div className="flex justify-start" aria-label="Sofia está digitando">
          <div className="flex items-center gap-1 px-4 py-3">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-[#8a8a85] animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      )}
      {lead && whatsappUrl && <AgentLeadCard lead={lead} whatsappUrl={whatsappUrl} />}
      <div ref={bottomRef} aria-hidden="true" />
    </div>
  );
}
