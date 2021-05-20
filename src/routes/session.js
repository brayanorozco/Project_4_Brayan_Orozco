//With this 'Router' method, we can call the routes written
//in this module from another module.
const express = require('express');
const router = express.Router();

//This is a temporary object, to check if
//the login form is validating the data correctly
const credential = {
    email:'orozcotafur.brayan@gmail.com',
    password:'Septiembre1317'
}

//Login user
router.post('/session', (req, res) => {
    if(req.body.email == credential.email && req.body.password == credential.password){
    res.render('session', {});
}
else{
    alert("Wrong password or user");
}
})


/* router.get("/session", (req, res) => {

    //res.render('login', {});
    
});

module.exports = router; */