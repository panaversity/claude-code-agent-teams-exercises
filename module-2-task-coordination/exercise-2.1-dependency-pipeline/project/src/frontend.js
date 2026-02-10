// Frontend display helpers -- depend on backend response format

function formatUserCard(user) {
  return `
    <div class="user-card" data-id="${user.id}">
      <h3>${user.name}</h3>
      <p>${user.email}</p>
      <small>ID: ${user.id}</small>
    </div>
  `;
}

function formatPostPreview(post) {
  // Truncates the string ID for display
  const shortId = post.id.substring(0, 8);
  return `
    <article data-post-id="${post.id}">
      <h2>${post.title}</h2>
      <p>By ${post.authorName || "Unknown"} (${shortId})</p>
      <p>${post.content.substring(0, 200)}...</p>
    </article>
  `;
}

function formatComment(comment) {
  return `
    <div class="comment" data-comment-id="${comment.id}">
      <p>${comment.text}</p>
      <small>Post: ${comment.postId} | Author: ${comment.authorId}</small>
    </div>
  `;
}

function buildUserLink(userId) {
  // Constructs URL with the ID format
  return `/users/${userId}`;
}

function buildPostLink(postId) {
  return `/posts/${postId}`;
}

module.exports = {
  formatUserCard,
  formatPostPreview,
  formatComment,
  buildUserLink,
  buildPostLink,
};
