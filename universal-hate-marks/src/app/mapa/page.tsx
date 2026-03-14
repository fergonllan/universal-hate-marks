import { ConceptMap } from "@/components/concept-map";
import { PageFooterCta } from "@/components/page-footer-cta";

export default function MapaPage() {
  return (
    <>
      <section className="hero hero-page">
        <p className="kicker">Mapa interactivo</p>
        <h2>Grupos lingüísticos y función operativa</h2>
      </section>

      <ConceptMap />

      <PageFooterCta links={[
        { href: "/fases", label: "Roadmap de fases" },
        { href: "/como-funciona", label: "Cómo funciona" },
        { href: "/guia", label: "Guía en 15 puntos" },
      ]} />
    </>
  );
}
