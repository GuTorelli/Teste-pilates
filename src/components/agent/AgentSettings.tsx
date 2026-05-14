"use client";

import { useState } from "react";
import { KeyRound, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  hasKey: boolean;
  onSave: (key: string) => boolean;
  onRemove: () => void;
};

export function AgentSettings({ open, onOpenChange, hasKey, onSave, onRemove }: Props) {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSave = () => {
    if (!onSave(value)) {
      setError("Chave inválida. Verifique se começa com sk-ant-.");
      return;
    }
    onOpenChange(false);
    setValue("");
    setError(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Configurações da Sofia</DialogTitle>
          <DialogDescription>
            Gerencie sua chave de API da Anthropic. Ela fica salva apenas no seu navegador.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center gap-2 rounded-[6px] bg-[#f7f4ee] px-3 py-2">
            <KeyRound className="h-4 w-4 shrink-0 text-[#8a8a85]" aria-hidden="true" />
            <span className="text-xs text-[#8a8a85]">
              {hasKey ? "Chave configurada ••••••••••••••" : "Nenhuma chave configurada"}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="new-key" className="text-xs font-medium text-[#1a1a1a]">
              {hasKey ? "Substituir chave" : "Nova chave"}
            </label>
            <Input
              id="new-key"
              type="password"
              placeholder="sk-ant-..."
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(null);
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
            />
            {error && <p className="text-xs text-[#a84c40]">{error}</p>}
            <Button size="sm" onClick={handleSave} disabled={!value}>
              Salvar chave
            </Button>
          </div>

          {hasKey && (
            <button
              onClick={() => {
                onRemove();
                onOpenChange(false);
              }}
              className="flex items-center gap-1.5 self-start text-xs text-[#a84c40] transition-opacity hover:opacity-70"
            >
              <Trash2 className="h-3 w-3" aria-hidden="true" />
              Remover chave
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
