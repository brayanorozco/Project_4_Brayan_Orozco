const router = require('express').Router();
const connection = require('../../config/dbConnetion');
const showDays = require('../utils/showDays');

router.get('/:id_user', (req, res) => {

    const {id_user} = req.params;

    connection.query(`SELECT * FROM users WHERE users.id_user = ${id_user}`, (error, response) => {

        if(error) return res.status(404).send('Erro 404');

        connection.query(`SELECT * FROM schedules WHERE schedules.id_user = ${id_user}`, (errorSchedules, schedules) => {

            if(errorSchedules) return res.status(404).send('Erro 404 schedules');

            let userSchedules = [];
            
            schedules.forEach(element => {
                let rowInformation = {
                    id: element.user_id,
                    dayWeek: showDays(element.dayWeek),
                    startTime: element.start_time,
                    endTime: element.end_time
                }
                userSchedules.push(rowInformation);
            });

            return res.render('user', {user: response[0], schedules: userSchedules});

        })


    })
    

});

module.exports = router;