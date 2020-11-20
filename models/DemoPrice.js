const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const productPriceSchema = new Schema({
    price:{
        type:Number,
        required:true
    }
});
const DemoPrice = mongoose.model("demoPrice",productPriceSchema);
module.exports= DemoPrice;