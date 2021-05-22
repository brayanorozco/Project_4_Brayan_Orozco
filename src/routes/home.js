//With this 'Router' method, we can call the routes written
//in this module from another module.
const route = require('express').Router();
const connection = require('../../config/dbConnetion');

//Login user
route.post('/', (req, res) => {
    console.log(req.body);
    connection.query('SELECT * FROM users', (error, response) => {
        console.log(response)
        if (req.body.email == response.email_user && req.body.password == response.password) {
            //In this line I'm creating a new session for the given email
            req.session.user = req.body.email;
            //After the session is created, I'm redirecting the user to the session page.
            res.redirect('/home');
        } else {
            res.end('Invalid Username or Password');
        }
    })
})

route.get("/", (req, res) => {

    res.render('home', {});

});



module.exports = route;