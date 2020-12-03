const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema

const productPriceSchema = new Schema({
  pId: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
});
const productPrice = mongoose.model('onlyprice', productPriceSchema);
module.exports = productPrice;
