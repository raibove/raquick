const express = require('express');
const router = express.Router();

//keys for mongo atlas
const keys = require("../config/keys");

// model
const Stock = require('../models/Stock');
const DemoPrice=require('../models/DemoPrice');
router.get("/stk",(req,res)=>{
    Stock.find({})
    .then(item=>{
        res.json(item);
    })
    .catch(err=>{
        res.json(err);
    })
});
router.get("/prc",(req,res)=>{
    DemoPrice.find({})
    .then(item=>{
        res.json(item);
    })
    .catch(err=>{
        res.json(err);
    })
});
router.post("/addStk",(req,res)=>{
    Stock.create(req.body)
    .then(item=>{
        res.json(item);
    })
    .catch(err=>{
        res.json(err);
    })
});
router.post("/addStk/:id",(req,res)=>{
    DemoPrice.create(req.body)
    .then(itemCost=>{
        return Stock.findOneAndUpdate(
            {_id: req.params.id},
            {$set:{price:itemCost._id}});
    })
    .then(item=>{
        res.json(item);
    })
    .catch(err=>{
        res.json(err);
    });
});
router.get("/stk/:id",(req,res)=>{
    Stock.findOne({_id: req.params.id})
    .populate("amount")
    .then(item=>{
        res.json(item);
    })
    .catch(err=>{
        res.json(err);
    });
});


/**
 * 
 * 
 * CHECK ABOVE CODE 
 * BELOW CODE WORKS FINE
 *  
 * 
 */

const Price = require('../models/Price');
const Quantity = require('../models/Quantity');

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
