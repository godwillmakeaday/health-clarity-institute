type DisclaimerPanelProps = {
  compact?: boolean;
  title?: string;
};

export function DisclaimerPanel({ compact, title = "Educational clarity, not medical care" }: DisclaimerPanelProps) {
  return (
    <aside className={`disclaimer-panel ${compact ? "compact" : ""}`}>
      <strong>{title}</strong>
      <p>
        Health Clarity Institute provides educational and navigation content only. It is not a
        hospital, clinic, emergency service, doctor-booking platform, diagnostic service, or
        substitute for licensed medical advice. For urgent symptoms, seek immediate care from a
        licensed emergency or healthcare provider.
      </p>
    </aside>
  );
}
