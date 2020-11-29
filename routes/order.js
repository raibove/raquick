const express = require('express');
const router = express.Router();

//keys for mongo atlas
const keys = require("../config/keys");

// model
const Price = require('../models/Price');
const Quantity = require('../models/Quantity');
const Order = require('../models/Order');

router.post("/placeOrder",(req,res)=>{
    Quantity.find({}).then(item=>{
        if(item){
            let inp=0;
            for(let i=0;i<item.length;i++){
                if(item[i].product==='Wheat'){
                    inp = req.body.Wheat;
                    if(inp>item[i].quantity)
                        return res.status(205).json({data:"Rice out of stock. Stock available is"});                          
                    Quantity.updateOne({product: item[i].product},{$inc:{quantity: -inp}})
                    .then(output=>console.log("Wheat in stock"))
                    .catch(err=>console.log("Some error occured: "+err))
                } 
                if(item[i].product==='Rice'){
                    inp = req.body.Rice;
                    if(inp>item[i].quantity)
                        return res.status(205).json({data:"Rice out of stock. Stock available is"});                 
                    Quantity.updateOne({product: item[i].product},{$inc:{quantity: -inp}})
                    .then(output=>console.log("Rice in stock"))
                    .catch(err=>console.log("Some error occured: "+err))
                } 
                if(item[i].product==='Sugar'){
                    inp = req.body.Sugar;
                    if(inp>item[i].quantity)
                        return res.status(205).send({data:"Rice out of stock. Stock available is",error:'Sugar out of stock'});                                  
                    Quantity.updateOne({product: item[i].product},{$inc:{quantity: -inp}})
                    .then(output=>console.log("Sugar in stock"))
                    .catch(err=>console.log("error: "+err))
                } 
            }
            return res.send(item);
        }
        else{
            res.send("Product not found");
        }
    }
    ).catch(err=>res.json(err))
})

module.exports = router;