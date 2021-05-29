const connection = require('../../config/dbConnetion');
const route = require('express').Router();


route.get('/', (req, res) => {

    res.render('addSchedule', {
        showUser: req.session.user.name
    });

});

route.post('/', (req, res) => {

    const scheduledUser = req.session.user.id;
    const dayWeek = req.body.dayWeek;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;

    connection.query(' INSERT INTO schedules (id_user, week_day, start_time, end_time) VALUES(?,?,?,?)',
        [scheduledUser, dayWeek, startTime, endTime],
        (error, response) => {
            if (error) throw error;

            else {
                console.log("New schedule has been added");
              
              res.redirect("/home")
            }
        })
})

module.exports = route;