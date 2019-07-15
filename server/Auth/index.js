const router = require('express').Router();
const signIn = require('./db').signIn;
const signUp = require('./db').signUp;
const passport = require('passport');
const passportConfig = require('./config');

router.post('/sign-in', (req, res) => {
    //Return a user or an error.
    const { body: { email, password } } = req;
    signIn(email, password, (user) => {
        if (user == null) {
            res
                .status(401)
                .json({ error: 'Failed Login' });
        } else {
            res
                .status(200)
                .json(user);
        }
    });
});

router.post('/sign-up', (req, res) => {
    //Sign up a user
    const { body: { email, password } } = req;
    signUp(email, password, (user) => {
        if (user == null) {
            res
                .status(500)
                .json({ error: 'Failed sign up' });
        } else {
            res
                .status(200)
                .json(user);
        }
    });
});

router.get('/auth/github', passport.authenticate('github'));

router.get('/auth/github/callback',
    passport.authenticate('github', {
        failureRedirect: '/api/users/auth/github/failed',
        successRedirect: '/api/users/auth/github/success'
    }
    ))

router.get('/auth/github/failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: "user failed to authenticate."
    });
});

router.get('/auth/github/success', (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "user has successfully authenticated",
            user: req.user,
            cookies: req.cookies
        });
    } else {
        req.status(500).json({
            err: "Success but no user ?"
        })
    }
});

module.exports = router;