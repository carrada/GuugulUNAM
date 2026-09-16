import fs from "node:fs"
import path from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"
import { INDEXABLE_PATHS } from "./src/seo/pages.ts"
import { applySeoToHtml, buildRobotsTxt, buildSitemapXml } from "./src/seo/html.ts"

function seoPrerender(): Plugin {
  return {
    name: "seo-prerender",
    closeBundle() {
      const outDir = path.resolve(import.meta.dirname, "dist")
      const indexPath = path.join(outDir, "index.html")
      const index = fs.readFileSync(indexPath, "utf8")

      fs.writeFileSync(indexPath, applySeoToHtml(index, "/"))
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), buildSitemapXml())
      fs.writeFileSync(path.join(outDir, "robots.txt"), buildRobotsTxt())

      for (const route of INDEXABLE_PATHS) {
        if (route === "/") continue
        const destDir = path.join(outDir, ...route.slice(1).split("/"))
        fs.mkdirSync(destDir, { recursive: true })
        fs.writeFileSync(
          path.join(destDir, "index.html"),
          applySeoToHtml(index, route),
        )
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoPrerender()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["three", "three/examples/jsm/environments/RoomEnvironment.js"],
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8787",
        changeOrigin: true,
      },
    },
  },
})
