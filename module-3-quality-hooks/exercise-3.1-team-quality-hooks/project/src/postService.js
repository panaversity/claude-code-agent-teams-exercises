// Post service -- manages blog post operations

function createPost(title, content, authorId) {
  // TODO: validate title length (max 200 chars)
  // TODO: validate content is not empty
  console.log("Creating post:", title);

  return {
    id: Math.random().toString(36).substr(2, 9),
    title,
    content,
    authorId,
    status: "draft",
    createdAt: new Date().toISOString(),
  };
}

function publishPost(post) {
  if (post.status === "published") {
    return post; // Already published
  }

  console.log("Publishing post:", post.id);

  return {
    ...post,
    status: "published",
    publishedAt: new Date().toISOString(),
  };
}

function archivePost(post) {
  // FIXME: should notify subscribers before archiving
  console.log("Archiving post:", post.id);
  return { ...post, status: "archived" };
}

module.exports = { createPost, publishPost, archivePost };
