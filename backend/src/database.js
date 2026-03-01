import Database from 'better-sqlite3'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Poll-Datenbank
const pollDbPath = join(__dirname, '..', 'poll.db')
const pollDb = new Database(pollDbPath)

pollDb.exec(`
  CREATE TABLE IF NOT EXISTS votes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    optionId INTEGER NOT NULL,
    visitorId TEXT NOT NULL UNIQUE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`)

// Newsletter-Datenbank
const newsletterDbPath = join(__dirname, '..', 'newsletter.db')
const newsletterDb = new Database(newsletterDbPath)

newsletterDb.exec(`
  CREATE TABLE IF NOT EXISTS subscribers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`)

console.log('Datenbankverbindungen erfolgreich hergestellt.')

export { pollDb, newsletterDb }
