const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const DemoPrice = require('./DemoPrice');
//Create Schema

const stockSchema = new Schema({
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
        type:Date
    },
    amount:{
        type:Schema.Types.ObjectId,
        ref:"DemoPrice",
        required:true
    }
})
const Stock = mongoose.model("stock",stockSchema);
module.exports = Stock;


//Now after schema is prepared use it in route