const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Price = require('./Price');
const Quantity = require('./Quantity');
//Create Schema
/*
const stockSchema = new Schema({
    detail:{
        type:Schema.Types.ObjectId,
        ref:"Quantity"
    }
})

const demoStockSchema = new Schema({
    productId:{
        type:Number,
        required:true
    },
    product:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const Stock = mongoose.model("stock",stockSchema);
module.exports = Stock;

*/
//Now after schema is prepared use it in route