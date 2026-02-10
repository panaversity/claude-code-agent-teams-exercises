// JWT authentication
const jwt = require("jsonwebtoken");

// SECURITY: Hardcoded secret
const SECRET = "my-super-secret-jwt-key-2024";

function generateToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    SECRET,
    { expiresIn: "7d" }
  );
}

function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token" });

  const token = authHeader.split(" ")[1];
  const decoded = verifyToken(token);
  if (!decoded) return res.status(403).json({ error: "Invalid token" });

  req.user = decoded;
  next();
}

module.exports = { generateToken, verifyToken, authenticateToken, SECRET };
