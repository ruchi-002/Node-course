const mongoose=require('mongoose');
// connection creation or new database
mongoose.connect("mongodb://localhost:27017/mon-goose").then(()=>
    console.log("connection successful"))
    .catch((err)=>{
      console.log(err);
    })

const playSchema=new mongoose.Schema({
    name:String,
    ctype:String,
    videos:Number,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now 
    }
})