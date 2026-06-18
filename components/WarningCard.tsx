import * as React from "react";
import { AlertIcon } from "./icons";

export function WarningCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-warn-line bg-warn-soft px-5 py-4">
      <div className="flex items-start gap-2.5">
        <AlertIcon size={16} className="mt-0.5 shrink-0 text-warn" />
        <div>
          <p className="font-serif text-[1.02rem] font-semibold text-warn">{title}</p>
          <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink/80">{children}</p>
        </div>
      </div>
    </div>
  );
}
