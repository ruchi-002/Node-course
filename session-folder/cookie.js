var express=require('express');
var cookieParser=require('cookie-parser');
var app=express();
var port=8000;
app.use(cookieParser());
app.get("/", function(req,res){
    // res.send("Hello");
    // res.cookie("name","Ruchika Sharma").send('Cookie has been set ');
    // res.end();
    res.send(req.cookies);
});
app.get('/show',(req,res)=>{
    // res.cookie("name","kritika").send("cookie has been set in show page");
    res.send(req.cookies);
});
app.get('/expire',(req,res)=>{
   res.cookie("name1","priya",{expire:Date.now()+36000}).send("cookie has been delay");
});
app.get('/maxAge',(req,res)=>{
  res.cookie("myCookie","sharma",{maxAge:360000}).send("my Cookie has veen delayed");
})
app.get('/delete',(req,res)=>{
    res.clearCookie('cookie1').send('cookie 1 has been deleted');
});
app.get('/delete1',(req,res)=>{
    res.clearCookie('name').send('name cookie  has been deleted');
});
app.get("/clear",(req,res)=>{
    res.clearCookie("myCookie").send("my cookie is deleted or clear");
    
})
app.listen(port,(req,res)=>{
    console.log(`server is running on port :${port}`);
})

