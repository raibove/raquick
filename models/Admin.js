const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema

const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const Admin = mongoose.model('admins', adminSchema);
module.exports = Admin;
