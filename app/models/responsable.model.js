var mongoose = require('mongoose'),Schema = mongoose.Schema;

var ResponsableSchema = mongoose.Schema({
    nom: String,
    secteur: [{ type: Schema.Types.ObjectId, ref: 'Secteur' }]

});

module.exports = mongoose.model('Responsable', ResponsableSchema);