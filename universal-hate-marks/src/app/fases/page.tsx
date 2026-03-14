import { DaoDiagrams } from "@/components/dao-diagrams";
import { phases } from "@/content/site-content";
import { PageFooterCta } from "@/components/page-footer-cta";

export default function FasesPage() {
  return (
    <>
      <section className="hero hero-page">
        <p className="kicker">Roadmap de implementación</p>
        <h2>Fases del proyecto</h2>
      </section>

      {/* Progress track */}
      <nav className="phases-track" aria-label="Progreso de fases">
        {phases.map((phase, i) => (
          <a key={phase.id} href={`#fase-${i + 1}`} className="phases-track-item">
            <span className="phases-track-num">{i + 1}</span>
            <span className="phases-track-label">{phase.title}</span>
          </a>
        ))}
      </nav>

      {/* Timeline */}
      <ol className="phases-list">
        {phases.map((phase, i) => (
          <li key={phase.id} id={`fase-${i + 1}`} className="phases-list-item">
            <div className="phases-marker">
              <span className="phases-num">{i + 1}</span>
              {i < phases.length - 1 && <span className="phases-connector" aria-hidden />}
            </div>
            <article className="panel phases-card">
              <p className="kicker">{phase.id}</p>
              <h3>{phase.title}</h3>
              <p className="muted">{phase.focus}</p>

              <details className="phase-details" open={i === 0}>
                <summary className="phase-details-summary">Hitos</summary>
                <ul className="plain-list mt-2">
                  {phase.milestones.map((m) => <li key={m}>{m}</li>)}
                </ul>
              </details>

              <details className="phase-details">
                <summary className="phase-details-summary">Entregables esperados</summary>
                <ul className="plain-list mt-2">
                  {phase.deliverables.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </details>

              <details className="phase-details">
                <summary className="phase-details-summary">Criterios de avance</summary>
                <ul className="plain-list mt-2">
                  {phase.readinessCriteria.map((r) => <li key={r}>{r}</li>)}
                </ul>
              </details>
            </article>
          </li>
        ))}
      </ol>

      <section>
        <p className="kicker">Diagramas de ciclo e incentivos</p>
        <DaoDiagrams section="fases" />
      </section>

      <PageFooterCta links={[
        { href: "/mapa", label: "Mapa de grupos" },
        { href: "/como-funciona", label: "Cómo funciona" },
        { href: "/descargas", label: "Descargas" },
      ]} />
    </>
  );
}
