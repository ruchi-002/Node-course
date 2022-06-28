const express=require('express');
const port=8000;
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
// set
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.render('form');
});
app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
})
