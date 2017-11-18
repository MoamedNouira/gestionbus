var mongoose = require('mongoose');

var BusSchema = mongoose.Schema({
    titre: String,
    contenu: String
});

module.exports = mongoose.model('Bus', BusSchema);