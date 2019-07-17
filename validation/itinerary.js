const { check } = require('express-validator/check')

const itineraryValidation = [
    check('title')
        .not()
        .isEmpty()
        .withMessage('Title field can not be empty'),

    check('city')
        .not()
        .isEmpty()
        .withMessage('City field can not be empty'),

        check('img')
        .not()
        .isEmpty()
        .withMessage('Image field can not be empty')
        .isURL()
        .withMessage('Image field must contain valid URL')
]

module.exports = itineraryValidation