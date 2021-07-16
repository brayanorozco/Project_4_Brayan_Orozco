//With this 'Router' method, we can call the routes written
//in this module from another module.
const route = require('express').Router();
const {
    body,
    validationResult
} = require('express-validator');
const connection = require('../../config/dbConnetion');


route.get("/", (req, res) => {

    res.render('newUser', {});

});


//Creating new account

route.post('/',
    body('firstName').notEmpty().isLength({
        min: 2
    }),
    body('lastName').notEmpty().isLength({
        min: 2
    }),
    body('email').isEmail(),
    body('password').isLength({
        min: 6
    }),

    (req, res) => {

        const  {firstName, lastName, newUserEmail, newUserPassword } = req.body;

        connection.query(' INSERT INTO users (name, last_name, email_user, password) VALUES(?,?,?,?)',
            [firstName, lastName, newUserEmail, newUserPassword],
            (error, response) => {
                if (error) throw error;

                else {

                    req.session.user = {
                        id: response.id_user,
                        email: response.email_user,
                        name: response.name
                    }

                    res.redirect("/home");
                }
            })
    })

module.exports = route;