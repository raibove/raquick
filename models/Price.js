const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const productPriceSchema = new Schema({
    productId:{
        type:Number,
        required:true
    },
    product:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});
const productPrice = mongoose.model("price",productPriceSchema);
module.exports= productPrice;