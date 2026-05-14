"use client";

import { useState, useCallback, useEffect } from "react";
import { storage } from "@/lib/storage";

const STORAGE_KEY = "hc_anthropic_key";

function isValidKey(key: string): boolean {
  return key.startsWith("sk-ant-") && key.length > 20;
}

export function useApiKey() {
  const [apiKey, setApiKeyState] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = storage.get(STORAGE_KEY);
    if (stored && isValidKey(stored)) setApiKeyState(stored);
    setHydrated(true);
  }, []);

  const saveKey = useCallback((key: string): boolean => {
    const trimmed = key.trim();
    if (!isValidKey(trimmed)) return false;
    storage.set(STORAGE_KEY, trimmed);
    setApiKeyState(trimmed);
    return true;
  }, []);

  const removeKey = useCallback(() => {
    storage.remove(STORAGE_KEY);
    setApiKeyState(null);
  }, []);

  return { apiKey, saveKey, removeKey, isValidKey, hydrated };
}
