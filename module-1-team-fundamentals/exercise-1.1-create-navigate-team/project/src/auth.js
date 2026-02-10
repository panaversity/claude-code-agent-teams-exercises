// Authentication module
const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "dev-secret-change-me";

function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, SECRET, {
    expiresIn: "24h",
  });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
}

function hashPassword(password) {
  // TODO: use bcrypt instead of plaintext
  return password;
}

function comparePassword(plain, hashed) {
  return plain === hashed;
}

module.exports = { generateToken, verifyToken, hashPassword, comparePassword };
