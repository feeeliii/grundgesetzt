import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import newsletterRoutes from './routes/newsletter.js'
import surveyRoutes from './routes/survey.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use('/api/newsletter', newsletterRoutes)
app.use('/api/survey', surveyRoutes)

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`)
})

const pollRoutes = require('./routes/poll')
app.use('/api/poll', pollRoutes)
