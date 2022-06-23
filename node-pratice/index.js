const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello from the express');
});
app.get('/about',(req,res)=>{
    res.send("this is about page");
});
app.get('/contact',(req,res)=>{
    res.send("this is contact page");
});
app.get('/temp',(req,res)=>{
    res.send("this is template page");
});
app.listen(8000,()=>{
    console.log('server is running on port : 8000 ');
});