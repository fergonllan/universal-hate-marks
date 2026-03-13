import { faqItems } from "@/content/site-content";

const categories = [...new Set(faqItems.map((item) => item.category))];

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export default function FaqPage() {
  return (
    <>
      <section className="hero">
        <p className="kicker">Preguntas frecuentes</p>
        <h2>FAQ de Universal Hate Marks</h2>
        <p>
          Respuestas curadas desde la tesis para cubrir fundamentos, operación,
          gobernanza, incentivos y límites de una manera clara y usable.
        </p>
      </section>

      <section className="panel sticky top-24 z-20 background-blur border-b border-emerald-900/40">
        <div className="chip-row">
          {categories.map((category) => (
            <a href={`#${slugify(category)}`} className="chip hover:scale-105 transition-transform hover:border-emerald-500/50 hover:text-emerald-300" key={category}>
              {category}
            </a>
          ))}
        </div>
      </section>

      <div className="stack-lg mt-8">
        {categories.map((category) => {
          const catItems = faqItems.filter(item => item.category === category);
          return (
            <section key={category} id={slugify(category)} className="scroll-mt-32">
              <h3 className="section-title-sm mb-4 pb-2 border-b border-line text-emerald-100">{category}</h3>
              <div className="faq-list">
                {catItems.map((item) => (
                  <article className="faq-item" key={item.question}>
                    <p className="kicker">{item.category}</p>
                    <h3 className="text-white text-lg font-medium">{item.question}</h3>
                    <p className="mt-2 text-[#9db2ad] leading-relaxed">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
