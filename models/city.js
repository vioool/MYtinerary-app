const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create city Schema & model
const CitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: [true, 'Country field is required']
    },
    img: {
        type: String,
        required: true
    }
    //add in geo location
});

module.exports = City = mongoose.model('city', CitySchema)