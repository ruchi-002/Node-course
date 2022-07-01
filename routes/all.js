const express = require('express');
const router = express.Router();
const ToDoDB = require('../models/Tododb');
const filterType = 'all';

router.get('/', async(req, res) => {
    // const filterType = 'all';
    const data = await ToDoDB.find({});
    const count = await ToDoDB.find({isCompleted : false}).count();
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
    res.redirect('/all');
})

router.get('/strike/:id', async(req, res) => {
    const bool = (await ToDoDB.findById(req.params.id)).isCompleted;
    await ToDoDB.updateOne({_id : req.params.id}, { $set : { isCompleted : !bool }});
    res.redirect('/all');
}) 

router.get('/delete/:id', async(req, res) => {
    await ToDoDB.deleteOne({_id : req.params.id});
    res.redirect('/all');
})

router.get('/clearcompleted', async(req, res) => {
    await ToDoDB.deleteMany({isCompleted : true});
    res.redirect('/all');
})

module.exports = router;
