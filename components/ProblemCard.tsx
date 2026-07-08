type ProblemCardProps = {
  text: string;
  index: number;
};

export function ProblemCard({ text, index }: ProblemCardProps) {
  return (
    <article className="card problem-card">
      <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
      <p>{text}</p>
    </article>
  );
}
