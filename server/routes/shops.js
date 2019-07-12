const router = require('express').Router();
const actionsManager = require('../db/actions');

router.get('/', (req, res) => {
    //return All the shops using the db
    actionsManager.allShops((shops)=>{
        if(shops == null){
            res.writeHead(500)
        }else{
            res.status(200).json(shops);
        }
    })
});

module.exports = router;