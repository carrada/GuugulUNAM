type WhatsAppInvite = {
  phone: string
  name: string
  inviteUrl: string
}

export async function sendWhatsAppInvite({
  phone,
  name,
  inviteUrl,
}: WhatsAppInvite) {
  const token = process.env.WHATSAPP_TOKEN
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME

  if (!token || !phoneNumberId) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[dev] WhatsApp no configurado. Invitación pendiente de API:")
      console.info(`Para: ${phone} · ${inviteUrl}`)
    }
    return false
  }

  const url = `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`
  const language = process.env.WHATSAPP_TEMPLATE_LANG ?? "es"

  const body = templateName
    ? {
        messaging_product: "whatsapp",
        to: phone,
        type: "template",
        template: {
          name: templateName,
          language: { code: language },
          components: [
            {
              type: "body",
              parameters: [{ type: "text", text: name }],
            },
          ],
        },
      }
    : {
        messaging_product: "whatsapp",
        to: phone,
        type: "text",
        text: {
          preview_url: true,
          body: `Hola ${name}, te invitamos a la comunidad de avisos de Guugul. Entra aquí: ${inviteUrl}`,
        },
      }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const detail = await response.text()
    console.error("WhatsApp API error:", response.status, detail)
    return false
  }

  return true
}
