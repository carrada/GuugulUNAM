import { useEffect } from "react"
import { Link } from "react-router-dom"
import { JoinForm } from "@/components/join/JoinForm"
import { ColorBar } from "@/components/layout/ColorBar"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"

export default function JoinPage() {
  useEffect(() => {
    document.title = "Únete · GuugulUNAM"
  }, [])

  return (
    <div className="min-h-svh bg-white">
      <div className="fixed inset-x-0 top-0 z-50">
        <ColorBar />
      </div>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-28 pb-20">
        <p className="font-sans text-sm font-medium tracking-widest text-google-green uppercase">
          Únete
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
          Súmate a la comunidad
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate-600 md:text-lg">
          Al completar este registro te abrimos el enlace de invitación al
          canal de Anuncios en WhatsApp. En dicho canal se comunican eventos
          en las oficinas de Google, novedades relativas a nuevas
          herramientas de Google y convocatorias de acceso anticipado para
          probar dichas herramientas.
        </p>
        <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-slate-600 md:text-lg">
          La participación no está reservada a una facultad ni a una sola
          universidad. Estudiantes de cualquier institución, plantel o carrera
          de México pueden inscribirse en las mismas condiciones. Consulte las{" "}
          <Link to="/faq" className="text-google-blue hover:underline">
            preguntas frecuentes
          </Link>{" "}
          para mayor detalle.
        </p>
        <div className="mt-10">
          <JoinForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
