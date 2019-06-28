//SERVER
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to Mongodb
mongoose.connect('mongodb://localhost/citygo');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

//listen for requests
app.listen(process.env.port || 4000, function () {
    console.log('now listening for requests');
});