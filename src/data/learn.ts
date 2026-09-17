import { Award, BookOpen, Map, Wrench, type LucideIcon } from "lucide-react"

export type LearnProgram = {
  title: string
  description: string
  href: string
  cta?: string
  org?: string
  when?: string
  where?: string
  themes?: string[]
  activities?: string[]
  takeaways?: string[]
  speaker?: {
    name: string
    role: string
  }
  organizers?: {
    name: string
    role: string
  }[]
  steps?: {
    heading?: string
    intro?: string
    items: {
      title: string
      body: string
      href?: string
      hrefLabel?: string
    }[]
    warning?: string
    closing?: string
  }
}

export type LearnSection = {
  title: string
  intro?: string
  programs: LearnProgram[]
}

export type LearnTrack = {
  slug: string
  title: string
  body: string
  accent: string
  icon: LucideIcon
  lead: string
  items: string[]
  closing: string
  sections?: LearnSection[]
}

export const LEARN_TRACKS: LearnTrack[] = [
  {
    slug: "talleres",
    title: "Talleres prácticos",
    body: "Sesiones hands-on para pasar de la teoría al código: software, datos y herramientas que se usan en la industria.",
    accent: "bg-google-blue/15 text-google-blue",
    icon: Wrench,
    lead: "Los talleres de Guugul están pensados para que salgas con algo hecho, no solo con apuntes. Trabajamos con herramientas que aparecen en flujos reales de desarrollo, datos e inteligencia artificial, con ejercicios que puedes repetir por tu cuenta.",
    items: [
      "Sesiones presenciales o en línea, anunciadas en el canal de Anuncios.",
      "Enfoque en práctica: repositorios, consolas, datasets y documentación oficial.",
      "Nivel de entrada claro en cada convocatoria, para que sepas si te toca empezar o continuar.",
      "Material posterior cuando el taller lo permite, para que el aprendizaje no se quede en la sesión.",
    ],
    closing:
      "Las fechas, cupos y requisitos se publican en Anuncios. Unirte a la comunidad es la forma de enterarte a tiempo.",
    sections: [
      {
        title: "Eventos de Google Developers Group CDMX",
        intro:
          "Estos talleres y encuentros los organiza Google Developers Group CDMX. Guugul los comparte para que puedas sumarte; el RSVP, el cupo y la sede los gestiona GDG CDMX.",
        programs: [
          {
            title: "Club de lectura de papers de AI: The Illusion of Thinking",
            org: "Google Developers Group CDMX",
            when: "10 de septiembre de 2026, 20:00–21:00 (CST)",
            href: "https://gdg.community.dev/events/details/google-gdg-cdmx-presents-club-de-lectura-de-papers-de-ai-the-illusion-of-thinking/",
            cta: "RSVP en GDG CDMX",
            themes: [
              "Build with AI",
              "Conference",
              "Tech Talk / Meetup",
              "Workshop / hands-on session",
            ],
            description:
              "¿Cómo evaluarías la capacidad real de razonamiento lógico en los nuevos Modelos de Razonamiento Grande (LRMs)? Investigadores de Apple proponen ir más allá de los exámenes académicos tradicionales analizando no solo las respuestas finales, sino también el proceso interno de pensamiento, con entornos controlados de acertijos lógicos. El análisis revela resultados sorprendentes sobre la precisión al escalar la complejidad de los problemas.",
            activities: [
              "Evaluar de forma comparativa el rendimiento y la precisión de modelos estándar frente a sus contrapartes de razonamiento (como Claude 3.7 Sonnet, DeepSeek-R1 y o3-mini) en entornos lógicos controlados.",
              "Monitorear las trazas internas de pensamiento para identificar en qué momento exacto del proceso de autorreflexión emergen las soluciones correctas e incorrectas, con ayuda de simuladores de acertijos.",
              "Probar la ejecución algorítmica pura al proporcionar de manera explícita el pseudocódigo del algoritmo en el prompt, para verificar si el modelo puede seguir instrucciones lógicas paso a paso sin colapsar.",
            ],
            takeaways: [
              "Los tres regímenes de la complejidad: por qué los modelos estándar son más eficientes en tareas simples, mientras que los de razonamiento destacan en dificultad media y ambos colapsan ante problemas de complejidad extrema.",
              "El límite inverso de escala en el pensamiento: cómo, de manera contraintuitiva, los modelos reducen sus tokens de pensamiento ante problemas muy difíciles, en lugar de aprovechar el presupuesto de cómputo disponible.",
              "La ineficiencia del sobrepensamiento (overthinking): el desperdicio de tokens cuando un modelo encuentra la respuesta correcta de forma temprana en problemas sencillos, pero continúa explorando rutas incorrectas.",
            ],
            speaker: {
              name: "Rodrigo Cambray",
              role: "Consultor de seguridad",
            },
            organizers: [
              { name: "Malinali Becerril", role: "Scopely · GDG Organizer" },
              { name: "Enrique Diaz", role: "Codeflux AI" },
              { name: "Israel Silva", role: "Lifter Studio · GDG Organizer" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "roadmaps",
    title: "Roadmaps técnicos",
    body: "Tres secuencias para estudiar con Gemini: práctica de ejercicios, memorización activa y demostración formal. Próximamente, rutas para puestos en Google México.",
    accent: "bg-google-red/15 text-google-red",
    icon: Map,
    lead: "Un roadmap no sustituye la carrera: ordena cómo estudiar. Aquí hay tres métodos distintos. En cada módulo copias un prompt, trabajas en Gemini y solo entonces pasas al siguiente.",
    items: [
      "Estudiar para un examen que se gana resolviendo ejercicios, con Gemini como entrenador.",
      "Memorizar conceptos con recuperación activa y repetición espaciada.",
      "Escribir demostraciones formales: cuantificadores, inducción, ε-δ y revisión de rigor.",
      "Próximamente: roadmaps orientados a puestos de trabajo en Google México.",
    ],
    closing:
      "Los roadmaps se van publicando y actualizando con la comunidad. Si te registras, te avisamos cuando sale una ruta nueva.",
  },
  {
    slug: "prompts",
    title: "Biblioteca de prompts",
    body: "Mega-prompts para Gemini, Study Notebooks y Gemini Omni: estudio, código, diseño, video y empleabilidad, listos para copiar y adaptar.",
    accent: "bg-[#e8f0fe] text-[#4285F4]",
    icon: BookOpen,
    lead: "Una colección de prompts estructurados para Google Gemini y Gemini Omni. Cópialos, sustituye los corchetes y úsalos con tus apuntes, código, vacantes o un still para video.",
    items: [
      "Pensados para Gemini, Study Notebooks y Gemini Omni, no como atajo para entregar trabajo ajeno.",
      "Cada ficha indica cuándo usarlo y en qué herramienta pegarlo.",
      "Sustituye los campos entre corchetes y adjunta tus documentos, fotos o el clip previo cuando el prompt lo pida.",
      "En Omni, edita en el mismo hilo («Keep everything else the same») en lugar de regenerar el video entero.",
      "Revisa siempre la salida: el modelo puede equivocarse.",
    ],
    closing:
      "La biblioteca se irá ampliando. Si un prompt te sirve en clase o en un proyecto, tráelo a mentoría y cuéntanos cómo lo adaptaste.",
  },
  {
    slug: "certificaciones",
    title: "Certificaciones y cursos oficiales de Google",
    body: "Credenciales profesionales y cursos cortos de Crece con Google, en Coursera. Guugul las orienta; el certificado lo otorga Google.",
    accent: "bg-google-blue/15 text-google-blue",
    icon: Award,
    lead: "La información de esta página resume las fichas oficiales de Crece con Google. El programa es 100 % en línea, a tu ritmo, y el precio se consulta en Coursera (suele haber prueba de 7 días). Guugul no emite la credencial ni cobra la suscripción.",
    items: [
      "Los Certificados Profesionales están pensados para un perfil de entrada; muchos se completan en 3 a 6 meses con unas 10 horas semanales, sin experiencia previa.",
      "Los certificados avanzados (datos, inteligencia empresarial, automatización con Python) se apoyan en el certificado básico o en experiencia equivalente.",
      "Los cursos cortos duran menos de 10 horas y sirven para sumar una habilidad concreta.",
      "Completar un curso no garantiza empleo ni es requisito para estar en la comunidad.",
    ],
    closing:
      "En Anuncios avisamos si hay becas o cupos estudiantiles. Si te inscribes, tráelo a mentoría o a un taller: la idea es aplicar lo aprendido.",
    sections: [
      {
        title: "Certificados profesionales",
        intro:
          "Programas diseñados por expertos de Google, con actividades prácticas. Al terminar obtienes una credencial digital que puedes compartir.",
        programs: [
          {
            title: "Certificado en ciberseguridad de Google",
            href: "https://www.coursera.org/google-certificates/cybersecurity-certificate",
            description:
              "Prepárate para un rol de entrada como analista de ciberseguridad. Aprendes a identificar y mitigar riesgos, amenazas y vulnerabilidades, y a usar IA en tareas de seguridad. Herramientas del programa: Python, Linux, SQL, SIEM e IDS. No se pide experiencia previa. Duración habitual: 3 a 6 meses.",
          },
          {
            title: "Certificado de análisis de datos de Google",
            href: "https://www.coursera.org/google-certificates/data-analytics-certificate",
            description:
              "Aprende a preparar, procesar y analizar datos para apoyar decisiones, y a contar la historia con visualizaciones. Incluye hojas de cálculo, SQL, Tableau, R y uso de IA para productividad. Pensado para analista de datos júnior o asociado, sin experiencia previa. Ocho cursos; unas 240 horas en total.",
          },
          {
            title: "Certificado de marketing digital y comercio electrónico",
            href: "https://www.coursera.org/google-certificates/digital-marketing-certificate",
            description:
              "Administra campañas, atrae clientes y vende en línea. Trabajas con Canva, Mailchimp, Shopify, Google Ads, Google Analytics y redes sociales, además de IA aplicada a marketing. Nivel básico, en línea, sin experiencia previa. Completarlo suele llevar menos de seis meses.",
          },
          {
            title: "Certificado de asistencia informática de Google",
            href: "https://www.coursera.org/google-certificates/it-support-certificate",
            description:
              "Fundamentos de soporte de TI: solución de problemas, atención al cliente, redes, sistemas operativos, administración de sistemas y seguridad, con IA para productividad. Abre la puerta a roles de help desk o técnico de TI. Cinco cursos; no hay prerrequisitos.",
          },
          {
            title: "Certificado en gestión de proyectos de Google",
            href: "https://www.coursera.org/google-certificates/project-management-certificate",
            description:
              "Planifica, organiza y ejecuta proyectos a tiempo y dentro de presupuesto, con métodos tradicionales y ágiles (incluidos Scrum). El programa está acreditado por el PMI y puede aportar horas hacia credenciales como CAPM. Seis cursos; unas 240 horas. Sin experiencia previa.",
          },
          {
            title: "Certificado de diseño de UX de Google",
            href: "https://www.coursera.org/google-certificates/ux-design-certificate",
            description:
              "Fundamentos de experiencia de usuario: empatizar, wireframes, prototipos, investigación y prueba de diseños. Usas Figma y Adobe XD y sales con un portafolio de tres proyectos. También incluye IA aplicada al proceso de diseño. Nivel básico; 3 a 6 meses.",
          },
          {
            title: "Certificado de análisis de datos avanzado",
            href: "https://www.coursera.org/google-certificates/advanced-data-analytics-certificate",
            description:
              "Parte del certificado de análisis de datos (o experiencia equivalente). Subes a Python, Jupyter, Tableau, estadística, regresión y machine learning para conjuntos grandes. Orientado a analista sénior o científico de datos júnior. Siete cursos; unas 240 horas.",
          },
          {
            title: "Certificado de inteligencia empresarial",
            href: "https://www.coursera.org/google-certificates/business-intelligence-certificate",
            description:
              "Transforma datos en información que las partes interesadas puedan consultar solas: pipelines, modelos y paneles. Herramientas: BigQuery, Tableau y SQL. Requiere bases de análisis de datos. Suele completarse en 1 a 2 meses (tres cursos).",
          },
          {
            title: "Certificado de automatización de TI con Python",
            href: "https://www.coursera.org/google-certificates/it-automation-certificate",
            description:
              "Nivel avanzado sobre el certificado de asistencia de TI (o equivalente). Programas Python para automatizar administración de sistemas; también Git, GitHub y configuración en la nube. No exige saber programar de antemano, sí conceptos básicos de TI. Seis cursos; 1 a 2 meses.",
          },
        ],
      },
      {
        title: "Cursos",
        intro: "Aprende nuevas habilidades en 10 horas o menos.",
        programs: [
          {
            title: "Acelera tu búsqueda de empleo con IA",
            href: "https://www.coursera.org/google-certificates/google-accelerate-your-job-search-with-ai",
            description:
              "Usa Gemini, NotebookLM y Career Dreamer para detectar habilidades transferibles, armar un plan de búsqueda, currículum y práctica de entrevistas. Cuatro módulos; unas 6 horas. Sin experiencia previa en IA.",
          },
          {
            title: "Fundamentos de metodología Agile",
            href: "https://www.coursera.org/google-certificates/google-agile-essentials",
            description:
              "Conceptos de gestión ágil y Scrum: sprints, historias de usuario, backlog y retrospectivas. Menos de 10 horas (unas 6), siete módulos, sin experiencia previa. Al terminar puedes añadir la credencial a tu CV.",
          },
          {
            title: "Fundamentos de la IA de Google",
            href: "https://www.coursera.org/google-certificates/ai-essentials-google",
            description:
              "Introducción a la IA generativa: productividad, el arte de dar instrucciones y uso responsable. Cinco módulos; menos de 5 horas. Incluye práctica con herramientas conversacionales como Gemini. No requiere programar.",
          },
          {
            title: "Fundamentos de gestión de talento",
            href: "https://www.coursera.org/google-certificates/google-people-management-essentials",
            description:
              "Habilidades para coordinar personas: objetivos claros, retroalimentación y equipos de alto rendimiento, con apoyo de IA en tareas de gestión. Cuatro bloques; menos de 8 horas. Para quien aspira a ser o ya es líder de equipo.",
          },
        ],
      },
    ],
  },
]

export function getLearnTrack(slug: string) {
  return LEARN_TRACKS.find((track) => track.slug === slug)
}
