const express = require('express');
const app = express();
var url="mongodb://localhost:27017"
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("DB Connection Success"))
.catch((err)=>{console.log(err)})

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : Number,
    address : String
});

const userModel = mongoose.model('userModel',userSchema);

app.get('/',(req,res)=>{
    // const data = await userModel.find({});
    
    res.render('form', {data : data});
});

app.post('/list', (req,res)=>{
    let userDetails= new userModel({
        name:req.body.user_name,
        email:req.body.user_email,
        phone:req.body.user_number,
        address:req.body.user_address
    })
    userDetails.save();
    res.redirect('/');
});

// app.get('/edit/:id', async (req,res)=>{
//     const variable = await userModel.findById(req.params.id);
//     console.log(variable);
//     res.render("edit", {data:variable});
// });

app.post('/submit/:id', async(req,res)=>{
    console.log(req.params.id);
    console.log(req.body);
    await userModel.updateOne( {_id:req.params.id}, {$set: 
        {name: req.body.user_name,
        email: req.body.user_email, 
        phone: req.body.user_number,
        address: req.body.user_address}
    });
    res.redirect('/');
})

// app.get('/delete/:_id', (req,res)=>{
//     const uniqueid = req.params.id;
//     userModel.deleteOne(uniqueid).then(()=>{
//         console.log("Deleted Successfully");
//         res.redirect('/');
//     }).catch(err=>console.log(err));
// });

app.listen(8000,(req,res)=>{
    console.log("server is running on port 8000");
});