const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { default: shortUniqueId } = require('short-unique-id');

const options = {
    dictionary:[0,1,2,3,4,5,6,7,8,9],
};
const id = new shortUniqueId(options);
//Create Schema
const OrderSchema = new Schema({
    orderId: {
        type: String,
        set: () => id(),
        default:id()
      },    
    product:{
        type: [String]
    },
    inputQuantity:{
        type: [Number]
    },
    price:{
        type: [Number]
    },
    totalCost:{
        type: Number
    },
    cardNo:{
        type:Number
    }
});

const Ordr = mongoose.model('ordr',OrderSchema);
module.exports = Ordr;