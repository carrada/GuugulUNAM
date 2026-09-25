import { Link } from "react-router-dom"
import { BookOpen } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { ColorBar } from "@/components/layout/ColorBar"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { PromptCard } from "@/components/learn/PromptCard"
import { PROMPT_CATEGORIES } from "@/data/prompts"
import { cn } from "@/lib/utils"

export default function PromptsPage() {
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
          <div className="flex size-12 items-center justify-center rounded-xl bg-[#dbeafe] text-[#2563eb]">
            <BookOpen className="size-6" aria-hidden="true" />
          </div>
        </div>
        <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
          Biblioteca de prompts
        </h1>
        <p className="mt-4 font-sans text-lg leading-relaxed text-slate-600">
          Mega-prompts para exprimir Google Gemini, Study Notebooks y Gemini
          Omni: estudio activo, arquitectura, diseño, video, bienestar y
          empleabilidad.
        </p>

        <aside className="mt-8 rounded-2xl bg-[#dbeafe] p-5 font-sans text-sm leading-relaxed text-slate-800">
          <p className="font-heading text-base font-bold text-slate-900">
            Cuándo y dónde usarlos
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              <strong>Dónde:</strong> pégalos en{" "}
              <span className="font-medium">Google Gemini</span> (gemini.google.com
              o la app), en <span className="font-medium">Study Notebooks</span>{" "}
              cuando el prompt pida apuntes, o en{" "}
              <span className="font-medium">Gemini Omni</span> (modo video / Google
              AI Studio) si la ficha es de video.
            </li>
            <li>
              <strong>Cuándo:</strong> cada ficha lo indica. En general, úsalos
              para estudiar, diseñar, dirigir un clip en Omni, bajar carga
              mental, revisar código o preparar una postulación; no para
              entregar la salida como si fuera trabajo propio en un examen o
              tarea.
            </li>
            <li>
              Sustituye los campos entre corchetes, adjunta archivos si el
              prompt lo pide y revisa siempre el resultado.
            </li>
            <li>
              Los prompts de bienestar ayudan a organizar y regular la carga;
              <span className="font-medium"> no sustituyen terapia</span> ni
              atención de emergencia. Si estás en crisis, busca ayuda humana.
            </li>
          </ul>
        </aside>

        {PROMPT_CATEGORIES.map((category) => (
          <section key={category.title} className="mt-12">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900">
              {category.title}
            </h2>
            <p className="mt-2 font-sans text-base leading-relaxed text-slate-600">
              {category.intro}
            </p>
            <div className="mt-5 space-y-4">
              {category.prompts.map((prompt) => (
                <PromptCard
                  key={prompt.id}
                  prompt={prompt}
                  color={category.color}
                  onColor={category.onColor}
                  surface={category.surface}
                />
              ))}
            </div>
          </section>
        ))}

        <p className="mt-10 font-sans text-base leading-relaxed text-slate-600">
          La biblioteca se irá ampliando. Si un prompt te sirve en clase o en
          un proyecto, tráelo a mentoría y cuéntanos cómo lo adaptaste.
        </p>
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
