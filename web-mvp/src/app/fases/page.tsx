import { phases } from "@/content/site-content";

export default function FasesPage() {
  return (
    <>
      <section className="hero">
        <p className="kicker">Roadmap de implementacion</p>
        <h2>Fases del proyecto</h2>
        <p>
          Estructura por etapas para pasar de diseno estrategico a operacion
          colaborativa y puesta en marcha del protocolo.
        </p>
      </section>

      <section className="panel timeline">
        {phases.map((phase) => (
          <article key={phase.id} className="timeline-item">
            <p className="kicker">{phase.id}</p>
            <h3>{phase.title}</h3>
            <p className="muted">{phase.focus}</p>
            <ul>
              {phase.milestones.map((milestone) => (
                <li key={milestone}>{milestone}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </>
  );
}
