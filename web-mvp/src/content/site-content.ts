export const siteMeta = {
  title: "Proyecto DAO contra el Discurso de Odio",
  subtitle:
    "Tesis de Maestria en Direccion Estrategica e Innovacion en la Comunicacion",
  author: "Fernando Gonzalez Llanos",
  year: "2021-2022",
  faculty: "Facultad de Ciencias de la Comunicacion",
};

export const homeBlocks = [
  {
    title: "Problema",
    body: "La circulacion de discursos de odio en contenidos virtuales exige mecanismos de analisis transparentes y colaborativos.",
  },
  {
    title: "Propuesta",
    body: "Una DAO de linguistas que diseña y vota reglas discursivas para identificar patrones de odio en contenidos digitales.",
  },
  {
    title: "Mecanica",
    body: "Propuesta de regla, debate entre nodos, votacion y registro de las reglas aprobadas en blockchain.",
  },
  {
    title: "Incentivos",
    body: "La economia interna recompensa aportes verificables: creacion de reglas, revision y mejora del consenso.",
  },
  {
    title: "Salida",
    body: "Visibilizacion y viralizacion de hallazgos para construir conciencia publica sobre el impacto del discurso de odio.",
  },
];

export const executiveSummary = [
  "La tesis propone una organizacion autonoma descentralizada (DAO) enfocada en analizar discurso de odio desde una base linguistica.",
  "El nucleo operativo son especialistas que construyen reglas discursivas verificables, discutidas en una estructura de gobernanza abierta.",
  "Blockchain se usa para registrar decisiones y reglas aprobadas con trazabilidad, transparencia y resistencia a manipulacion centralizada.",
  "El algoritmo de consenso emerge de la acumulacion de reglas validadas por la comunidad y no de un actor unico.",
  "El proyecto incorpora incentivos economicos para sostener la participacion, premiando contribuciones que mejoran el sistema.",
  "El resultado esperado es doble: mejorar la deteccion de patrones de odio y comunicar resultados para impacto social.",
];

export type FaqItem = {
  category: "Conceptos" | "Operacion" | "Gobernanza" | "Etica" | "Escalabilidad";
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    category: "Conceptos",
    question: "Que es una DAO en este proyecto?",
    answer:
      "Es una estructura organizativa descentralizada donde las reglas y decisiones se debaten, votan y registran de forma transparente.",
  },
  {
    category: "Conceptos",
    question: "Por que la base son linguistas?",
    answer:
      "Porque el problema central es discursivo. La calidad de las reglas depende de conocimiento en analisis del discurso.",
  },
  {
    category: "Operacion",
    question: "Como nace una regla discursiva?",
    answer:
      "Un nodo propone una regla, se abre debate, luego votacion. Si supera el umbral, se registra como regla activa.",
  },
  {
    category: "Operacion",
    question: "Que pasa con reglas rechazadas?",
    answer:
      "Se archivan con su historial de argumentos para futuras mejoras y nuevas rondas de propuesta.",
  },
  {
    category: "Gobernanza",
    question: "Quien define los criterios de votacion?",
    answer:
      "La propia comunidad de nodos en fases iniciales, con ajustes periodicos segun resultados y contingencias.",
  },
  {
    category: "Gobernanza",
    question: "Para que sirven los oraculos en el modelo?",
    answer:
      "Aportan eventos o datos externos para activar procesos definidos en el flujo operacional y en la gobernanza.",
  },
  {
    category: "Etica",
    question: "Como evita amplificar contenido de odio?",
    answer:
      "La plataforma prioriza ejemplos neutrales y explica patrones sin republicar expresiones ofensivas explicitamente.",
  },
  {
    category: "Etica",
    question: "El sistema reemplaza moderacion humana?",
    answer:
      "No. Se plantea como soporte analitico y de transparencia para decisiones informadas, no como sustitucion total.",
  },
  {
    category: "Escalabilidad",
    question: "Puede aplicarse en otros escenarios?",
    answer:
      "Si. La metodologia de reglas, debate y consenso puede adaptarse a otros dominios donde el lenguaje sea critico.",
  },
  {
    category: "Escalabilidad",
    question: "Como crece el algoritmo de consenso?",
    answer:
      "A medida que se incorporan reglas votadas y versionadas, el sistema mejora su cobertura y precision operativa.",
  },
];

export type Phase = {
  id: string;
  title: string;
  focus: string;
  milestones: string[];
};

export const phases: Phase[] = [
  {
    id: "Fase 1",
    title: "Estrategia Inicial",
    focus:
      "Definicion del modelo DAO, niveles de nodos, oraculos, tokenomics, reglas y prueba de prototipo.",
    milestones: [
      "Niveles de la DAO y flujo operacional",
      "Plan de nodos y descentralizacion",
      "Reglas discursivas y proceso de evaluacion",
      "Linea de tiempo y requisitos",
      "Prototipo de DAO para testeo",
    ],
  },
  {
    id: "Fase 2",
    title: "Estructura Colaborativa Descentralizada",
    focus:
      "Construccion de capacidades operativas y financieras para sostener la organizacion y su aplicacion algoritmica.",
    milestones: [
      "Obtencion de fondos",
      "Partes del aplicativo algoritmico",
      "Primera votacion de nodos DAO",
    ],
  },
  {
    id: "Fase 3",
    title: "Diseno Operacional",
    focus:
      "Escala comunitaria y puesta en marcha del protocolo con comunicacion de resultados y validacion continua.",
    milestones: [
      "Incorporacion de comunidad a la DAO",
      "Plan de comunicacion de resultados",
      "Puesta en marcha del protocolo",
    ],
  },
];

