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
    },
    available: {
        type: Boolean,
        default: false
    }
    //add in geo location
});

const City = mongoose.model('city', CitySchema);

module.exports = City;