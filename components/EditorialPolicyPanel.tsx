type PolicyItem = {
  title: string;
  text: string;
};

type EditorialPolicyPanelProps = {
  items: PolicyItem[];
};

export function EditorialPolicyPanel({ items }: EditorialPolicyPanelProps) {
  return (
    <div className="policy-list">
      {items.map((item) => (
        <article className="policy-card" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}
