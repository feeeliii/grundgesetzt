import express from 'express'

const router = express.Router()

router.post('/subscribe', async (req, res) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'E-Mail ist erforderlich.' })
  }

  try {
    // Anfrage an Brevo API senden
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        email: email,
        listIds: [2], 
        updateEnabled: false
      })
    })

    const data = await response.json()

    // Brevo gibt Fehler zurück, wenn User schon existiert
    if (!response.ok) {
      // Code "duplicate_parameter" heißt: User ist schon drin. Das werten wir als Erfolg.
      if (data.code === 'duplicate_parameter') {
        return res.json({ success: true, message: 'Bereits angemeldet' })
      }
      console.error('Brevo Error:', data)
      throw new Error(data.message || 'Fehler bei Brevo')
    }

    res.json({ success: true })

  } catch (err) {
    console.error('Newsletter Error:', err)
    res.status(500).json({ error: 'Konnte Anmeldung nicht verarbeiten.' })
  }
})

export default router
