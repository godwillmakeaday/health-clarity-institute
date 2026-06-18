import * as React from "react";
import { AlertIcon, CheckIcon, FlaskIcon, CompassIcon } from "./icons";

type CalloutType = "reality-check" | "proof-signal" | "failure-point" | "first-test";

const config: Record<
  CalloutType,
  { label: string; icon: React.ComponentType<{ size?: number; className?: string }>; cls: string; iconCls: string }
> = {
  "reality-check": {
    label: "Reality Check",
    icon: CompassIcon,
    cls: "border-gold/40 bg-gold-soft/60",
    iconCls: "text-gold-dark",
  },
  "proof-signal": {
    label: "Proof Signal",
    icon: CheckIcon,
    cls: "border-trust-line bg-trust-soft",
    iconCls: "text-trust",
  },
  "failure-point": {
    label: "Failure Point",
    icon: AlertIcon,
    cls: "border-warn-line bg-warn-soft",
    iconCls: "text-warn",
  },
  "first-test": {
    label: "First Test",
    icon: FlaskIcon,
    cls: "border-navy/20 bg-navy/[0.04]",
    iconCls: "text-navy",
  },
};

export function CalloutBox({
  type,
  title,
  children,
  className = "",
}: {
  type: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const c = config[type];
  const Icon = c.icon;
  return (
    <div className={`rounded-lg border ${c.cls} px-5 py-4 ${className}`}>
      <div className="flex items-center gap-2">
        <Icon size={15} className={c.iconCls} />
        <span className={`font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] ${c.iconCls}`}>
          {title ?? c.label}
        </span>
      </div>
      <div className="prose-desk mt-2 text-[0.95rem] text-ink/85">{children}</div>
    </div>
  );
}
