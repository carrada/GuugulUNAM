import { sendInviteEmail } from "./email.js"
import { upsertMember } from "./members.js"
import { validateJoin, type JoinPayload } from "./validate.js"
import { sendWhatsAppInvite } from "./whatsapp.js"

const hits = new Map<string, { count: number; resetAt: number }>()

export type JoinResult = {
  status: number
  json: Record<string, unknown>
}

function rateLimited(ip: string) {
  const now = Date.now()
  const current = hits.get(ip)

  if (!current || now > current.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 })
    return false
  }

  if (current.count >= 8) return true
  current.count += 1
  return false
}

export async function handleJoin(body: unknown, ip = "unknown"): Promise<JoinResult> {
  if (rateLimited(ip)) {
    return { status: 429, json: { error: "Demasiados intentos. Prueba más tarde." } }
  }

  const parsed = validateJoin(body as JoinPayload)
  if (!parsed.ok) {
    return { status: 400, json: { error: parsed.error } }
  }

  const inviteUrl =
    process.env.WHATSAPP_INVITE_URL?.trim() ||
    "https://chat.whatsapp.com/JCmxTdOuSqJAhrSGOt6pG5"

  const { name, email, phone, university, plantel, career, semester } = parsed.data

  try {
    const emailSent = await sendInviteEmail({ name, email, inviteUrl })
    const whatsappSent = await sendWhatsAppInvite({ phone, name, inviteUrl })

    try {
      await upsertMember({
        name,
        email,
        phone,
        university,
        plantel,
        career,
        semester,
        emailSent,
        whatsappSent,
      })
    } catch (error) {
      console.error("No se pudo persistir el registro:", error)
    }

    return {
      status: 200,
      json: {
        ok: true,
        inviteUrl,
        emailSent,
        whatsappSent,
      },
    }
  } catch (error) {
    console.error(error)
    return {
      status: 500,
      json: { error: "No pudimos completar el registro. Inténtalo de nuevo." },
    }
  }
}
