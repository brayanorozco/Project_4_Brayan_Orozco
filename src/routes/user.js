const router = require('express').Router();
const connection = require('../../config/dbConnetion');
const dayWeek = require('../utils/showDays');

router.get('/:id_user', (req, res) => {
    const {
        id_user
    } = req.params;

    // 'Users' table connection
    connection.query(`SELECT * FROM users WHERE users.id_user = ${id_user}`, (error, response) => {
        if (error) return res.status(404).send('Error 404');

        // 'Schedules' table connection
        connection.query(`SELECT * FROM schedules LEFT JOIN users ON schedules.id_user = users.id_user WHERE schedules.id_user = ${id_user}`, (errorSchedules, schedules) => {
            if (errorSchedules) return res.status(404).send('Erro 404 schedules');

            let userSchedules = [];

            schedules.forEach(element => {
                let rowInformation = {

                    name: element.name,
                    lastName: element.last_name,
                    email: element.email_user,
                    weekDay: dayWeek(element.week_day),
                    startTime: element.start_time,
                    endTime: element.end_time
                }
                userSchedules.push(rowInformation);
            });

            return res.render('user', {
                user: response[0],
                schedules: userSchedules
            });

        })


    })


});

module.exports = router;