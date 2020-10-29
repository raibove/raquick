const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    console.log("In testAPI");
    res.json({message:"It works"})
});

module.exports = router;