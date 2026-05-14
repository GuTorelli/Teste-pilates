import { Settings, X } from "lucide-react";

type Props = {
  onClose: () => void;
  onSettings: () => void;
};

export function AgentHeader({ onClose, onSettings }: Props) {
  return (
    <div className="flex items-center justify-between border-b border-[#e6e2da] px-4 py-3">
      <div className="flex items-center gap-3">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2c3a2e]"
          aria-hidden="true"
        >
          <span className="font-display text-sm font-medium text-[#f7f4ee]">S</span>
        </div>
        <div>
          <p className="text-sm font-medium text-[#1a1a1a]">Sofia</p>
          <p className="text-[10px] text-[#8a8a85]">HealthCare Pilates</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={onSettings}
          className="flex h-8 w-8 items-center justify-center rounded-md text-[#8a8a85] transition-colors hover:bg-[#1a1a1a]/5 hover:text-[#1a1a1a]"
          aria-label="Configurações do agente"
        >
          <Settings className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-md text-[#8a8a85] transition-colors hover:bg-[#1a1a1a]/5 hover:text-[#1a1a1a]"
          aria-label="Fechar chat"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
