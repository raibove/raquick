const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    name: String
  });
  
  // Specifying a virtual with a `ref` property is how you enable virtual
  // population
  AuthorSchema.virtual('posts', {
    ref: 'BlogPost',
    localField: '_id',
    foreignField: 'author'
  });
  
const Author = mongoose.model("Author",AuthorSchema);
module.exports = Author;

