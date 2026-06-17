import * as React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CentreHub } from "@/components/CentreHub";
import { getCentreBySlug, getCentreSlugs } from "@/data/centres";

export function generateStaticParams() {
  return getCentreSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const centre = getCentreBySlug(params.slug);
  if (!centre) return { title: "Centre not found" };
  return {
    title: `${centre.title} — Specialist Centre`,
    description: centre.description,
    alternates: { canonical: `/centres/${centre.slug}` },
    openGraph: {
      title: `${centre.title} · Health Clarity Institute`,
      description: centre.description,
      type: "website",
    },
  };
}

export default function CentrePage({ params }: { params: { slug: string } }) {
  const centre = getCentreBySlug(params.slug);
  if (!centre) notFound();
  return <CentreHub centre={centre} />;
}
