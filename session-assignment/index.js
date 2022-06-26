// const express=require('express');
// const port=8000;
// const app=express();
// let ejs=require('ejs');
// const bodyParser=require('body-parser');
// const session=require('express-session');

// // set ejs
// app.set('view engine ','ejs');
// app.use(bodyParser.json());
// var urlencodedParser = bodyParser.urlencoded({ extended: false }) 
// //session 
// app.use(session({
//     secret:"phrases bird"
// }));
// let check={
//     nameCheck:false,
//     emailCheck:false,
//     name:"",
//     email:"",
//     view:0
// } 
// // post
// app.post('/send-data',urlencodedParser,(req,res)=>{
//     if(req.session.view){
//         req.session.view++;
//     }
//     else{
//         req.session.view=1;
//     }
//     req.session.name=req.body.name;
//     req.session.email=req.body.email;
//     if(req.session.name==""){
//         check.nameCheck=true;
//     }else{
//         check.nameCheck=false;
//         check.name=req.session.name;
//     }
//     if(req.session.email==""){
//         check.emailCheck=true;
//     }else{
//         check.emailCheck=false;
//         check.email=req.session.email;
//     }
//     check.view=req.session.view;
//     res.render('session',{dynamic:check});
// });

// // get 
// app.get('/',(req,res)=>{
//     res.render('session',{
//         dynamic:check
//     })
// })
// // listen to the port
// app.listen(port,(req,res)=>{
//    console.log(`server is running on port : ${port}`);
// })
const express=require('express');
const app=express();
let ejs = require('ejs');
app.set("view engine","ejs")
const bodyParser=require('body-parser');
const session=require('express-session');
 app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

app.use(session({secret:"keyboard cat"}));
let check={
    nameCheck:false,
    emailCheck:false,
    name:"",
    email:"",
    view:0

  }

app.post('/send-data',urlencodedParser,(req,res)=>{

    if(req.session.view){
        req.session.view++;
    }else{
        req.session.view=1;
    }
     
    req.session.name=req.body.name;
    req.session.email=req.body.email;
    
      if(req.session.name==""){
         check.nameCheck=true;
      }else{
        check.nameCheck=false;
        check.name=req.session.name;
      }
      if(req.session.email==""){
        check.emailCheck=true;
      }else{
        check.emailCheck=false;
        check.email=req.session.email;
      }

      check.view=req.session.view;

      res.render('session',{dynamic:check});
})

app.get('/',(req,res)=>{
    res.render("session",{dynamic:check});
})

app.listen(8000);
