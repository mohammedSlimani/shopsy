const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProto = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    prefered: [{ type: Schema.Types.ObjectId, ref: 'shops' }]
})

let User = mongoose.model('users', userProto);

exports.User = User;