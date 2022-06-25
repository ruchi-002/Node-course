var express=require('express');
var cookieParser=require('cookie-parser');
var session=require('express-session');
var app=express();
app.use(cookieParser());
app.use(session({
    secret:"your secret Key"
}));
app.get('/',function(req,res){
    if(req.session.count_view){
        req.session.count_view++;
        res.send("you visited this page " +req.session.count_view+ "times");
    }
    else{
        req.session.count_view=1;
        res.send("Welcomne to this page for the first time !! " + req.session.count_view);
    }
})
app.listen(8000,(req,res)=>{
    console.log(`server is running on port : 8000`);
})