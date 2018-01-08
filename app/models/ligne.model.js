var mongoose = require('mongoose'),Schema = mongoose.Schema,ObjectId;

  var stations = require('../models/station.model.js');
  var buses = require('../models/bus.model.js');




var LigneSchema = mongoose.Schema({
    
    titre: String,
    stations: [{ type: Schema.Types.ObjectId, ref: 'Station' }],
  
});


module.exports = mongoose.model('ligne', LigneSchema);

