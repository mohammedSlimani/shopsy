//This is where we handle the Sign in and sign up stuff

const Models = require('./models');

const singIn = (email, password, done) => {
    Models
        .User
        .findOne({ email: email })
        .exec((err, user) => {
            if (err || user == null) {
                console.log('err finding the user', err);
                done(null);
            }
            else if (user.password !== Hash(password)) {
                console.log('found user, Wrong password');
                done(null);
            } else {
                done(user);
            }
        })
}

const signUp = (email, password, done) => {
    if (email == null || password == null)
        done(null);
    else {
        let user = new Models.User({ email: email, password: Hash(password) });
        user.save((err, added) => {
            if (err) {
                //this is probably because there is a user with the same email
                console.log('err creating user', err);
                done(null);
            } else {
                done(added);
            }
        });
    }
}

const Hash = (pass) => {
    //This method is going to hash the passwords
    return pass
}

exports.signUp = signUp;
exports.signIn = singIn;