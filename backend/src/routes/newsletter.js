import express from 'express'
import { newsletterDb } from '../database.js'

const router = express.Router()

router.post('/subscribe', (req, res) => {
    const { email } = req.body

    if (!email) {
        return res.status(400).json({ error: 'E-Mail ist erforderlich.' })
    }

    try {
        newsletterDb.prepare('INSERT INTO subscribers (email) VALUES (?)').run(email)
        res.json({ success: true })
    } catch (err) {
        if (err.message.includes('UNIQUE')) {
            return res.json({ success: true })
        }
        res.status(500).json({ error: 'Serverfehler.' })
    }
})

export default router
