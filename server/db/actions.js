//This to handle the likes and dislikes

const Models = require('./models');

const likeShop = (user_id, shop_id, done) => {
    findShopById(shop_id, (foundShop) => {
        if (foundShop == null) {
            done(false);
        } else {
            findUserById(user_id, (foundUser) => {
                if (foundUser == null) {
                    done(null);
                } else {
                    foundUser.prefered.push(foundShop);
                    foundUser.save((err) => {
                        if (err) done(false);
                        done(true);
                    });
                }
            })
        }
    })
}

const dislikeShop = (user_id, shop_id, done) => {
    findShopById(shop_id, (foundShop) => {
        if (foundShop == null) {
            done(false);
        } else {
            findUserById(user_id, (foundUser) => {
                if (foundUser == null) {
                    done(null);
                } else {
                    foundUser.prefered = foundUser.prefered.filter((ele) => ele._id != shop_id);
                    foundUser.save((err) => {
                        if (err) done(false);
                        done(true);
                    });
                }
            })
        }
    })
}

const allShops = (done) => {
    //This needs to be optimized, I dont want to send all the shops data
    //it is too much
    Models
        .Shop
        .find({})
        .exec((err, data) => {
            if (err) {
                console.log('err retrieving all shops', err);
                done(null);
            } else {
                console.log('success retrieving shops data');
                done(data);
            }
        });
}

const favShops = (user_id, done) => {
    Models
        .User
        .findById(user_id)
        .populate('prefered')
        .exec((err, data) => {
            if (err) {
                console.log('err retrieving fav shops', err);
                done(null);
            }
            else {
                console.log('sending user favourite shops');
                done(data.prefered);
            }
        });
}

const findShopById = (shop_id, done) => {
    Models
        .Shop
        .findById(shop_id, (err, found) => {
            if (err) {
                console.log('err finding shop')
                done(null);
            } else {
                console.log('found shop', found);
                done(found);
            }
        });
}

const findUserById = (user_id, done) => {
    Models
        .User
        .findById(user_id, (err, found) => {
            if (err) {
                console.log('err finding user', err);
                done(null);
            } else {
                console.log('found the user', found);
                done(found);
            }
        })
}

exports.favShops = favShops;
exports.likeShop = likeShop;
exports.dislikeShop = dislikeShop;
exports.allShops = allShops;