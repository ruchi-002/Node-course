const express=require('express');
const router=express.Router();
const toDoDB=require('../models/Tododb');
const filterType='active';

router.get('/',async(req,res)=>{
    const filterType='active';
    const data=await toDoDB.find({isCompleted:false});
    const count=await toDoDB.find({isCompleted:false}).count();
    res.render('index.ejs',{data:data,filterType:filterType,count:count});
});
router.post('/add',async(req,res)=>{
    try{
        const newTodo=await todoDB.create({
            todo:req.body.todo,
            isCompleted:false
        })
        newTodo.save();
    }catch(err){
        console.log(err);
    }
    res.redirect('/active');
})
router.get('/strike/:id', async(req, res) => {
    const bool = (await toDoDB.findById(req.params.id)).isCompleted;
    await toDoDB.updateOne({_id : req.params.id}, { $set : { isCompleted : !bool }});
    res.redirect('/all');
}) 

router.get('/delete/:id',async(req,res)=>{
    await toDoDB.deleteOne({_id:req.params.id});
    res.redirect('/active');
})
router.get('/clearcompleted',async(req,res)=>{
    await toDoDB.deleteMany({isCompleted:true});
    res.redirect('/active');
})
module.exports=router;