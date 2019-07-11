const express = require('express');
const router = express.Router();
const City = require('../models/City');
const cityValidation = require('../validation/city')
const { validationResult } = require('express-validator/check')

// get a list of cities from the database
router.get('/', async (req, res) => {
    try {
        const city = await City.find()
            .sort({ name: 1 })
        res.send(city)
    } catch (err) {
        res.send(err.message)
    }
})

// get a single city from the database
router.get('/:id', async (req, res) => {
    try {
        const city = await City.findById(req.params.id)
        if (!city) {
            return res.status(400)
                .send({ msg: 'City not found' })
        }
        res.send(city)
    } catch (err) {
        res.send(err.message)
    }
})

// add a new city to the database
router.post('/', cityValidation, async (req, res) => { 
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(400)
        .json({ errors: errors.array() }) 
      } 
    try {
        const city = await new City(req.body)
    city
        .save()
            res.send(city)
        }   catch (err) {
            res.status(500)
            .send('Server Error')
        }
    })

    //update a city in the database
    router.patch('/:id', async (req, res) => {
        try {
            const city = await City.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            if (!city) {
                return res.status(404)
                    .send({ msg: 'City Not found' })
            }
            res.send(city)
        } catch (err) {
            res.send(err.message)
        }
    })

    //delete a city from the db
    router.delete('/:id', async (req, res) => {
        try {
            const city = await City.findByIdAndDelete(req.params.id)
            if (!city) {
                return res.status(404)
                    .send('City not found.')
            }
            res.send({ msg: 'City deleted.' })
        } catch (err) {
            res.status(500)
                .send(err.message)
        }
    })

    module.exports = router;