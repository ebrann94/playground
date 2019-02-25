const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0
    },
    location: {
        type: String
    },
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ToDo',
        required: true
    }]
});

module.exports = mongoose.model('User', userSchema);