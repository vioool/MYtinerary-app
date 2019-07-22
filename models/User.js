const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user Schema & model
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    passwordConfirmation: {
        type: String,
        required: true
    }

});

module.exports = User = mongoose.model('user', UserSchema)