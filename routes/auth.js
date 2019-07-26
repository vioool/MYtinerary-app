const express = require('express')
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

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
    scope: ['profile','email']
}));

//callback routefor google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req,res) => {
        console.log('--------------------------------- OUTSIDE PASSPORT CONFIG ----------------------------------------')
        console.log(req)
        // res.send({
        //     message: req
        // })
    })

router.get('/', async (req,res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (err) {
        res.send(err.message)
    }

})

module.exports = router;