
import { useRef, useEffect } from "react";
import { SendHorizonal } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  onSend: (text: string) => void;
  disabled?: boolean;
};

export function AgentInput({ onSend, disabled }: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    const value = ref.current?.value.trim();
    if (!value || disabled) return;
    onSend(value);
    if (ref.current) ref.current.value = "";
    resize();
  };

  const resize = () => {
    if (!ref.current) return;
    ref.current.style.height = "auto";
    ref.current.style.height = `${Math.min(ref.current.scrollHeight, 120)}px`;
  };

  useEffect(() => {
    if (!disabled) ref.current?.focus();
  }, [disabled]);

  return (
    <div className="border-t border-[#e6e2da] p-3">
      <div className="flex items-end gap-2 rounded-[8px] border border-[#e6e2da] bg-white px-3 py-2 focus-within:border-[#2c3a2e]/40">
        <textarea
          ref={ref}
          rows={1}
          placeholder="Escreva sua mensagem..."
          disabled={disabled}
          className="flex-1 resize-none bg-transparent text-sm text-[#1a1a1a] placeholder:text-[#8a8a85] focus:outline-none disabled:opacity-50"
          style={{ minHeight: "24px", maxHeight: "120px" }}
          onInput={resize}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          aria-label="Mensagem para a Sofia"
        />
        <button
          onClick={handleSend}
          disabled={disabled}
          aria-label="Enviar mensagem"
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-colors",
            disabled
              ? "cursor-not-allowed text-[#e6e2da]"
              : "text-[#2c3a2e] hover:bg-[#2c3a2e]/8"
          )}
        >
          <SendHorizonal className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <p className="mt-1.5 text-center text-[10px] text-[#8a8a85]">
        Enter para enviar · Shift+Enter para nova linha
      </p>
    </div>
  );
}
