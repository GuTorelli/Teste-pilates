type Props = { onSend: (text: string) => void };

const SUGGESTIONS = [
  "Quero conhecer o método",
  "Tenho dor lombar, pilates ajuda?",
  "Quanto custa?",
];

export function AgentSuggestions({ onSend }: Props) {
  return (
    <div className="flex flex-wrap gap-2 px-4 pb-3" aria-label="Sugestões de perguntas">
      {SUGGESTIONS.map((s) => (
        <button
          key={s}
          onClick={() => onSend(s)}
          className="rounded-full border border-[#e6e2da] bg-white px-3 py-1.5 text-xs text-[#1a1a1a] transition-colors hover:border-[#2c3a2e]/30 hover:bg-[#2c3a2e]/5"
        >
          {s}
        </button>
      ))}
    </div>
  );
}
