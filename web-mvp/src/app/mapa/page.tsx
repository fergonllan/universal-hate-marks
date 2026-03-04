import { ConceptMap } from "@/components/concept-map";

export default function MapaPage() {
  return (
    <>
      <section className="hero">
        <p className="kicker">Mapa interactivo</p>
        <h2>Grupos de linguistas y aportes al sistema</h2>
        <p>
          Visualizacion conceptual con detalle de cada grupo: aportes,
          tipologias de reglas y proceso de validacion.
        </p>
      </section>

      <ConceptMap />
    </>
  );
}
