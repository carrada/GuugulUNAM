import { useEffect, type ReactNode } from "react"
import { ColorBar } from "@/components/layout/ColorBar"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"

type LegalLayoutProps = {
  title: string
  updated: string
  children: ReactNode
}

export function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  useEffect(() => {
    document.title = `${title} · GuugulUNAM`
  }, [title])

  return (
    <div className="min-h-svh bg-white">
      <div className="fixed inset-x-0 top-0 z-50">
        <ColorBar />
      </div>
      <Navbar />
      <article className="mx-auto max-w-3xl px-6 pt-28 pb-20">
        <p className="font-sans text-sm font-medium tracking-widest text-google-blue uppercase">
          Información legal
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 font-sans text-sm text-slate-500">
          Última actualización: {updated}
        </p>
        <div className="mt-10 space-y-10 font-sans text-base leading-relaxed text-slate-700 [&_h2]:mt-2 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_p]:mt-3">
          {children}
        </div>
      </article>
      <Footer />
    </div>
  )
}
