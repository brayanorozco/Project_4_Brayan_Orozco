//With this 'Router' method, we can call the routes written
//in this module from another module.
const route = require('express').Router();
const connection = require('../../config/dbConnetion');
const dayWeek = require('../utils/showDays');

//Login user

route.post('/', (req, res) => {

    connection.query('SELECT * FROM users', (error, response) => {

        const emailForm = req.body.email
        const passwordForm = req.body.password;

        if (response) {

            const currentUser = response.find(row => {
                return row.email_user == emailForm && row.password == passwordForm;
            })
            if (currentUser == undefined) {
                res.end('Invalid Username or Password');
            } else {
                //After the session is created, I'm redirecting the user to the session page.
                req.session.user = {
                    id: currentUser.id_user,
                    email: currentUser.email_user,
                    name: currentUser.name
                }
                //console.log(req.session.user);
                res.redirect('/home');
            }
        }

    })
})

//_____________________________________________
// Calling home and showing the schedules

route.get("/", (req, res) => {

    connection.query(
        `SELECT users.id_user, users.last_name, users.name, schedules.week_day, schedules.start_time, schedules.end_time
        FROM schedules
        LEFT JOIN users ON schedules.id_user = users.id_user;`, (error, response) => {
            if (error) return res.send('ERRO 404 L33');

            let schedules = [];
            response.forEach((element, index) => {
                let showDataHome = {
                    id: element.id_user,
                    name: element.name,
                    lastName: element.last_name,
                    weekDay: dayWeek(element.week_day),
                    startTime: element.start_time,
                    endTime: element.end_time
                }
                schedules.push(showDataHome);
            });

            res.render('home', {
                schedules: schedules,
                showUser: req.session.user.name
            });
        })

});


module.exports = route;