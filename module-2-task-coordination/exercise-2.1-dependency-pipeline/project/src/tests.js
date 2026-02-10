// Tests -- verify the full flow with current ID format
const { createUser, createPost, createComment } = require("./schema");
const { formatUserCard, formatPostPreview } = require("./frontend");

function testCreateUser() {
  const user = createUser("Alice", "alice@example.com");

  // Currently expects string numeric ID
  console.assert(typeof user.id === "string", "User ID should be a string");
  console.assert(user.id.length > 0, "User ID should not be empty");
  console.assert(user.name === "Alice", "Name should match");
  console.assert(user.email === "alice@example.com", "Email should match");

  console.log("PASS: testCreateUser");
  return user;
}

function testCreatePost(user) {
  const post = createPost(user.id, "Hello World", "My first post content here.");

  console.assert(typeof post.id === "string", "Post ID should be a string");
  console.assert(post.authorId === user.id, "Author ID should match user");
  console.assert(post.title === "Hello World", "Title should match");

  console.log("PASS: testCreatePost");
  return post;
}

function testCreateComment(post, user) {
  const comment = createComment(post.id, user.id, "Great post!");

  console.assert(typeof comment.id === "string", "Comment ID should be a string");
  console.assert(comment.postId === post.id, "Post ID should match");
  console.assert(comment.authorId === user.id, "Author ID should match");

  console.log("PASS: testCreateComment");
}

function testFormatUserCard() {
  const user = { id: "12345", name: "Bob", email: "bob@test.com" };
  const html = formatUserCard(user);

  console.assert(html.includes("12345"), "Card should contain the ID");
  console.assert(html.includes("Bob"), "Card should contain the name");

  console.log("PASS: testFormatUserCard");
}

function testFormatPostPreview() {
  const post = {
    id: "67890",
    title: "Test Post",
    authorName: "Charlie",
    content: "Some content that is long enough to test truncation behavior in the preview.",
  };
  const html = formatPostPreview(post);

  // Expects the ID to be truncated to first 8 chars for display
  console.assert(html.includes("67890"), "Preview should contain truncated ID");
  console.assert(html.includes("Test Post"), "Preview should contain title");

  console.log("PASS: testFormatPostPreview");
}

// Run all tests
function runAll() {
  console.log("--- Running tests ---");
  const user = testCreateUser();
  const post = testCreatePost(user);
  testCreateComment(post, user);
  testFormatUserCard();
  testFormatPostPreview();
  console.log("--- All tests passed ---");
}

runAll();
