const router = require('express').Router();
const accountsManager = require('../db/accounts');
const actionsManager = require('../db/actions');

router.get('/:id/shops', (req, res) => {
    //return all the prefered shops by a user
    const user_id = req.params.id;
    actionsManager.favShops(user_id,(data)=>{
        if(data == null){
            res.status(500).json({error:'error retrieving favorite shops'});
        }else{
            res.status(200).json(data);
        }
    })
});

router.put('/:id_user/like/:id_shop', (req, res) => {
    //Add the shop with id_shop to the prefered list of the user
    const user_id = req.params.id_user;
    const shop_id = req.params.id_shop;
    actionsManager.likeShop(user_id, shop_id, (success) => {
        if (success) {
            res
            .status(204)
            .json({success:'Added the shop to the user'});
        } else {
            res
            .status(500)
            .json({error:'Failed to like the shop to the user'});
        }
    })
});

router.put('/:id_user/dislike/:id_shop', (req, res) => {
    //Remove the shop with id_shop from the prefered list of the user
    const user_id = req.params.id_user;
    const shop_id = req.params.id_shop;
    actionsManager.dislikeShop(user_id, shop_id, (success) => {
        if (success) {
            res.writeHead(204);
        } else {
            res.writeHead(500);
        }
    })
});

module.exports = router;