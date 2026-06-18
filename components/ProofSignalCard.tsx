import * as React from "react";
import { CheckIcon } from "./icons";

export function ProofSignalCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-trust-line bg-trust-soft px-5 py-4">
      <div className="flex items-start gap-2.5">
        <CheckIcon size={16} className="mt-0.5 shrink-0 text-trust" />
        <div>
          <p className="font-serif text-[1.02rem] font-semibold text-trust">{title}</p>
          <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink/80">{children}</p>
        </div>
      </div>
    </div>
  );
}
