const express = require('express');
const router = express.Router();

//keys for mongo atlas
const keys = require("../config/keys");

// model
const DisplayCustomers = require('../models/AddCustomers');

router.get('/display',(req,res)=>{
    DisplayCustomers.find({}, (err, customers)=>{
        if(err){
            res.send("Something went really wrong");
        }
        res.json({customers: customers.map(customer=> customer.toObject({ getters: true}))});
        //res.json(customers);
    })
});

module.exports = router;
