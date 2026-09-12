import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Map } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { ColorBar } from "@/components/layout/ColorBar"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { STUDY_ROADMAPS } from "@/data/roadmaps"
import { cn } from "@/lib/utils"

export default function RoadmapsPage() {
  useEffect(() => {
    document.title = "Roadmaps técnicos · Aprender · GuugulUNAM"
  }, [])

  return (
    <div className="relative min-h-svh bg-white">
      <div className="absolute inset-x-0 top-0 z-40">
        <ColorBar />
      </div>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-28 pb-20">
        <div className="flex flex-col items-start gap-8">
          <Link
            to="/aprender"
            className="font-sans text-sm text-google-blue hover:underline"
          >
            ← Aprender
          </Link>
          <div className="flex size-12 items-center justify-center rounded-xl bg-google-red/15 text-google-red">
            <Map className="size-6" aria-hidden="true" />
          </div>
        </div>
        <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
          Roadmaps técnicos
        </h1>
        <p className="mt-4 font-sans text-lg leading-relaxed text-slate-600">
          Tres rutas para estudiar con Gemini en secuencia: un módulo, un
          prompt, práctica, el siguiente. Elige según lo que te pide el
          examen, no según lo que es más cómodo leer.
        </p>
        <p className="mt-4 font-sans text-base leading-relaxed text-slate-600">
          Copia el prompt, pégalo en Gemini, sustituye los corchetes y no
          pases de módulo hasta cumplir el objetivo. Guugul no califica ni
          sustituye a tu profesor.
        </p>

        <div className="mt-10 space-y-4">
          {STUDY_ROADMAPS.map((roadmap) => (
            <Link
              key={roadmap.slug}
              to={`/aprender/roadmaps/${roadmap.slug}`}
              className="block overflow-hidden rounded-2xl"
              style={{ backgroundColor: roadmap.surface }}
            >
              <div
                className="px-5 py-3 font-sans text-sm font-medium"
                style={{
                  backgroundColor: roadmap.color,
                  color: roadmap.onColor,
                }}
              >
                {roadmap.tag}
              </div>
              <div className="p-5">
                <h2 className="font-heading text-xl font-bold text-slate-900">
                  {roadmap.title}
                </h2>
                <p className="mt-2 font-sans text-sm text-slate-600">
                  {roadmap.duration}
                </p>
                <p className="mt-3 font-sans text-base leading-relaxed text-slate-700">
                  {roadmap.body}
                </p>
                <span className="mt-4 inline-block font-sans text-sm font-medium text-slate-900">
                  Empezar secuencia →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <aside className="mt-10 rounded-2xl bg-[#fce8e6] p-5">
          <p className="font-sans text-sm font-medium tracking-widest text-[#c5221f] uppercase">
            Próximamente
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-slate-900">
            Roadmaps para puestos en Google México
          </h2>
          <p className="mt-3 font-sans text-base leading-relaxed text-slate-700">
            Vamos a publicar rutas específicas para prepararte hacia vacantes
            en Google México: perfiles técnicos, entrevistas y el tipo de
            práctica que suele pedirse. No son una oferta de empleo ni un
            convenio de colocación; serán guías de estudio, también con
            prompts de Gemini en secuencia.
          </p>
          <p className="mt-3 font-sans text-sm text-slate-600">
            Cuando salgan, las anunciamos en el canal de Anuncios. Mientras,
            usa las tres rutas de arriba para el semestre.
          </p>
        </aside>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/unete"
            className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6")}
          >
            Únete a la comunidad
          </Link>
          <Link
            to="/aprender"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full bg-white px-6",
            )}
          >
            Volver a Aprender
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
