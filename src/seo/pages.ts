import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  normalizePath,
} from "./site.ts"

export type PageSeo = {
  path: string
  title: string
  description: string
  keywords?: string
  robots?: string
  ogType?: "website" | "article"
  changefreq: "weekly" | "monthly" | "yearly"
  priority: number
}

export const PAGES: PageSeo[] = [
  {
    path: "/",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    keywords:
      "GuugulUNAM, Google Ambassadors, comunidad estudiantil UNAM, Facultad de Ciencias, Google México, estudiantes México",
    changefreq: "weekly",
    priority: 1,
  },
  {
    path: "/unete",
    title: `Únete a GuugulUNAM · Canal de avisos para estudiantes`,
    description:
      "Regístrate en GuugulUNAM y entra al canal de Anuncios en WhatsApp: eventos en oficinas de Google, herramientas nuevas y acceso anticipado. Abierto a cualquier universidad de México.",
    keywords:
      "unirse GuugulUNAM, comunidad Google estudiantes, WhatsApp avisos Google, registro estudiantes México",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/eventos",
    title: `Eventos · Google Cloud Summit y DevFest CDMX · ${SITE_NAME}`,
    description:
      "Convocatorias para la comunidad: Google Cloud Summit 2026 en Expo Santa Fe y DevFest 2026 en Ciudad de México. Fechas, sedes y cómo registrarte.",
    keywords:
      "Google Cloud Summit 2026 CDMX, DevFest 2026 Ciudad de México, eventos Google estudiantes, Expo Santa Fe",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    path: "/aprender",
    title: `Aprender · Talleres, roadmaps, prompts y certificaciones · ${SITE_NAME}`,
    description:
      "Formación de GuugulUNAM: talleres prácticos, roadmaps técnicos con Gemini, biblioteca de prompts y certificaciones oficiales de Google en Coursera.",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    path: "/aprender/prompts",
    title: `Biblioteca de prompts para Gemini · Aprender · ${SITE_NAME}`,
    description:
      "Mega-prompts para Google Gemini y Study Notebooks: estudio, código, diseño y empleabilidad. Cópialos, adáptalos y úsalos con tus apuntes.",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/aprender/roadmaps",
    title: `Roadmaps técnicos con Gemini · Aprender · ${SITE_NAME}`,
    description:
      "Tres secuencias para estudiar con Gemini: práctica de ejercicios, memorización activa y demostración formal. Pensados para estudiantes universitarios.",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/aprender/roadmaps/examen-por-practica",
    title: `Estudiar para un examen con práctica de ejercicios · ${SITE_NAME}`,
    description:
      "Roadmap de 7 módulos para exámenes que se ganan resolviendo: cálculo, álgebra, probabilidad, física o estructuras de datos. Gemini actúa como entrenador.",
    ogType: "article",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/aprender/roadmaps/memorizar-conceptos",
    title: `Memorizar conceptos con recuperación activa · ${SITE_NAME}`,
    description:
      "Roadmap para retener definiciones, teoremas y protocolos con recuperación activa y repetición espaciada. Gemini te examina; tú contestas sin mirar apuntes.",
    ogType: "article",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/aprender/roadmaps/demostracion-formal",
    title: `Demostrar matemáticas de forma formal · ${SITE_NAME}`,
    description:
      "Roadmap de rigor matemático: cuantificadores, inducción y escritura de demostraciones. Gemini actúa como jurado y no demuestra por ti.",
    ogType: "article",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/aprender/talleres",
    title: `Talleres prácticos · Aprender · ${SITE_NAME}`,
    description:
      "Sesiones hands-on de software, datos e IA. Incluye encuentros compartidos de Google Developers Group CDMX, como el club de lectura de papers de AI.",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    path: "/aprender/certificaciones",
    title: `Certificaciones y cursos oficiales de Google · ${SITE_NAME}`,
    description:
      "Guía de Certificados Profesionales y cursos cortos de Crece con Google en Coursera: datos, ciberseguridad, UX, cloud, IA y más. Guugul orienta; Google certifica.",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/faq",
    title: `Preguntas frecuentes · ¿Quién puede unirse a GuugulUNAM?`,
    description:
      "GuugulUNAM no es exclusivo de la UNAM. Respuestas sobre el canal de Anuncios, eventos en oficinas de Google, acceso anticipado a herramientas y el registro.",
    keywords:
      "FAQ GuugulUNAM, comunidad abierta universidades México, Google Ambassadors UNAM, WhatsApp anuncios estudiantes",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/aviso-legal",
    title: `Aviso legal · ${SITE_NAME}`,
    description:
      "Naturaleza independiente de GuugulUNAM, uso de marcas, datos personales y relación con Google LLC y la UNAM. Iniciativa estudiantil de la Facultad de Ciencias.",
    changefreq: "yearly",
    priority: 0.3,
  },
  {
    path: "/terminos-y-condiciones",
    title: `Términos y condiciones · ${SITE_NAME}`,
    description:
      "Condiciones de uso del sitio guugul.org y de la participación en GuugulUNAM: registro, canal de avisos, conducta y límites de la comunidad estudiantil.",
    changefreq: "yearly",
    priority: 0.3,
  },
]

const PAGE_BY_PATH = new Map(PAGES.map((page) => [page.path, page]))

export function getPageSeo(pathname: string): PageSeo {
  const path = normalizePath(pathname)
  const exact = PAGE_BY_PATH.get(path)
  if (exact) return exact

  return {
    path,
    title: `${SITE_NAME} — Comunidad estudiantil Google Ambassadors`,
    description: DEFAULT_DESCRIPTION,
    robots: "index, follow",
    changefreq: "monthly",
    priority: 0.5,
  }
}

export const INDEXABLE_PATHS = PAGES.map((page) => page.path)
