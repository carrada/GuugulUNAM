import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { ColorBar } from "@/components/layout/ColorBar"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { ProgramCard } from "@/components/learn/ProgramCard"
import { EVENTS } from "@/data/events"
import { cn } from "@/lib/utils"

export default function EventosPage() {
  return (
    <div className="relative min-h-svh bg-white">
      <div className="absolute inset-x-0 top-0 z-40">
        <ColorBar />
      </div>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-28 pb-20">
        <p className="font-sans text-sm font-medium tracking-widest text-google-yellow uppercase">
          Eventos
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
          Encuentros para la comunidad
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate-600 md:text-lg">
          Aquí publicamos convocatorias y eventos que vale la pena conocer.
        </p>
        <div className="mt-10 space-y-4">
          {EVENTS.map((event) => (
            <ProgramCard key={event.title} program={event} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/unete"
            className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6")}
          >
            Únete a la comunidad
          </Link>
          <Link
            to="/aprender/talleres"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-6",
            )}
          >
            Ver talleres
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
