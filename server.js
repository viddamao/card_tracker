import Dotenv from 'dotenv';
Dotenv.load;

var mongodb = require('mongodb');
console.log(ENV['MLAB_URL'])
var uri = ENV['MLAB_URL'];

var http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

mongodb.MongoClient.connect(uri, function(err, db) {

    if (err) throw err;
    var postcards = db.collection('postcards');


    postcards(function(err, cards) {

        if (err) throw err;
        return cards;

        // Only close the connection when your app is terminating.
        db.close(function(err) {
            if (err) throw err;
        });
    });
});