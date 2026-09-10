import "dotenv/config"
import path from "node:path"
import express, { type Request, type Response } from "express"
import { sendInviteEmail } from "./email.ts"
import { upsertMember } from "./members.ts"
import { validateJoin, type JoinPayload } from "./validate.ts"
import { sendWhatsAppInvite } from "./whatsapp.ts"

const app = express()
const port = Number(process.env.PORT ?? 8787)
const isProd = process.env.NODE_ENV === "production"

app.use(express.json({ limit: "32kb" }))

const hits = new Map<string, { count: number; resetAt: number }>()

function rateLimit(req: Request, res: Response, next: () => void) {
  const ip = req.ip ?? "unknown"
  const now = Date.now()
  const current = hits.get(ip)

  if (!current || now > current.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 })
    next()
    return
  }

  if (current.count >= 8) {
    res.status(429).json({ error: "Demasiados intentos. Prueba más tarde." })
    return
  }

  current.count += 1
  next()
}

app.post("/api/join", rateLimit, async (req: Request, res: Response) => {
  const parsed = validateJoin(req.body as JoinPayload)
  if (!parsed.ok) {
    res.status(400).json({ error: parsed.error })
    return
  }

  const inviteUrl =
    process.env.WHATSAPP_INVITE_URL?.trim() ||
    (!isProd ? "https://chat.whatsapp.com/" : "")
  if (!inviteUrl) {
    res.status(500).json({
      error:
        "Falta el enlace de la comunidad de WhatsApp. Configura WHATSAPP_INVITE_URL.",
    })
    return
  }

  const { name, email, phone, university, plantel, career, semester } = parsed.data

  try {
    const emailSent = await sendInviteEmail({ name, email, inviteUrl })
    const whatsappSent = await sendWhatsAppInvite({ phone, name, inviteUrl })

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

    res.json({
      ok: true,
      inviteUrl,
      emailSent,
      whatsappSent,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: "No pudimos completar el registro. Inténtalo de nuevo.",
    })
  }
})

if (isProd) {
  const dist = path.resolve(process.cwd(), "dist")
  app.use(express.static(dist))
  app.get(/.*/, (_req, res) => {
    res.sendFile(path.join(dist, "index.html"))
  })
}

app.listen(port, () => {
  console.info(`Guugul API lista en http://localhost:${port}`)
})
