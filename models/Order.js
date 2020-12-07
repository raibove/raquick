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
    wheat:{
        type:Number,
        default:0
    },
    rice:{
        type:Number,
        default:0
    },
    sugar:{
        type:Number,
        default:0
    },
    riceCost:{
        type:Number,
        default:0
    },
    wheatCost:{
        type: Number,
        default:0
    },
    sugarCost:{
        type: Number,
        default:0
    },
    totalCost:{
        type: Number,
        default:0
    }
});

const Order = mongoose.model('order',OrderSchema);
module.exports = Order;