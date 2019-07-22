const { check } = require('express-validator/check')

const userValidation = [

    check('email')
        .not()
        .isEmpty()
        .withMessage('Email field can not be empty'),

    check('password')
        .not()
        .isEmpty()
        .withMessage('Password field can not be empty')

]

module.exports = userValidation