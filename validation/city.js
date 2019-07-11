const { check } = require('express-validator/check')

const cityValidation = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name field can not be empty'),

    check('country')
        .not()
        .isEmpty()
        .withMessage('Country field can not be empty')
        .isLength({ min: 2, max: 2})
        .withMessage('Country code must be 2 chars long'),

    check('img')
        .not()
        .isEmpty()
        .withMessage('Image field can not be empty')
        .isURL()
        .withMessage('Image field must contain valid URL')
]

module.exports = cityValidation