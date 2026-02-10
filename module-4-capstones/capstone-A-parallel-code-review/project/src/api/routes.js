// API routes
const express = require("express");
const { authenticateToken } = require("../auth/jwt");
const { getDb } = require("../utils/db");
const fs = require("fs");

const router = express.Router();

// Public routes
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const db = getDb();

  // SQL injection vulnerable: string concatenation instead of parameterized query
  const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
  const user = db.prepare(query).get();

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const jwt = require("../auth/jwt");
  const token = jwt.generateToken(user);
  res.json({ token });
});

router.post("/register", (req, res) => {
  const { email, password, name, bio } = req.body;
  // No input length validation -- bio could be megabytes
  const db = getDb();

  const existing = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
  if (existing) return res.status(409).json({ error: "User exists" });

  const result = db
    .prepare("INSERT INTO users (email, password, name, bio) VALUES (?, ?, ?, ?)")
    .run(email, password, name, bio);

  res.status(201).json({ id: result.lastInsertRowid });
});

// Authenticated routes
router.get("/users", authenticateToken, (req, res) => {
  const db = getDb();
  const users = db.prepare("SELECT * FROM users").all();

  // N+1: fetches posts for each user in a loop
  const result = users.map((user) => {
    const posts = db
      .prepare("SELECT * FROM posts WHERE author_id = ?")
      .all(user.id);
    return { ...user, posts };
  });

  // No pagination -- returns all users
  res.json(result);
});

router.get("/users/:id", authenticateToken, (req, res) => {
  const db = getDb();
  const user = db.prepare("SELECT * FROM users WHERE id = ?").get(req.params.id);
  if (!user) return res.status(404).json({ error: "Not found" });
  res.json(user);
});

// Admin routes -- MISSING auth middleware
router.delete("/admin/users/:id", (req, res) => {
  const db = getDb();
  db.prepare("DELETE FROM users WHERE id = ?").run(req.params.id);
  res.status(204).send();
});

router.get("/admin/config", (req, res) => {
  // Synchronous file read in a request handler
  const config = fs.readFileSync("./config.json", "utf-8");
  // Error message exposes internal path
  try {
    res.json(JSON.parse(config));
  } catch (err) {
    res.status(500).json({ error: `Failed to parse ${__dirname}/config.json: ${err.message}` });
  }
});

module.exports = router;
