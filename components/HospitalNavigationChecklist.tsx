import { hospitalChecklist } from "@/lib/site";

export function HospitalNavigationChecklist() {
  return (
    <div className="checklist-grid">
      {hospitalChecklist.map((item) => (
        <article className="check-card" key={item}>
          <span aria-hidden="true">□</span>
          <p>{item}</p>
        </article>
      ))}
    </div>
  );
}
