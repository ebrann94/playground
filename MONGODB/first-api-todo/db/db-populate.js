const User = require('./user-model');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/practice', {useNewUrlParser: true});

const records = [
    {
        name: 'George',
        email: 'george@gmail.com',
        age: 23,
        location: 'London'
    },
    {
        name: 'John',
        email: 'john@gmail.com',
        age: 45,
        location: 'Paris'
    },
    {
        name: 'Mary',
        email: 'mary@gmail.com',
        age: 32,
        location: 'Berlin'
    }
];

records.forEach(el => {
    const newUser = new User(el);

    newUser.save(function(err) {
        if (err) {
            console.log('Problem connecting to the database');
        }
    });
})