import { useEffect, useState, type ReactNode } from "react";

export function ClientChart({ children, height = 260 }: { children: ReactNode; height?: number }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) {
    return <div className="w-full animate-pulse rounded-lg bg-surface-2" style={{ height }} />;
  }
  return <>{children}</>;
}
