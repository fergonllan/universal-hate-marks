const downloads = [
  {
    name: "Tesis completa (PDF)",
    status: "Pendiente de carga",
    note: "Agregar archivo en public/docs/tesis.pdf",
  },
  {
    name: "Bibliografia",
    status: "Pendiente de carga",
    note: "Agregar archivo en public/docs/bibliografia.pdf",
  },
  {
    name: "Anexos",
    status: "Pendiente de carga",
    note: "Agregar archivo en public/docs/anexos.pdf",
  },
];

export default function DescargasPage() {
  return (
    <>
      <section className="hero">
        <p className="kicker">Material academico</p>
        <h2>Descargas</h2>
        <p>
          Espacio para publicar tesis completa, bibliografia y anexos de apoyo
          en formato descargable.
        </p>
      </section>

      <section className="panel download-list">
        {downloads.map((item) => (
          <article key={item.name} className="download-item">
            <div>
              <h3>{item.name}</h3>
              <p className="muted">{item.note}</p>
            </div>
            <strong>{item.status}</strong>
          </article>
        ))}
      </section>
    </>
  );
}
