const mongoose=require("mongoose");
var mongoURL="mongodb+srv://W3_86770_Rashi:manager@cluster0.uumbm.mongodb.net/Guest-Gurudb"
mongoose.connect(mongoURL,{useUnifiedTopology: true})
var connection=mongoose.connection
connection.on('error',()=>{
    console.log("database connection failed")

})
connection.on('connected',()=>{
    console.log("database connection sucessful")
    
})



module.exports=mongoose
