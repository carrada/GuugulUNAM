import { Link, Navigate, useParams } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { ColorBar } from "@/components/layout/ColorBar"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { ProgramCard } from "@/components/learn/ProgramCard"
import { getLearnTrack } from "@/data/learn"
import { cn } from "@/lib/utils"

export default function LearnTrackPage() {
  const { slug } = useParams()
  const track = slug ? getLearnTrack(slug) : undefined

  if (!track) {
    return <Navigate to="/aprender" replace />
  }

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
          <div
            className={`flex size-12 items-center justify-center rounded-xl ${track.accent}`}
          >
            <track.icon className="size-6" aria-hidden="true" />
          </div>
        </div>
        <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
          {track.title}
        </h1>
        <p className="mt-4 font-sans text-lg leading-relaxed text-slate-600">
          {track.body}
        </p>
        <p className="mt-6 font-sans text-base leading-relaxed text-slate-600">
          {track.lead}
        </p>
        <ul className="mt-8 space-y-3 font-sans text-base leading-relaxed text-slate-600">
          {track.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-google-blue" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {track.sections?.map((section) => (
          <div key={section.title} className="mt-12">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900">
              {section.title}
            </h2>
            {section.intro ? (
              <p className="mt-2 font-sans text-base leading-relaxed text-slate-600">
                {section.intro}
              </p>
            ) : null}
            <div className="mt-5 space-y-4">
              {section.programs.map((program) => (
                <ProgramCard key={program.title} program={program} />
              ))}
            </div>
          </div>
        ))}
        <p className="mt-8 font-sans text-base leading-relaxed text-slate-600">
          {track.closing}
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
              "rounded-full px-6",
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
