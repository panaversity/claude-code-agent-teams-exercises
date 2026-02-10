// API route handlers -- depend on schema.js ID format
const { createUser, createPost, createComment } = require("./schema");

const users = [];
const posts = [];
const comments = [];

function handleCreateUser(req, res) {
  const user = createUser(req.body.name, req.body.email);
  users.push(user);
  res.status(201).json(user);
}

function handleGetUser(req, res) {
  // Lookup by string ID comparison
  const user = users.find((u) => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
}

function handleCreatePost(req, res) {
  // Verify author exists by string ID
  const author = users.find((u) => u.id === req.body.authorId);
  if (!author) return res.status(400).json({ error: "Author not found" });

  const post = createPost(req.body.authorId, req.body.title, req.body.content);
  posts.push(post);
  res.status(201).json(post);
}

function handleGetPost(req, res) {
  const post = posts.find((p) => p.id === req.params.id);
  if (!post) return res.status(404).json({ error: "Post not found" });

  // Attach author name via string ID lookup
  const author = users.find((u) => u.id === post.authorId);
  res.json({ ...post, authorName: author?.name || "Unknown" });
}

function handleAddComment(req, res) {
  const comment = createComment(
    req.params.postId,
    req.body.authorId,
    req.body.text
  );
  comments.push(comment);
  res.status(201).json(comment);
}

module.exports = {
  handleCreateUser,
  handleGetUser,
  handleCreatePost,
  handleGetPost,
  handleAddComment,
};
