const router = require('express').Router();
const accountsManager = require('../db/accounts');
const actionsManager = require('../db/actions');

router.get('/:id/shops', (req, res) => {
    //return all the prefered shops by a user
    const user_id = req.params.id;
    actionsManager.favShops(user_id,(data)=>{
        if(data == null){
            res.json({error:'error retrieving favorite shops'});
        }else{
            res.json(data);
        }
    })
});

router.put('/:id_user/like/:id_shop', (req, res) => {
    //Add the shop with id_shop to the prefered list of the user
    const user_id = req.params.id_user;
    const shop_id = req.params.id_shop;
    actionsManager.likeShop(user_id, shop_id, (success) => {
        if (success) {
            res.writeHead(200);
        } else {
            res.writeHead(500);
        }
    })
});

router.put('/:id_user/dislike/:id_shop', (req, res) => {
    //Remove the shop with id_shop from the prefered list of the user
    const user_id = req.params.id_user;
    const shop_id = req.params.id_shop;
    actionsManager.dislikeShop(user_id, shop_id, (success) => {
        if (success) {
            res.writeHead(200);
        } else {
            res.writeHead(500);
        }
    })
});

router.post('/sign-in', (req, res) => {
    //Return a user or an error.
    const { body: { email, password } } = req;
    accountsManager.signIn(email, password, (user)=>{
        if(user == null){
            res.json({error:'Failed Login'});
        }else{
            res.json(user);
        }
    });
});

router.post('/sign-up', (req, res) => {
    //Sign up a user
    const { body: { email, password } } = req;
    accountsManager.signUp(email, password, (user) => {
        if (user == null) {
            res.json({ error: 'Failed sign up' });
        } else {
            res.json(user);
        }
    });
});

module.exports = router;