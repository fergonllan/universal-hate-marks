import Link from "next/link";
import { HomePrimer } from "@/components/home-primer";
import { HomeTechnicalDiagrams } from "@/components/home-technical-diagrams";
import { evidenceStats, homeBlocks, operationalPillars, siteMeta } from "@/content/site-content";
import { ArrowRight, Download, Eye, FileSearch, MessageSquareQuote, ShieldAlert, FileText, CheckCircle2, ChevronRight, ActivitySquare, Scale, BoxSelect } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/fade-in";

const evidenceIcons: Record<string, React.ReactNode> = {
  "Contenido analizado": <MessageSquareQuote className="w-6 h-6 text-emerald-400 opacity-80" />,
  "Reglas validadas": <CheckCircle2 className="w-6 h-6 text-emerald-400 opacity-80" />,
  "Fiabilidad humana": <Scale className="w-6 h-6 text-emerald-400 opacity-80" />,
};

const pillarIcons: Record<string, React.ReactNode> = {
  "Trazabilidad de impacto": <ActivitySquare className="w-6 h-6 text-emerald-400" />,
  "Gobierno en DAO": <BoxSelect className="w-6 h-6 text-emerald-400" />,
  "Validación abierta": <Eye className="w-6 h-6 text-emerald-400" />,
};

export default function Home() {
  return (
    <FadeInStagger className="flex flex-col gap-10">
      <HomePrimer />

      <FadeIn>
        <section className="panel home-anchor-nav relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none transition-all group-hover:bg-emerald-500/10"></div>
          <div className="home-anchor-head relative z-10">
            <div>
              <p className="kicker">Ruta de lectura</p>
              <h2 className="section-title-sm">Elegí el nivel de profundidad que necesitás</h2>
            </div>
            <p className="text-[#9db2ad] home-anchor-copy">
              Podés entrar por una lectura rápida, por impacto social o por arquitectura técnica.
            </p>
          </div>
          <nav className="anchor-list relative z-10 flex flex-wrap gap-2 mt-4" aria-label="Navegación por secciones de home">
            <a href="#primer" className="chip chip-solid hover:scale-105 transition-transform">Entender rápido <ArrowRight className="w-3 h-3 ml-1"/></a>
            <a href="#impacto" className="chip hover:scale-105 transition-transform">Impacto social</a>
            <a href="#operativa" className="chip hover:scale-105 transition-transform">Operativa</a>
            <a href="#tecnico" className="chip hover:scale-105 transition-transform">Base técnica</a>
          </nav>
        </section>
      </FadeIn>

      <FadeIn delay={0.1}>
        <section className="hero hero-executive" id="impacto">
          <div className="hero-copy">
            <p className="kicker">
              <ShieldAlert className="w-4 h-4 mr-1" />
              Civic tech con enfoque en derechos
            </p>
            <h2>{siteMeta.projectFormalTitle}</h2>
            <p>
              Universal Hate Marks propone una infraestructura descentralizada para
              identificar patrones de odio, fortalecer la convivencia democrática y
              comunicar resultados con transparencia metodológica.
            </p>
            <div className="hero-note-grid" aria-label="Resumen de valor del proyecto">
              <article className="hero-note-card">
                <span>Problema</span>
                <p>El odio escala más rápido que la respuesta institucional y necesita trazabilidad.</p>
              </article>
              <article className="hero-note-card">
                <span>Método</span>
                <p>Reglas lingüísticas revisadas por pares, con gobernanza DAO y registro auditable.</p>
              </article>
            </div>
          </div>
          <div className="stats-grid">
            {evidenceStats.map((stat) => (
              <article key={stat.label} className="stat-card group">
                <div className="absolute top-4 right-4 transition-transform group-hover:scale-110 group-hover:text-emerald-300">
                  {evidenceIcons[stat.label]}
                </div>
                <p className="stat-value text-3xl">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-source text-xs border-t border-emerald-900/50 pt-2 mt-3">{stat.source}</p>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeInStagger className="grid-cards">
        {homeBlocks.map((block) => (
          <FadeIn key={block.title}>
            <article className="card card-kpi h-full flex flex-col justify-between">
              <div>
                <p className="chip chip-solid mb-3">{block.kpiLabel}</p>
                <h3 className="text-white text-lg font-semibold mb-2">{block.title}</h3>
                <p className="text-sm text-[#9db2ad]">{block.body}</p>
              </div>
              <p className="kpi-value text-xl">{block.kpiValue}</p>
            </article>
          </FadeIn>
        ))}
      </FadeInStagger>

      <FadeIn>
        <section className="panel panel-highlight relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="relative z-10">
            <p className="kicker">
              <FileSearch className="w-4 h-4 mr-1"/>
              Qué vas a encontrar en la web
            </p>
            <h2>Una lectura guiada de la tesis, no solo un archivo para descargar</h2>
            <p className="mt-2 text-lg">
              El sitio organiza el proyecto en capas: problema social, diseño DAO,
              arquitectura técnica, gobernanza y roadmap. La idea es que cualquier
              visitante pueda entrar por el nivel de detalle que necesite.
            </p>
          </div>
          <div className="quick-links mt-6 relative z-10">
            <Link href="/guia" className="quick-link group/link">
              Recorrido guiado en 15 puntos
              <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 text-emerald-500" />
            </Link>
            <Link href="/faq" className="quick-link group/link">
              Resolver preguntas frecuentes
              <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 text-emerald-500" />
            </Link>
            <Link href="/descargas" className="quick-link group/link">
              Ir a materiales descargables
              <Download className="w-4 h-4 transition-transform group-hover/link:-translate-y-1 text-emerald-500" />
            </Link>
          </div>
        </section>
      </FadeIn>

      <FadeInStagger className="panel" id="operativa">
        <p className="kicker mb-4">Pilares operativos</p>
        <div className="grid-cards">
          {operationalPillars.map((pillar) => (
            <FadeIn key={pillar.title}>
              <article className="card h-full">
                <div className="p-2 bg-black/40 border border-emerald-900/40 rounded-lg w-fit mb-3">
                  {pillarIcons[pillar.title]}
                </div>
                <h3 className="text-white font-medium text-lg mb-2">{pillar.title}</h3>
                <p className="text-[#9db2ad] text-sm">{pillar.summary}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>

      <FadeIn id="tecnico">
        <p className="kicker mb-4">Esquemas técnicos de operación blockchain</p>
        <HomeTechnicalDiagrams />
      </FadeIn>

      <FadeIn>
        <section className="panel">
          <p className="kicker mb-4">Siguientes pasos</p>
          <div className="quick-links mb-6">
            <Link href="/resumen" className="primary-btn group/link">
              Ver resumen completo
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
            <Link href="/como-funciona" className="ghost-btn group/link">
              Explorar operación
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
            <Link href="/guia" className="ghost-btn group/link">
              Abrir guía rápida
              <FileText className="w-4 h-4 transition-transform group-hover/link:scale-110" />
            </Link>
          </div>
          <div className="flex gap-4 border-t border-emerald-900/30 pt-4 flex-wrap text-sm">
            <Link href="/faq" className="text-emerald-400 hover:text-emerald-300 transition-colors">FAQ</Link>
            <Link href="/mapa" className="text-emerald-400 hover:text-emerald-300 transition-colors">Mapa de grupos</Link>
            <Link href="/fases" className="text-emerald-400 hover:text-emerald-300 transition-colors">Roadmap</Link>
            <Link href="/descargas" className="text-emerald-400 hover:text-emerald-300 transition-colors">Descargas</Link>
          </div>
        </section>
      </FadeIn>
    </FadeInStagger>
  );
}
