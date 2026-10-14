"use client";

import { EMAIL } from "@/lib/data";
import { useToast } from "./Toast";

export function CopyEmail({ label, className }: { label: string; className: string }) {
  const toast = useToast();
  const copy = () =>
    navigator.clipboard.writeText(EMAIL).then(
      () => toast("Email copied"),
      () => toast(`Copy failed. The email is ${EMAIL}`),
    );

  return (
    <button className={className} type="button" onClick={copy}>
      {label}
    </button>
  );
}
