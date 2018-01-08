var mongoose = require('mongoose'),Schema = mongoose.Schema;
var lignes = require('../models/Ligne.model.js');

var StationSchema = mongoose.Schema({
 
    titre: String,
    position: {
        longitude:Number,
        latitude:Number,

    },
    depart : Boolean ,
    arrive : Boolean,
    lignes: [{
        ligne : { type: Schema.Types.ObjectId, ref: 'Ligne' },
      ordre :{ Number}
    }]
 
});

module.exports = mongoose.model('Station', StationSchema);