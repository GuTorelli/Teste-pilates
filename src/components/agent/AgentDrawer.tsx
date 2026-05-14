
import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AgentHeader } from "./AgentHeader";
import { AgentMessages } from "./AgentMessages";
import { AgentInput } from "./AgentInput";
import { AgentSuggestions } from "./AgentSuggestions";
import { AgentEmptyState } from "./AgentEmptyState";
import { AgentSettings } from "./AgentSettings";
import { useAgent } from "@/hooks/useAgent";
import { useApiKey } from "@/hooks/useApiKey";
import { cn } from "@/lib/cn";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
};

export function AgentDrawer({ open, onOpenChange }: Props) {
  const { apiKey, saveKey, removeKey, hydrated } = useApiKey();
  const { messages, status, send, lead, whatsappUrl } = useAgent(apiKey);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const showSuggestions = messages.length === 1 && status === "idle";

  return (
    <>
      <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content
            className={cn(
              "fixed z-50 bg-[#f7f4ee] shadow-[0_8px_28px_rgb(0_0_0/0.1)] flex flex-col",
              "inset-y-0 right-0 w-full max-w-[420px]",
              "data-[state=open]:animate-in data-[state=closed]:animate-out",
              "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
              "duration-300",
              "max-sm:inset-x-0 max-sm:inset-y-auto max-sm:bottom-0 max-sm:max-w-full max-sm:rounded-t-[16px]",
              "max-sm:data-[state=closed]:slide-out-to-bottom max-sm:data-[state=open]:slide-in-from-bottom",
              "max-sm:h-[calc(100dvh-16px)]"
            )}
            aria-modal="true"
            aria-label="Chat com a Sofia — HealthCare Pilates"
          >
            {/* Handle (mobile) */}
            <div className="flex justify-center pt-3 sm:hidden" aria-hidden="true">
              <div className="h-1 w-10 rounded-full bg-[#e6e2da]" />
            </div>

            <AgentHeader
              onClose={() => onOpenChange(false)}
              onSettings={() => setSettingsOpen(true)}
            />

            {hydrated && !apiKey ? (
              <AgentEmptyState onSave={saveKey} />
            ) : (
              <>
                <AgentMessages
                  messages={messages}
                  isStreaming={status === "streaming"}
                  lead={lead}
                  whatsappUrl={whatsappUrl}
                />
                {showSuggestions && <AgentSuggestions onSend={send} />}
                <AgentInput onSend={send} disabled={status === "streaming"} />
              </>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>

      <AgentSettings
        open={settingsOpen}
        onOpenChange={setSettingsOpen}
        hasKey={!!apiKey}
        onSave={saveKey}
        onRemove={removeKey}
      />
    </>
  );
}
