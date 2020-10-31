const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//keys for mongo atlas
const keys = require("../config/keys");



//for user model
const Admin = require("../models/Admin");




router.post("/register", (req,res)=> {
    Admin.findOne({username: req.body.username}).then(admin=> {
        if(admin) {
            return res.status(400).json({username: "User already exist"});
        }else{
            const newAdmin = new Admin({
                username: req.body.username,
                password: req.body.password
            });

            //Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newAdmin.password,salt, (err, hash) =>{
                    if(err) throw err;
                    newAdmin.password = hash;
                    newAdmin
                    .save()
                    .then(admin => res.json(admin))
                    .catch(err => console.log(err));
                })
            })
        }
    })
})


///////////////////////////
/*
For Login
*************
*************
*************
**************
*/
////////////////////

router.post("/auth",(req,res,next)=> {

    const username = req.body.username;
    const password = req.body.password;
    Admin.findOne({ username }).then(admin => {

        //check if admin exist
        if(!admin){
            return res.status(404).json({usernamenotfound: "Username not found"});
        }


        // check password
        
        bcrypt.compare(password,admin.password).then(isMatch => {
            if(isMatch){
                // admin matched create jwt payload
                const payload = {
                    id: admin.id,
                    username: admin.username
                };

                // sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926
                    },
                    (err,token) => {
                        res.json({
                            success: true,
                            token: "Bearer"+token
                        });
                    }
                );
            }
            else{
                return res
                .status(400)
                .json({passwordincorrect: "Password incorrect" });
            }
        });
    });
});
module.exports = router;