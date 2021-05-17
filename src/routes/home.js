//With this 'Router' method, we can call the routes written
//in this module from another module.
const router = require('express').Router();


router.get("/", (req, res) => {

    res.render('home', {});
    
});

module.exports = router;