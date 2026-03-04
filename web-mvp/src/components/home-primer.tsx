import { complexityLadders, nonTechUsageSteps, socialFocusHighlights } from "@/content/site-content";

export function HomePrimer() {
  return (
    <section className="home-primer panel" id="primer">
      <div className="home-primer-head">
        <p className="kicker">Entender en 60 segundos</p>
        <h2>Cómo enfrentar discursos de odio con una herramienta descentralizada</h2>
        <p>
          Primero, foco social. Después, cómo se usa. Y recién al final, la parte técnica.
        </p>
      </div>

      <div className="home-primer-visuals">
        <article className="primer-graphic">
          <h3>Problema social</h3>
          <div className="signal-rows" aria-hidden>
            <span className="signal signal-bad" />
            <span className="signal signal-bad" />
            <span className="signal signal-bad" />
            <span className="signal signal-mid" />
            <span className="signal signal-good" />
          </div>
          <p className="muted">Alta circulación de mensajes hostiles en canales digitales.</p>
        </article>

        <article className="primer-graphic">
          <h3>Respuesta del proyecto</h3>
          <div className="mini-flow" aria-hidden>
            <span>Comunidad</span>
            <span>→</span>
            <span>DAO</span>
            <span>→</span>
            <span>Reglas</span>
            <span>→</span>
            <span>Resultados</span>
          </div>
          <p className="muted">Proceso público, auditable y orientado a impacto social.</p>
        </article>
      </div>

      <div className="home-primer-grid">
        {socialFocusHighlights.map((item) => (
          <article key={item.title} className="card primer-card">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>

      <div className="home-primer-grid">
        {nonTechUsageSteps.map((step) => (
          <article key={step.title} className="card primer-card">
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>

      <div className="complexity-ladder">
        {complexityLadders.map((item) => (
          <article key={item.level} className="ladder-item">
            <h4>{item.level}</h4>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
