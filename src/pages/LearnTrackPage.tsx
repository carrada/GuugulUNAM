import { useEffect } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { ColorBar } from "@/components/layout/ColorBar"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { getLearnTrack } from "@/data/learn"
import { cn } from "@/lib/utils"

export default function LearnTrackPage() {
  const { slug } = useParams()
  const track = slug ? getLearnTrack(slug) : undefined

  useEffect(() => {
    if (track) {
      document.title = `${track.title} · Aprender · GuugulUNAM`
    }
  }, [track])

  if (!track) {
    return <Navigate to="/aprender" replace />
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
                <article
                  key={program.title}
                  className="rounded-2xl border border-black/6 bg-white p-5"
                >
                  {program.org ? (
                    <p className="font-sans text-sm font-medium text-google-blue">
                      {program.org}
                    </p>
                  ) : null}
                  <h3
                    className={cn(
                      "font-heading text-lg font-bold text-slate-900",
                      program.org && "mt-1",
                    )}
                  >
                    {program.title}
                  </h3>
                  {program.when ? (
                    <p className="mt-2 font-sans text-sm text-slate-600">
                      {program.when}
                    </p>
                  ) : null}
                  {program.where ? (
                    <p className="mt-1 font-sans text-sm text-slate-600">
                      {program.where}
                    </p>
                  ) : null}
                  {program.themes?.length ? (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {program.themes.map((theme) => (
                        <li
                          key={theme}
                          className="rounded-full bg-[#e8f0fe] px-2.5 py-1 font-sans text-xs font-medium text-[#1967d2]"
                        >
                          {theme}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <p className="mt-3 font-sans text-base leading-relaxed text-slate-600">
                    {program.description}
                  </p>
                  {program.activities?.length ? (
                    <div className="mt-4">
                      <p className="font-sans text-sm font-medium text-slate-900">
                        Actividades clave
                      </p>
                      <ul className="mt-2 space-y-2 font-sans text-sm leading-relaxed text-slate-600">
                        {program.activities.map((activity) => (
                          <li key={activity} className="flex gap-2">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-google-blue" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {program.takeaways?.length ? (
                    <div className="mt-4">
                      <p className="font-sans text-sm font-medium text-slate-900">
                        Qué aprenderemos
                      </p>
                      <ul className="mt-2 space-y-2 font-sans text-sm leading-relaxed text-slate-600">
                        {program.takeaways.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-google-green" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {program.speaker ? (
                    <p className="mt-4 font-sans text-sm text-slate-700">
                      <span className="font-medium text-slate-900">
                        Speaker:{" "}
                      </span>
                      {program.speaker.name}, {program.speaker.role}
                    </p>
                  ) : null}
                  {program.organizers?.length ? (
                    <div className="mt-3">
                      <p className="font-sans text-sm font-medium text-slate-900">
                        Organización
                      </p>
                      <ul className="mt-1 space-y-1 font-sans text-sm text-slate-600">
                        {program.organizers.map((organizer) => (
                          <li key={organizer.name}>
                            {organizer.name}
                            {organizer.role ? ` · ${organizer.role}` : ""}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <a
                    href={program.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex h-10 items-center rounded-full bg-google-blue px-4 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    {program.cta ?? "Ir al curso oficial"}
                  </a>
                </article>
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
