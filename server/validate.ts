export type JoinPayload = {
  name: string
  email: string
  phone: string
  university?: string
  plantel?: string
  career?: string
  semester?: string
  consent: boolean
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function normalizeMxPhone(input: string) {
  const digits = input.replace(/\D/g, "")
  if (digits.length === 10) return `52${digits}`
  if (digits.length === 12 && digits.startsWith("52")) return digits
  if (digits.length === 13 && digits.startsWith("521")) return digits
  return null
}

function bound(value: string, max: number) {
  return value.trim().slice(0, max)
}

export function validateJoin(body: JoinPayload) {
  const name = body.name.trim()
  const email = body.email.trim().toLowerCase()
  const university = bound(body.university ?? "", 140)
  const plantel = bound(body.plantel ?? "", 140)
  const career = bound(body.career ?? "", 120)
  const semester = bound(body.semester ?? "", 40)
  const phone = normalizeMxPhone(body.phone)

  if (name.length < 2 || name.length > 80) {
    return { ok: false as const, error: "Escribe tu nombre completo." }
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false as const, error: "El correo no es válido." }
  }
  if (!phone) {
    return {
      ok: false as const,
      error: "El teléfono debe tener 10 dígitos de México.",
    }
  }
  if (university.length < 2) {
    return { ok: false as const, error: "Indica tu universidad. Si no está en la lista, escríbela." }
  }
  if (plantel.length < 2) {
    return { ok: false as const, error: "Indica tu plantel o campus." }
  }
  if (career.length < 2) {
    return { ok: false as const, error: "Escribe tu carrera." }
  }
  if (!body.consent) {
    return {
      ok: false as const,
      error: "Necesitamos tu consentimiento para enviarte la invitación.",
    }
  }

  return {
    ok: true as const,
    data: { name, email, phone, university, plantel, career, semester },
  }
}
