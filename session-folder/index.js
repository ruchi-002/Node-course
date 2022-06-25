const express=require('express');
const path=require('path');
const port=8000;

const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.get('/',(req,res)=>{
    //  console.log(req);
    //  console.log(__dirname);
    // res.send('<h1>Ruchika Sharma</h1>')
    res.render('home',{
        title:"this is title"
    });
});
app.get('/pratice',function(req,res){
    return res.render('pratice',{
        title:"Let us Play with ejs"
    });
});

app.listen(port,function(err){
    if(err){
        console.log("Error in running the server" + err);
    }
    else{
        console.log("server is running on port : 8000");
    }
})
