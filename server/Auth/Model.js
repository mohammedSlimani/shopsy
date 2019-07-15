const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProto = new Schema({
    email: String,
    password: String,
    prefered: [{ type: Schema.Types.ObjectId, ref: 'shops' }],
    name: String,
    id: Number // This is a path for the github id until i find a proper way out 
})

let User = mongoose.model('users', userProto);

exports.User = User;