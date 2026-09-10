import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SuggestInput, fieldClass } from "@/components/join/SuggestInput"
import { PLANTELES, UNIVERSITIES } from "@/data/schools"
import { cn } from "@/lib/utils"

const WHATSAPP_INVITE_URL = "https://chat.whatsapp.com/JCmxTdOuSqJAhrSGOt6pG5"

const SEMESTERS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11+",
  "CCH / ENP / prepa",
  "Posgrado",
  "Egresade",
  "Docente",
  "Otro",
]

type JoinResponse = {
  ok?: boolean
  error?: string
  inviteUrl?: string
}

export function JoinForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [university, setUniversity] = useState("")
  const [plantel, setPlantel] = useState("")
  const [career, setCareer] = useState("")
  const [semester, setSemester] = useState("")
  const [consent, setConsent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [inviteUrl, setInviteUrl] = useState<string | null>(null)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    if (!consent) {
      setError("Marca la casilla para recibir la invitación por correo y WhatsApp.")
      return
    }

    setSubmitting(true)
    const inviteTab = window.open("about:blank", "_blank")
    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          university,
          plantel,
          career,
          semester,
          consent,
        }),
      })
      const data = (await response.json()) as JoinResponse
      if (!response.ok || !data.ok) {
        inviteTab?.close()
        setError(data.error ?? "No pudimos completar el registro.")
        return
      }
      const url =
        data.inviteUrl && data.inviteUrl !== "https://chat.whatsapp.com/"
          ? data.inviteUrl
          : WHATSAPP_INVITE_URL
      setInviteUrl(url)
      if (inviteTab) {
        inviteTab.location.href = url
      } else {
        window.location.assign(url)
      }
    } catch {
      inviteTab?.close()
      setError(
        "No pudimos conectar con el servidor. Si estás en local, corre npm run dev para levantar la API.",
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (inviteUrl !== null) {
    return (
      <div className="rounded-3xl border border-black/6 bg-white px-6 py-10 text-center shadow-sm md:px-10">
        <p className="font-sans text-sm font-medium tracking-widest text-google-green uppercase">
          Listo
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900">
          Ya casi estás dentro
        </h2>
        <p className="mx-auto mt-4 max-w-md font-sans text-slate-600">
          Te abrimos el grupo de WhatsApp. Si no se abrió, entra con el botón.
          También te llega el mismo enlace por correo.
        </p>
        <a
          href={inviteUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-google-blue px-6 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Unirme a WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-black/6 bg-white p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Tu nombre"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Correo</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="tu@correo.com"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">WhatsApp</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="numeric"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="55 1234 5678"
            className={fieldClass}
          />
          <p className="font-sans text-xs text-slate-500">
            10 dígitos de México. Ahí te llega la invitación a Anuncios.
          </p>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="university">Universidad</Label>
          <SuggestInput
            id="university"
            name="university"
            value={university}
            onChange={setUniversity}
            placeholder="Elige o escribe tu universidad"
            options={UNIVERSITIES}
            required
          />
          <p className="font-sans text-xs text-slate-500">
            Hay una lista larga de universidades de México. Si no está la tuya,
            escríbela.
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="plantel">Plantel</Label>
          <SuggestInput
            id="plantel"
            name="plantel"
            value={plantel}
            onChange={setPlantel}
            placeholder="CU, FES, campus, TecNM…"
            options={PLANTELES}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="career">Carrera</Label>
          <Input
            id="career"
            name="career"
            required
            value={career}
            onChange={(event) => setCareer(event.target.value)}
            placeholder="Ciencias de la Computación, Actuaría…"
            className={fieldClass}
          />
          <p className="font-sans text-xs text-slate-500">
            Escríbela como la cursas; no hay catálogo cerrado.
          </p>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="semester">Semestre</Label>
          <select
            id="semester"
            name="semester"
            value={semester}
            onChange={(event) => setSemester(event.target.value)}
            className={cn(fieldClass, "bg-white")}
          >
            <option value="">Opcional</option>
            {SEMESTERS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <label className="mt-6 flex items-start gap-3 font-sans text-sm leading-relaxed text-slate-600">
        <Checkbox
          id="consent"
          checked={consent}
          onCheckedChange={(checked) => setConsent(checked === true)}
          className="mt-0.5"
        />
        <span>
          Acepto recibir la invitación por correo y WhatsApp, y los{" "}
          <Link to="/terminos-y-condiciones" className="text-google-blue hover:underline">
            términos
          </Link>{" "}
          y el{" "}
          <Link to="/aviso-legal" className="text-google-blue hover:underline">
            aviso legal
          </Link>
          .
        </span>
      </label>

      {error ? (
        <p className="mt-4 font-sans text-sm text-google-red" role="alert">
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={submitting}
        className="mt-6 h-11 w-full rounded-full px-6 text-sm sm:w-auto"
      >
        {submitting ? "Enviando…" : "Quiero unirme"}
      </Button>
    </form>
  )
}
