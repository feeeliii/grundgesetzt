import express from 'express'
import db from '../database.js'

const router = express.Router()

// Vote abgeben
router.post('/vote', (req, res) => {
    const { optionId, visitorId } = req.body

    if (!optionId || optionId < 1 || optionId > 4) {
        return res.status(400).json({ error: 'Ungültige Option' })
    }

    if (!visitorId) {
        return res.status(400).json({ error: 'Keine Visitor ID' })
    }

    try {
        const stmt = db.prepare('INSERT INTO votes (optionId, visitorId) VALUES (?, ?)')
        stmt.run(optionId, visitorId)
        res.json({ success: true, message: 'Stimme gezählt!' })
    } catch (error) {
        if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            return res.status(400).json({ error: 'Du hast bereits abgestimmt' })
        }
        console.error('Vote error:', error)
        res.status(500).json({ error: 'Fehler beim Speichern' })
    }
})

// Ergebnisse abrufen
router.get('/results', (req, res) => {
    try {
        const votes = db.prepare(`
            SELECT optionId, COUNT(*) as votes 
            FROM votes 
            GROUP BY optionId
        `).all()

        const results = [1, 2, 3, 4].map(id => ({
            optionId: id,
            votes: votes.find(v => v.optionId === id)?.votes || 0
        }))

        const totalVotes = results.reduce((sum, r) => sum + r.votes, 0)

        res.json({ results, totalVotes })
    } catch (error) {
        console.error('Results error:', error)
        res.status(500).json({ error: 'Fehler beim Laden' })
    }
})

// Check if visitor already voted
router.get('/check/:visitorId', (req, res) => {
    try {
        const vote = db.prepare('SELECT * FROM votes WHERE visitorId = ?').get(req.params.visitorId)
        res.json({ hasVoted: !!vote })
    } catch (error) {
        console.error('Check error:', error)
        res.status(500).json({ error: 'Fehler beim Prüfen' })
    }
})

export default router
