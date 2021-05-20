//With this 'Router' method, we can call the routes written
//in this module from another module.
const route = require('express').Router();


route.get("/", (req, res) => {

    res.render('login', {});
    
});



module.exports = route;