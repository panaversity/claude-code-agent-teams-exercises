// User service -- manages user CRUD operations

function createUser(name, email, role) {
  // TODO: validate email format before creating
  console.log("Creating user:", name, email);

  const user = {
    id: Math.random().toString(36).substr(2, 9),
    name,
    email,
    role: role || "viewer",
    createdAt: new Date().toISOString(),
  };

  return user;
}

function updateUser(user, updates) {
  // TODO: validate that updates don't contain restricted fields (id, createdAt)
  console.log("Updating user:", user.id, updates);

  return { ...user, ...updates };
}

function deleteUser(userId) {
  // FIXME: should check if user has active sessions before deleting
  console.log("Deleting user:", userId);
  return true;
}

function getUserDisplayName(user) {
  if (!user) return "Unknown";
  return user.name || user.email || "Anonymous";
}

module.exports = { createUser, updateUser, deleteUser, getUserDisplayName };
