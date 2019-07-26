//SERVER
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passportSetup = require('./configuration/passport-setup');

//set up express app
const app = express();

//connect to Mongodb
mongoose.connect('mongodb://localhost/citygo');
mongoose.Promise = global.Promise;

app.unsubscribe(express.static('public'));

app.use(bodyParser.json());

// initialize routes
app.use('/cities', require('./routes/cities'));
app.use('/itineraries', require('./routes/itineraries'));
// app.use('/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

//error handling middleware
app.use(function(err, req, res){
// console.log(err);
// console.log('hello',  err.message)
res.status(422).send({error: err.message});
});

//listen for requests
app.listen(process.env.port || 4000, function () {
    console.log('now listening for requests');
});