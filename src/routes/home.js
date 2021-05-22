//With this 'Router' method, we can call the routes written
//in this module from another module.
const route = require('express').Router();
const connection = require('../../config/dbConnetion');

//Login user
route.post('/', (req, res) => {

    connection.query('SELECT * FROM users', (error, response) => {
        const emailForm = req.body.email,
            passwordForm = req.body.password,
            dbEmail = response.email_user,
            dbPassword = response.password;
        if (error) {
            res.end(error);
        }

        if (emailForm == dbEmail && passwordForm == dbPassword) {
            //In this line I'm creating a new session for the given email
            req.session.user = req.body.email;
            //After the session is created, I'm redirecting the user to the session page.
            res.redirect('/home');
        } else {
            res.end('Invalid Username or Password');
        }
    })
})

module.exports = route;