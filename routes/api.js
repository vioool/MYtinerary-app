const express = require('express');
const router = express.Router();
const City = require('../models/city');

// get a list of cities from de database
router.get('/cities', function (req, res) {
    res.send({ type: 'GET' });
});

// add a new city to the database
router.post('/cities', function (req, res) {
    City.create(req.body).then(function (city) {
        res.send(city);
    });
});

//update a city in the database
router.put('/cities/:id', function (req, res) {
    res.send({ type: 'PUT' });
});

//delete a city from the db
router.delete('/cities/:id', function (req, res) {
    res.send({ type: 'DELETE' });
});

module.exports = router;