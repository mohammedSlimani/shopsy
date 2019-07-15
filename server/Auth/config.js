const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const User = require("./Model").User;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findOne(
        { id: id },
        (err, doc) => {
            console.log("err deserialize", err);
            done(null, doc);
        }
    );
});

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "https://smed-united.glitch.me/api/users/auth/github/callback"
}, function (accessToken, refreshToken, profile, cb) {
    User.findOneAndUpdate(
        { id: profile.id },
        {
            $setOnInsert:
                { id: profile.id, name: profile.displayName }
        },
        { upsert: true, new: true },//Insert object if not found, Return new object after modify
        (err, doc) => {
            //console.log('profile',profile);
            console.log("err", err);
            console.log('doc to add,', doc);
            return cb(null, doc);
        })
}
));
