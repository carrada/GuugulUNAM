export const SITE_URL = "https://www.guugul.org"
export const SITE_NAME = "GuugulUNAM"
export const SITE_LEGAL_NAME = "GuugulUNAM — Comunidad Oficial Estudiantil"
export const SITE_TAGLINE =
  "Comunidad Oficial Estudiantil del Programa Google Ambassadors"
export const DEFAULT_TITLE =
  "GuugulUNAM — Comunidad Oficial Estudiantil · Google Ambassadors"
export const DEFAULT_DESCRIPTION =
  "GuugulUNAM es la comunidad estudiantil del Programa Google Ambassadors. Nació en la Facultad de Ciencias de la UNAM y está abierta a estudiantes de cualquier universidad o plantel de México."
export const DEFAULT_KEYWORDS = [
  "GuugulUNAM",
  "Guugul",
  "Google Ambassadors",
  "comunidad estudiantil Google",
  "UNAM Facultad de Ciencias",
  "Google Cloud México",
  "estudiantes UNAM",
  "Gemini",
  "certificaciones Google",
  "GDG CDMX",
  "Ciudad Universitaria",
].join(", ")

export const OG_IMAGE = {
  url: `${SITE_URL}/og-preview.jpg`,
  type: "image/jpeg",
  width: "1024",
  height: "576",
  alt: "GuugulUNAM — comunidad estudiantil Google Ambassadors en México",
} as const

export const LOCALE = "es_MX"
export const LANGUAGE = "es-MX"
export const THEME_COLOR = "#2563eb"

export const GEO = {
  region: "MX-CMX",
  placename: "Ciudad Universitaria, Coyoacán, Ciudad de México",
  latitude: 19.3242,
  longitude: -99.1796,
  icbm: "19.3242, -99.1796",
  position: "19.3242;-99.1796",
  streetAddress: "Circuito Exterior s/n, Facultad de Ciencias",
  addressLocality: "Coyoacán",
  addressRegion: "Ciudad de México",
  postalCode: "04510",
  addressCountry: "MX",
  countryName: "México",
} as const

export const ORG = {
  id: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: ["Guugul", "Guugul UNAM", "GuugulUNAM Google Ambassadors"],
  email: undefined as string | undefined,
  logo: `${SITE_URL}/icon-192.png`,
  image: `${SITE_URL}/og-preview.jpg`,
  knowsAbout: [
    "Google Cloud",
    "Google Gemini",
    "inteligencia artificial",
    "ciencia de datos",
    "desarrollo de software",
    "certificaciones de Google",
    "Google Ambassadors",
  ],
  sameAs: [SITE_URL] as string[],
  facultyUrl: "https://www.fciencias.unam.mx/",
  universityUrl: "https://www.unam.mx/",
}

export function canonicalUrl(pathname: string) {
  if (pathname === "/") return `${SITE_URL}/`
  const clean = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname
  return `${SITE_URL}${clean}`
}

export function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") return "/"
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname
}
