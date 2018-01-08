var mongoose = require('mongoose'),Schema = mongoose.Schema;

var ResponsableSchema = mongoose.Schema({
    nom: String,

});

module.exports = mongoose.model('Responsable', ResponsableSchema);