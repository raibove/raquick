const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const productPriceSchema = new Schema({
    productId:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});

productPriceSchema.virtual('mike', {
    ref: 'Stock',
    localField: 'productId',
    foreignField: 'productId'
  });
  
productPriceSchema.set('toObject', { virtuals: true });
productPriceSchema.set('toJSON', { virtuals: true });
const DemoPrice = mongoose.model("demoPrice",productPriceSchema);
module.exports= DemoPrice;