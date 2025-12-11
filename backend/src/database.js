import Database from 'better-sqlite3'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Datenbank im backend-Ordner (nicht in src/)
const dbPath = join(__dirname, '..', 'poll.db')
const db = new Database(dbPath)

// Tabelle erstellen falls nicht vorhanden
db.exec(`
  CREATE TABLE IF NOT EXISTS votes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    optionId INTEGER NOT NULL,
    visitorId TEXT NOT NULL UNIQUE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`)

console.log('Datenbankverbindung erfolgreich hergestellt.')

export default db
