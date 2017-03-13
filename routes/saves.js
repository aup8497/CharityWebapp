/**
 * Created by akshayuprabhu on 3/2/17.
 */

// this has many express routers which gets the data from the javascript and sends it to the database.
var mongoHelper = require('../utils/mongoHelper');
var cons = require('../utils/constants');
var ObjectId = require('mongodb').ObjectID;


var express = require('express');
var router = express.Router();

//router to add the patient data into the database.
router.route('/save')
    .post(function (req, res, next) {

        var dataOfPatients = {
 
            'studentname' : req.body.studentname ,
            'fathername': req.body.fathername , 
            'mothername': req.body.mothername ,
                //  age: req.body.age ,
            'dob': req.body.dob ,
            'gender':req.body.gender ,
            'caste' : req.body.caste,
            'incomecert' : req.body.incomecert,
            'phone':req.body.phone ,
            'info' : req.body.info,
            'email' : req.body.email,
            'annualIncome' : req.body.annualIncome                         


        };
        console.log("object in saves for adding"+ dataOfPatients);



        //here mongoHelper is an interface between mongoClient and http requests to make it simpler and more readable
        mongoHelper.addItem(cons.DBName, cons.UserCollection, dataOfPatients , function (err, results) {
            if(err){
                res.status(500).json("Error in saving data");
            }else{
                res.status(200).json("Successfully saved");
            }
        });
    });

//router to get the data from the server and send it to the frontend.
router.route('/get')
    .get(function (req, res, next) {

        mongoHelper.getItem(cons.DBName, cons.UserCollection, function (err, results) {
            if(!err){
                res.status(200).json(results);
            } else{
                res.status(500).json("Error while Getting the data");
            }
        });
    });

//router to remove the patient data into the database.
router.route('/remove')
    .post(function (req, res, next) {

         var dataOfPatients = {
 
            'studentname' : req.body.studentname ,
            'fathername': req.body.fathername , 
            'mothername': req.body.mothername ,
                //  age: req.body.age ,
            'dob': req.body.dob ,
            'gender':req.body.gender ,
            'caste' : req.body.caste,
            'incomecert' : req.body.incomecert,
            'phone':req.body.phone ,
            'info' : req.body.info,
            'email' : req.body.email,
            'annualIncome' : req.body.annualIncome                         


        };
        //here mongoHelper is an interface between mongoClient and http requests to make it simpler and more readable
        console.log("object in saves"+ dataOfPatients);

        mongoHelper.deleteItem(cons.DBName, cons.UserCollection, dataOfPatients , function (err, results) {
            if(err){
                res.status(500).json("Error in saving data");
            }else{
                res.status(200).json("Successfully saved");
            }
        });
    });

module.exports = router;