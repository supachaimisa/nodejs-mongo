const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

//Create a database named "mydb":
const url = "mongodb://localhost:27017/mydb";
const connect = (req,res,next) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        // console.log("Conected database!");
        mongoose.connect(url);
        next()
        // db.close();
    });
}
module.exports = connect