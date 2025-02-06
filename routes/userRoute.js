const express=require("express");
const router=express.Router();
const User =require("../models/user")


router.post("/register",async(req,res)=>{
    const {name , email ,phone, password} = req.body
    const newUser=new User(req.body)
    try{
        newUser.save()
        res.send("User Registered successfully")
        console.log(newUser);
    } catch(error){
        return res.status(400).json({error});
    }
});
router.post("/login",(res,req)=>{
    const{email,password}=req.body
    try{

    
    const user=User.findone({email:email,password:password})
    if(user){
        res.send(user)    
    }else{
        return res.status(400).json({message:'Login failed...'});  
    }
   
}catch(error){
    return res.status(400).json({error});

}

});
module.exports=router