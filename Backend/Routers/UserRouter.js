const express=require("express");
const { UserModel } = require("../Models/UserModel");

const bcrypt= require("bcrypt")
const UserRouter = express.Router()
var jwt = require('jsonwebtoken');

UserRouter.post("/signup", async(req,res)=>{
    console.log(req.body);
    const {email, password}= req.body
    try{
        bcrypt.hash(password, 5, async function(err, hash) {
            // Store hash in your password DB.
            if(err)
            res.send({"msg":"Something went wrong", "err":err.message})

            else{

                const data= await new UserModel({email, password:hash})
                await data.save()
                res.send("sign up done successfully")
            }
        });
    }catch(err){
        res.send({"msg":"Something went wrong", "err":err.message})
    }
})


UserRouter.post("/login", async(req,res)=>{
    console.log(req.body);
    const {email, password}= req.body
    try{
        const user= await UserModel.find({email})
        if(user.length>0){
        bcrypt.compare(password, user[0].password, async function(err, result) {
            // result == true
        
            if(err)
            res.send({"msg":"wrong Password", "err":err.message})

            else{
                var token = jwt.sign({ userID: user[0]._id }, 'shhhhh');

                res.send({"msg":"sign up done successfully", "token":token})
            }
        });
    }
    else{
        res.send({"msg":"Email Id Not matching with the DB", "err":err.message})
    }
    }catch(err){
        res.send({"msg":"Something went wrong", "err":err.message})
    }
})

module.exports={UserRouter}