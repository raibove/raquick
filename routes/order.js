const express = require('express');
const router = express.Router();


//keys for mongo atlas
const keys = require("../config/keys");

// model
const Quantity = require('../models/Quantity');
const Ordr = require('../models/Ordr');
router.post("/placeOrder",(req,res)=>{ 
    Quantity.find({}).then(item=>{
        let rice=0,wheat=0,sugar=0,sugarCost=0,riceCost=0,wheatCost=0;
        if(item){
           // console.log(req.body.length);
            for(let i=0;i<item.length;i++){
                if(item[i].product==='Wheat'){
                    wheat = req.body.Wheat;
                    wheatCost = item[i].price;
                    console.log("Wheat cost: "+wheatCost);
                    if(wheat>item[i].quantity)
                        return res.status(205).json({data:"Rice out of stock. Stock available is"});                          
                    Quantity.updateOne({product: item[i].product},{$inc:{quantity: -wheat}})
                    .then(output=>console.log("Wheat in stock"))
                    .catch(err=>console.log("Some error occured: "+err))
                } 
                if(item[i].product==='Rice'){

                    riceCost = item[i].price;
                    rice = req.body.Rice;
                    if(rice>item[i].quantity)
                        return res.status(205).json({data:"Rice out of stock. Stock available is"});                 
                    Quantity.updateOne({product: item[i].product},{$inc:{quantity: -rice}})
                    .then(output=>console.log("Rice in stock"))
                    .catch(err=>console.log("Some error occured: "+err))
                } 
                if(item[i].product==='Sugar'){
                    sugar = req.body.Sugar;
                    sugarCost = item[i].price;
                    if(sugar>item[i].quantity)
                        return res.status(205).send({data:"Rice out of stock. Stock available is",error:'Sugar out of stock'});                                  
                    Quantity.updateOne({product: item[i].product},{$inc:{quantity: -sugar}})
                    .then(output=>console.log("Sugar in stock"))
                    .catch(err=>console.log("error: "+err))
                } 
            }
           
            const ordr = new Ordr({
                product: ['Rice','Wheat','Sugar'],
                inputQuantity : [rice,wheat,sugar],
                price: [riceCost,wheatCost,sugarCost],
                totalCost: (wheat*wheatCost + rice*riceCost + sugar*sugarCost),
                cardNo: req.body.cardNo
            })
            ordr.save((err)=>{
                if(err){
                    return handleError(err);
                }
            })
            return res.send(ordr);
        }
        else{
            res.send("Product not found");
        }
    }
    ).catch(err=>res.json(err))
});

/*
router.get('/order/:orderNo',(req,res)=>{

});
*/

module.exports = router;