// API route handlers
const { generateToken, verifyToken, hashPassword, comparePassword } = require("./auth");
const { findUserByEmail, createUser, getAllUsers, deleteUser } = require("./database");

function handleLogin(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  const user = findUserByEmail(email);
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  if (!comparePassword(password, user.password)) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = generateToken(user);
  res.json({ token, user: { id: user.id, email: user.email } });
}

function handleRegister(req, res) {
  const { email, password } = req.body;

  const existing = findUserByEmail(email);
  if (existing) {
    return res.status(409).json({ error: "User already exists" });
  }

  const hashed = hashPassword(password);
  const user = createUser(email, hashed);
  const token = generateToken(user);

  res.status(201).json({ token, user });
}

function handleGetUsers(req, res) {
  // FIXME: no auth check -- anyone can list all users
  const users = getAllUsers();
  res.json(users);
}

function handleDeleteUser(req, res) {
  const { id } = req.params;
  // FIXME: no auth check, no authorization (any user can delete any other)
  deleteUser(id);
  res.status(204).send();
}

function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = header.replace("Bearer ", "");
  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ error: "Invalid token" });
  }

  req.user = decoded;
  next();
}

module.exports = {
  handleLogin,
  handleRegister,
  handleGetUsers,
  handleDeleteUser,
  authMiddleware,
};
