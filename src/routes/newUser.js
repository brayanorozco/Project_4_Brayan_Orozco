//With this 'Router' method, we can call the routes written
//in this module from another module.
const route = require('express').Router();
const connection = require('../../config/dbConnetion');


route.get("/", (req, res) => {

    res.render('newUser', {});
    
});


//Creating new account

route.post('/', (req, res) => {

    const name = req.body.firstName;
    const lastName = req.body.lastName;
    const newUserEmail = req.body.email;
    const newUserPassword = req.body.password;

    connection.query(' INSERT INTO users (name, last_name, email_user, password) VALUES(?,?,?,?)',
        [name, lastName, newUserEmail, newUserPassword],
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
