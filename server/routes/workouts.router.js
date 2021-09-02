const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// POST routes

router.post('/', (req, res) => {
    console.log('req.body', req.body);
    res.sendStatus(200);
})


module.exports = router;