import { Link } from "react-router-dom"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LEARN_TRACKS } from "@/data/learn"

export function Features() {
  return (
    <section id="aprender" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-sans text-sm font-medium tracking-widest text-google-red uppercase">
          Aprender
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
          Formación que conecta el aula con el ecosistema tech
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-slate-600">
          Elige un camino: talleres, roadmaps, biblioteca de prompts o
          certificaciones oficiales de Google.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {LEARN_TRACKS.map((track) => (
            <Link key={track.slug} to={`/aprender/${track.slug}`}>
              <Card className="h-full border-black/6 bg-white shadow-none transition-colors hover:border-google-blue/35">
                <CardHeader>
                  <span
                    className={`mb-2 inline-flex size-10 items-center justify-center rounded-lg ${track.accent}`}
                  >
                    <track.icon className="size-5" />
                  </span>
                  <CardTitle className="font-heading text-xl">
                    {track.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {track.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
