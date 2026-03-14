import { downloadItems } from "@/content/site-content";
import { PageFooterCta } from "@/components/page-footer-cta";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/universal-hate-marks" : "";

export default function DescargasPage() {
  return (
    <>
      <section className="hero hero-page">
        <p className="kicker">Material académico</p>
        <h2>Descargas</h2>
      </section>

      <section className="panel download-list">
        {downloadItems.map((item) => (
          <article key={item.name} className="download-item">
            <div>
              <h3>{item.name}</h3>
              <p className="muted">{item.note}</p>
            </div>
            <div className="download-action">
              <strong>{item.status}</strong>
              {item.href ? (
                <a href={`${basePath}${item.href}`} className="quick-link" download>
                  Descargar
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </section>

      <section className="panel stack-md">
        <p className="kicker">Recursos relacionados</p>
        <div className="grid-cards">
          <article className="card">
            <h3>Resumen ejecutivo</h3>
            <p>Síntesis del proyecto para jurado y público general, con objetivos, preguntas de investigación y limitaciones.</p>
            <Link href="/resumen" className="quick-link" style={{ marginTop: "0.25rem" }}>Leer resumen →</Link>
          </article>
          <article className="card">
            <h3>Guía en 15 puntos</h3>
            <p>Recorrido guiado por la arquitectura, operación, gobernanza, economía e impacto del proyecto.</p>
            <Link href="/guia" className="quick-link" style={{ marginTop: "0.25rem" }}>Ver guía →</Link>
          </article>
          <article className="card">
            <h3>Preguntas frecuentes</h3>
            <p>Respuestas curadas sobre conceptos, gobernanza, tokenomics, ética y escalabilidad del sistema.</p>
            <Link href="/faq" className="quick-link" style={{ marginTop: "0.25rem" }}>Ver FAQ →</Link>
          </article>
        </div>
      </section>

      <PageFooterCta links={[
        { href: "/resumen", label: "Ver resumen ejecutivo" },
        { href: "/guia", label: "Guía en 15 puntos" },
        { href: "/faq", label: "Preguntas frecuentes" },
      ]} />
    </>
  );
}
