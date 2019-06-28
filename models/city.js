const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create city Schema & model
const CitySchema = new Schema({
    country: {
        type: String,
        required: [true, 'Country field is required']
    },
    city: {
        type: String,
        required: [true, 'City field is required']
    },
    available: {
        type: Boolean,
        default: false
    }
    //add in geo location
});

const City = mongoose.model('city', CitySchema);

module.exports = City;