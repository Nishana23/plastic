const express=require('express');

const app=express();




app.use("/api/v1/")

const port=6000
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
    
})