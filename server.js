//Calling the express module
const express = require('express');
const app = express();
const session = require('express-session');
const {
    v4: uuidv4
} = require('uuid');

//Importing routes
const login = require('./src/routes/login');
const home = require('./src/routes/home');
const logout = require('./src/routes/logout');
const user = require('./src/routes/user');
const addSchedule = require('./src/routes/addSchedule');


//Middlewares
//This is an express middleware that allows you to request for static files
//you need to specific the directory where those files (css, images, etc) are going to be accessed
//in this case '/public'
app.use(express.static(__dirname + '/public'));

//body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//Using EJS engine for the views
app.set('view engine', 'ejs');
app.set('views', "./src/views");


//Using the express-session module

app.use(session({
    //I'm specifying in this line
    //I want to make this session completely "secret" from the user, we can put 'secret'
    //or we can call the function uuidv4() required before at the top of the file
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}));


//Routes
//Assigning the routes created before in the "routes" folder
app.use('/', login);
app.use('/home', home);
app.use('/logout', logout);
app.use('/user', user);
app.use('/addSchedule', addSchedule);

module.exports = app;