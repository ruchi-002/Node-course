const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todo : String,
    isCompleted : Boolean,
});

module.exports = mongoose.model('ToDoDB', TodoSchema);
