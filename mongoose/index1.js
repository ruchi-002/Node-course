const mongoose=require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/mongo-data",{
    useNewUrlParser: true,
        useUnifiedTopology: true,
        family:4
}).then(()=>{
    console.log("connection successful!!");
}).catch((err)=>{
    console.log(err);
});

const userSchema=new Schema({
    title:{
       type: String,
       required:true
    },
    author:String,
    category:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
});
// collection creation
const User=new mongoose.model("Users",userSchema);
// create a document or insert a document 
const createDocument=async()=>{
    try{
        const userDoc=new User({
            title:"About Node",
             author: "Thapa Tech",
             category:"Back End",
             active: true,
        })
        const userNode=new User({
            title:"About Node",
             author: "Thapa Tech",
             category:"Back End",
             active: true,
        })
        const userReact=new User({
            title:"About React",
             author: "ThapaTech",
             category:"Front End",
             active: true,
        })
        const result=await User.insertMany([userNode,userReact]);
        console.log(result);
    }catch(err){
      console.log(err);
    }
}
// createDocument();
const getDocument=async()=>{
    // const result=await User.find({author:"W3school"}).select({
    //     title:1,_id:0
    // });
    try{
        const result=await User.find({}).select({ title:1,_id:0}).limit(1);
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
getDocument();