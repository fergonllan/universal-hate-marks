import { faqItems } from "@/content/site-content";

const categories = ["Conceptos", "Operacion", "Gobernanza", "Etica", "Escalabilidad"] as const;

export default function FaqPage() {
  return (
    <>
      <section className="hero">
        <p className="kicker">Preguntas frecuentes</p>
        <h2>FAQ del proyecto</h2>
        <p>
          Preguntas organizadas por categorias para explicar conceptos,
          operacion, gobernanza y alcance del modelo.
        </p>
      </section>

      <section className="panel">
        <div className="chip-row">
          {categories.map((category) => (
            <span className="chip" key={category}>
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="faq-list">
        {faqItems.map((item) => (
          <article className="faq-item" key={item.question}>
            <p className="kicker">{item.category}</p>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </section>
    </>
  );
}
