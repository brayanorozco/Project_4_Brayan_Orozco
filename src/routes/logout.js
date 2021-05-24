const route = require('express').Router();

route.get('/', (req, res) => {
    req.session.destroy(function (err) {
      if (err) {
        console.log(err);
        res.send('Error');
      } else {
        res.render('login', {title: 'Express', logout: 'Logout Successfully'});
      }
    });
  });

  module.exports = route;