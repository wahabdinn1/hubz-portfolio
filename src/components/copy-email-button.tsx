"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CopyEmailButton({
  email,
  label,
  copiedLabel,
  variant = "neutral",
}: {
  email: string;
  label: string;
  copiedLabel: string;
  variant?: "default" | "neutral" | "dark";
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <Button
      type="button"
      size="lg"
      variant={variant}
      onClick={handleCopy}
      aria-live="polite"
    >
      {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      <span>{copied ? copiedLabel : label}</span>
    </Button>
  );
}
