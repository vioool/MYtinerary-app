const { check } = require('express-validator/check')

const userValidation = [
    check('username')
        .not()
        .isEmpty()
        .withMessage('Username field can not be empty'),

    check('img')
        .isURL()
        .withMessage('Image field must contain valid URL'),

    check('email')
        .not()
        .isEmpty()
        .withMessage('Email field can not be empty')
        .isEmail()
        .withMessage('Email field must contain a valid email address'),

    check('password')
        .not()
        .isEmpty()
        .withMessage('Password field can not be empty')
        .isLength({ min: 5 })
        .withMessage('Password must contain at least 5 chars')

]

module.exports = userValidation