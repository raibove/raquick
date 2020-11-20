const express = require('express');
const router = express.Router();

//keys for mongo atlas
const keys = require("../config/keys");

// model
//const Stock = require('../models/Stock');
const Price = require('../models/Price');
const Quantity = require('../models/Quantity');
/*
router.post("/addStock",(req,res)=>{
    Stock.findOne({product})
});
*/

//Price
router.post("/price",(req,res)=>{
    Price.findOne({productId: req.body.productId}).then(item=>{
        if(item){
            console.log(item);
            console.log(item._id)
            Price.updateOne(
                {_id:item._id},
                {
                    $set: {
                        product:req.body.product,
                        price: req.body.price
                    }
                },
                (err,response)=>{
                    if(err){
                        console.log(err);
                        throw err;
                    }
                    console.log("1 document updated");
                    item=>res.json(item);
                }
            )
        }
        else{
            const newProduct = new Price({
                productId:req.body.productId,
                product:req.body.product,
                price:req.body.price
            });

            newProduct.save()
            .then(item=>res.json(item))
            .catch(err=> console.log(err))
        }
    })
});

// Quantity
router.post("/stocks/add",(req,res)=>{
    Quantity.findOne({product:req.body.product}).then(item=>{
        if(item){
            console.log("Item exist");
            console.log(item);
            Quantity.updateOne(
                {_id:item._id},
                {
                    $inc:{quantity:req.body.quantity}, $set:{date: new Date()}
                },
                (err,response)=>{
                    if(err){
                        console.log(err);
                        throw err;
                    }
                    console.log("1 document updated");
                    item=>res.json(item);
                }
                )
        }
        else{
            const newQuantity= new Quantity({
                productId:req.body.productId,
                product:req.body.product,
                quantity:req.body.quantity,
                date:new Date() 
            });
            newQuantity.save()
            .then(item=> res.json(item))
            .catch(err=>console.log(err))
        }
    })
});

router.get("/stocks",(req,res)=>{
    Quantity.find({},(err,items)=>{
        if(err){
            console.log("Something must be wrong");
        }
        console.log("output");
        console.log(items);
        res.json({items:items.map(item=>item.toObject({getters:true}))});
    })
})
module.exports = router;

/*
 .populate("productPrice")
    .exec();
*/