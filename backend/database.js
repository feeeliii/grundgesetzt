const Database = require('better-sqlite3')
const db = new Database('poll.db')

db.exec(`
    CREATE TABLE IF NOT EXISTS votes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        optionId INTEGER NOT NULL,
        visitorId TEXT NOT NULL UNIQUE,
        votedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`)

module.exports = db
