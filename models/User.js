const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new Schema({
    username: {
        type: String,
        default: ""
    },
    googleId: {
        type: String,
        default: ""
    },
    img: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    password: {
        type: String,
        default: ""
    },
    isLogged: {
        type: Boolean,
        default: false,
    },
    id: {
        type: String,
        default: "",
    }
});

module.exports = User = mongoose.model('user', UserSchema)