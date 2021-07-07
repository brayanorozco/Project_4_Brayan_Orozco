//With this 'Router' method, we can call the routes written
//in this module from another module.
const route = require('express').Router();
const connection = require('../../config/dbConnetion');


route.get("/", (req, res) => {

    res.render('newUser', {});

});


//Creating new account

route.post('/', (req, res) => {
    console.log("Hello");
    const name = req.body.firstName;
    const lastName = req.body.lastName;
    const newUserEmail = req.body.email;
    const newUserPassword = req.body.password;

    console.log(req);

    connection.query(' INSERT INTO users (name, last_name, email_user, password) VALUES(?,?,?,?)',
        [name, lastName, newUserEmail, newUserPassword],
        (error, response) => {
            if (error) throw error;

            else {

                req.session.user = {
                    id: response.id,
                    email: response.email_user,
                    name: response.name
                }

              res.redirect("/home");
            }
        })
})

module.exports = route;
