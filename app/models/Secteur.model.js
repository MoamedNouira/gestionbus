var mongoose = require('mongoose'),Schema = mongoose.Schema;




var lignes = require('../models/Ligne.model.js');

var SecteurSchema = mongoose.Schema({
   nom: String,
   idresponsable : String,
   lignes: [{ type: Schema.Types.ObjectId, ref: 'Ligne' }]

});

module.exports = mongoose.model('Secteur', SecteurSchema);