const mongoose=require("mongoose");



const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,"please enter your name"],
    },
    password:{
        type:String,
        require:[true,"please enter your password"],
    },

    email:{
        type:String,
        require:[true,"please enter your email"],
    },

    phoneNumber:{
        type:Number
    },
    
    address:{
        type:String
    },

    ward:{
        type:Number,
        require:[true,"please enter your ward"]
    },

    role:{
        type:String,
        default:"user",
    }
    
})

module.exports=mongoose.models("User",userSchema);
