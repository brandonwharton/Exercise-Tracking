const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// GET routes

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "activity" ORDER BY "id" ASC'

    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('Error with /api/workouts GET:', error);
        res.sendStatus(500);
    })
})

module.exports = router