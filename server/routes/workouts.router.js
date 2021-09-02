const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// GET routes

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "workouts" ORDER BY "date" DESC'

    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('Error with /api/workouts GET:', error);
        res.sendStatus(500);
    })
})



// POST routes

router.post('/', (req, res) => {
    const queryText = `INSERT INTO "workouts" ("description", "activity_id", "date") 
                       VALUES ($1, $2, $3);
    `
    // const values = [req.body.description, req.body.activity_id, req.body.date];
    const {description, activity_id, date} = req.body;
    const values = [description, activity_id, date];

    pool.query(queryText, values)
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log('Error with /api/workouts POST', error);
        res.sendStatus(500);
    })
})


module.exports = router;