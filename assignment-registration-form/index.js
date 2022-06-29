const express=require('express');
const port=8000;
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
// set
app.set("view engine","ejs");
mongoose.connect('mongodb://localhost:27017/UserInfo',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
});
// const userSchema=new mongoose.Schema({
// name:String,
// email:String,
// phone:Number,
// address:String
// });
// const userModel=mongoose.Schema('userModel',userSchema);
var db=mongoose.connection;
db.on('error',console.log.bind(console,"connection error"))
db.once('open',function(callback){
    console.log("connection succeeded");
});
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',async(req,res)=>{
    const data=await userModel.find({});
    res.render('form',{data:data});
});

app.post('/list',function(req,res){
    var user_name=req.body.user_name;
    var user_email=req.body.user_email;
    var user_phone=req.body.user_phone;
    var user_address=req.body.user_address;
    var data={
        "user_name":user_name,
        "user_email":user_email,
        "user_phone":user_phone,
        "user_address":user_address
    }
    db.collection("UserDetails").insertOne(data,function(err,collection){
        if(err)
        throw err;
        console.log("Record inserted");
    });
    res.send("inserted");  
    // db.collection("UserDetails").find().toArray(data,function(err,collection){
    //     if(err)
    //     throw err;
    //     console.log("data is created");
    // });
    // res.send()
})


app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
})
