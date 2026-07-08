import Link from "next/link";
import { DisclaimerPanel } from "@/components/DisclaimerPanel";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "quiet";
};

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: string;
  actions?: HeroAction[];
  small?: boolean;
  disclaimer?: boolean;
};

export function Hero({ eyebrow, title, subtitle, body, actions = [], small, disclaimer }: HeroProps) {
  return (
    <section className={`hero ${small ? "small-hero" : "home-hero"}`}>
      <div className="hero-content narrow">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {subtitle ? <p className="hero-text">{subtitle}</p> : null}
        {body ? <p className="hero-support">{body}</p> : null}
        {actions.length ? (
          <div className="button-row">
            {actions.map((action) => (
              <Link key={action.href + action.label} href={action.href} className={`button ${action.variant ?? "primary"}`}>
                {action.label}
              </Link>
            ))}
          </div>
        ) : null}
        {disclaimer ? (
          <div className="hero-disclaimer">
            <DisclaimerPanel compact />
          </div>
        ) : null}
      </div>
    </section>
  );
}
