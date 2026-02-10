// Input validation utilities

function validateEmail(email) {
  if (typeof email !== "string") return false;
  // Basic check -- not comprehensive
  return email.includes("@") && email.includes(".");
}

function validatePassword(password) {
  if (typeof password !== "string") return false;
  return password.length >= 8;
}

function sanitizeInput(input) {
  if (typeof input !== "string") return input;
  // Strip HTML tags
  return input.replace(/<[^>]*>/g, "");
}

function validateId(id) {
  const num = parseInt(id, 10);
  return !isNaN(num) && num > 0;
}

module.exports = { validateEmail, validatePassword, sanitizeInput, validateId };
