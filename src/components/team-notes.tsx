import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const KEY = "steinman-internal-notes";

export function TeamNotes() {
  const [value, setValue] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      setValue(localStorage.getItem(KEY) ?? "");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => {
      try {
        localStorage.setItem(KEY, value);
        setSaved(true);
      } catch {
        /* ignore */
      }
    }, 400);
    return () => window.clearTimeout(t);
  }, [value]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Working-session notes</CardTitle>
        <CardDescription>
          Stays on this browser only — not a shared database. Use for check-in reactions, not confidential client files.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <textarea
          value={value}
          onChange={(e) => {
            setSaved(false);
            setValue(e.target.value);
          }}
          rows={6}
          placeholder="What should we flag for the next check-in?"
          className="w-full resize-y rounded-lg border border-border bg-bg px-3 py-2 text-sm leading-relaxed text-foreground outline-none ring-ring focus:ring-2"
        />
        <p className="mt-2 text-xs text-muted">{saved ? "Saved on this device" : "Saving…"}</p>
      </CardContent>
    </Card>
  );
}
