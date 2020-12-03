const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

//keys for mongo atlas
const keys = require('../config/keys');

//for user model
const Admin = require('../models/Admin');

const adminController = require('./../controllers/adminController');

router.post('/register', adminController.createAdmin);

///////////////////////////
/*
For Login
*************
*************
*************
**************
*/
////////////////////

router.post('/auth', adminController.login);

module.exports = router;
