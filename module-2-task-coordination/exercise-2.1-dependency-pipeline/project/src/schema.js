// Data model -- currently uses string IDs
// TODO: Migrate to UUID format

function createUser(name, email) {
  return {
    id: String(Date.now()),  // String ID -- needs to become UUID
    name,
    email,
    createdAt: new Date().toISOString(),
  };
}

function createPost(authorId, title, content) {
  return {
    id: String(Date.now()),  // String ID -- needs to become UUID
    authorId,                // References user.id
    title,
    content,
    publishedAt: null,
  };
}

function createComment(postId, authorId, text) {
  return {
    id: String(Date.now()),  // String ID -- needs to become UUID
    postId,                  // References post.id
    authorId,                // References user.id
    text,
    createdAt: new Date().toISOString(),
  };
}

module.exports = { createUser, createPost, createComment };
