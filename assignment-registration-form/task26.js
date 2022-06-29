const express = require('express');
const app = express();
var url="mongodb://localhost:27017"
const mongoClient=require('mongodb').MongoClient;
const bodyParser = require('body-parser');
// set ejs
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}));
// get
app.get('/',(req,res)=>{
    res.render('form');
})

// post
app.post('/list',(req,res)=>{
    var obj={
        name:req.body.user_name,
        email:req.body.user_email,
        phone:req.body.user_number,
        address:req.body.user_address
    }
    // connect
    mongoClient.connect(url, async function(err, db) {  
        if (err) throw err;  
        var dbase=db.db('UserInfo')
        dbase.collection("UserDetails").insertOne(obj, function(err, res) {  
            if (err) throw err;  
            console.log("1 blog inserted");  
            db.close();  
            });  

            var res1= await dbase.collection('UserDetails').find().toArray();
            res.send(res1);
    });

})
// port on 3000
app.listen(3000,console.log("listing to the port : 3000"))
    
