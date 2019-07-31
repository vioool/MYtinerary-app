//SERVER
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//use this cookie-session to controle our user-session. It takes our cookie incript it with a key (privacy!) and send it to the browser. When the cookie comes back we decript it.
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./configuration/keys');
// const passportSetup = require('./configuration/passport-setup');

//set up express app
const app = express();

app.use(cookieSession({
    //how long the cookie may live- this is ne day in miliseconds: 24 hours * 60 minutes p/h * 60 sec p/m * 1000 ms/s
    maxAge: 24 * 60 * 60 * 1000,
    //incript id with a key (privacy) and make it able to pass any number into this array, but store it in the privat keys.js file
    keys: [keys.session.cookieKey]
}));

//We want passport to iniziale and then use session cookies
app.use(passport.initialize())
app.use(passport.session())

//connect to Mongodb
mongoose.connect('mongodb://localhost/citygo');
mongoose.Promise = global.Promise;

app.unsubscribe(express.static('public'));

app.use(bodyParser.json());

// initialize routes
app.use('/cities', require('./routes/cities'));
app.use('/itineraries', require('./routes/itineraries'));
app.use('/api/auth', require('./routes/auth'));
// app.use('/api/profile', require('./routes/profile'));

//error handling middleware
app.use(function (err, req, res) {
    // console.log(err);
    // console.log('hello',  err.message)
    res.status(422).send({ error: err.message });
});

//listen for requests
app.listen(process.env.port || 4000, function () {
    console.log('now listening for requests');
});