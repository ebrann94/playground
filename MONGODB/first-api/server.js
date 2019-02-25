const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./db/user-model');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/practice', {useNewUrlParser: true});

app.get('/users', (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        });
});

app.post('/new-user', (req, res) => {
    console.log(req.body);
    const newUser = new User(req.body);

    newUser.save()
        .then(() => {
            res.send('User created');
        }, (err) => {
            res.send('User could not be created');
        })
});

app.listen(PORT, () => {
    console.log(`Server now running on ${PORT}`);
});

