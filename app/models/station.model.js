var mongoose = require('mongoose');

var StationSchema = mongoose.Schema({
    titre: String,
    lieu: String
});

module.exports = mongoose.model('Station', StationSchema);