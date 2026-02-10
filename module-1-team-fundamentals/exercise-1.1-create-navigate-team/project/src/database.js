// Database connection and queries
const sqlite3 = require("better-sqlite3");

let db;

function connect(dbPath = ":memory:") {
  db = new sqlite3(dbPath);
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      email TEXT UNIQUE,
      password TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      user_id INTEGER,
      expires_at TEXT
    );
  `);
  return db;
}

function findUserByEmail(email) {
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email);
}

function createUser(email, password) {
  const result = db
    .prepare("INSERT INTO users (email, password) VALUES (?, ?)")
    .run(email, password);
  return { id: result.lastInsertRowid, email };
}

function getAllUsers() {
  return db.prepare("SELECT * FROM users").all();
}

function deleteUser(id) {
  db.prepare("DELETE FROM users WHERE id = ?").run(id);
}

function createSession(sessionId, userId, expiresAt) {
  db.prepare(
    "INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)"
  ).run(sessionId, userId, expiresAt);
}

function getSession(sessionId) {
  return db.prepare("SELECT * FROM sessions WHERE id = ?").get(sessionId);
}

module.exports = {
  connect,
  findUserByEmail,
  createUser,
  getAllUsers,
  deleteUser,
  createSession,
  getSession,
};
