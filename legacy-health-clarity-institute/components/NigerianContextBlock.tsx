// components/NigerianContextBlock.tsx
import * as React from "react";
import { MapPinIcon } from "./icons";

interface NigerianContextBlockProps {
  items: string[];
  title?: string;
  /** Optional short intro line above the points. */
  intro?: string;
  className?: string;
}

/** The signature green-bordered "Nigerian context" block. Standalone and
 *  reusable across centre hubs and guides. */
export function NigerianContextBlock({
  items,
  title = "The Nigerian context",
  intro,
  className = "",
}: NigerianContextBlockProps) {
  if (!items?.length) return null;

  return (
    <section
      className={`overflow-hidden rounded-lg border border-clinical-green/25 bg-clinical-greenSoft/40 ${className}`}
    >
      <div className="flex items-center gap-2.5 border-l-4 border-clinical-green bg-clinical-greenSoft px-5 py-3">
        <MapPinIcon size={17} className="text-clinical-green" />
        <h2 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-clinical-green">
          {title}
        </h2>
      </div>

      <div className="border-l-4 border-clinical-green px-5 py-4">
        {intro && (
          <p className="mb-3 text-[0.97rem] leading-[1.7] text-ink/90">{intro}</p>
        )}
        <ul className="space-y-2.5">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-[0.96rem] leading-[1.7] text-ink/90"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clinical-green"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
