var express=require('express');
var app=express();
//First middleware before response is sent
app.use('/',function(req,res,next){
    console.log("Start");
    next();
});
// router handler 
app.get('/',(req,res,next)=>{
    res.send("Middle");
    next();
});
app.use('/',function(req,res){
    console.log("End");
});
app.listen(3000,()=>{
    console.log("server is running on port : 3000");
});
