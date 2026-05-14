"use client";

import { useRef, useCallback } from "react";

export function useRateLimit(minIntervalMs: number) {
  const lastCallRef = useRef<number>(0);

  const check = useCallback((): boolean => {
    const now = Date.now();
    if (now - lastCallRef.current < minIntervalMs) return false;
    lastCallRef.current = now;
    return true;
  }, [minIntervalMs]);

  return check;
}
