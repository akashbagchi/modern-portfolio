import { Resend } from 'resend'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export default defineEventHandler(async (event) => {
  const { resendApiKey } = useRuntimeConfig()
  const resend = new Resend(resendApiKey)

  try {
    const body = await readBody<ContactFormData>(event)

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      throw createError({
        statusCode: 400,
        message: 'Missing required fields',
      })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        message: 'Invalid email address',
      })
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['akashbagchi2710@gmail.com'],
      replyTo: body.email,
      subject: `Portfolio Contact: ${body.subject}`,
      html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${body.name}</p>
                <p><strong>Email:</strong> ${body.email}</p>
                <p><strong>Subject:</strong> ${body.subject}</p>
                <p><strong>Message:</strong></p>
                <p>${body.message.replace(/\n/g, '<br>')}</p>
            `,
    })

    if (error) {
      console.error('Resend API error:', JSON.stringify(error))
      throw createError({
        statusCode: 500,
        message: 'Failed to send email',
      })
    }

    return {
      success: true,
      messageId: data?.id,
    }
  }
  catch (error) {
    console.error('Contact form error:', error)
    throw error
  }
})
