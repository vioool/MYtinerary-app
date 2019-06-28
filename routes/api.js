const express = require('express');
const router = express.Router();
const City = require('../models/city');

// get a list of cities from de database
router.get('/cities', function (req, res, next) {
    res.send({ type: 'GET' });
});

// add a new city to the database
router.post('/cities', function (req, res, next) {
    City.create(req.body).then(function (city) {
        res.send(city);
    }).catch(next);
});

//update a city in the database
router.patch('/cities/:id', (req, res) => {
    City.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    .then(city => {
        if(!city) {
            return res.status(404).send({ msg: 'City Not found'})
        }
        res.send(city);
    })
    .catch(err => {
        res.send(err.message)
    })
})



//delete a city from the db
router.delete('/cities/:id', function (req, res, next) {
    City.findByIdAndRemove({ _id: req.params.id }).then(function (city) {
        res.send(city);
    });
});

module.exports = router;