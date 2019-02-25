// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const db = require('./data/db');
const data = require('./data/delis');

db.connect().then(function (db) {
    const deliRoutes = require('./router');
    app.use('/', deliRoutes);

    app.use((request, response, next) => {
        response.status(200).json({
            message: "You're becoming a hero"
        });
    });


    app.listen(port, () => {
        console.log('App is listening on port ' + port)
    });
})



// const requestHandler = (request, response) => {
//     console.log(request.url);
//     response.end('Hello node.js Server');
// }

// const server = http.createServer(requestHandler);
// server.listen(port, (err) => {
//     if (err) {
//         return console.log('Something bad happened', err);
//     }

//     console.log('Server is listening on ' + port);
// });