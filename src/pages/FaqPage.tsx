import { Link } from "react-router-dom"
import { ColorBar } from "@/components/layout/ColorBar"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { FAQS } from "@/data/faqs"

export default function FaqPage() {
  return (
    <div className="relative min-h-svh bg-white">
      <div className="absolute inset-x-0 top-0 z-40">
        <ColorBar />
      </div>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-28 pb-20">
        <p className="font-sans text-sm font-medium tracking-widest text-google-blue uppercase">
          FAQ
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
          Preguntas frecuentes
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate-600 md:text-lg">
          Anuncios no es un club cerrado: si estudias en cualquier universidad,
          plantel o carrera de México, también puedes entrar.
        </p>
        <p className="mt-3 font-sans text-sm text-slate-500">
          ¿Listo para registrarte?{" "}
          <Link to="/unete" className="text-google-blue hover:underline">
            Únete aquí
          </Link>
          .
        </p>

        <div
          className="mt-12 space-y-3"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          {FAQS.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-black/6 bg-white px-5 py-4 open:border-google-blue/25"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <summary className="cursor-pointer list-none font-heading text-lg font-bold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span itemProp="name">{item.question}</span>
                  <span className="mt-1 shrink-0 text-google-blue group-open:hidden">
                    +
                  </span>
                  <span className="mt-1 hidden shrink-0 text-google-blue group-open:inline">
                    −
                  </span>
                </span>
              </summary>
              <p
                className="mt-3 font-sans text-base leading-relaxed text-slate-600"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">{item.answer}</span>
              </p>
            </details>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
