const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String
    },
    googleId: {
        type: String
    },
    img: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    // passwordConfirmation: {
    //     type: String,
    //     googleId: String
// }
});

module.exports = User = mongoose.model('user', UserSchema)