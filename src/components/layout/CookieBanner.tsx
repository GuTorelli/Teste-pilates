"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { storage } from "@/lib/storage";

const KEY = "hc_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (storage.get(KEY) !== "accepted") setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-4 left-4 right-4 z-50 flex flex-col items-start gap-3 rounded-[10px] bg-white p-4 shadow-[0_8px_28px_rgb(0_0_0/0.1)] sm:flex-row sm:items-center sm:justify-between md:left-auto md:right-6 md:max-w-sm"
    >
      <p className="text-sm text-[#8a8a85]">
        Usamos cookies essenciais para o funcionamento do site.
      </p>
      <Button
        size="sm"
        className="shrink-0"
        onClick={() => {
          storage.set(KEY, "accepted");
          setVisible(false);
        }}
      >
        Aceitar
      </Button>
    </div>
  );
}
