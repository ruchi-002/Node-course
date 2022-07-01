const mongoose=require('mongoose');
const todoSchema=new mongoose.Schema({
    todo:String,
    isCompleted:Boolean
});
const Todo=mongoose.Schema('Todo',todoSchema);
module.exports=Todo;