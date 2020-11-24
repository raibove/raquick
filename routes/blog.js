const express = require('express');
const router = express.Router();

//keys for mongo atlas
const keys = require("../config/keys");

const Author = require('../models/Author');
const BlogPost = require('../models/BlogPost')


router.post("/author",(req,res)=>{

        const ath = new Author({
            name: req.body.name
        });
        ath.save()
        .then(item=> res.json(item))
        .catch(err=>console.log(err))
});

router.post("/blog",(req,res)=>{
        const blg = new BlogPost({
            title: req.body.title
        });
        blg.save()
        .then(item=> res.json(item))
        .catch(err=>console.log(err))
});

router.get("/getblg",(req,res)=>{
    Author.findOne().populate('posts').exec((err, author)=> {
         if(err){
            res.send(err);
        }
        res.send(author);
      });
})

router.get("/gettitle",(req,res)=>{
    BlogPost.find({},(err,titles)=>{
        if(err){
            res.send(err);
        }
        res.send(titles);
    })
});

module.exports = router;

