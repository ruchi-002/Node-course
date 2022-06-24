var express=require('express');
var app=express();
app.use(function(req,res){
    console.log("A new request recieved at " + Date.now());
    // next();
});
app.listen(3000,(req,res)=>{
    console.log("server is running on port:3000 ");

})