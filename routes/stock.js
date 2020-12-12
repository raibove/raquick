const express = require('express');
const router = express.Router();

//keys for mongo atlas
const keys = require("../config/keys");

// model
const Quantity = require('../models/Quantity');
let d= new Date()
// Quantity
router.post("/stocks/add",(req,res)=>{
    Quantity.findOne({product:req.body.product}).then(item=>{
        if(item){
            console.log("Item exist");
            console.log(item);
            Quantity.updateOne(
                {_id:item._id},
                {
                    $inc:{quantity:req.body.quantity}, $set:{date:d.getDate() + "/"+ parseInt(d.getMonth()+1) +"/"+d.getFullYear() }
                },
                (err,response)=>{
                    if(err){
                        console.log(err);
                        throw err;
                    }
                }
                )
                .then(item=>res.json(item))
        }
        else{
            const newQuantity= new Quantity({
                productId:req.body.productId,
                product:req.body.product,
                quantity:req.body.quantity,
                price: req.body.price,
                date:d.getDate() + "/"+ parseInt(d.getMonth()+1) +"/"+d.getFullYear()
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

