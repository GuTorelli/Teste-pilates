"use client";

import { useState, useCallback, useRef } from "react";
import { streamSofia } from "@/lib/claude/stream";
import { extractLead } from "@/lib/lead/parser";
import { buildWhatsAppUrl } from "@/lib/lead/whatsapp";
import type { AgentMessage, LeadData } from "@/types";

const MAX_MESSAGES_PER_SESSION = 50;
const RATE_LIMIT_MS = 1500;

const WELCOME_MESSAGE: AgentMessage = {
  id: "welcome",
  role: "assistant",
  content: "Olá! Sou a Sofia, da HealthCare Pilates. Como posso te ajudar hoje?",
  createdAt: Date.now(),
  status: "done",
};

function makeErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    const msg = err.message.toLowerCase();
    if (msg.includes("401") || msg.includes("authentication"))
      return "Sua chave de API parece inválida. Verifique em **Configurações** e tente novamente.";
    if (msg.includes("402"))
      return "A chave configurada não tem créditos disponíveis. Cheque sua conta na Anthropic.";
    if (msg.includes("429"))
      return "Estamos com muitas conversas no momento. Tente novamente em alguns segundos.";
    if (msg.includes("aborted") || msg.includes("abort")) return "";
  }
  if (!navigator.onLine)
    return "Sem conexão no momento. Verifique sua internet e tente de novo.";
  return "Algo deu errado. Tente novamente.";
}

export function useAgent(apiKey: string | null) {
  const [messages, setMessages] = useState<AgentMessage[]>([WELCOME_MESSAGE]);
  const [status, setStatus] = useState<"idle" | "streaming" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lead, setLead] = useState<LeadData | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const lastCallRef = useRef<number>(0);
  const abortRef = useRef<AbortController | null>(null);

  const remainingMessages = MAX_MESSAGES_PER_SESSION - messages.length;

  const send = useCallback(
    async (text: string) => {
      if (!apiKey) return;
      if (status === "streaming") return;

      const now = Date.now();
      if (now - lastCallRef.current < RATE_LIMIT_MS) return;
      lastCallRef.current = now;

      if (messages.length >= MAX_MESSAGES_PER_SESSION) {
        setErrorMessage(
          "Você atingiu o limite desta sessão. Recarregue a página para reiniciar."
        );
        setStatus("error");
        return;
      }

      const userMsg: AgentMessage = {
        id: crypto.randomUUID(),
        role: "user",
        content: text,
        createdAt: Date.now(),
        status: "done",
      };

      const assistantMsg: AgentMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "",
        createdAt: Date.now(),
        status: "streaming",
      };

      setMessages((prev) => [...prev, userMsg, assistantMsg]);
      setStatus("streaming");
      setErrorMessage(null);

      const history: AgentMessage[] = [
        ...messages.filter((m) => m.role === "user" || m.id !== "welcome"),
        userMsg,
      ];

      abortRef.current = new AbortController();
      let fullText = "";

      try {
        for await (const chunk of streamSofia(apiKey, history, abortRef.current.signal)) {
          fullText += chunk;
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMsg.id ? { ...m, content: fullText } : m
            )
          );
        }

        const extracted = extractLead(fullText);
        if (extracted) {
          const { lead: newLead, cleanText } = extracted;
          setLead(newLead);
          try {
            setWhatsappUrl(buildWhatsAppUrl(newLead));
          } catch {}
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMsg.id
                ? { ...m, content: cleanText, status: "done" }
                : m
            )
          );
        } else {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMsg.id
                ? {
                    ...m,
                    content:
                      fullText ||
                      "Não consegui formar uma resposta. Quer tentar reformular a pergunta?",
                    status: fullText ? "done" : "error",
                  }
                : m
            )
          );
        }

        setStatus("idle");
      } catch (err) {
        const msg = makeErrorMessage(err);
        if (!msg) {
          setMessages((prev) => prev.filter((m) => m.id !== assistantMsg.id));
          setStatus("idle");
          return;
        }
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMsg.id
              ? { ...m, content: msg, status: "error" }
              : m
          )
        );
        setErrorMessage(msg);
        setStatus("error");
      }
    },
    [apiKey, messages, status]
  );

  const reset = useCallback(() => {
    abortRef.current?.abort();
    setMessages([WELCOME_MESSAGE]);
    setStatus("idle");
    setErrorMessage(null);
    setLead(null);
    setWhatsappUrl(null);
  }, []);

  return {
    messages,
    status,
    errorMessage,
    send,
    reset,
    lead,
    whatsappUrl,
    remainingMessages,
  };
}
