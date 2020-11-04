const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema

const addCustomerSchema = new Schema({
  name:{
    type:String,
    required:true
  },  
  phone:{
      type:String,
      required:true
  },
  email:{
      type:String,
      required:true
  },
  cardNo:{
        type:String,
        required:true
  }
});

const AddCustomers = mongoose.model("customers", addCustomerSchema);
module.exports = AddCustomers;
