const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require("./Model").User;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findOne(
        { id: id },
        (err, doc) => {
            done(null, doc);
        }
    );
});

const registerUser = (accessToken, refreshToken, profile, done) => {
    User.findOneAndUpdate(
        { id: profile.id },
        {
            $setOnInsert:
                { id: profile.id, name: profile.displayName }
        },
        { upsert: true, new: true },//Insert object if not found, Return new object after modify
        (err, doc) => {
            console.log('profile', profile);
            console.log("err", err);
            console.log('doc to add,', doc);
            return done(null, doc);
        })
}

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "https://smed-united.glitch.me/api/users/auth/github/callback"
}, registerUser
));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "https://smed-united.glitch.me/api/users/auth/facebook/callback"
}, registerUser
))


