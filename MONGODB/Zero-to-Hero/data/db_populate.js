const db = require('./db');
const data = require('./delis');

db.connect().then(function (db) {
    db.collection('delis')
        .insertMany([
            data.margon,
            data.juniors,
            data.melt_shop,
            data.piccolo,
            data.toasties
        ],
        function (err, r) {
            console.log('Database setup with delis.');
            process.exit(0);
        })
})