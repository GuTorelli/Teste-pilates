
import { useState } from "react";
import { KeyRound, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  onSave: (key: string) => boolean;
};

export function AgentEmptyState({ onSave }: Props) {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSave = () => {
    if (!onSave(value)) {
      setError("Chave inválida. Deve começar com sk-ant- e ter pelo menos 20 caracteres.");
    }
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-10 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2c3a2e]/8">
        <KeyRound className="h-5 w-5 text-[#2c3a2e]" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-[#1a1a1a]">
          Configure sua chave da Claude para conversar com a Sofia.
        </p>
        <p className="text-xs leading-relaxed text-[#8a8a85]">
          Cole sua chave de API da Anthropic abaixo. Ela fica salva{" "}
          <strong className="text-[#1a1a1a]">apenas neste navegador</strong> (localStorage) e
          nunca é enviada para servidores nossos.
        </p>
        <p className="text-[10px] text-[#8a8a85]/70">
          ⚠️ Modo demo — em produção, use backend para proteger a chave.
        </p>
      </div>

      <div className="flex w-full max-w-sm flex-col gap-2">
        <Input
          type="password"
          placeholder="sk-ant-..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(null);
          }}
          aria-label="Chave de API da Anthropic"
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
        />
        {error && <p className="text-xs text-[#a84c40]">{error}</p>}
        <Button size="sm" className="w-full" onClick={handleSave}>
          Salvar e iniciar conversa
        </Button>
      </div>

      <a
        href="https://console.anthropic.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs text-[#c58a6b] underline underline-offset-2 transition-opacity hover:opacity-70"
      >
        Obter uma chave em console.anthropic.com
        <ExternalLink className="h-3 w-3" aria-hidden="true" />
      </a>
    </div>
  );
}
