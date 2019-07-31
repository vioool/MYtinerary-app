const express = require('express')
const router = express.Router();
// const User = require('../models/User');
const passport = require('passport');
// var GoogleStrategy = require("passport-google-oauth20").OAuth2Strategy;
const passportSetup = require("../configuration/passport-setup");
const userValidation = require('../validation/user');
const { validationResult } = require('express-validator/check');


// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
});

//auth with google
//we want passport to interact with google and send it to the concent screen with the .authenticate methode
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// callback routefor google to redirect to
router.get("/google/redirect", (req, res, next) => {
    passport.authenticate("google", (req) => {
        res.send({
            data: req
        })
    })(req, res, next)
})

//Check if user is logged in, then we show them their account
const authCheck = (req, res, next) => {
    //how do we now if user is logged in? We have access to req(uest).user. So if this is a true value it means the user is logged in
    //if req.user = true, the user is logged in:
    if (!req.user) {
        // if req.user is not ! true, user is not logged in, we redirect them to the login page
        res.send({
            message: "User Not Logged In",
            status: 'redirect'
        })

    } else {
        //if logged in go to the next piece of middleware, meaning letterary the next function under this one
        next();
    }
};

// get a list of users from the database
router.get('/', authCheck,(req, res, next) => {
 next()
},async (req,res) => {
    try {
        const user = await User.find()
        res.send(user)
    } catch (err) {
        res.send(err.message)
    }
})

// get a single user from the database
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(400)
                .send({ msg: 'User not found' })
        }
        res.send(user)
    } catch (err) {
        res.send(err.message)
    }
})

// add a new user to the database
router.post('/', userValidation, async (req, res) => {
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(400)
            .json({ errors: errors.array() })
    }
    try {
        const user = await new User(req.body)
        user
            .save()
        res.send(user)
    } catch (err) {
        res.status(500)
            .send('Server Error')
    }
})

//update a user in the database
router.patch('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!user) {
            return res.status(404)
                .send({ msg: 'User Not found' })
        }
        res.send(user)
    } catch (err) {
        res.send(err.message)
    }
})

//delete a user from the db
router.delete('/:id', async (req, res) => {
    console.log('hello');
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404)
                .send('User not found.')
        }
        res.send({ msg: 'User deleted.' })
    } catch (err) {
        console.log('hello');
        res.status(500)
            .send(err.message)
    }
})

module.exports = router;