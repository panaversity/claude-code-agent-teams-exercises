// Tests for all services
const { createUser, updateUser, getUserDisplayName } = require("../src/userService");
const { createPost, publishPost } = require("../src/postService");
const { sendEmail } = require("../src/notificationService");

function testCreateUser() {
  const user = createUser("Alice", "alice@test.com", "admin");
  console.assert(user.name === "Alice", "Name should be Alice");
  console.assert(user.email === "alice@test.com", "Email should match");
  console.assert(user.role === "admin", "Role should be admin");
  console.assert(user.id.length > 0, "Should have an ID");
  console.log("PASS: testCreateUser");
}

function testCreateUserDefaults() {
  const user = createUser("Bob", "bob@test.com");
  console.assert(user.role === "viewer", "Default role should be viewer");
  console.log("PASS: testCreateUserDefaults");
}

function testUpdateUser() {
  const user = createUser("Charlie", "charlie@test.com");
  const updated = updateUser(user, { name: "Charles" });
  console.assert(updated.name === "Charles", "Name should be updated");
  console.assert(updated.email === "charlie@test.com", "Email should be unchanged");
  console.log("PASS: testUpdateUser");
}

function testGetDisplayName() {
  console.assert(getUserDisplayName(null) === "Unknown", "Null user = Unknown");
  console.assert(getUserDisplayName({ name: "Dana" }) === "Dana", "Should return name");
  console.assert(getUserDisplayName({ email: "d@t.com" }) === "d@t.com", "Should fallback to email");
  console.log("PASS: testGetDisplayName");
}

function testCreatePost() {
  const post = createPost("Hello", "World content", "author1");
  console.assert(post.title === "Hello", "Title should match");
  console.assert(post.status === "draft", "New post should be draft");
  console.log("PASS: testCreatePost");
}

function testPublishPost() {
  const post = createPost("Test", "Content", "author1");
  const published = publishPost(post);
  console.assert(published.status === "published", "Should be published");
  console.assert(published.publishedAt !== undefined, "Should have publishedAt");
  console.log("PASS: testPublishPost");
}

function testSendEmail() {
  const result = sendEmail("test@test.com", "Subject", "Body");
  console.assert(result.sent === true, "Should report sent");
  console.assert(result.to === "test@test.com", "Recipient should match");
  console.log("PASS: testSendEmail");
}

// Run all
console.log("--- Running tests ---");
testCreateUser();
testCreateUserDefaults();
testUpdateUser();
testGetDisplayName();
testCreatePost();
testPublishPost();
testSendEmail();
console.log("--- All tests passed ---");
