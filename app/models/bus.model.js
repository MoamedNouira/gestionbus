var mongoose = require('mongoose');

var BusSchema = mongoose.Schema({
    titre: String,
    numligne : Number,
    position: {
        longitude:Number,
        latitude:Number
    }

});

module.exports = mongoose.model('Bus', BusSchema);