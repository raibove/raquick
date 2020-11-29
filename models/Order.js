const mongoose = require('mongoose');
const { model } = require('./OnlyPrice');
const Schema = mongoose.Schema;

//Create Schema
const OrderSchema = new Schema({
    rice:{
        type:Number,
        default:0
    },
    wheat:{
        type:Number,
        default:0
    },
    sugar:{
        type:Number,
        default:0
    }
});

const Order = mongoose.model('order',OrderSchema);
module.exports = Order;