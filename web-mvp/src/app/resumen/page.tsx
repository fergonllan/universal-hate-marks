import { executiveSummary, siteMeta } from "@/content/site-content";

export default function ResumenPage() {
  return (
    <>
      <section className="hero">
        <p className="kicker">Resumen para humanos y jurado</p>
        <h2>Idea general del proyecto</h2>
        <p>
          El proyecto diseña una DAO de especialistas en lenguaje para construir
          reglas discursivas contra el discurso de odio con trazabilidad en
          blockchain.
        </p>
      </section>

      <section className="panel">
        <h3>Resumen ejecutivo</h3>
        <ul className="plain-list">
          {executiveSummary.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <h3>Ficha academica</h3>
        <p>
          <strong>Titulo:</strong> PROYECTO DE DESARROLLO BLOCKCHAIN CONTRA EL
          DISCURSO DE ODIO
        </p>
        <p>
          <strong>Autor:</strong> {siteMeta.author}
        </p>
        <p>
          <strong>Programa:</strong> {siteMeta.subtitle}
        </p>
        <p>
          <strong>Facultad:</strong> {siteMeta.faculty}
        </p>
      </section>
    </>
  );
}
