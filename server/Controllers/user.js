const express=require("express");

const user=require("../Model/user");
const Errorhandler=require("../Utils/Errorhandler");
const router=express.Router();
const catchAsyncErrors=require("../Middlewares/catchAsyncErrors");
const ErrorHandler = require("../Utils/Errorhandler");

router.post("/create-user",catchAsyncErrors(async(req,res,next)=>{
    try{
       const{name,password,email,phoneNumber,address,ward} = req.body
     
       const userDatas ={
        name,
        password,
        email,
        phoneNumber,
        address,
        ward

       }
        const userData=await user.create(userDatas)

        res.status(201).json({msg:"success",userData});
        
    }catch(err){
       return next( new Errorhandler(err.message,400))
 
    }
})
)
router.post('/login-user', catchAsyncErrors(async(req, res,next)=>{

    try {
        const {email, password} = req.body;
       
        if(!email || !password){
            return next (new ErrorHandler ("please Provide All inputs"))

        }
        const getuser = await user.findOne({email}).select("+password")
        console.log(getuser)
             
        if(!getuser){
            return next(new ErrorHandler ("Request User not Found",400))
        }
        
       res.status(200).json({msg:"success"})

    } catch (error) {
        return next( new ErrorHandler(error.message,400))
    }
}))
module.exports = router