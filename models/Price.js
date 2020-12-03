const mongoose = require('mongoose');

const { default: shortUniqueId } = require('short-unique-id');

const id = new shortUniqueId();

const Schema = mongoose.Schema;

//Create Schema

const productPriceSchema = new Schema({
  productId: {
    type: String,
    required: true,
    set: () => id(),
  },
  product: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const productPrice = mongoose.model('price', productPriceSchema);
module.exports = productPrice;
