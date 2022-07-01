const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family:4
}).then(()=>
    console.log("DB Connection Success"))
    .catch((err)=>
        console.log(err));
const db=mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting To mongoDB"));
db.once('open',()=>{
    console.log("Connected to Database :: MongoDB");
});
module.exports=db;


