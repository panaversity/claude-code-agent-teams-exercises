// Notification service -- sends notifications to users

function sendEmail(to, subject, body) {
  // TODO: implement actual email sending (use nodemailer or similar)
  console.log(`Sending email to ${to}: ${subject}`);
  return { sent: true, to, subject };
}

function sendPushNotification(userId, message) {
  // TODO: implement push notification via Firebase
  console.log(`Push notification to ${userId}: ${message}`);
  return { sent: true, userId, message };
}

function notifyPostPublished(post, subscribers) {
  // FIXME: should batch notifications, not send one by one
  const results = [];
  for (const sub of subscribers) {
    console.log(`Notifying ${sub.email} about post ${post.title}`);
    results.push(sendEmail(sub.email, `New post: ${post.title}`, post.content));
  }
  return results;
}

module.exports = { sendEmail, sendPushNotification, notifyPostPublished };
