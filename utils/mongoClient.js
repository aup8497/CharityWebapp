//this is the main client which handles the database.

var mongoClient = require('mongodb').MongoClient;
var cons = require('./constants');
var ObjectID = require("mongodb").ObjectID;

var Client = {};

//connects with the db everytime a request has come
Client.getDB = function (cb, dbName) {
    if(dbName == null){
        dbName = cons.DBName;
    }
    var dbUrl = cons.DBUrl(dbName);
    mongoClient.connect(dbUrl, function (err, db) {
        if(err){
            console.log("database not initialised!");
            console.error("Failed to connect to %s, %s", dbUrl, err);
            // alert("database not initialised!");
            console.log("database not initialised!");
        }else{
            console.log("Mongo Client Connected to : " + dbUrl);
            cb(db);
        }
    });
};

//getting data from the database
Client.getFromDB = function (dbName, collName, cb){
    Client.getDB(function (db) {
        var coll = db.collection(collName);
        coll.find().toArray(cb);
        // console.log( res.body );
    }, dbName);
};

//inserting dbObj into the database.
Client.insertInDB = function (dbName, collName, dbObj, callback) {
    Client.getDB(function (db) {
        var coll = db.collection(collName);
        coll.insert(dbObj, callback);
    }, dbName);
};

//removing a given query from the database.
Client.deleteInDB = function (dbName, collName, query, callback) {
    Client.getDB(function(db){
        console.log(query);
        var coll = db.collection(collName);
        coll.remove(query, null, callback);
    }, dbName);
};

module.exports = Client;
