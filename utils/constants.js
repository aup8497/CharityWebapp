var cons = {};

// initializing all the constants ,so that it will be use full to change the program accordingly if needed.
cons.DBName = "scholarshipdb";
cons.UserCollection = "students";
cons.host = "localhost";
cons.port = 45379;

/**
 * @return {string}
 */
cons.DBUrl = function (dbName) {

    return ("mongodb://akshay:passwd@ds145379.mlab.com:45379/scholarshipdb");


};

module.exports = cons;