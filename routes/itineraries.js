const express = require('express')
const router = express.Router()
const Itinerary = require('../models/Itinerary')
const itineraryValidation = require('../validation/itinerary')
const { validationResult } = require('express-validator/check')

// get a list of itineraries of a city from the database
router.get('/:city', async (req, res) => {
    try {
        console.log(req.params)
        const itinerary = await Itinerary.find({'city' : req.params.city})
        console.log(itinerary)
        if (!itinerary) {
            return res.status(400)
                .send({ msg: 'Itinerary not found' })
        }
        res.send(itinerary)
    } catch (err) {
        res.send(err.message)
    }
})

// get a single itinerary from the database
router.get('/:id', async (req, res) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id)
        if (!itinerary) {
            return res.status(400)
                .send({ msg: 'Itinerary not found' })
        }
        res.send(itinerary)
    } catch (err) {
        res.send(err.message)
    }
})

// add a new itinerary to the database
router.post('/', itineraryValidation, async (req, res) => {
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(400)
            .json({ errors: errors.array() })
    }
    try {
        const itinerary = await new Itinerary(req.body)
        itinerary
            .save()
        res.send(itinerary)
    } catch (err) {
        res.status(500)
            .send('Server Error')
    }
})

//update a itinerary in the database
router.patch('/:id', async (req, res) => {
    try {
        const itinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!itinerary) {
            return res.status(404)
                .send({ msg: 'Itinerary Not found' })
        }
        res.send(itinerary)
    } catch (err) {
        res.send(err.message)
    }
})

//delete a itinerary from the db
router.delete('/:id', async (req, res) => {
    console.log('hello');
    try {
        const itinerary = await Itinerary.findByIdAndDelete(req.params.id)
        if (!itinerary) {
            return res.status(404)
                .send('Itinerary not found.')
        }
        res.send({ msg: 'Itinerary deleted.' })
    } catch (err) {
        console.log('hello');
        res.status(500)
            .send(err.message)
    }
})

module.exports = router;