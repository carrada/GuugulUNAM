import { INDEXABLE_PATHS, getPageSeo } from "./pages.ts"
import { buildJsonLdGraph } from "./schema.ts"
import { DEFAULT_KEYWORDS, SITE_URL, canonicalUrl } from "./site.ts"

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function replaceTag(html: string, pattern: RegExp, replacement: string) {
  return pattern.test(html) ? html.replace(pattern, replacement) : html
}

export function applySeoToHtml(html: string, pathname: string) {
  const page = getPageSeo(pathname)
  const url = canonicalUrl(page.path)
  const title = escapeHtml(page.title)
  const description = escapeHtml(page.description)
  const keywords = escapeHtml(page.keywords ?? DEFAULT_KEYWORDS)
  const ogType = page.ogType ?? "website"
  const jsonLd = JSON.stringify(buildJsonLdGraph(page.path))

  let next = html
  next = replaceTag(next, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
  next = replaceTag(
    next,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${description}" />`,
  )
  next = replaceTag(
    next,
    /<meta\s+name="keywords"\s+content="[^"]*"\s*\/>/,
    `<meta name="keywords" content="${keywords}" />`,
  )
  next = replaceTag(
    next,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${url}" />`,
  )
  next = replaceTag(
    next,
    /<link\s+rel="alternate"\s+hreflang="es-MX"\s+href="[^"]*"\s*\/>/,
    `<link rel="alternate" hreflang="es-MX" href="${url}" />`,
  )
  next = replaceTag(
    next,
    /<link\s+rel="alternate"\s+hreflang="x-default"\s+href="[^"]*"\s*\/>/,
    `<link rel="alternate" hreflang="x-default" href="${url}" />`,
  )
  next = replaceTag(
    next,
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:type" content="${ogType}" />`,
  )
  next = replaceTag(
    next,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${url}" />`,
  )
  next = replaceTag(
    next,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${title}" />`,
  )
  next = replaceTag(
    next,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${description}" />`,
  )
  next = replaceTag(
    next,
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${title}" />`,
  )
  next = replaceTag(
    next,
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${description}" />`,
  )
  next = replaceTag(
    next,
    /<script type="application\/ld\+json" id="seo-graph">[\s\S]*?<\/script>/,
    `<script type="application/ld+json" id="seo-graph">${jsonLd}</script>`,
  )

  return next
}

export function buildSitemapXml(now = new Date()) {
  const lastmod = now.toISOString().slice(0, 10)
  const urls = INDEXABLE_PATHS.map((path) => {
    const page = getPageSeo(path)
    return `  <url>
    <loc>${canonicalUrl(page.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`
  }).join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

export function buildRobotsTxt() {
  const agents = [
    "*",
    "Googlebot",
    "Googlebot-Image",
    "Bingbot",
    "GPTBot",
    "ChatGPT-User",
    "Google-Extended",
    "Anthropic-AI",
    "ClaudeBot",
    "Claude-Web",
    "PerplexityBot",
    "Applebot",
    "Applebot-Extended",
    "CCBot",
    "meta-externalagent",
    "Bytespider",
  ]

  const blocks = agents
    .map(
      (agent) => `User-agent: ${agent}
Allow: /
Disallow: /api/
`,
    )
    .join("\n")

  return `${blocks}
Sitemap: ${SITE_URL}/sitemap.xml
Host: ${SITE_URL}
`
}
