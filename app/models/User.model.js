var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    nom: String,
    prenom : String,
    Login : String,
    password : String,
    tel : Number

});

module.exports = mongoose.model('User', UserSchema);