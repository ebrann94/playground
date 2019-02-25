const express = require('express');
const router = express.Router();

const db = require('./data/db').db;
let delis = db.collection('delis');

// GET Routes
router.get('/', (request, response, next) => {
    response.send("API Index");
});

router.get('/delis', (request, response, next) => {
    delis.find().toArray(function (err, results) {
        response.send(results); 
    });
});

// POST Routes 
router.post('/delis/', (request, response) => {
    if (err) return console.log(err);
    response.send('Heres the data that was saved' + JSON.stringify(request.body));
});

module.exports = router