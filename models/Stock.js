const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const DemoPrice = require('./DemoPrice');
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

productPriceSchema.set('toObject', { virtuals: true });
productPriceSchema.set('toJSON', { virtuals: true });
const DemoPrice = mongoose.model("demoPrice",productPriceSchema);


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
    }
});

stockSchema.virtual('cost', {
    ref: 'DemoPrice',
    localField: 'productId',
    foreignField: 'productId'
  });
  

stockSchema.set('toObject', { virtuals: true });
stockSchema.set('toJSON', { virtuals: true });

const Stock = mongoose.model("Stock",stockSchema);
module.exports ={ Stock,DemoPrice};


//Now after schema is prepared use it in route