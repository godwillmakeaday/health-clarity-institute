const principles = [
  "Separate education from medical care.",
  "Use source-conscious, careful language.",
  "Do not collect sensitive patient records through ordinary forms.",
  "Avoid clinical promises, fake reviewers, and false authority.",
  "Encourage licensed professional care when health decisions are needed.",
  "Build future medical layers only with licensing, governance, privacy, and professional accountability."
];

export function TrustPrinciples() {
  return (
    <div className="trust-grid">
      {principles.map((principle) => (
        <article className="trust-card" key={principle}>
          <span aria-hidden="true">✓</span>
          <p>{principle}</p>
        </article>
      ))}
    </div>
  );
}
