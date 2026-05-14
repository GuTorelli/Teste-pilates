"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Header } from "./Header";
import { CookieBanner } from "./CookieBanner";
import { AgentFAB } from "@/components/agent/AgentFAB";

const AgentDrawer = dynamic(
  () => import("@/components/agent/AgentDrawer").then((m) => ({ default: m.AgentDrawer })),
  { ssr: false }
);

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [agentOpen, setAgentOpen] = useState(false);

  return (
    <>
      <Header onOpenAgent={() => setAgentOpen(true)} />
      {children}
      <AgentFAB onClick={() => setAgentOpen(true)} />
      <AgentDrawer open={agentOpen} onOpenChange={setAgentOpen} />
      <CookieBanner />
    </>
  );
}
