import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const contactAttempts = new Map<string, { count: number; resetAt: number }>()
const validSubjects = new Set(['', 'services', 'projet', 'formation', 'partenariat', 'autre'])

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character]!)
}

function getString(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function isRateLimited(request: Request) {
  const address = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const now = Date.now()
  if (contactAttempts.size > 1_000) {
    for (const [key, value] of contactAttempts) {
      if (value.resetAt <= now) contactAttempts.delete(key)
    }
  }
  const attempt = contactAttempts.get(address)

  if (!attempt || attempt.resetAt <= now) {
    contactAttempts.set(address, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  if (attempt.count >= RATE_LIMIT_MAX_REQUESTS) return true

  attempt.count += 1
  return false
}

export async function POST(req: Request) {
  try {
    if (isRateLimited(req)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const data: unknown = await req.json()
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }

    const { name: rawName, email: rawEmail, phone: rawPhone, organization: rawOrganization, subject: rawSubject, detail: rawDetail, message: rawMessage } = data as Record<string, unknown>
    const name = getString(rawName, 120)
    const email = getString(rawEmail, 254)
    const phone = getString(rawPhone, 40)
    const organization = getString(rawOrganization, 160)
    const subject = getString(rawSubject, 40)
    const detail = getString(rawDetail, 160)
    const message = getString(rawMessage, 5_000)

    if (!name || !email || !message || !validSubjects.has(subject) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }

    const to = process.env.CONTACT_TO || 'naygalcameroun@gmail.com'

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json({ error: 'SMTP not configured' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailSubject = `[NAYGAL] ${subject || 'Contact'}${detail ? ` - ${detail}` : ''}`

    const textBody = [`Nom: ${name}`, `Email: ${email}`, `Téléphone: ${phone}`, `Organisation: ${organization}`, `Sujet: ${subject}`, `Précision: ${detail}`, '', 'Message:', message].join('\n')

    const htmlBody = `<p><strong>Nom:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Téléphone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Organisation:</strong> ${escapeHtml(organization)}</p>
      <p><strong>Sujet:</strong> ${escapeHtml(subject)}${detail ? ` - ${escapeHtml(detail)}` : ''}</p>
      <hr />
      <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>`

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject: mailSubject,
      text: textBody,
      html: htmlBody,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
