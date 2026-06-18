"use client";

import * as React from "react";
import { ArrowRightIcon, CheckIcon } from "./icons";

const institutionTypes = [
  "Private hospital",
  "Clinic / specialist clinic",
  "Diagnostic laboratory",
  "Pharmacy / pharmacy group",
  "NGO / public-health project",
  "School health programme",
  "Church / community outreach",
  "Corporate wellness programme",
  "Other",
];

const buildOptions = [
  "Hospital authority website",
  "Specialist clinic page / microsite",
  "Patient education library",
  "Preventive / screening campaign",
  "Doctor profile system",
  "Full digital patient clarity system",
  "Not sure yet — would like advice",
];

interface FormState {
  name: string;
  organisation: string;
  role: string;
  email: string;
  phone: string;
  institutionType: string;
  build: string;
  message: string;
}

const initial: FormState = {
  name: "",
  organisation: "",
  role: "",
  email: "",
  phone: "",
  institutionType: institutionTypes[0],
  build: buildOptions[0],
  message: "",
};

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm outline-none transition-colors placeholder:text-slate-soft focus:border-clinical-blue focus:ring-2 focus:ring-clinical-blue/15";
const labelClass =
  "font-mono text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-slate-soft";

export function InstitutionalEnquiryForm({ email }: { email: string }) {
  const [form, setForm] = React.useState<FormState>(initial);
  const [submitted, setSubmitted] = React.useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Institutional enquiry — ${form.organisation || form.name || "Health Clarity Institute"}`;
    const lines = [
      `Name: ${form.name}`,
      `Organisation: ${form.organisation}`,
      `Role: ${form.role}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Type of institution: ${form.institutionType}`,
      `What they want to build: ${form.build}`,
      "",
      "Message:",
      form.message,
    ];
    const body = encodeURIComponent(lines.join("\n"));
    setSubmitted(true);
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enq-name" className={labelClass}>
            Name
          </label>
          <input
            id="enq-name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={fieldClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="enq-org" className={labelClass}>
            Organisation
          </label>
          <input
            id="enq-org"
            type="text"
            required
            autoComplete="organization"
            value={form.organisation}
            onChange={(e) => update("organisation", e.target.value)}
            className={fieldClass}
            placeholder="Hospital, clinic, NGO, school…"
          />
        </div>
        <div>
          <label htmlFor="enq-role" className={labelClass}>
            Role
          </label>
          <input
            id="enq-role"
            type="text"
            value={form.role}
            onChange={(e) => update("role", e.target.value)}
            className={fieldClass}
            placeholder="e.g. Medical Director, Administrator"
          />
        </div>
        <div>
          <label htmlFor="enq-email" className={labelClass}>
            Email
          </label>
          <input
            id="enq-email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={fieldClass}
            placeholder="you@organisation.org"
          />
        </div>
        <div>
          <label htmlFor="enq-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="enq-phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={fieldClass}
            placeholder="Optional"
          />
        </div>
        <div>
          <label htmlFor="enq-type" className={labelClass}>
            Type of institution
          </label>
          <select
            id="enq-type"
            value={form.institutionType}
            onChange={(e) => update("institutionType", e.target.value)}
            className={fieldClass}
          >
            {institutionTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="enq-build" className={labelClass}>
          What you want to build
        </label>
        <select
          id="enq-build"
          value={form.build}
          onChange={(e) => update("build", e.target.value)}
          className={fieldClass}
        >
          {buildOptions.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="enq-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="enq-message"
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={fieldClass}
          placeholder="Tell us about your institution, who you serve, and what you would like to achieve."
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-navy-700"
        >
          Send institutional enquiry
          <ArrowRightIcon size={15} className="transition-transform group-hover:translate-x-0.5" />
        </button>
        <p className="text-xs leading-relaxed text-slate-soft">
          This opens your email app with the details ready to send. Prefer email? Write to{" "}
          <a href={`mailto:${email}`} className="font-medium text-navy">
            {email}
          </a>
          .
        </p>
      </div>

      {submitted && (
        <p className="flex items-start gap-2 rounded-lg border border-clinical-green/30 bg-clinical-greenSoft px-4 py-3 text-sm leading-relaxed text-clinical-green">
          <CheckIcon size={16} strokeWidth={2} className="mt-0.5 shrink-0" />
          <span>
            Your email app should now be opening with your enquiry prepared. If it does not, please
            email us directly at {email}.
          </span>
        </p>
      )}
    </form>
  );
}
