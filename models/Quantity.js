const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const Price = require('./Price');
//Schema

const productQuantitySchema = new Schema({
    productId:{
        type:Number,
        required:true
    },
    product:{
        required:true,
        type:String
    },
    quantity:{
        required:true,
        type:Number
    },
    date:{
        type:String,
        default:Date.now
    },
    price:{
        type:Number
    }
});

const prouctQuantity = mongoose.model("quantity",productQuantitySchema);
module.exports= prouctQuantity;