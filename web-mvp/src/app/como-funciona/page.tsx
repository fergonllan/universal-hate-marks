import { flowSteps } from "@/content/site-content";
import { ProtocolDemo } from "@/components/protocol-demo";

export default function ComoFuncionaPage() {
  return (
    <>
      <section className="hero">
        <p className="kicker">Flujo operacional</p>
        <h2>Como opera la propuesta DAO</h2>
        <p>
          El esquema combina participacion de nodos expertos, gobernanza y
          trazabilidad para pasar de reglas propuestas a resultados publicables.
        </p>
      </section>

      <section className="panel">
        <h3>Etapas del proceso</h3>
        <ol className="step-list">
          {flowSteps.map((step, index) => (
            <li className="step-item" key={step}>
              <span className="step-index">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <ProtocolDemo />
    </>
  );
}
