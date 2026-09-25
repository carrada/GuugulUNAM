import nodemailer from "nodemailer"

type InviteEmail = {
  name: string
  email: string
  inviteUrl: string
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function buildInviteEmail({ name, inviteUrl }: InviteEmail) {
  const safeName = escapeHtml(name)
  const fromName = process.env.MAIL_FROM_NAME ?? "Guugul"

  return {
    subject: "Te invitamos a la comunidad de avisos de Guugul",
    text: [
      `Hola ${name},`,
      "",
      "Gracias por unirte a Guugul, la Comunidad Oficial Estudiantil del Programa Google Ambassadors.",
      "",
      "Para entrar al canal de avisos en WhatsApp, abre este enlace:",
      inviteUrl,
      "",
      "Hecho por estudiantes, para estudiantes.",
      "",
      fromName,
    ].join("\n"),
    html: `<!doctype html>
<html lang="es">
  <body style="margin:0;padding:0;background:#ffffff;font-family:'Plus Jakarta Sans',Arial,sans-serif;color:#0f172a;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#ffffff;">
      <tr>
        <td>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <td style="height:4px;background:#2563eb;width:25%;"></td>
              <td style="height:4px;background:#ff3131;width:25%;"></td>
              <td style="height:4px;background:#fabd09;width:25%;"></td>
              <td style="height:4px;background:#00ab4b;width:25%;"></td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:32px 24px 40px;">
          <p style="margin:0 0 8px;font-size:28px;font-weight:700;letter-spacing:-0.5px;">
            <span style="color:#2563eb;">G</span><span style="color:#ff3131;">u</span><span style="color:#fabd09;">u</span><span style="color:#2563eb;">g</span><span style="color:#00ab4b;">u</span><span style="color:#ff3131;">l</span>
          </p>
          <p style="margin:0 0 24px;color:#64748b;font-size:14px;">
            Comunidad Oficial Estudiantil · Google Ambassadors
          </p>
          <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;">Hola ${safeName}, ya eres parte</h1>
          <p style="margin:0 0 12px;font-size:16px;line-height:1.6;color:#334155;">
            Gracias por unirte a Guugul. Te damos la bienvenida a la comunidad de avisos:
            talleres, roadmaps y convocatorias, sin ruido comercial.
          </p>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#334155;">
            Hecho por estudiantes, para estudiantes.
          </p>
          <p style="margin:0 0 28px;">
            <a href="${inviteUrl}" style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:999px;font-size:15px;font-weight:600;">
              Unirme a WhatsApp
            </a>
          </p>
          <p style="margin:0 0 8px;font-size:13px;line-height:1.5;color:#94a3b8;">
            Si el botón no funciona, copia este enlace:<br />
            <a href="${inviteUrl}" style="color:#2563eb;word-break:break-all;">${inviteUrl}</a>
          </p>
          <p style="margin:24px 0 0;font-size:12px;line-height:1.5;color:#94a3b8;">
            Guugul es una iniciativa estudiantil independiente. No somos Google ni una entidad oficial de Google LLC ni de la UNAM.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`,
  }
}

export async function sendInviteEmail(payload: InviteEmail) {
  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const from = process.env.MAIL_FROM ?? "Guugul <comunidad@guugul.org>"
  const invite = buildInviteEmail(payload)

  if (!host || !user || !pass) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("Falta configurar SMTP para enviar correos")
    }
    console.info("[dev] Correo de invitación (SMTP no configurado)")
    console.info(`Para: ${payload.email}`)
    console.info(`Asunto: ${invite.subject}`)
    console.info(invite.text)
    return false
  }

  const port = Number(process.env.SMTP_PORT ?? 465)
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE !== "false" && port === 465,
    auth: { user, pass },
  })

  await transporter.sendMail({
    from,
    to: payload.email,
    replyTo: process.env.MAIL_REPLY_TO || undefined,
    subject: invite.subject,
    text: invite.text,
    html: invite.html,
  })

  return true
}
