import BounceCards from "@/components/ui/bounce-cards"

const COMMUNITY_PHOTOS = [
  "/GoogleFotos/Googleentrada.jpeg",
  "/GoogleFotos/4so.jpeg",
  "/GoogleFotos/WhatsApp Image 2026-08-29 at 1.53.55 PM.jpeg",
  "/GoogleFotos/WhatsApp Image 2026-08-29 at 3.45.43 PM.jpeg",
  "/GoogleFotos/WhatsApp Image 2026-08-29 at 3.45.43 PM (1).jpeg",
].map((path) => encodeURI(path))

const PHOTO_ALTS = [
  "Letrero de Google en el edificio",
  "Taller técnico de la comunidad",
  "Espacio Google for Education",
  "Estudiante frente al logo de Google",
  "Letras de Google en las oficinas",
]

export function About() {
  return (
    <section id="nosotros" className="overflow-x-clip bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-sans text-sm font-medium tracking-widest text-google-blue uppercase">
            Quiénes somos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Un ecosistema, no solo una comunidad
          </h2>
          <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-slate-600 md:text-lg">
            <p>
              GuugulUNAM es la Comunidad Oficial Estudiantil del Programa Google
              Ambassadors: una iniciativa de alto impacto pensada para cerrar la
              brecha entre la formación académica teórica y las exigencias
              técnicas del mercado laboral global.
            </p>
            <p>
              No somos solo una comunidad; somos un ecosistema de desarrollo
              profesional diseñado para estudiantes que buscan dominar
              herramientas de vanguardia, desde el desarrollo de software y la
              ciencia de datos hasta la integración de Inteligencia Artificial
              en flujos de trabajo profesionales.
            </p>
            <p>
              A través de talleres prácticos, roadmaps técnicos y mentoría entre
              pares, conectamos el talento estudiantil con el ecosistema
              tecnológico, fomentando una cultura de excelencia, aprendizaje
              autodidacta y ejecución técnica.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="w-full max-w-[500px]">
            <BounceCards
              images={COMMUNITY_PHOTOS}
              alts={PHOTO_ALTS}
              animationDelay={0.4}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              enableHover
            />
          </div>
          <p className="mt-4 max-w-xs text-center font-sans text-sm text-slate-500">
            Comunidad Oficial de Estudiantes · Google Ambassadors
          </p>
        </div>
      </div>
    </section>
  )
}
