import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyValue({ text, label }: { text: string; label?: string }) {
  const [done, setDone] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      window.setTimeout(() => setDone(false), 1200);
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex size-8 items-center justify-center rounded-md text-muted hover:bg-surface-2 hover:text-foreground"
      aria-label={label ?? `Copy ${text}`}
    >
      {done ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
    </button>
  );
}
