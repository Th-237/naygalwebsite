const nodemailer = require('nodemailer')

async function main() {
  console.log('Creating Ethereal test account...')
  const testAccount = await nodemailer.createTestAccount()
  console.log('Ethereal credentials:', { user: testAccount.user, pass: testAccount.pass })

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  })

  const info = await transporter.sendMail({
    from: `"NAYGAL Test" <${testAccount.user}>`,
    to: 'naygalcameroun@gmail.com',
    subject: 'NAYGAL — Test email (Ethereal)',
    text: 'Ceci est un test d\'envoi SMTP via Ethereal.',
    html: '<p>Ceci est un test d\'envoi SMTP via Ethereal.</p>',
  })

  console.log('Message sent: %s', info.messageId)
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
}

main().catch(err => {
  console.error('Test send failed:', err)
  process.exit(1)
})
