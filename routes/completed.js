const express = require('express');
const router = express.Router();
const ToDoDB = require('../models/Tododb');
const filterType = 'complete';

router.get('/', async(req, res) => {
    const filterType = 'complete';
    const data = await ToDoDB.find({isCompleted : true});
    const count = await ToDoDB.find({isCompleted : false}).count();
    // console.log(data);
    res.render('index.ejs', {data : data, filterType : filterType, count : count});
})

router.post('/add', async(req, res) => {
    try {
        const newTodo = await ToDoDB.create({
            todo : req.body.todo,
            isCompleted: false
        })
        newTodo.save();
    } catch (error) {
        console.log(error.message);
    }
    res.redirect('/complete');
})

router.get('/strike/:id', async(req, res) => {
    const bool = (await ToDoDB.findById(req.params.id)).isCompleted;
    await ToDoDB.updateOne({_id : req.params.id}, { $set : { isCompleted : !bool }});
    res.redirect('/complete');
}) 

router.get('/delete/:id', async(req, res) => {
    await ToDoDB.deleteOne({_id : req.params.id});
    res.redirect('/complete');
})

router.get('/clearcompleted', async(req, res) => {
    await ToDoDB.deleteMany({isCompleted : true});
    res.redirect('/complete');
})

module.exports = router;
