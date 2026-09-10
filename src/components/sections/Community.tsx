import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Community() {
  return (
    <section id="comunidad" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl rounded-3xl border border-black/6 bg-white p-10 text-center shadow-sm md:p-16">
        <p className="font-sans text-sm font-medium tracking-widest text-google-green uppercase">
          Comunidad
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
          Fomentamos excelencia, aprendizaje autodidacta y ejecución técnica
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-slate-600 md:text-lg">
          Guugul es un espacio de formación entre pares: talleres, roadmaps y
          mentoría para pasar de la formación académica a herramientas que se
          usan en la industria, de software y datos a inteligencia artificial.
        </p>
        <p className="mx-auto mt-4 max-w-2xl font-sans text-slate-600">
          En Anuncios compartimos eventos en oficinas de Google, novedades de
          sus herramientas y accesos anticipados cuando se abren a comunidades
          estudiantiles. El capítulo surge en la UNAM, en el Programa Google
          Ambassadors, y está abierto a estudiantes de cualquier universidad,
          plantel o carrera.
        </p>
        <Link
          to="/unete"
          className={cn(buttonVariants({ size: "lg" }), "mt-8 rounded-full px-8")}
        >
          Únete a la comunidad
        </Link>
      </div>
    </section>
  )
}
