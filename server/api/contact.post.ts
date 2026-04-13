export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { businessName, contactName, phone, email, message } = body

  if (!businessName || !contactName || !phone || !email) {
    throw createError({ statusCode: 400, statusMessage: 'Zorunlu alanlar eksik' })
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    throw createError({ statusCode: 500, statusMessage: 'Telegram yapılandırması eksik' })
  }

  const text = [
    '📩 <b>Yeni İletişim Formu</b>',
    '',
    `🏢 <b>İşletme:</b> ${escapeHtml(businessName)}`,
    `👤 <b>Yetkili:</b> ${escapeHtml(contactName)}`,
    `📞 <b>Telefon:</b> ${escapeHtml(phone)}`,
    `📧 <b>E-posta:</b> ${escapeHtml(email)}`,
    message ? `💬 <b>Mesaj:</b> ${escapeHtml(message)}` : '',
  ].filter(Boolean).join('\n')

  const response = await $fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    body: {
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
    },
  })

  return { success: true }
})

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
