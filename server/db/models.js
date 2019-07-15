const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(process.env.DB_URL ||"mongodb://127.0.0.1:27017/united", { useNewUrlParser: true });

let shopProto = new Schema({
    picture: String,
    name: String,
    email: String,
    city: String,
    loaction: {
        type: String,
        coordinates: [Number]
    }
});

let Shop = mongoose.model('shops', shopProto);

exports.Shop = Shop;
