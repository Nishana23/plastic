const express=require("express");

const user=require("../Model/user");
const Errorhandler=require("../Utils/Errorhandler");
const router=express.Router();
const catchAsyncErrors=require("../Middlewares/catchAsyncErrors");

router.post("/create-user",catchAsyncErrors,async(req,res,next)=>{
    try{
   

        const userData=await user.create(req.body)
        res.status(201).json({msg:"success"});
        
    }catch(err){
 console.log(err);
 
    }
})