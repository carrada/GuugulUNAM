import { Link } from "react-router-dom"
import { ColorBar } from "@/components/layout/ColorBar"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { LEARN_TRACKS } from "@/data/learn"

export default function LearnPage() {
  return (
    <div className="relative min-h-svh bg-white">
      <div className="absolute inset-x-0 top-0 z-40">
        <ColorBar />
      </div>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 pt-28 pb-20">
        <p className="font-sans text-sm font-medium tracking-widest text-google-red uppercase">
          Aprender
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
          Elige por dónde empezar
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate-600 md:text-lg">
          Cuatro caminos de formación. Entra al que te sirva ahora; puedes
          volver y tomar otro cuando quieras.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {LEARN_TRACKS.map((track) => (
            <Link
              key={track.slug}
              to={`/aprender/${track.slug}`}
              className="group flex flex-col rounded-3xl border border-black/6 bg-white p-6 text-left shadow-sm transition-colors hover:border-google-blue/35 hover:bg-slate-50"
            >
              <span
                className={`inline-flex size-11 items-center justify-center rounded-xl ${track.accent}`}
              >
                <track.icon className="size-5" />
              </span>
              <h2 className="mt-5 font-heading text-2xl font-bold tracking-tight text-slate-900">
                {track.title}
              </h2>
              <p className="mt-2 flex-1 font-sans text-base leading-relaxed text-slate-600">
                {track.body}
              </p>
              <span className="mt-6 font-sans text-sm font-medium text-google-blue group-hover:underline">
                Ir a {track.title}
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
