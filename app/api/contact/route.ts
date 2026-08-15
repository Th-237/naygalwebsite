import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, phone, organization, subject, detail, message } = data

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

    const mailSubject = `[NAYGAL] ${subject || 'Contact'}${detail ? ' - ' + detail : ''}`

    const textBody = [`Nom: ${name}`, `Email: ${email}`, `Téléphone: ${phone}`, `Organisation: ${organization}`, `Sujet: ${subject}`, `Précision: ${detail}`, '', 'Message:', message].join('\n')

    const htmlBody = `<p><strong>Nom:</strong> ${name || ''}</p>
      <p><strong>Email:</strong> ${email || ''}</p>
      <p><strong>Téléphone:</strong> ${phone || ''}</p>
      <p><strong>Organisation:</strong> ${organization || ''}</p>
      <p><strong>Sujet:</strong> ${subject || ''} ${detail ? ' - ' + detail : ''}</p>
      <hr />
      <p>${(message || '').replace(/\n/g, '<br/>')}</p>`

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