export type GroupNode = {
  id: string;
  name: string;
  short: string;
  aporte: string;
  reglas: string;
  ejemploNeutral: string;
  validacion: string;
  region: string;
};

export const linguistGroups: GroupNode[] = [
  {
    id: "cda",
    name: "Analisis del Discurso",
    short: "CDA",
    aporte: "Define patrones de poder, sesgo y estigmatizacion en enunciados.",
    reglas: "Reglas sobre marcadores discursivos de exclusion y deshumanizacion.",
    ejemploNeutral: "Uso reiterado de categorias absolutas para negar legitimidad de un grupo.",
    validacion: "Revision por pares y votacion de nodos senior.",
    region: "Cono Sur",
  },
  {
    id: "socio",
    name: "Sociolinguistica",
    short: "SOC",
    aporte: "Aporta contexto de variacion linguistica, comunidad y situacion comunicativa.",
    reglas: "Reglas contextuales por region, grupo social y entorno de uso.",
    ejemploNeutral: "Deteccion de etiquetas degradantes asociadas a identidades sociales.",
    validacion: "Muestreo comparativo en comunidades distintas.",
    region: "Andina",
  },
  {
    id: "corpus",
    name: "Linguistica de Corpus",
    short: "COR",
    aporte: "Estandariza colecciones de textos y frecuencia de patrones.",
    reglas: "Umbrales de coocurrencia y secuencias linguisticas repetidas.",
    ejemploNeutral: "Combinaciones de terminos que aumentan en contextos de hostilidad.",
    validacion: "Control de precision por lotes y versionado de corpus.",
    region: "Iberia",
  },
  {
    id: "nlp",
    name: "Linguistica Computacional",
    short: "NLP",
    aporte: "Implementa soporte tecnico para ejecutar reglas y trazabilidad de resultados.",
    reglas: "Matchers, normalizacion de texto y priorizacion de reglas activas.",
    ejemploNeutral: "Activacion de reglas por coincidencia de estructuras sintacticas definidas.",
    validacion: "Pruebas reproducibles y auditoria de ejecucion.",
    region: "Global",
  },
  {
    id: "ethics",
    name: "Moderacion y Etica",
    short: "ETH",
    aporte: "Define limites de uso, danos potenciales y criterios de intervencion responsable.",
    reglas: "Reglas de seguridad, privacidad y no amplificacion de dano.",
    ejemploNeutral: "Politicas de presentacion anonima de casos y contexto pedagogico.",
    validacion: "Comite de revision etica y gobernanza.",
    region: "Global",
  },
];

export const glossaryItems = [
  {
    term: "DAO",
    definition:
      "Organizacion Autonoma Descentralizada que opera con reglas transparentes y mecanismos de votacion comunitaria.",
  },
  {
    term: "Oraculo",
    definition:
      "Componente que introduce datos o eventos externos para activar condiciones del protocolo.",
  },
  {
    term: "Tokenomics",
    definition:
      "Diseno economico de incentivos, recompensas y sostenibilidad del sistema.",
  },
  {
    term: "Regla Discursiva",
    definition:
      "Criterio linguistico formalizado para identificar patrones de odio en contenidos.",
  },
  {
    term: "Consenso",
    definition:
      "Conjunto de reglas validadas por votacion que pasa a formar parte del sistema operativo.",
  },
  {
    term: "Nodo",
    definition:
      "Participante de la DAO con rol definido en propuesta, revision, votacion o auditoria.",
  },
];

export const flowSteps = [
  "Propuesta de regla",
  "Debate entre nodos",
  "Votacion",
  "Registro en blockchain",
  "Difusion de resultados",
];

export const demoRules = [
  {
    id: "r1",
    title: "Generalizacion absoluta sobre grupos",
    pattern: ["todos", "ninguno", "siempre", "nunca"],
    description: "Marca enunciados que anulan matices y fomentan exclusion.",
  },
  {
    id: "r2",
    title: "Llamado a excluir o expulsar",
    pattern: ["expulsar", "eliminar", "prohibir", "echar"],
    description: "Detecta intencion de apartar grupos de espacios o derechos.",
  },
  {
    id: "r3",
    title: "Deslegitimacion identitaria",
    pattern: ["no merecen", "no son personas", "no pertenecen"],
    description: "Identifica formulas de negacion de legitimidad social.",
  },
  {
    id: "r4",
    title: "Atribucion de dano colectivo",
    pattern: ["culpa de", "arruinan", "destruyen"],
    description: "Advierte asignacion de culpa global a una comunidad.",
  },
  {
    id: "r5",
    title: "Etiqueta degradante repetida",
    pattern: ["escoria", "plaga", "basura"],
    description: "Regla de alerta por lenguaje deshumanizante.",
  },
];
