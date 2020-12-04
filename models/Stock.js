const mongoose = require('mongoose');

const { default: shortUniqueId } = require('short-unique-id');

const id = new shortUniqueId();

const Schema = mongoose.Schema;

//const DemoPrice = require('./DemoPrice');
//Create Schema

const stockSchema = new Schema({
  productId: {
    type: String,
    required: true,
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
  },
  //   amount: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'demoPrice',
  //     required: true,
  //   },
});
const Stock = mongoose.model('stock', stockSchema);
module.exports = Stock;

//Now after schema is prepared use it in route
