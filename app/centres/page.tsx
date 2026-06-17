import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { centres } from "@/data/centres";
import { getGuides, getGuidesByCentre, isPublished, type GuideUrgency } from "@/data/guides";
import {
  HeartIcon,
  DropletIcon,
  MaternalIcon,
  BrainIcon,
  ShieldIcon,
  PulseIcon,
  ArrowRightIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Specialist Centres",
  description:
    "Health knowledge organised into institutional centres — heart & blood pressure, diabetes & metabolic health, maternal health, kidney health, mental & behavioural health, and preventive health.",
  alternates: { canonical: "/centres" },
};

type IconProps = { size?: number; className?: string };
const iconByKey: Record<string, (p: IconProps) => React.JSX.Element> = {
  heart: HeartIcon,
  droplet: DropletIcon,
  maternal: MaternalIcon,
  kidney: DropletIcon,
  brain: BrainIcon,
  shield: ShieldIcon,
  pulse: PulseIcon,
};

const urgencyDot: Record<GuideUrgency, string> = {
  Routine: "bg-clinical-green",
  Soon: "bg-clinical-blue",
  Urgent: "bg-clinical-amber",
  Emergency: "bg-clinical-red",
};

export default function CentresPage() {
  return (
    <>
      <PageHero
        eyebrow="Organised by area of care"
        title="Specialist Centres"
        lede="Each centre is an institutional home for a cluster of related guides — with its own patient navigation, Nigerian context and warning signs. Choose a centre to begin."
      />

      <Container className="py-10 md:py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {centres.map((centre) => {
            const Icon = iconByKey[centre.iconSlug] ?? PulseIcon;
            const all = getGuidesByCentre(centre.slug);
            const publishedCount = all.filter(isPublished).length;
            const featured = getGuides(centre.featuredGuideSlugs).slice(0, 5);

            return (
              <Link
                key={centre.slug}
                href={`/centres/${centre.slug}`}
                className="group flex flex-col rounded-lg border border-line bg-white p-6 no-underline shadow-card transition-all hover:-translate-y-0.5 hover:border-clinical-blue/40 hover:shadow-cardHover"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-clinical-blue/20 bg-clinical-blueSoft text-clinical-blueDark">
                    <Icon size={22} />
                  </span>
                  <span className="text-right font-mono text-[0.58rem] uppercase tracking-[0.1em] text-slate-soft">
                    {publishedCount} published
                    <span className="block text-slate-soft/80">{all.length} guides</span>
                  </span>
                </div>

                <span className="mt-4 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-clinical-blueDark">
                  {centre.categoryLabel}
                </span>
                <h2 className="mt-1.5 font-serif text-xl text-navy group-hover:text-clinical-blue">
                  {centre.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {centre.description}
                </p>

                <div className="mt-5 border-t border-lineSoft pt-4">
                  <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-slate-soft">
                    Featured guides
                  </p>
                  <ul className="mt-3 space-y-2">
                    {featured.map((g) => (
                      <li key={g.slug} className="flex items-center gap-2.5 text-sm">
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${urgencyDot[g.urgency]}`}
                          aria-hidden="true"
                        />
                        <span className="truncate text-ink/85">{g.title}</span>
                        {!isPublished(g) && (
                          <span className="shrink-0 font-mono text-[0.55rem] uppercase tracking-[0.08em] text-slate-soft">
                            soon
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-clinical-blueDark">
                  Enter centre
                  <ArrowRightIcon
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            );
          })}
        </div>

        <p className="mt-10 max-w-prose text-sm leading-relaxed text-slate">
          Where a guide is not yet published, priority guides are being prepared for medical
          review. All content is educational and is not a substitute for professional medical
          advice — seek qualified care where appropriate.
        </p>
      </Container>
    </>
  );
}
