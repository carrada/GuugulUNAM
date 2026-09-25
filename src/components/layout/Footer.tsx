import { Link } from "react-router-dom"
import { Wordmark } from "@/components/brand/Wordmark"
import { ColorBar } from "@/components/layout/ColorBar"

export function Footer() {
  return (
    <footer className="border-t border-black/6 bg-white">
      <ColorBar />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-start md:justify-between">
        <div>
          <Wordmark className="text-3xl font-bold" />
          <p className="mt-3 max-w-sm font-sans text-sm text-slate-600">
            Comunidad Oficial Estudiantil del Programa Google Ambassadors.
            Abierta a estudiantes de cualquier universidad o plantel.
          </p>
          <address className="mt-4 max-w-sm font-sans text-xs not-italic text-slate-500">
            Facultad de Ciencias, UNAM
            <br />
            Ciudad Universitaria, Coyoacán
            <br />
            04510 Ciudad de México, México
          </address>
          <p className="mt-4 font-sans text-xs text-slate-500">
            Hecho por estudiantes, para estudiantes.
          </p>
        </div>
        <div className="flex flex-col gap-2 font-sans text-sm text-slate-600">
          <p className="font-medium text-slate-900">Comunidad</p>
          <Link to="/eventos" className="hover:text-google-blue">
            Eventos
          </Link>
          <Link to="/aprender" className="hover:text-google-blue">
            Aprender
          </Link>
          <Link to="/unete" className="hover:text-google-blue">
            Únete
          </Link>
          <Link to="/faq" className="hover:text-google-blue">
            Preguntas frecuentes
          </Link>
        </div>
        <div className="flex flex-col gap-2 font-sans text-sm text-slate-600">
          <p className="font-medium text-slate-900">Legal</p>
          <Link to="/aviso-legal" className="hover:text-google-blue">
            Aviso legal
          </Link>
          <Link to="/terminos-y-condiciones" className="hover:text-google-blue">
            Términos y condiciones
          </Link>
        </div>
      </div>
      <div className="border-t border-black/6 px-6 py-6">
        <a
          href="https://www.chiiko.design"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex w-fit flex-col items-center gap-1.5 text-center opacity-80 transition-opacity hover:opacity-100"
        >
          <p className="font-sans text-[11px] tracking-[0.04em] text-slate-500">
            Web hecha y diseñada por
          </p>
          <img
            src="/chiikologosvg.svg"
            alt="Chiikö"
            className="h-7 w-auto object-contain object-top md:h-8"
          />
        </a>
      </div>
      <div className="border-t border-black/6 px-6 py-5">
        <p className="mx-auto max-w-3xl text-center font-sans text-xs leading-relaxed text-slate-500">
          Este es un sitio independiente desarrollado por embajadores del
          programa y no representa un canal oficial de Google.
        </p>
      </div>
    </footer>
  )
}
