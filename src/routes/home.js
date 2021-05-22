//With this 'Router' method, we can call the routes written
//in this module from another module.
const route = require('express').Router();
const connection = require('../../config/dbConnetion');

//Login user
route.post('/', (req, res) => {

    connection.query('SELECT * FROM users', (error, response) => {

        const emailForm = req.body.email, passwordForm = req.body.password;


        if (response) {

            const validated = response.find(row => {
                return row.email_user == emailForm && row.password == passwordForm; 
            })
            if(validated == undefined){
                res.end('Invalid Username or Password');
            }
            else{
                  //In this line I'm creating a new session for the given email
            req.session.user = req.body.email;
            //After the session is created, I'm redirecting the user to the session page.
            res.redirect('/home');
            }
        }
       
    })
})

//This method is going to call the page "home" after executing redirect from the previous one
route.get("/", (req, res) => {

    res.render('home', {});
    
});

module.exports = route;