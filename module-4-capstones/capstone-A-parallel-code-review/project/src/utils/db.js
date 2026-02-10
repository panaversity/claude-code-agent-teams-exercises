// Database utility -- no connection pooling
const Database = require("better-sqlite3");

let db;

function getDb() {
  // Creates a new connection every call -- no pooling
  if (!db) {
    db = new Database(":memory:");
    db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        name TEXT,
        bio TEXT,
        role TEXT DEFAULT 'user',
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        author_id INTEGER NOT NULL,
        title TEXT NOT NULL,
        content TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (author_id) REFERENCES users(id)
      );
    `);
  }
  return db;
}

// No config caching -- reads file every time
function getConfig() {
  const fs = require("fs");
  try {
    return JSON.parse(fs.readFileSync("./config.json", "utf-8"));
  } catch {
    return {};
  }
}

module.exports = { getDb, getConfig };
