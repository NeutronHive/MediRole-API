const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    role: String,
    isOnline:{
        type:String,
        default:"false"
    }
});

module.exports = mongoose.model('User',UserSchema);