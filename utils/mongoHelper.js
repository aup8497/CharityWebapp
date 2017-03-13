//this is a helper file which acts an interface between backend and database.
//this file is added to give more readability to the developer changing this code.

var mongoClient = require("./mongoClient");
var cons = require("./constants");

var mongoHelper = {};

//adding the data to the database
mongoHelper.addItem = function (dbName, collName, dto, callback) {
    console.log("came to mongoHelper");
    var obj=dto;
    console.log(obj);
    mongoClient.insertInDB(dbName, collName, dto, callback);

};

//getting the data from the database
mongoHelper.getItem = function (dbName, collName, callback) {
    mongoClient.getFromDB(dbName, collName, callback);
};

//deleting a data from the database
mongoHelper.deleteItem = function (dbName, collName, dto, callback) {
    var obj=dto;
    console.log("object in helper"+ dto);
    console.log(obj);
    mongoClient.deleteInDB(dbName, collName, dto, callback);
};

module.exports = mongoHelper;