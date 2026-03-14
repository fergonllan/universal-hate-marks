import { DaoDiagrams } from "@/components/dao-diagrams";
import { ProtocolDemo } from "@/components/protocol-demo";
import { flowSteps, operationalPillars } from "@/content/site-content";
import { PageFooterCta } from "@/components/page-footer-cta";

export default function ComoFuncionaPage() {
  return (
    <>
      <section className="hero hero-page">
        <p className="kicker">Flujo operacional</p>
        <h2>Cómo opera la propuesta DAO-Ling</h2>
      </section>

      <section className="panel panel-highlight">
        <div className="home-anchor-head">
          <div>
            <p className="kicker">Etapas del proceso</p>
            <h3 className="section-title-sm">De la señal discursiva al hallazgo comunicable</h3>
          </div>
          <p className="muted home-anchor-copy">
            La propuesta no se queda en una regla abstracta: detecta señales, las somete a consenso y produce una salida explicable.
          </p>
        </div>
        <ol className="step-list">
          {flowSteps.map((step, index) => (
            <li className="step-item" key={step}>
              <span className="step-index">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid-cards">
        {operationalPillars.map((pillar) => (
          <article key={pillar.title} className="card">
            <h3>{pillar.title}</h3>
            <p>{pillar.summary}</p>
            <ul className="plain-list">
              {pillar.highlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section>
        <p className="kicker">Diagramas operativos</p>
        <DaoDiagrams section="como-funciona" />
      </section>

      <ProtocolDemo />

      <PageFooterCta links={[
        { href: "/guia", label: "Guía en 15 puntos" },
        { href: "/mapa", label: "Mapa de grupos" },
        { href: "/fases", label: "Roadmap de fases" },
      ]} />
    </>
  );
}
