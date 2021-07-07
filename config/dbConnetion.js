const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'password',
    database: 'project4_db'
});

connection.connect((error) => {
    if(error) throw error;
    console.log('Connected with database.');
});

//I'm exporting the const 'connection', so it can be used(import) from another file
//By default a module is "encapsulated", so anything you want to use out of that module
//you need to tell Node that you are going to use it in another module (file).

//module.exports = connection;
module.exports = connection;
