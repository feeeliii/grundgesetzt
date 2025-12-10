import express from 'express'

const router = express.Router()

router.post('/subscribe', async (req, res) => {
  const { email } = req.body

  // TODO: Keila API Integration
  console.log('Newsletter signup:', email)

  res.json({ success: true, message: 'Anmeldung erfolgreich!' })
})

export default router
