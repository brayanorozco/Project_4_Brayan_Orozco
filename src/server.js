//Calling the express module
const express = require('express');
const app = express();

//Importing routes
const home = require('./routes/home');


//Middlewares
//This is an express middleware that allows you to request for static files
//you need to specific the directory where those files (css, images, etc) are going to be accessed
//in this case '/public'
app.use(express.static(__dirname + '/public'));

//Using EJS engine for the views
app.set('view engine', 'ejs');
app.set('views',"./src/views");


//Routes
//Calling the routes created before in the "routes" folder
app.use('/', home);

module.exports = app;

