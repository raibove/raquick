const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DemoPrice = require('./DemoPrice');
//Create Schema

const stockSchema = new Schema({
    productId:{
        type:Number,
        required:true
    },
    product:{
        require:true,
        type:String
    },
    quantity:{
        require:true,
        type:Number
    },
    date:{
        type:Date,
        default:Date.now
    },
    amount:{
        type:Schema.Types.ObjectId,
        ref:"DemoPrice"
    }
})
const Stock = mongoose.model("stock",stockSchema);
module.exports = Stock;


//Now after schema is prepared use it in route