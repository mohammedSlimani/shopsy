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

let userProto = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    prefered: [{ type: Schema.Types.ObjectId, ref: 'shops' }]
})

let User = mongoose.model('users', userProto);

exports.Shop = Shop;
exports.User = User;