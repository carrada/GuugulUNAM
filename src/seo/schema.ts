import { EVENTS } from "../data/events.ts"
import { FAQS } from "../data/faqs.ts"
import { getPageSeo } from "./pages.ts"
import {
  GEO,
  OG_IMAGE,
  ORG,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  canonicalUrl,
  normalizePath,
} from "./site.ts"

type JsonLd = Record<string, unknown>

const EVENT_SCHEDULE: Record<
  string,
  { startDate: string; endDate?: string; attendanceMode: string }
> = {
  "Google Cloud Summit 2026": {
    startDate: "2026-09-30",
    attendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  },
  "DevFest 2026: Ciudad de México": {
    startDate: "2026-12-07T08:00:00-06:00",
    endDate: "2026-12-07T21:00:00-06:00",
    attendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  },
}

const COURSE_PATHS = new Set([
  "/aprender/talleres",
  "/aprender/certificaciones",
  "/aprender/prompts",
])

const LEARNING_RESOURCE_PATHS = new Set([
  "/aprender/roadmaps/examen-por-practica",
  "/aprender/roadmaps/memorizar-conceptos",
  "/aprender/roadmaps/demostracion-formal",
])

function postalAddress(): JsonLd {
  return {
    "@type": "PostalAddress",
    streetAddress: GEO.streetAddress,
    addressLocality: GEO.addressLocality,
    addressRegion: GEO.addressRegion,
    postalCode: GEO.postalCode,
    addressCountry: GEO.addressCountry,
  }
}

function geoCoordinates(): JsonLd {
  return {
    "@type": "GeoCoordinates",
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  }
}

export function organizationNode(): JsonLd {
  return {
    "@type": ["Organization", "EducationalOrganization"],
    "@id": ORG.id,
    name: ORG.name,
    alternateName: ORG.alternateName,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: ORG.logo,
      width: 192,
      height: 192,
    },
    image: ORG.image,
    description: SITE_TAGLINE,
    slogan: "Hecho por estudiantes, para estudiantes.",
    inLanguage: "es-MX",
    areaServed: {
      "@type": "Country",
      name: GEO.countryName,
    },
    address: postalAddress(),
    geo: geoCoordinates(),
    knowsAbout: ORG.knowsAbout,
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      geographicArea: {
        "@type": "Country",
        name: GEO.countryName,
      },
    },
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Facultad de Ciencias, Universidad Nacional Autónoma de México",
      url: ORG.facultyUrl,
      parentOrganization: {
        "@type": "CollegeOrUniversity",
        name: "Universidad Nacional Autónoma de México",
        url: ORG.universityUrl,
      },
    },
    memberOf: {
      "@type": "Organization",
      name: "Google Ambassadors",
      description:
        "Programa estudiantil de embajadores de Google. GuugulUNAM es un capítulo estudiantil independiente, no una entidad de Google LLC.",
    },
    sameAs: ORG.sameAs,
  }
}

function websiteNode(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": ORG.websiteId,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    alternateName: ORG.alternateName,
    description: SITE_TAGLINE,
    inLanguage: "es-MX",
    publisher: { "@id": ORG.id },
    about: { "@id": ORG.id },
  }
}

function breadcrumbNode(pathname: string): JsonLd | null {
  const path = normalizePath(pathname)
  if (path === "/") return null

  const crumbs: { name: string; path: string }[] = [
    { name: "Inicio", path: "/" },
  ]
  const parts = path.split("/").filter(Boolean)
  let acc = ""
  for (const part of parts) {
    acc += `/${part}`
    crumbs.push({ name: getPageSeo(acc).title.split(" · ")[0], path: acc })
  }

  return {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl(path)}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: canonicalUrl(crumb.path),
    })),
  }
}

function webPageNode(pathname: string): JsonLd {
  const page = getPageSeo(pathname)
  const url = canonicalUrl(page.path)
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: "es-MX",
    isPartOf: { "@id": ORG.websiteId },
    about: { "@id": ORG.id },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: OG_IMAGE.url,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "meta[name='description']"],
    },
  }
}

function faqNode(): JsonLd {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/faq#faq`,
    url: `${SITE_URL}/faq`,
    inLanguage: "es-MX",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

function eventNodes(): JsonLd[] {
  return EVENTS.map((event) => {
    const schedule = EVENT_SCHEDULE[event.title]
    return {
      "@type": "Event",
      name: event.title,
      description: event.description,
      url: event.href,
      eventAttendanceMode:
        schedule?.attendanceMode ??
        "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      startDate: schedule?.startDate,
      endDate: schedule?.endDate,
      location: {
        "@type": "Place",
        name: event.where,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ciudad de México",
          addressRegion: "Ciudad de México",
          addressCountry: "MX",
        },
      },
      organizer: {
        "@type": "Organization",
        name: event.org ?? SITE_NAME,
      },
      performer: event.organizers?.map((person) => ({
        "@type": "Person",
        name: person.name,
        jobTitle: person.role,
      })),
      inLanguage: "es-MX",
      isAccessibleForFree: true,
      keywords: event.themes?.join(", "),
    }
  })
}

function courseNode(pathname: string): JsonLd | null {
  const path = normalizePath(pathname)
  if (!COURSE_PATHS.has(path)) return null
  const page = getPageSeo(path)
  return {
    "@type": "Course",
    name: page.title.split(" · ")[0],
    description: page.description,
    url: canonicalUrl(path),
    inLanguage: "es-MX",
    provider: { "@id": ORG.id },
    educationalLevel: "Beginner to intermediate",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
  }
}

function learningResourceNode(pathname: string): JsonLd | null {
  const path = normalizePath(pathname)
  if (!LEARNING_RESOURCE_PATHS.has(path)) return null
  const page = getPageSeo(path)
  return {
    "@type": "LearningResource",
    name: page.title.split(" · ")[0],
    description: page.description,
    url: canonicalUrl(path),
    inLanguage: "es-MX",
    learningResourceType: "study plan",
    educationalLevel: "university",
    provider: { "@id": ORG.id },
  }
}

export function buildJsonLdGraph(pathname: string): JsonLd {
  const path = normalizePath(pathname)
  const graph: JsonLd[] = [
    organizationNode(),
    websiteNode(),
    webPageNode(path),
  ]

  const crumbs = breadcrumbNode(path)
  if (crumbs) graph.push(crumbs)

  if (path === "/faq") graph.push(faqNode())
  if (path === "/eventos") graph.push(...eventNodes())

  const course = courseNode(path)
  if (course) graph.push(course)

  const resource = learningResourceNode(path)
  if (resource) graph.push(resource)

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  }
}
