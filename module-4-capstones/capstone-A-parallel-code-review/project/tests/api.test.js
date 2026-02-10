// API tests -- several quality issues
const { getDb } = require("../src/utils/db");
const { generateToken } = require("../src/auth/jwt");

// Shared mutable state -- tests depend on each other
let testUser;
let testToken;

function setup() {
  const db = getDb();
  // Test fixture with plaintext password
  const result = db
    .prepare("INSERT INTO users (email, password, name, role) VALUES (?, ?, ?, ?)")
    .run("test@test.com", "password123", "Test User", "admin");
  testUser = { id: result.lastInsertRowid, email: "test@test.com", role: "admin" };
  testToken = generateToken(testUser);
}

function testCreateUser() {
  const db = getDb();
  const result = db
    .prepare("INSERT INTO users (email, password, name) VALUES (?, ?, ?)")
    .run("new@test.com", "pass", "New User");
  console.assert(result.lastInsertRowid > 0, "Should create user");
  console.log("PASS: testCreateUser");
}

function testGetUser() {
  // Depends on testCreateUser having run first (fragile ordering)
  const db = getDb();
  const user = db.prepare("SELECT * FROM users WHERE email = ?").get("new@test.com");
  console.assert(user !== undefined, "Should find user");
  console.assert(user.name === "New User", "Name should match");
  console.log("PASS: testGetUser");
}

function testGenerateToken() {
  const token = generateToken({ id: 1, email: "a@b.com", role: "user" });
  console.assert(typeof token === "string", "Token should be string");
  console.assert(token.split(".").length === 3, "JWT should have 3 parts");
  console.log("PASS: testGenerateToken");
}

// MISSING: No tests for error paths (invalid login, expired token, etc.)
// MISSING: No tests for auth middleware
// MISSING: No boundary tests for pagination
// MISSING: No tests for admin routes access control

// Run -- order matters because of shared state
setup();
testCreateUser();
testGetUser();
testGenerateToken();
console.log("--- All tests passed ---");
