const express = require('express');
//const { default: AddCustomer } = require('../client/src/autherization/pages/AddCustomer');
const router = express.Router();


//keys for mongo atlas
const keys = require("../config/keys");

// model
const AddCustomers = require('../models/AddCustomers');

router.post("/addCustomer",(req,res)=>{
    AddCustomers.findOne({cardNo :req.body.cardNo}).then( customer=>{
        if(customer){
            return res.status(404).json({cardNo: "Customer already exists"});
        }
        else{
            const newCustomer = new AddCustomers({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                cardNo: req.body.cardNo
            });

            newCustomer.save()
            .then(customer=> res.json(customer))
            .catch(err=> console.log(err))
        }
    })
});

/*
router.get('/display',(req,res)=>{
    AddCustomer.find((), (err, customers)=>{
        if(err){
            res.send("Something went really wrong");
        }
        res.json(customers);
    })
});

*/
module.exports = router;