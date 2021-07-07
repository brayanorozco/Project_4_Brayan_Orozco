const router = require('express').Router();
const connection = require('../../config/dbConnetion');
const dayWeek = require('../utils/showDays');

router.get('/:id_user', (req, res) => {
    const {
        id_user
    } = req.params;

    // 'Schedules' table connection
    connection.query(`SELECT * FROM schedules LEFT JOIN users ON schedules.id_user = users.id_user 
    WHERE schedules.id_user = ${id_user}`, (errorSchedules, schedules) => {
        if (errorSchedules) return res.status(404).send('Erro 404 schedules');

        let userSchedules = [];

        schedules.forEach(element => {
            let rowInformation = {

                name: element.name,
                lastName: element.surName,
                email: element.email,
                weekDay: dayWeek(element.week_day),
                startTime: element.start_time,
                endTime: element.end_time
            }
            userSchedules.push(rowInformation);
        });

        return res.render('user', {
            schedules: userSchedules});

    });


});

module.exports = router;
