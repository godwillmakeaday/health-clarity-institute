import { roadmap } from "@/lib/site";

export function RoadmapTimeline() {
  return (
    <div className="timeline">
      {roadmap.map((item) => (
        <article className="timeline-item" key={item.stage + item.title}>
          <div className="timeline-marker" aria-hidden="true" />
          <div className="timeline-card">
            <div className="timeline-topline">
              <span>{item.stage}</span>
              <em>{item.status}</em>
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
