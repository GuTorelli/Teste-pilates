import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { AgentFAB } from "@/components/agent/AgentFAB";

const HomePage = lazy(() => import("@/pages/Home"));
const SobrePage = lazy(() => import("@/pages/Sobre"));
const FaqPage = lazy(() => import("@/pages/FAQ"));
const NotFoundPage = lazy(() => import("@/pages/NotFound"));
const AgentDrawer = lazy(() =>
  import("@/components/agent/AgentDrawer").then((m) => ({ default: m.AgentDrawer }))
);

function PageFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center" aria-hidden="true">
      <span className="font-display text-2xl font-light text-[#2c3a2e]/30">···</span>
    </div>
  );
}

export function App() {
  const [agentOpen, setAgentOpen] = useState(false);
  const openAgent = () => setAgentOpen(true);

  return (
    <>
      <Header onOpenAgent={openAgent} />
      <main id="content">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<HomePage onOpenAgent={openAgent} />} />
            <Route path="/sobre" element={<SobrePage onOpenAgent={openAgent} />} />
            <Route path="/faq" element={<FaqPage onOpenAgent={openAgent} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <AgentFAB onClick={openAgent} />
      <Suspense fallback={null}>
        {agentOpen && <AgentDrawer open={agentOpen} onOpenChange={setAgentOpen} />}
      </Suspense>
      <CookieBanner />
    </>
  );
}
