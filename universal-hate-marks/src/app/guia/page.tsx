import { guideTopics } from "@/content/site-content";
import { PageFooterCta } from "@/components/page-footer-cta";

export default function GuiaPage() {
  return (
    <>
      <section className="hero hero-page">
        <p className="kicker">Guía del proyecto</p>
        <h2>Todo el proyecto en 15 puntos</h2>
      </section>

      <section className="guide-layout">
        <aside className="panel guide-index">
          <div className="guide-index-head">
            <p className="kicker">Índice</p>
            <span className="guide-total-badge">{guideTopics.length} puntos</span>
          </div>
          <ol>
            {guideTopics.map((topic) => (
              <li key={topic.id}>
                <a href={`#${topic.id}`}>{topic.title}</a>
              </li>
            ))}
          </ol>
        </aside>

        <div className="guide-content">
          {guideTopics.map((topic, idx) => (
            <article key={topic.id} id={topic.id} className="panel guide-topic">
              <p className="kicker">Punto {idx + 1} <span className="guide-progress-badge">/ {guideTopics.length}</span></p>
              <h3>{topic.title}</h3>
              <p>{topic.summary}</p>
              <ul className="plain-list">
                {topic.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <PageFooterCta links={[
        { href: "/como-funciona", label: "Cómo funciona" },
        { href: "/faq", label: "Preguntas frecuentes" },
        { href: "/mapa", label: "Mapa de grupos" },
      ]} />
    </>
  );
}
