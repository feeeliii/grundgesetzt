import express from 'express'

const router = express.Router()

router.post('/subscribe', async (req, res) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'E-Mail ist erforderlich.' })
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        email: email,
        includeListIds: [2],         
        templateId: 1,              
        redirectionUrl: 'https://grundgesetzt.de/danke'  
      })
    })

    if (response.ok) {
      return res.json({ success: true })
    }

    const data = await response.json()
    console.error('Brevo Error:', data)
    throw new Error(data.message || 'Fehler bei Brevo')

  } catch (err) {
    console.error('Newsletter Error:', err)
    res.status(500).json({ error: 'Konnte Anmeldung nicht verarbeiten.' })
  }
})

export default router
