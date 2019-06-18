const router = require('express').Router();

router.get('/:id/shops', (req, res) => {
    //return all the prefered shops by a user
});

router.put('/:id_user/like/:id_shop', (req, res) => {
    //Add the shop with id_shop to the prefered list of the user
});

router.put('/:id_user/dislike/:id_shop', (req, res) => {
    //Remove the shop with id_shop from the prefered list of the user
});

router.post('/sign-in', (req, res) => {
    //Return a user or an error.
});

router.post('/sign-up', (req, res) => {
    //Sign up a user
});

module.exports = router;