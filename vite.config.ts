import fs from "node:fs"
import path from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"

const SITE_URL = "https://www.guugul.org"

const PREVIEW_ROUTES = [
  "/unete",
  "/eventos",
  "/aprender",
  "/aprender/prompts",
  "/aprender/roadmaps",
  "/aprender/roadmaps/examen-por-practica",
  "/aprender/roadmaps/memorizar-conceptos",
  "/aprender/roadmaps/demostracion-formal",
  "/aprender/talleres",
  "/aprender/certificaciones",
  "/faq",
  "/aviso-legal",
  "/terminos-y-condiciones",
]

function copyIndexForLinkPreview(): Plugin {
  return {
    name: "copy-index-for-link-preview",
    closeBundle() {
      const outDir = path.resolve(import.meta.dirname, "dist")
      const indexPath = path.join(outDir, "index.html")
      const index = fs.readFileSync(indexPath, "utf8")
      const homepageTag = `<meta property="og:url" content="${SITE_URL}/" />`

      for (const route of PREVIEW_ROUTES) {
        const destDir = path.join(outDir, ...route.slice(1).split("/"))
        fs.mkdirSync(destDir, { recursive: true })
        const html = index.replace(
          homepageTag,
          `<meta property="og:url" content="${SITE_URL}${route}" />`,
        )
        fs.writeFileSync(path.join(destDir, "index.html"), html)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), copyIndexForLinkPreview()],
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
