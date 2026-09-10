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
  <body style="margin:0;padding:0;background:#ffffff;font-family:'Google Sans',Arial,sans-serif;color:#202124;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#ffffff;">
      <tr>
        <td>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <td style="height:4px;background:#4285F4;width:25%;"></td>
              <td style="height:4px;background:#DB4437;width:25%;"></td>
              <td style="height:4px;background:#F4B400;width:25%;"></td>
              <td style="height:4px;background:#0F9D58;width:25%;"></td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:32px 24px 40px;">
          <p style="margin:0 0 8px;font-size:28px;font-weight:700;letter-spacing:-0.5px;">
            <span style="color:#4285F4;">G</span><span style="color:#DB4437;">u</span><span style="color:#F4B400;">u</span><span style="color:#4285F4;">g</span><span style="color:#0F9D58;">u</span><span style="color:#DB4437;">l</span>
          </p>
          <p style="margin:0 0 24px;color:#5f6368;font-size:14px;">
            Comunidad Oficial Estudiantil · Google Ambassadors
          </p>
          <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;">Hola ${safeName}, ya eres parte</h1>
          <p style="margin:0 0 12px;font-size:16px;line-height:1.6;color:#3c4043;">
            Gracias por unirte a Guugul. Te damos la bienvenida a la comunidad de avisos:
            talleres, roadmaps y convocatorias, sin ruido comercial.
          </p>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#3c4043;">
            Hecho por estudiantes, para estudiantes.
          </p>
          <p style="margin:0 0 28px;">
            <a href="${inviteUrl}" style="display:inline-block;background:#4285F4;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:999px;font-size:15px;font-weight:600;">
              Unirme a WhatsApp
            </a>
          </p>
          <p style="margin:0 0 8px;font-size:13px;line-height:1.5;color:#80868b;">
            Si el botón no funciona, copia este enlace:<br />
            <a href="${inviteUrl}" style="color:#4285F4;word-break:break-all;">${inviteUrl}</a>
          </p>
          <p style="margin:24px 0 0;font-size:12px;line-height:1.5;color:#80868b;">
            Guugul es una iniciativa estudiantil independiente. No somos una entidad oficial de Google LLC ni de la UNAM.
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
  const from = process.env.MAIL_FROM ?? "Guugul <comunidad@guugulunam.org>"
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
