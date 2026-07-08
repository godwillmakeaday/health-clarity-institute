type KnowledgeHubCardProps = {
  title: string;
  description: string;
  helps: string;
  records: string;
};

export function KnowledgeHubCard({ title, description, helps, records }: KnowledgeHubCardProps) {
  return (
    <article className="hub-card">
      <div>
        <p className="hub-label">Knowledge hub</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <dl className="hub-details">
        <div>
          <dt>Helps users understand</dt>
          <dd>{helps}</dd>
        </div>
        <div>
          <dt>Questions to ask a licensed professional</dt>
          <dd>What should I watch for, what tests or follow-up may be needed, and what records should I keep?</dd>
        </div>
        <div>
          <dt>Records to keep</dt>
          <dd>{records}</dd>
        </div>
        <div>
          <dt>When to seek urgent care</dt>
          <dd>Immediately, whenever symptoms feel severe, sudden, worsening, dangerous, or beyond home-level understanding.</dd>
        </div>
      </dl>
      <p className="mini-disclaimer">Educational only. This hub does not diagnose, treat, prescribe, or replace licensed care.</p>
    </article>
  );
}
