import { recordsChecklist } from "@/lib/site";

export function MedicalRecordsChecklist() {
  return (
    <div className="checklist-grid records-grid">
      {recordsChecklist.map((item) => (
        <article className="check-card" key={item}>
          <span aria-hidden="true">▣</span>
          <p>{item}</p>
        </article>
      ))}
    </div>
  );
}
