import { getPageSeo } from "./pages.ts"
import { buildJsonLdGraph } from "./schema.ts"
import {
  DEFAULT_KEYWORDS,
  LANGUAGE,
  OG_IMAGE,
  SITE_NAME,
  canonicalUrl,
} from "./site.ts"

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string,
) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  )
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function upsertLink(rel: string, href: string, extra?: Record<string, string>) {
  const selector = extra?.hreflang
    ? `link[rel="${rel}"][hreflang="${extra.hreflang}"]`
    : `link[rel="${rel}"]`
  let el = document.head.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement("link")
    el.rel = rel
    if (extra) {
      for (const [name, value] of Object.entries(extra)) {
        el.setAttribute(name, value)
      }
    }
    document.head.appendChild(el)
  }
  el.href = href
}

export function applyDocumentSeo(pathname: string) {
  const page = getPageSeo(pathname)
  const url = canonicalUrl(page.path)
  const keywords = page.keywords ?? DEFAULT_KEYWORDS
  const ogType = page.ogType ?? "website"

  document.title = page.title
  document.documentElement.lang = LANGUAGE

  upsertMeta("name", "description", page.description)
  upsertMeta("name", "keywords", keywords)
  upsertMeta("name", "robots", page.robots ?? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1")
  upsertMeta("property", "og:type", ogType)
  upsertMeta("property", "og:url", url)
  upsertMeta("property", "og:title", page.title)
  upsertMeta("property", "og:description", page.description)
  upsertMeta("property", "og:site_name", SITE_NAME)
  upsertMeta("property", "og:image", OG_IMAGE.url)
  upsertMeta("name", "twitter:title", page.title)
  upsertMeta("name", "twitter:description", page.description)
  upsertMeta("name", "twitter:image", OG_IMAGE.url)
  upsertLink("canonical", url)
  upsertLink("alternate", url, { hreflang: "es-MX" })
  upsertLink("alternate", url, { hreflang: "x-default" })

  let script = document.getElementById("seo-graph")
  if (!script) {
    script = document.createElement("script")
    script.id = "seo-graph"
    script.setAttribute("type", "application/ld+json")
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(buildJsonLdGraph(page.path))
}
