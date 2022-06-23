const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    console.log("data is sent by the browser",req.query.name)
    res.send('Hello , Geeky ' + req.query.name);
});
app.get('/about',(req,res)=>{
    res.send("this is about page");
});
// app.get('/contact',(req,res)=>{
//     res.send("this is contact page");
// });
// app.get('/temp',(req,res)=>{
//     res.send("this is template page");
// });
app.post('/about',(req,res)=>{
    res.send('this is post about page');
})
app.listen(8000,()=>{
    console.log('server is running on port : 8000 ');
});