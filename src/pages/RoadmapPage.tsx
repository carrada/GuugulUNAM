import { useEffect } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { ColorBar } from "@/components/layout/ColorBar"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { CopyPromptButton } from "@/components/learn/CopyPromptButton"
import { getStudyRoadmap } from "@/data/roadmaps"
import { cn } from "@/lib/utils"

export default function RoadmapPage() {
  const { slug } = useParams()
  const roadmap = slug ? getStudyRoadmap(slug) : undefined

  useEffect(() => {
    if (roadmap) {
      document.title = `${roadmap.title} · Roadmaps · GuugulUNAM`
    }
  }, [roadmap])

  if (!roadmap) {
    return <Navigate to="/aprender/roadmaps" replace />
  }

  return (
    <div className="min-h-svh bg-white">
      <div className="fixed inset-x-0 top-0 z-50">
        <ColorBar />
      </div>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-28 pb-20">
        <div className="flex flex-col items-start gap-8">
          <Link
            to="/aprender/roadmaps"
            className="font-sans text-sm text-google-blue hover:underline"
          >
            ← Roadmaps técnicos
          </Link>
          <p
            className="rounded-full px-3 py-1 font-sans text-sm font-medium"
            style={{ backgroundColor: roadmap.color, color: roadmap.onColor }}
          >
            {roadmap.tag}
          </p>
        </div>
        <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
          {roadmap.title}
        </h1>
        <p className="mt-4 font-sans text-lg leading-relaxed text-slate-600">
          {roadmap.body}
        </p>
        <p className="mt-3 font-sans text-sm text-slate-500">
          {roadmap.duration}
        </p>
        <aside
          className="mt-8 rounded-2xl p-5 font-sans text-sm leading-relaxed text-slate-800"
          style={{ backgroundColor: roadmap.surface }}
        >
          <p className="font-heading text-base font-bold text-slate-900">
            Cómo seguir la secuencia
          </p>
          <p className="mt-2">{roadmap.howTo}</p>
          <p className="mt-2">
            Dónde:{" "}
            <span className="font-medium">Google Gemini</span>. No entregues
            la salida del modelo como si fuera tu examen.
          </p>
        </aside>

        <nav className="mt-10">
          <p className="font-sans text-sm font-medium text-slate-900">
            Módulos
          </p>
          <ol className="mt-3 space-y-2 font-sans text-sm text-slate-600">
            {roadmap.modules.map((module, index) => (
              <li key={module.id}>
                <a href={`#${module.id}`} className="hover:text-google-blue">
                  {index + 1}. {module.title.replace(/^Módulo \d+ · /, "")}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-10 space-y-8">
          {roadmap.modules.map((module, index) => {
            const next = roadmap.modules[index + 1]
            return (
              <article
                key={module.id}
                id={module.id}
                className="scroll-mt-28 overflow-hidden rounded-2xl"
                style={{ backgroundColor: roadmap.surface }}
              >
                <div
                  className="flex items-start justify-between gap-3 px-5 py-3"
                  style={{
                    backgroundColor: roadmap.color,
                    color: roadmap.onColor,
                  }}
                >
                  <h2 className="font-heading text-lg font-bold">
                    {module.title}
                  </h2>
                  <CopyPromptButton text={module.prompt} />
                </div>
                <div className="space-y-4 px-5 py-5">
                  <div>
                    <p className="font-sans text-sm font-medium text-slate-900">
                      Objetivo
                    </p>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-slate-700">
                      {module.goal}
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-slate-900">
                      Qué hacer en Gemini
                    </p>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-slate-700">
                      {module.instructions}
                    </p>
                  </div>
                  <pre className="overflow-x-auto rounded-xl bg-white p-4 font-sans text-sm leading-relaxed whitespace-pre-wrap text-slate-800">
                    {module.prompt}
                  </pre>
                  {next ? (
                    <a
                      href={`#${next.id}`}
                      className="inline-flex font-sans text-sm font-medium text-slate-900 hover:underline"
                    >
                      Cuando termines este módulo → {next.title}
                    </a>
                  ) : (
                    <p className="font-sans text-sm text-slate-700">
                      Fin de la secuencia. Si un tipo de problema o un
                      argumento sigue débil, vuelve al módulo que lo entrena;
                      no empieces otro roadmap a medias.
                    </p>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="https://gemini.google.com"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-6",
            )}
          >
            Abrir Gemini
          </a>
          <Link
            to="/aprender/roadmaps"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full bg-white px-6",
            )}
          >
            Ver los tres roadmaps
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
