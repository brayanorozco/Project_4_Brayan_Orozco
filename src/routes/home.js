//With this 'Router' method, we can call the routes written
//in this module from another module.
const route = require('express').Router();

//This is a temporary object, to check if
//the login form is validating the data correctly
const credential = {
    email: 'orozcotafur.brayan@gmail.com',
    password: 'Septiembre1317'
}

//Login user
route.post('/', (req, res) => {
    if (req.body.email == credential.email && req.body.password == credential.password) {
        //In this line I'm creating a new session for the given email
        req.session.user = req.body.email;
        //After the session is created, I'm redirecting the user to the session page.
        res.redirect('/home');
    } else {
        res.end('Invalid Username or Password');
    }
})

route.get("/", (req, res) => {

    res.render('home', {});
    
});



module.exports = route;