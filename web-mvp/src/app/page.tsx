import Link from "next/link";
import { homeBlocks } from "@/content/site-content";

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="kicker">Proyecto de tesis</p>
        <h2>Blockchain contra el discurso de odio</h2>
        <p>
          Esta web presenta el marco conceptual y operativo de una DAO de
          linguistas orientada a crear reglas discursivas, votarlas y registrar
          consenso para visibilizar resultados de analisis.
        </p>
      </section>

      <section className="grid-cards">
        {homeBlocks.map((block) => (
          <article key={block.title} className="card">
            <h3>{block.title}</h3>
            <p>{block.body}</p>
          </article>
        ))}
      </section>

      <section className="panel">
        <p className="kicker">Navegacion rapida</p>
        <div className="quick-links">
          <Link href="/resumen" className="quick-link">
            Leer resumen
          </Link>
          <Link href="/como-funciona" className="quick-link">
            Explorar flujo operacional
          </Link>
          <Link href="/mapa" className="quick-link">
            Ver mapa de grupos
          </Link>
          <Link href="/fases" className="quick-link">
            Revisar fases del proyecto
          </Link>
          <Link href="/faq" className="quick-link">
            Preguntas frecuentes
          </Link>
        </div>
      </section>
    </>
  );
}
