const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/User')

//we set the google strategy up, we attach it to the passport object and inport it in the routes/auth.js
passport.use(
    new GoogleStrategy({
        //options for google strategy
        callbackURL:'http://localhost:3000/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
        //accessToken we receive from google, refresh the token after expiring, the info we get back from google with the profile info, done is what we have to do when we got this info and were done
    }, (accesToken,refreshToken,profile,done) => {
        //check if user already excist in our db by findOne a user
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                //allready have a user
                console.log('user is:', currentUser)
            } else {
                //if not, create user in our db
                new User({
                    username:profile.displayName,
                    googleId:profile.id
                    // img:profile.photos,
                    // email:profile.emails
                    //save the new user to the database
                    //return  promise because it waits till this action will be complete
                }).save().then((newUser) => {
                    console.log('new usercreated' + newUser)
                });
            }
        });

        
        // done('hello', null)
    })
)