const express = require('express');
const router = express.Router();

//keys for mongo atlas
const keys = require("../config/keys");

// model
const {Stock} = require('../models/Stock');
const {DemoPrice}=require('../models/Stock');
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
router.post("/addstk",(req,res)=>{
    Stock.findOne({productId:req.body.productId}).then(item=>{
        if(item){
            //console.log("Item exist");
            Stock.updateOne(
                {_id:item._id},
                {
                    $inc:{quantity:req.body.quantity}, $set:{date: new Date().getFullYear()}
                },
                (err,response)=>{
                    if(err){
                        console.log(err);
                        throw err;
                    }
                })
                .then(item=>res.json(item))
        }
        else{
            const newStock= new Stock({
                productId:req.body.productId,
                product:req.body.product,
                quantity:req.body.quantity,
                date:new Date().getFullYear()
            });
            newStock.save()
            .then(item=> res.json(item))
            .catch(err=>console.log(err))
        }
    })
});

router.post("/addprc",(req,res)=>{
    DemoPrice.findOne({productId: req.body.productId}).then(item=>{
        if(item){
           // console.log(item);
            //console.log(item._id)
            DemoPrice.updateOne(
                {_id:item._id},
                {
                    $set: {
                        price: req.body.price
                    }
                },
                (err,response)=>{
                    if(err){
                        console.log(err);
                        throw err;
                    }
                }
            )
            .then( item=>res.json(item))
            .catch(err=>res.json(err))
        }
        else{
            const newProduct = new DemoPrice({
                productId:req.body.productId,
                price:req.body.price
            });

            newProduct.save()
            .then(item=>res.json(item))
            .catch(err=> res.log(err))
        }
    })
});

router.get("/pp",(req,res)=>{
    Stock.find({}).populate("cost").exec((err, data)=> {
        if(err){
           res.send(err);
       }
       res.send(data);
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
const OnlyPrice = require('../models/OnlyPrice');
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
                    $inc:{quantity:req.body.quantity}, $set:{date: new Date().getFullYear()}
                },
                (err,response)=>{
                    if(err){
                        console.log(err);
                        throw err;
                    }
                //console.log("1 document updated");
                }
                )
                .then(item=>res.json(item))
        }
        else{
            const newQuantity= new Quantity({
                productId:req.body.productId,
                product:req.body.product,
                quantity:req.body.quantity,
                date:new Date().getFullYear()
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



//****************************************************************************************** */
router.get("/lookup",(req,res)=>{
    Quantity.aggregate([
        {
            $lookup:
            {
                from:"OnlyPrice",
                localField:"productId",
                foreignField:"pId",
                as:"cost"
            }
        }
    ])
    .then(item=>{
        res.json(item);
    })
    .catch(err=>res.json(err));
});

router.post("/onlyprice",(req,res)=>{
    OnlyPrice.findOne({pId: req.body.pId}).then(item=>{
        if(item){
            console.log(item);
            console.log(item._id)
            OnlyPrice.updateOne(
                {_id:item._id},
                {
                    $set: {
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
            const newProduct = new OnlyPrice({
                pId:req.body.pId,
                price:req.body.price
            });

            newProduct.save()
            .then(item=>res.json(item))
            .catch(err=> console.log(err))
        }
    })
});









module.exports = router;

