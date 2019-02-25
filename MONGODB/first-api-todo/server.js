const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./db/user-model');
const ToDo = require('./db/todo-model.js');


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

app.get('/user', (req, res) => {
    User.findOne({name: req.body.name})
        .populate('todos')
        .then(user => {
            res.send(user);
        })
})

app.post('/new-todo', (req, res) => {
    User.findOne({name: req.body.name})
        .then(user => {
            return user._id;
        })
        .then(userID => {
            const newToDo = new ToDo({
                text: req.body.todo.text,
                user: userID
            });

            newToDo.save()
                .then((product) => {

                    User.findOneAndUpdate({name: req.body.name}, {
                        $push: {
                            todos: product._id 
                        }
                    }, () => {
                        console.log('ToDo ids added');
                    })

                    res.send('Todo Added');
                }, (err) => {
                    res.send('Todo could not be added');
                });
        })
});

app.get('/get-todo', (req, res) => {
    ToDo.findOne({text: req.body.text})
        .populate('user')
        .then(todo => {
            res.send(todo);
        })
});



app.listen(PORT, () => {
    console.log(`Server now running on ${PORT}`);
});

