const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "KillaCam",
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: "Wow look at that",
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: "Terrific",
    user_id: 3,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;