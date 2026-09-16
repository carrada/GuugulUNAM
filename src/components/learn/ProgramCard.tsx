import type { LearnProgram } from "@/data/learn"
import { cn } from "@/lib/utils"

export function ProgramCard({ program }: { program: LearnProgram }) {
  return (
    <article className="rounded-2xl border border-black/6 bg-white p-5">
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
        <p className="mt-2 font-sans text-sm text-slate-600">{program.when}</p>
      ) : null}
      {program.where ? (
        <p className="mt-1 font-sans text-sm text-slate-600">{program.where}</p>
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
          <span className="font-medium text-slate-900">Speaker: </span>
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
      {program.steps ? (
        <div className="mt-5 border-t border-black/6 pt-4">
          <p className="font-sans text-sm font-medium text-slate-900">
            {program.steps.heading ?? "Pasos para tu registro"}
          </p>
          {program.steps.intro ? (
            <p className="mt-2 font-sans text-sm leading-relaxed text-slate-600">
              {program.steps.intro}
            </p>
          ) : null}
          <ol className="mt-3 space-y-3">
            {program.steps.items.map((step, index) => (
              <li key={step.title} className="flex gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#e8f0fe] font-sans text-xs font-medium text-[#1967d2]">
                  {index + 1}
                </span>
                <div>
                  <p className="font-sans text-sm font-medium text-slate-900">
                    {step.title}
                  </p>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-slate-600">
                    {step.body}
                  </p>
                  {step.href ? (
                    <a
                      href={step.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block font-sans text-sm text-google-blue hover:underline"
                    >
                      {step.hrefLabel ?? step.href}
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
          {program.steps.warning ? (
            <p className="mt-4 font-sans text-sm leading-relaxed text-google-red">
              {program.steps.warning}
            </p>
          ) : null}
          {program.steps.closing ? (
            <p className="mt-3 font-sans text-sm leading-relaxed text-slate-600">
              {program.steps.closing}
            </p>
          ) : null}
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
  )
}
