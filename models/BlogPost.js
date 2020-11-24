const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
    comments: [{
      author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
      content: String
    }]
  });

const BlogPost = mongoose.model("BlogPost",BlogPostSchema);
module.exports = BlogPost;

