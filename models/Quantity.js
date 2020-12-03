const mongoose = require('mongoose');
const { default: shortUniqueId } = require('short-unique-id');
const id = new shortUniqueId();
const Schema = mongoose.Schema;

//const Price = require('./Price');
//Schema

const productQuantitySchema = new Schema({
  productId: {
    type: String,
    set: () => id(),
  },
  product: {
    required: true,
    type: String,
  },
  quantity: {
    required: true,
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const prouctQuantity = mongoose.model('quantity', productQuantitySchema);
module.exports = prouctQuantity;

/*
,
    productPrice:{
        type:Schema.Types.ObjectId,
        ref:"Price"
    }
*/
